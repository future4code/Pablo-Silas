import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    padding: 10px;   
`

const Font = styled.h1`
    margin: auto;
    color: #ff7d97;
    font-family: 'PT Sans Narrow', sans-serif;

    :hover {
      cursor:pointer;  
      transform: scale(1.2);
      transition: linear 0.3s;
    }
`

const Match = styled.div`
    margin-top: 5px;
  
`

const ImgMatch = styled.img`
    height: 40px;
    width: 40px;
    cursor:pointer;
    
    :hover {
      transform: scale(1.2);
      transition: linear 0.3s;
    }
`


function Card(props) {
    return (
        <Box>
            <Font>AstroMatch</Font>
            <Match>
                <ImgMatch onClick={props.changeList} src='https://www.flaticon.com/svg/vstatic/svg/3820/3820188.svg?token=exp=1611762386~hmac=f6e0283f66f879cf35bc66fc44daab2e'></ImgMatch>
            </Match>
        </Box>
    )
}

export default Card;