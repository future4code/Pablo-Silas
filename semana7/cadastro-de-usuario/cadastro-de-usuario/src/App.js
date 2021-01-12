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

const Box = styled.div `
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
const List = styled.div `
  display: flex;
`
const Remove = styled.img `
  width: 15px;
  height: 15px;
  padding-left: 10px;
`

const Usuario = styled.p `
  padding-left: 25px;
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
        this.setState({ listUser: resposta.data});
      
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

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body,
    {
      headers: {
        Authorization: "pablo-silas-epps"
      }
    }
    )
      .then((res) => {
        this.setState({inputNameValue: ""});
        this.setState({inputEmailValue: ""});
        this.pegarListUser();
        alert('Usuario criado com sucesso')
      })
      .catch((error) => {
        console.log(error.message);
        alert('Erro ao criar')
        console.log(body)
      });
  };

  deletarUsuario = (userId) => {
    axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id",
    {
      headers: {
        Authorization: "pablo-silas-epps"
      }
    }
    )
      .then((res) => {
        console.log(res)
        this.pegarListUser()
        alert('Usuario deletado com sucesso')
      })
      .catch((error) => {
        console.log(error.message);
        alert('Erro ao deletar')
      });
  };

  onChangeNameValue = (event) => {
  this.setState({ inputNameValue: event.target.value });
  };

  onChangeEmailValue = (event) => {
    this.setState({ inputEmailValue: event.target.value });
    };

  clickList = () => {
    this.setState({listVisible: true})
  }

  clickHome = () => {
    this.setState({listVisible: false})
  }

  defineTela = () => {
    if (this.state.listVisible){

      const renderLista =  this.state.listUser.map((list) => {
        return <Usuario>{list.name}</Usuario>;
      });

      return (
        <div>
          <BotaoHome onClick={this.clickHome}>Voltar para Cadastro</BotaoHome>
          <BoxLista>
            <Titulo>Lista de Usuarios:</Titulo>
            <List>
              {renderLista} <Remove src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1024px-Red_X.svg.png' onClick={this.deletarUsuario}/>
            </List>
          </BoxLista>

        </div>
    );
    }else {
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

  render() {
    return (
      <div>
        {this.defineTela()}
      </div>
    )
}
}


export default App;
