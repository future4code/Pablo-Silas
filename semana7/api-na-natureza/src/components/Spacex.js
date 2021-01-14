import React from 'react';
import styled from 'styled-components';

const Principal = styled.div `
display: flex;
flex-direction: column;
width: 100%;
`
const Logo = styled.img `
  opacity: 80%;
  border: 1px solid red;
  width: 250px;
  height: 200px;
  :hover {
    opacity: 100%;
  }
`
const BoxLogo = styled.div `
    border: 1px solid yellow;
    margin: autoinherit;
`

const Box = styled.div ` 
    background-color: white;
    width: 200px;
    height: 500px;
    margin: auto;
`

export default class Spacex extends React.Component {
    render(){
        return (
           <Principal>
               <BoxLogo>
                    <Logo src='https://i.imgur.com/tE3Wo8S.png'/>
               </BoxLogo>
                <Box>
                <h1>SpaceX</h1>
                </Box>
            </Principal>  

        )
    }
}