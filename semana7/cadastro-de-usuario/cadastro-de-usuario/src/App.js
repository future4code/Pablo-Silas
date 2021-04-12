import React from 'react';
import styled from 'styled-components';
import axios from 'axios'
import './App.css';

//styled-components
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
  height: 100%;
  background-color: white;
  margin: auto;
  margin-top: 20px;
  border-radius: 20px;
  color: black;
  padding-bottom: 20px;
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
  justify-content: space-between;
`
const Remove = styled.img `
  width: 15px;
  height: 15px;
  padding: 7px;
  padding-right: 15px;
  opacity: 30%;

  :hover {
    opacity: 100%;
  } 
`
const Usuario = styled.p `
  padding-left: 20px;
`
//App Component
class App extends React.Component {
  state = {
    listVisible: false,
    listUser: [],
    inputNameValue: "",
    inputEmailValue: "",
  }

  //Ao carregar a página
  componentDidMount = () => {
    this.pegarListUser();
  };

  //Pegar a lista de Usuarios cadastrados
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

  //Criar novo usuario
 1

  //Pegar valor input name
  onChangeNameValue = (event) => {
    this.setState({ inputNameValue: event.target.value });
  };

//Pegar valor input email
  onChangeEmailValue = (event) => {
    this.setState({ inputEmailValue: event.target.value });
  };

  //Deletar usuario
  deletarUsuario = (userData) => {
    const userIndex = this.state.listUser.findIndex((user) => userData.id === user.id);
    const userId = this.state.listUser[userIndex].id

   axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
      { headers: {Authorization: "pablo-silas-epps"} }
    )
      .then((res) => {
        this.pegarListUser()
        alert('Usuario deletado com sucesso!')
      })
      .catch((error) => {
        console.log(error)
        alert('Erro ao deletar usuario, tente novamente!')
      });
  };

//Mudar o estado e página para lista
  clickList = () => {
    this.setState({listVisible: true})
  }

//Mudar o estado e página para home
  clickHome = () => {
    this.setState({listVisible: false})
  }

  //Define entre tela home ou list
  defineTela = () => {
    if (this.state.listVisible){
      const renderLista = this.state.listUser.map((list) => {
        return (
       <List>
        <Usuario>{list.name}</Usuario> <Remove src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Red_X.svg/1024px-Red_X.svg.png' onClick={() => this.deletarUsuario(list)} />
      </List>  
      )  
      });

      return (
        <div>
          <BotaoHome onClick={this.clickHome}>Voltar para Cadastro</BotaoHome>
          <BoxLista>
            <Titulo>Lista de Usuarios:</Titulo>
              {renderLista} 
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
