import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
`

export const BoxLogo = styled.div `
    width: 550px;
    height: 550px;
    border: 2px solid white;
    border-radius: 50%;
    margin: auto;
    color: white;
    

    :hover {
        box-shadow: inset 0 0 1em #fa7299, 0 0 1em #fede43;
        border: 2px solid #fa7299;
        text-shadow: 0 0 6px white;
        animation-delay: 1s;
        transform: scale(1.1);
        transition: all 1s;
        color: white;
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
    text-align: center;
    font-size: 150px;
    cursor: default;
    font-variant: small-caps;
    margin-top: 105px;
`

export const BoxTrip = styled.div ` 
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
    color: white;
    height: 620px;
    width: 500px;
    overflow-y:auto;
    box-shadow: 5px 5px #333;
    border-radius: 0 0 10px 10px;  
`

export const DivTrip = styled.div ` 
    font-family: 'Oswald';
    font-size: 20px;
    padding: 10px;
    text-align: center;
    
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

export const DivInfo = styled.div `
    text-align: left;
    margin-top: 15px;
`

export const Botao = styled.button `
    margin: 10px; 
    font-family: 'Oswald';
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    color: white;
    font-size: 20px;
    width: 150px;
    height: 50px;
    border-radius: 0 9px 0 9px;
    border: 0px;
    outline-style: none;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.3s; 
        box-shadow:  0 0 8px 1px #fede43;        
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
        box-shadow:  0 0 8px 1px #FA709A;
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
        box-shadow:  0 0 8px 1px #fa7199;
    }

    :active {
        transform: scale(1.3);
        transition: all 2s;
    }
`

export const HR = styled.hr `
    margin-bottom: 10px;
`

export const DivBotao = styled.div `
    text-align: center;
    padding: 5px;
`