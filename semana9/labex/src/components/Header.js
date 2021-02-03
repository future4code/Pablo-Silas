import React from 'react';
import styled from 'styled-components';


const Header = styled.div `
    width: 100%;
    background-color: #C0B283;
    height: 60px;
    box-sizing: border-box;
`
const Logo = styled.h1 `
    background: #C0B283;
    font-family: 'Oswald';
    color: white;
    font-size: 40px;
    font-variant: small-caps;
    padding: 5px;
    padding-left: 15px;
    
    
    
`

const header = () => {
    return (
            <Header>
                <Logo>LabeX</Logo>
            </Header>
        
    )
}

export default header;
