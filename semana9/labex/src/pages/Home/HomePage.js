import React from 'react';
import { Container, Botao, Logo, BoxLogo, BoxBotao, ImgMoon } from './Homepage-styled';
import { useHistory } from 'react-router-dom';
import { goToForm, goToLogin } from '../../router/Coordinator';


const Home = () => {

    const history = useHistory()

    return (
        <Container>
                   
                    <ImgMoon src='https://i.imgur.com/uaIosjw.png' />
            
            <BoxLogo>
                <Logo>LabeX</Logo>
                <BoxBotao>
                    <Botao onClick={() => goToForm(history)}>Viagens</Botao>
                    <Botao onClick={() => goToLogin(history)}>Login</Botao>
                </BoxBotao>
            </BoxLogo>
        </Container>
    )
}

export default Home;
