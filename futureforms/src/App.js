import React from "react";
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const Container = styled.div `
  text-align: center ;
  font-family: sans-serif;
`
const Botao = styled.button `
  margin-top: 20px;
`

class App extends React.Component {
  state = {
    etapa: 1,
  }

  irParaProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 });
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final/>;
      default:
        return <Final/>;
    }
  };

  render () {
    return (
      <Container>
        {this.renderizaEtapa()}
        {this.state.etapa !== 4 && (
          <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>
        )}
      </Container>
    );
  }
}
export default App;
