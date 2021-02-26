import styled, { keyframes } from 'styled-components';

export const Header = styled.div `
    width: 100%;
    height: 50px;
    background-color: #f2f2f2;
    text-align: center;
    box-sizing: border-box;
    border-radius: 10px 0 10px 0;
    animation: transitionIn 5s;
`

export const Logo = styled.h1 `
    animation: transitionIn 5s;
    color: #bbe67b;
    padding: 20px;
    margin-left: 500px;
    box-sizing:border-box;
    font-size: 70px;
    font-family: 'Bitter';
    cursor: pointer;
    text-shadow: 0 1.5px 1px white;
    
`
export const BoxUser = styled.div ` 
    display: flex;
    justify-content: space-between;
    padding: 5px;
    cursor: pointer;
    p {
        padding: 10px;
        color: #35acfb;
        font-weight: bold;
        :hover {
            color: #331f4e;
        }
    }
`
export const BoxLike = styled.div `
    p {
        padding: 10px;
        font-weight: bold;  
    }
    display:flex;

`

export const Title = styled.h2 `
    text-align:center;
    padding: 5px;
    color: #176ede;
    margin-bottom: 10px;
`
export const BoxCriarPost = styled.div ` 
    background-color: #bbe67b;
    text-align: center; 
    border-radius:5px;
    margin: 5px;
    margin-bottom: 10px;
    animation: transitionIn 2s;
    padding: 10px;
`
export const BotaoCriar = styled.button `
    padding: 10px;
    background-color: #f2f2f2;
    color: #176ede;
    border: 0;
    width: 200px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Bitter';
    font-size: 20px;
    margin:10px 0 5px 0;
    outline-style: none;
    :hover {
        background-color: #176ede;
        color: white;
        font-weight:bold;
    }
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
    font-size: 16px;
    :hover, :focus {
        border-color: #176ede;
    }
`
export const ImgLike = styled.img `
    padding: 5px;
    opacity: 50%;
    :hover { 
        opacity: 90%;
        
    }
`
export const BotaoHeader = styled.button ` 
    height: 100%;
    background-color: #f2f2f2;
    border-color: #bbe67b;
    border-width: 0 0 5px;
    border-radius:0 0 5px 5px;
    border-style: solid;
    padding: 10px;
    width: 150px;
    color:black;
    font-family: 'Bitter';
    font-size: 17px;
    margin-right: 10px;
    font-weight: bold;
    cursor: pointer;
    outline-style: none;
    :hover {
        background-color: #bbe67b;
        color: #176ede;
        border-color: #176ede;
        border-width: 0 0 4px;
        border-radius: 0 0 5px 5px;
        border-style: solid;
    }

`

export const Center = styled.div `
    margin-top: 100px;
    text-align: center;
    animation: transitionIn 3s;
`

export const BoxFeed = styled.div`
    animation: transitionIn 1s;
    background-color: transparent;
    width: 800px;
    margin:auto;
    overflow-y:auto;
    border-radius: 2px;
    height: 800px;
    padding:5px;
    box-sizing: border-box;
    font-family: 'Bitter';
    
`

export const BoxPost = styled.div ` 
    border: 2px solid #331f4e;
    background-color: #f2f2f2;
    border-radius:5px;
    margin: 5px;
    margin-bottom: 10px;
    animation: transitionIn 5 s;
    padding: 10px;
    cursor: pointer;
    
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