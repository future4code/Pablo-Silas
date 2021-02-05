import React, { useState } from 'react';
import styled from 'styled-components';
import { goToCreate, goToHome } from '../router/Coordinator';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    height: 60px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
   
`
const Logo = styled.h1`
    font-family: 'Oswald';
    color: white;
    font-size: 40px;
    font-variant: small-caps;
    margin-left: 25px;
    margin-bottom: 5px;
    
      
    cursor: default;
    :hover {
        color: #fa709a;
        cursor:pointer;
        transform: scale(1.2);
        transition: linear 0.5s; 
    }  
    
`
const BoxBotao = styled.div`
    margin-left: 80px;
`

const Link = styled.p` 
    height: 30px;
    display: inline-block;
    border: 0px;
    font-family: 'Oswald';
    color: white;
    font-size: 20px;
    color: none;
    margin: 10px;
    outline-style: none;

    :hover {
        border-width: 0 0 2px;
        border-style: solid;
        color: #fa709a;
        font-weight: bold;
        cursor: pointer;
    }

`

const HeaderUser = () => {

    const history = useHistory();
    const [logout, setLogout] = useState(false);

    const Logout = () => {
        if(!logout) {
            setLogout(localStorage.removeItem('token'))
            history.push('/login');
            
        }
    }

    return (
        <Container>
            <Logo onClick={() => goToHome(history)}>LabeX</Logo>
            <BoxBotao>
                <Link onClick={() => goToCreate(history)}>Criar Viagem</Link>
                <Link onClick={Logout}>Logout</Link>
            </BoxBotao>
        </Container>

    )
}

export default HeaderUser;
