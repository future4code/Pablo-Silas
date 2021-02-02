import React from 'react';
import {BotaoViagem, BotaoLogin, Logo, BoxLogo, BoxBotao} from './Homepage-styled';


const Home = () => {
    return (
        <div>
            <BoxLogo>
                <Logo>LabeX</Logo>
                <BoxBotao>
                    <BotaoViagem>Viajar</BotaoViagem>
                    <BotaoLogin>Login</BotaoLogin>
                </BoxBotao>    
            </BoxLogo>
        </div>
    )
}

export default Home;
