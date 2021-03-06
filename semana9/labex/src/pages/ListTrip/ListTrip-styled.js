import styled from 'styled-components';

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

export const H1 = styled.h1 `
    padding: 10px;
    padding-left: 20px;
    color: white;
    font-family: 'Oswald';
    :hover {
        text-shadow: 0 0 3px #FA709A;
        cursor: default;
    }

`
export const BoxTrip = styled.div `
    font-family: 'Verdana';
    border-width: 1px 1px 2px;
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    color: white;
    border-radius: 5px;
    border: 0px;
    padding: 10px;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 250px;
    outline-style:none;
    :hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: linear 0.5s;
        box-shadow: 0 0 9px 2px #Fede43; 
        
    }
`

export const LinkDetails = styled.a ` 
    text-decoration: none;
    color: white;

`