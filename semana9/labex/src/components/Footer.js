import React from 'react';
import styled from 'styled-components';

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
`

const Font = styled.h3 `
    padding: 18px;
    font-family: 'Oswald';
    color: #fa709a;

`

const Logo = styled.h1`
    font-family: 'Oswald';
    color: #fa709a;
    font-size: 40px;
    font-variant: small-caps;
    margin-left: 25px;
    margin-bottom: 5px;
    cursor: default;

    
`

const Footer = () => {
    return(
        <DivFooter>
            <Logo>LabeX</Logo>
            <Font>Todos os Direitos Reservados © </Font>
        </DivFooter>
    )
}

export default Footer;