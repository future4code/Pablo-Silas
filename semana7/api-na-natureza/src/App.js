import React from 'react';
import styled from 'styled-components';
import './App.css';
import Company from './components/Company';
import Members from './components/Members';
import Rockets from './components/Rockets';
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
    page: "home"
  }


  goHome = () => {
    this.setState({page: "home"})
  }

  goCompany = () => {
    this.setState({page: "company"})
  }

  goMembers= () => {
    this.setState({page: "members"})
  }

  goRockets = () => {
    this.setState({page: "rockets"})
  }

  goDragon = () => {
    this.setState({page: "dragon"})
  }

  definePage = () => {
    switch(this.state.page) {
      case "home":
        return (
          <Principal>
        <BoxL>
          <Botao1 onClick={this.goCompany}>Company</Botao1>
          <Botao1 onClick={this.goMembers}>Members</Botao1>
        </BoxL>  
        <Box>
          <Logo src='https://i.imgur.com/tE3Wo8S.png'/>
        </Box>
        <BoxR>
          <Botao2 onChange={this.playSong} onClick={this.goRockets}>Rockets</Botao2>
          <Botao2 onClick={this.goDragon}>Dragon</Botao2>
        </BoxR>  
      </Principal>  
        );

      case "company":
        return (<Company state={this.goHome}/>);
      case "members":
            return(<Members state={this.goHome}/>); 
        case "rockets":
            return(<Rockets state={this.goHome}/>);
        case "dragon":
            return(<Dragon state={this.goHome}/>)
        default:
            return(<div></div>);      
      }
    }

    

  render() {
    return (
      <div>
        {this.definePage()}
      </div>
    );
  }
}

export default App;
