import React from 'react';
import styled from 'styled-components';
import './App.css';
import Spacex from './components/Spacex';
import Company from './components/Company';
import Foguetes from './components/Foguete';
import Dragon from './components/Dragon';

const Principal = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
`

const Box = styled.div `
  display: flex;
  justify-content: center;
  padding-top: 10%;
  box-sizing: border-box;
`

const Logo = styled.img `
  opacity: 80%;
  :hover {
    opacity: 100%;
  }
`
const Botao1 = styled.button`
  width: 200px;
  height: 50px;
  font-weight: bold;
  margin: 20px;
  font-size: 15px;
  font-family: Arial;
  border-radius: 20px;
  opacity: 100%;
  border: 0px;

  :hover {
    opacity: 100%;
    background-color: blue;
    color: white;
    outline: none;
  }
`
const Botao2 = styled.button`
  width: 200px;
  height: 50px;
  font-weight: bold;
  margin: 20px;
  font-size: 15px;
  font-family: Arial;
  border-radius: 20px;
  opacity: 100%;
  border: 0px;

  :hover {
    opacity: 100%;
    background-color: red;
    color: white;
    outline: none;
  }
`


const BoxL = styled.div `
  display: flex;
  flex-direction: column;
  width: 220px;
  margin-top: 130px;
  margin-left: 130px;
  box-sizing: border-box;
`
const BoxR = styled.div `
  display: flex;
  flex-direction: column;
  width: 220px;
  margin-top: 130px;
  margin-right: 130px;
  box-sizing: border-box;
`

class App extends React.Component {
  state = {
    paginaAtual: "home"
  }

  vaiParaSpacex = () => {
    this.setState({paginaAtual: "spacex"})
  }

  vaiParaMembros= () => {
    this.setState({paginaAtual: "membros"})
  }

  vaiParaFoguetes = () => {
    this.setState({paginaAtual: "foguetes"})
  }

  vaiParaDragon = () => {
    this.setState({paginaAtual: "dragon"})
  }

  definirPagina = () => {
    switch(this.state.paginaAtual) {
      case "home":
        return (
          <Principal>
        <BoxL>
          <Botao1 onClick={this.vaiParaSpacex}>Sobre a Spacex</Botao1>
          <Botao1 onClick={this.vaiParaMembros}>Membros</Botao1>
        </BoxL>  
        <Box>
          <Logo src='https://i.imgur.com/tE3Wo8S.png'/>
        </Box>
        <BoxR>
          <Botao2 onClick={this.vaiParaFoguetes}>Foguetes</Botao2>
          <Botao2 onClick={this.vaiParaDragon}>Dragon</Botao2>
        </BoxR>  
      </Principal>  
        );
      case "spacex":
        return (<Spacex/>);
      case "membros":
            return(<Company/>); 
        case "foguetes":
            return(<Foguetes/>);
        case "dragon":
            return(<Dragon/>)
        default:
            return(<div></div>);      
      }
    }

  render() {
    return (
      <div>
        {this.definirPagina()}
      </div>
    );
  }
}

export default App;
