import styled from 'styled-components';

export const Container = styled.div `
    margin-top: 150px;
`

export const BoxLogo = styled.div `
    width: 500px;
    margin: auto;
    
`

export const Logo = styled.h1 `
    font-family: 'Oswald';
    color: #C0B283;
    text-align: center;
    font-size: 80px;
    cursor: default;
    font-variant: small-caps;
    border-width: 0 0 1px;
    border-style: solid;
    
`

export const Inputs = styled.input `
    
    background-color: white;
    width: 200px;
    padding: 10px;
    border:0px;
    border-radius: 5px;
    margin: 5px;
    outline-color: #C0B283;
`

export const BoxInput = styled.div `
    padding-top: 20px;
    width: 200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    
`
export const BoxBotao = styled.div `
    margin: auto;
    display: flex;
    
`

export const Botao = styled.button `
    margin: 20px;
    font-family: 'Oswald';
    background-color: white;
    color: #C0B283;
    font-size: 17px;
    width: 80px;
    height: 40px;
    border: 0px;
    border-radius: 5px;
    
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.3s; 
        outline-style: none;
        background-color: #C0B283;
        color: white;
        
    }

`

export const BotaoVoltar = styled.button `
    margin-right: 10px;
    margin-top: 25px;
    font-family: 'Oswald';
    background-color:#333;
    color: white;
    border: 0px;
    font-size: 11px;
    width: 60px;
    height: 30px;
    border-radius: 5px;
    
    
    :hover {
        cursor: pointer;
        background-color: #C0B283;
        color: white;
        border: 0px; 
        outline-style: none;
    }


`