import styled from 'styled-components';

export const Container = styled.div `
    margin-top: 90px;
    margin-right: 80px;
    display: flex;

`


export const ImgMoon = styled.img `
    transform: scale(1.3) ;
    :hover {
        transform: scale(1.1) ;
        transition: all 9s;
    }
    
   
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
    font-size: 80px;
    cursor: default;
    font-variant: small-caps;
    border-width: 0 0 1px;
    border-style: solid;
    :hover {
     color: #C0B283;
        
    }

`

export const Botao = styled.button `
    margin-top: 20px;
    font-family: 'Oswald';
    background-color:  white;
    color: #333;
    font-size: 15px;
    width: 100px;
    height: 50px;
    border-radius: 5px;
    border: 0px;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.3s; 
        background-color: #C0B283;
        color: white;
        outline-style: none;
    }

    :active {
        transform: scale(1.3);
        transition: all 2s;
    }


`