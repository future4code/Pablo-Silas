import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import './App.css';

const BoxCadastro = styled.div `
  width: 300px;
  height: 200px;
  background-color: white;
  margin: auto;
  margin-top: 50px;
  border-radius: 20px;
  color: black;
`

const BoxLista = styled.div `
  width: 300px;
  height: 500px;
  background-color: white;
  margin: auto;
  margin-top: 20px;
  border-radius: 20px;
  color: black;
`

const Form = styled.form `
  width: 180px;
  margin: auto;
  padding-top: 30px;
  
`
const Fonte = styled.p `
  font-weight: bold;
`

const Titulo = styled.h2 `
  padding: 20px;
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

const BotaoHome = styled.button `
  display: block;
  margin:auto;
  margin-top: 20px;
  border: 0px;
  width: 180px;
  height: 30px;
  border-radius: 5px;

  :hover {
    background-color: red;
    color:white;
  }
  
`

class App extends React.Component {
  state = {
    listVisible: false,
    listUser: [],
    inputNameValue: "",
    inputEmailValue: ""
  }

  componentDidMount = () => {
    this.pegarListUser();
  };

  pegarListUser = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "pablo-silas-epps"
          }
        }
      )
      .then((resposta) => {
        this.setState({ listUser: resposta.data.result.list });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  criarUsuario = () => {
  const body = {
  name: this.state.inputNameValue,
  email: this.state.inputEmailValue
  };

  axios
  .post(
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body,
    {
      headers: {
        Authorization: "pablo-silas-epps"
      }
    }
  )
  .then((res) => {
    this.setState({ inputNameValue: "" });
    this.setState({ inputEmailValue: "" });
    this.pegarListUser();
  })
  .catch((error) => {
    console.log(error.message);
  });
  };

  onChangeNameValue = (event) => {
  this.setState({ inputNameValue: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ inputEmailValue: event.target.value });
    };

  renderizarList = () =>{
    this.state.listUser.map((user) => {
      return <p key={user.id}>{user.name}</p>;
    });
  }

  clickList = () => {
    this.setState({listVisible: true})
  }

  clickHome = () => {
    this.setState({listVisible: false})
  }

  defineTela = () => {
    if (this.state.listVisible){
      return (
        <div>
          <BotaoHome onClick={this.clickHome}>Voltar para Cadastro</BotaoHome>
          <BoxLista>
            <Titulo>Lista de Usuarios:</Titulo>
            {this.renderizarList}
          </BoxLista>

        </div>
    );
    }else {
      return (
        <div>
          <BoxCadastro>
            <Form>
              <Fonte>Nome:</Fonte>
                <input
                  value= {this.state.inputNameValue}
                  onChange={this.state.inputNameValue}
                  />
              <Fonte>E-mail:</Fonte>
              <input
              value= {this.state.inputEmailValue}
              onChange= {this.state.inputEmailValue}
              />
              <BotaoCadastro>Cadastrar</BotaoCadastro>
            </Form>
          </BoxCadastro>  
    
          <BotaoLista onClick={this.clickList}>Usuarios Cadastrados</BotaoLista>
        </div>  
      );

    } 
  }

  render() {
    return (
      <div>
        {this.defineTela()}
      </div>
    )
}
}


export default App;
