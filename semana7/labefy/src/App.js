import React from 'react';
import './App.css';
import styled from 'styled-components';
import Playlists from './components/Playlist'


const H1 = styled.h1` 
   padding: 40px;
  color: #1172eb;
  font-family: 'Bitter';
  font-size: 80px;
  opacity: 85%;
  :hover {
  opacity: 100%;
    
  }
`

const H2 = styled.h2` 
  color: white;
  font-family: 'Bitter';
  :hover {
    opacity: 200%;
    
  }
`

const Box1 = styled.div `
  margin-top: 310px;
  margin-left: 50px;
`



const BotaoPlaylist = styled.button ` 
  background-color: #1172eb;
  border: 0px;
  padding: 20px;
  width: 250px;
  bottom: 300px;
  border-radius: 10px;
  position: relative;
  left: 980px;
  font-family: 'Bitter';
  color: white;
  font-size: 20px;
  :hover {
    background-color: #127DFF;
  }

`

export default class App extends React.Component {
  state = {
    home: true
  }

  irPlaylist = () => {
    this.setState({home: false})
  }

  irHome = () => {
    this.setState({home: true})
  }

  definirPagina = () => {
    if(this.state.home){
      return (
        <div>
        <div>
          <H1>Labefy</H1>
            <Box1>
              <H2>Crie suas playlists.</H2>
              <H2>Edite e exclua músicas.</H2>
              <H2>Controle o que você ouve.</H2>
            </Box1>
              <BotaoPlaylist onClick={this.irPlaylist}>Criar Playlists</BotaoPlaylist>
          </div>    
      </div>
      )
    }else {
      return(
        <Playlists state={this.irHome}/>
      )
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


