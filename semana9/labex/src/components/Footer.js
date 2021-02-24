import React from 'react';
import styled from 'styled-components';
import { goToHome } from '../router/Coordinator';
import { useHistory } from 'react-router-dom';

const DivFooter = styled.div `
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 65px;
    background-color: #f1dfd1;
    background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%);
    color: black;
    text-align: center;
    display: flex;
    justify-content: space-between;
    box-shadow:  0 0 9px 5px #8f8f8f; 
`

const Font = styled.h3 `
    padding: 18px;
    font-family: 'Oswald';
    color: #fa709a;
    cursor: default;
    :hover {
        text-shadow: 0 0 1px #fa709a;
    }

`

const Logo = styled.h1`
    font-family: 'Oswald';
    color: #fa709a;
    font-size: 40px;
    font-variant: small-caps;
    margin-left: 25px;
    margin-bottom: 5px;
    cursor: pointer;
    :hover {
        text-shadow: 0 0 1px #fa709a;
    }

    
`

const Footer = () => {
    const history = useHistory()

    return(
        <DivFooter>
            <Logo onClick={() => goToHome(history)}>LabeX</Logo>
            <Font>Todos os Direitos Reservados © </Font>
        </DivFooter>
    )
}

export default Footer;