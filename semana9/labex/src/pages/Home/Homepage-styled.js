import styled from 'styled-components';

export const BoxLogo = styled.div `
    width: 500px;
    border: 1px solid red;
    margin: auto;
`

export const BoxBotao = styled.div `
    width: 300px;
    margin: auto;
    display: flex;
    justify-content: space-around;
`

export const Logo = styled.h1 `
    font-family: 'Oswald';
    color: white;
    text-align: center;
    font-size: 80px;
    margin-top: 150px;
    cursor: default;
    :hover {
        color: #80D0C7;
    }
`

export const BotaoViagem = styled.button `
    font-family: 'Oswald';
    background-color: white;
    color: black;
    border: 0px;
    width: 100px;
    height: 50px;
    :hover {
        transform: scale(1.2);
        transition: linear 0.3s;
    }


`
export const BotaoLogin = styled.button `
    font-family: 'Oswald';
    background-color: white;
    color: black;
    border: 0px;
    width: 100px;
    height: 50px;

    :hover {
        transform: scale(1.2);
        transition: linear 0.3s;
    }
    
`