import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { baseUrl } from './parameters.js';
import { axiosConfig } from './parameters.js';

const BoxCadastro = styled.div `
  width: 300px;
  height: 200px;
  background-color: white;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
  color: black;
`

const Box = styled.div `
  width: 180px;
  margin: auto;
  padding-top: 30px;
`

const Fonte = styled.p `
  font-weight: bold;
`

const BotaoCadastro = styled.button `
  display: block;
  margin: auto;
  margin-top: 20px;
  border: 0px;
  background-color: #333;
  color: white;
  width: 80px;
  height: 30px;
  border-radius: 4px;
  :hover {
    background-color: blue;
  }
`

const BotaoLista = styled.button `
  display: block;
  margin:auto;
  margin-top: 50px;
  border: 0px;
  width: 180px;
  height: 30px;
  border-radius: 5px;
  :hover {
    background: red;
    color: white;
  }
`

export class RegisterPage extends React.Component {
  state = {
    inputName: "",
    inputEmail: ""
  }

//Pegar valor input name
  onChangeNameValue = (event) => {
    this.setState({ inputName: event.target.value });
  };

//Pegar valor input email
  onChangeEmailValue = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

//Criar novo usuario
  criarUsuario = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };

    axios
    .post(baseUrl, body, axiosConfig)
      .then((res) => {
        this.pegarListUser();
        alert('Usuário criado com sucesso!')
        this.setState({inputName: "", inputEmail: ""})
      })
      .catch((error) => {
        console.log(error.message);
        alert('Erro ao criar usuário, digite informações válidas!')
      });
  };

  render() {
    return (
      <div>
        <BoxCadastro>
          <Box>
            <Fonte>Nome:</Fonte>
              <input
                value={this.inputNameValue}
                onChange={this.onChangeNameValue}
                />
            <Fonte>E-mail:</Fonte>
              <input
              value= {this.inputEmailValue}
              onChange= {this.onChangeEmailValue}
              />
            <BotaoCadastro onClick={this.criarUsuario}>Cadastrar</BotaoCadastro>
          </Box>
        </BoxCadastro>  
    
        <BotaoLista onClick={this.clickList}>Usuarios Cadastrados</BotaoLista>
      </div>
    );
  }
 
}


