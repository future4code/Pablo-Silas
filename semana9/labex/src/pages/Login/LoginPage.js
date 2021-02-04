import React, { useEffect, useState } from 'react';
import { Container, Logo, BoxLogo, BoxInput, Inputs, Botao, BoxBotao, BotaoVoltar } from './LoginPage-styled';
import { goToHome } from '../../router/Coordinator';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const onChangeEmail = (e) => {
        setEmail(e.target.value)

    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            history.push('/list')
        }
    }, [])

    const login = () => {
        const body = {
            email: email,
            password: password
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-silas-epps/login', body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                history.push('/list')
            })
            .catch((err) => {
                console.log(err)
            })

    }



    return (
        <Container>
            <BoxLogo>
                <Logo>LabeX</Logo>
                <BoxInput>
                    <Inputs
                        value={email}
                        onChange={onChangeEmail}
                        placeholder='Email'>
                    </Inputs>
                    <Inputs
                        value={password}
                        onChange={onChangePassword}
                        type='password'
                        placeholder='Senha'>
                    </Inputs>
                    <BoxBotao>
                        <Botao onClick={login}>Acessar</Botao>
                        <BotaoVoltar onClick={() => goToHome(history)}>Voltar</BotaoVoltar>
                    </BoxBotao>
                </BoxInput>
            </BoxLogo>
        </Container>
    )
}

export default Login;
