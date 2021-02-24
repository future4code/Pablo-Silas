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
    :hover {
        text-shadow: 0 0 3px white;
        cursor:default;
    }
    
`

export const Inputs = styled.input `
    background-color: white;
    width: 200px;
    padding: 10px;
    border:0px;
    border-radius: 5px;
    margin: 5px;
    outline-color: #fa709a;
    :hover {
        box-shadow: 0 0 9px 2px #FA709A;
    }
    :focus {
        box-shadow: 0 0 9px 2px #FA709A;
    }
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
    margin: 10px;
    font-family: 'Oswald';
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    color: white;
    font-size: 18px;
    width: 80px;
    height: 40px;
    border-radius: 0 9px 0 9px;
    border: 0px;
    outline-style: none;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.3s; 
        box-shadow:  0 0 8px 1px #FA709A; 
        
    }
`

export const H1 = styled.h1 `
    font-family: 'Oswald';
    color: #FA709A;
    text-align: center;
    font-size: 40px;
    cursor: default;
    font-variant: small-caps;
    border:0;
    :hover {
        text-shadow: 0 0 3px #FA709A;
        cursor:default;
    }
    
`

export const BotaoSignup = styled.button `
    margin-left: 20px;
    margin-top: 15px;
    font-family: 'Oswald';
    background-color: white;
    color: #fa709a;
    font-size: 13px;
    width: 70px;
    height: 30px;
    border-radius: 9px 0 9px 0;
    border: 0px;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.3s; 
        box-shadow:  0 0 8px 1px white; 
        color: #fa709a;
        outline-style: none;
    }
`