import React from 'react';
import { Container, BoxLogo, Logo, Botao, BoxBotao, BotaoInv } from './Control-styled';
import { goToCreate, goToList } from '../../router/Coordinator';
import { useProtectedPage } from '../../hooks/useProtectPage';
import { useHistory } from 'react-router-dom';

const Control = () => {
    const history = useHistory();
    useProtectedPage();

    return (
        <Container>
            <BoxLogo>
                <Logo>LabeX</Logo>
                <BoxBotao>
                    <Botao onClick={() => goToList(history)}>Lista de Viagens</Botao>
                    <BotaoInv onClick={() => goToCreate(history)}>Criar Viagem</BotaoInv>
                </BoxBotao>
            </BoxLogo>
        </Container>
    )
}

export default Control;