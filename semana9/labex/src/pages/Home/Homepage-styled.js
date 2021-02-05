import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
`

export const BoxLogo = styled.div `
    width: 600px;
    margin: auto;
    :hover {
        animation-delay: 1s;
        transform: scale(1.2);
        transition: all 1s;
    }         
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
    font-size: 150px;
    cursor: default;
    font-variant: small-caps;
`

export const BoxTrip = styled.div ` 
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
    color: white;
    height: 96vh;
    width: 350px;
    overflow-y:auto;
    box-shadow: 5px 5px #333;
    border-radius: 0 0 10px 10px;  
`

export const DivTrip = styled.div ` 
    font-family: 'Oswald';
    font-size: 17px;
    padding: 10px;
    
`
export const HeaderTrip = styled.div `
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    color: white;
    border-radius: 5px;
    box-shadow: 2px 2px #333;
    padding: 10px;
    margin-bottom: 15px;
`
export const H2 = styled.h2 `
    font-family: 'Oswald';
`

export const Botao = styled.button `
    margin: 10px;
    font-family: 'Oswald';
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    color: white;
    font-size: 15px;
    width: 100px;
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

    :active {
        transform: scale(1.3);
        transition: all 2s;
    }
`
export const BotaoLink = styled.button `
    margin: 15px;
    font-family: 'Oswald';
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    color: white;
    font-size: 20px;
    width: 200px;
    height: 60px;
    outline-style: none;
    border-radius: 0 9px 0 9px;
    border: 0px;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.3s; 
        background-color: #C0B283;
        color: white;
    }

    :active {
        transform: scale(1.3);
        transition: all 2s;
    }

`
export const BotaoLink2 = styled.button `
    margin: 15px;
    font-family: 'Oswald';
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    color: white;
    font-size: 20px;
    width: 200px;
    height: 60px;
    outline-style: none;
    border-radius: 9px 0 9px 0;
    border: 0px;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.3s; 
        background-color: #C0B283;
        color: white;
    }

    :active {
        transform: scale(1.3);
        transition: all 2s;
    }
`

export const HR = styled.hr `
    margin-bottom: 15px;
`