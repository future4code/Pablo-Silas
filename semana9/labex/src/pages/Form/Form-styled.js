import styled from 'styled-components'

export const Box = styled.div `
    text-align: center;
    width: 80%;
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
    height: 100%;
    border-radius: 10px;
    margin:auto;
    margin-top: 5px;
    padding-bottom: 15px;
`

export const H1 = styled.h1`
    padding: 10px;
    padding-left: 20px;
    color: white;
    font-family: 'Oswald';

`

export const Inputs = styled.input`
    font-family: 'Verdana';
    display: block;
    border-width: 1px 1px 2px;
    border-style: solid;
    color: black;
    background-color: white;
    width: 50%;
    padding: 10px;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 5px;
    margin-top: 5px;
    outline-color: #fa709a;
`

export const SelectPais = styled.select` 
    font-family: 'Verdana';
    display: block;
    border-width: 1px 1px 2px;
    border-style: solid;
    color: black;
    background-color: white;
    width: 52%;
    padding: 10px;
    border-radius: 5px;
    margin: auto;
    margin-bottom: 5px;
    margin-top: 5px;
    outline-color: #C0B283;

`

export const Botao = styled.button `
    margin: 10px;
    font-family: 'Oswald';
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    color: white;
    font-size: 18px;
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
`