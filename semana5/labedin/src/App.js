import React from 'react';
import './App.css';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={'https://i.imgur.com/GTEjHse.jpg'}
          nome={'Pablo Silas'}
          descricao={'Oi, eu sou o Pablo. Atualmente sou estudante na área de desenvolvimento web, estou em um curso na Labenu de Web Full Stack, e também curso Engenharia de Software pela Estácio. Sou um amante da tecnologia, sempre em busca de novos conhecimentos! '}
        />
        
        <ImagemButton 
          imagem={"https://image.flaticon.com/icons/png/512/117/117472.png"} 
          texto={"Ver mais"}
        />
      </div>

      <div className="container">
        <CardPequeno
        imagem={'https://cdn.icon-icons.com/icons2/2131/PNG/512/email_mesasge_envelope_icon_131541.png'}
        descricao={'Email: pablosilas14'} 
        />
      </div>

      <div className="container">
        <CardPequeno
        imagem={'https://image.flaticon.com/icons/png/512/9/9275.png'}
        descricao={'Endereço: Rua Labenu'} 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={'https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png'}
          nome={"Labenu"} 
          descricao={"Estudante da Labenu, curso Web Full Stack"} 
        />
        
        <CardGrande 
          imagem={"https://media.glassdoor.com/sqll/2489331/winover-call-center-squarelogo-1552538635383.png"} 
          nome={"Winover"} 
          descricao={"Operador de Teleatendimento"} 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem={"https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"} 
          texto={"Facebook"} 
        />        

        <ImagemButton 
          imagem={"https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"} 
          texto={"Twitter"} 
        />        
      </div>
    </div>
  );
}

export default App;
