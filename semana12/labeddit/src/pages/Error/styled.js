import styled from 'styled-components';

export const Logo = styled.h1 `
    animation: transitionIn 2s;
    color: #bbe67b;
    padding: 20px;
    box-sizing:border-box;
    font-size: 70px;
    font-family: 'Bitter';
    cursor: pointer;
    text-shadow: 0 1.5px 1px white;
    
`

export const Mensagem = styled.h3 `
    animation: transitionIn 2s;
    color: white;
    padding: 20px;

    box-sizing:border-box;
    font-family: 'Bitter';
    cursor: pointer; 
`
export const BoxError = styled.div ` 
    text-align: center;
`
export const BotaoVoltar = styled.button `
    padding: 10px;
    background-color: #bbe67b;
    border: 0;
    width: 200px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Bitter';
    font-size: 20px;
    margin:10px 0 5px 0;
    outline-style: none;
    animation: transitionIn 2s;
    :hover {
        background-color: #176ede;
        color: white;
        font-weight:bold;
    }
`