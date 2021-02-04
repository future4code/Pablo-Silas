import React from 'react';
import styled from 'styled-components';
import { goToHome, goToLogin } from '../router/Coordinator';
import { useHistory } from 'react-router-dom';

const Container= styled.div `
    width: 100%;
    background-color: #C0B283;
    height: 60px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
   
`
const Logo = styled.h1 `
    font-family: 'Oswald';
    color: white;
    font-size: 40px;
    font-variant: small-caps;
    padding: 5px;
    padding-left: 15px;
      
    cursor: default;
    :hover {
        color: black;
    }  
    
`
const BoxBotao = styled.div `
    margin-left: 80px;
`

const Botao = styled.button ` 
    height: 30px;
    border: 0px;
    font-family: 'Oswald';
    color: white;
    font-size: 20px;
    background-color: #C0B283;
    margin: 10px;

    :hover {
        border-width: 0 0 2px;
        border-style: solid;
        color: black;
        outline-style: none;
        cursor: pointer;
    }

`

const Header = () => {

    const history = useHistory()

    return (
            <Container>
                <Logo>LabeX</Logo>
                <BoxBotao>
                    <Botao onClick={() => goToHome(history)}>Home</Botao>
                    <Botao onClick={() => goToLogin(history)}>Login</Botao>
                </BoxBotao>
            </Container>
        
    )
}

export default Header;
