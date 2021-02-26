import React from 'react';
import styled from 'styled-components';
import { goToHome } from '../routes/Coordinators';
import { useHistory } from 'react-router-dom';

const DivFooter = styled.div `
    margin-top: 50px;
    width: 100%;
    height: 65px;
    background-color:#bde383;
    color: white;
    text-align: center;
    display: flex;
    justify-content: space-between;
`

const Font = styled.h3 `
    padding: 20px;
    font-family: 'Bitter';
    color: white;
    cursor: default;
`

const Logo = styled.h1`
    animation: transitionIn 5s;
    color: #ffffff;
    padding: 16px;
    box-sizing:border-box;
    font-size: 30px;
    font-family: 'Bitter';
    cursor: pointer;   
    
`

const Footer = () => {
    const history = useHistory()

    return(
        <DivFooter>
            <Logo onClick={() => goToHome(history)}>labEddit</Logo>
            <Font>Todos os Direitos Reservados © </Font>
        </DivFooter>
    )
}

export default Footer;