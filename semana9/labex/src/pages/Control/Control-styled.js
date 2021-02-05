import styled from 'styled-components';

export const Container = styled.div `
    margin:auto;
    margin-top: 100px;
    background-color: #000000;
    border-radius:10px;
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
    width: 50%;
    padding: 15px;
`

export const BoxLogo = styled.div `
    width: 500px;
    margin: auto;
    
`

export const Logo = styled.h1 `
    font-family: 'Oswald';
    color: white;
    text-align: center;
    font-size: 80px;
    cursor: default;
    font-variant: small-caps;
    border-width: 0 0 1px;
    border-style: solid;
    
`

export const BoxBotao = styled.div ` 
    margin: 20px;
    text-align: center;

`

export const Botao = styled.button `
    margin: 20px;
    font-family: 'Oswald';
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    color: white;
    font-size: 18px;
    width: 120px;
    height: 50px;
    border-radius: 0 9px 0 9px;
    border: 0px;
    outline-style: none;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.3s; 
        background-color: #C0B283;
        color: white;
        
    }
`
export const BotaoInv = styled.button `
    margin: 20px;
    font-family: 'Oswald';
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    color: white;
    font-size: 18px;
    width: 120px;
    height: 50px;
    border-radius: 9px 0 9px 0;
    border: 0px;
    outline-style: none;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.3s; 
        background-color: #C0B283;
        color: white;
        
    }
`
    