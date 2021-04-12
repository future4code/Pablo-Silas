import styled from 'styled-components';

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
export const BoxComments = styled.div ` 
    border: 2px solid #bbe67b;
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
`

export const Title = styled.h2 `
    text-align:center;
    padding: 5px;
`

export const Center = styled.div `
    margin-top: 100px;
    text-align: center;
    animation: transitionIn 3s;
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

export const Header = styled.div `
    width: 100%;
    height: 50px;
    background-color: #f2f2f2;
    text-align: center;
    box-sizing: border-box;
    border-radius: 10px 0 10px 0;
    animation: transitionIn 5s;
`

export const BotaoComments = styled.button `
    margin:auto;
    padding: 10px;
    color:white;
    background-color: #176ede;
    border: 0;
    width: 200px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Bitter';
    font-size: 20px;
    outline-style: none;
    margin-top: 15px;
    animation: transitionIn 5s;
    :hover {
        background-color: #b923a9;
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
    font-size: 15px;
    :hover, :focus {
        border-color: #176ede;
    }
`

export const BoxBotao = styled.div ` 
    text-align: center;
`

export const BoxDetail = styled.div ` 
    border: 2px solid #331f4e;
    border-radius:5px;
    margin: 5px;
    margin-bottom: 10px;
    animation: transitionIn 5 s;
    padding: 10px;
   
    
`

export const BoxPost = styled.div`
    animation: transitionIn 5s;
    background-color: #ffffff;
    background-image: linear-gradient(315deg, #f2f2f2 0%, #ffffff 90%);
    width: 800px;
    margin:auto;
    overflow-y:auto;
    border-radius: 2px;
    height: 100%;
    padding:5px;
    box-sizing: border-box;
    font-family: 'Bitter';
    :hover {
        box-shadow: inset 0 0 1em #ffffff, 0 0 1em #35acfb;
    }
    
`