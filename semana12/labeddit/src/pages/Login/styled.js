import styled, { keyframes } from 'styled-components';

export const BodyLogin = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('https://images.wallpapersden.com/image/download/white-walkers-minimalism_amxqbGyUmZqaraWkpJRmbmdlrWZlbWU.jpg');
    background-position-y: 35%;
    background-position-x: -20%;
    animation: transitionIn 1.5s;   
`

export const BoxLogin = styled.div`
    position: relative;
    top: 40px;
    left: 100px;
    width: 600px;
    height: 400px;
    border-radius: 20px 0 20px 0 ;
    background-color: #ffffff;
    background-image: linear-gradient(315deg, #f2f2f2 0%, #ffffff 90%);
    animation: transitionIn 5s;
    padding: 10px;
    color: #331f4e;
    :hover {
        box-shadow: inset 0 0 1em #ffffff, 0 0 1em #35acfb;
    }
`

export const BoxTitle = styled.div `
    color:#331f4e;
    font-family: 'Bitter';
    padding: 10px;
    text-align:center;
    cursor: default;
`

export const BoxInput = styled.div `
    text-align: center;
    color:#f9f9f9; 
`

export const Dstq = styled.p `
display: inline;
    color: #176ede;
`

export const LinkSign = styled.a `
display: inline;
    color: #b923a9;
    font-weight: bold;
`

export const Input = styled.input ` 
    margin: auto;
    margin-bottom: 5px;
    padding: 1rem 3.2rem 1rem 1.2rem;
    min-width: 24rem;
    display: block;
    background: transparent;
    border-radius: 0.2rem;
    transition: border-color 0.2s;
    border: 2px solid #7a7a7a56;
    outline: none;
    font-size: 18px;
    :hover, :focus {
        border-color: #176ede;
    }
`

export const BotaoEntrar = styled.button `
    padding: 10px;
    background-color: #bbe67b;
    border: 0;
    width: 200px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Bitter';
    font-size: 20px;
    margin-bottom: 10px;
    outline-style: none;
    :hover {
        background-color: #176ede;
        color: white;
        font-weight:bold;
    }
`

export const Logo = styled.h1 `
    animation: transitionIn 5s;
    color: #bbe67b;
    padding: 20px;
    margin-left: 250px;
    box-sizing:border-box;
    font-size: 70px;
    font-family: 'Bitter';
    position: relative;
    top: 20px;
    cursor: default;
    text-shadow: 0 1.5px 1px white;
    
`

export const TransitionIn = keyframes`

  from {
    opacity:0;
    transform: rotateX(-10deg);
  }
  
  to {
    opacity: 1;
    transform: rotateX(0);
  
}
`