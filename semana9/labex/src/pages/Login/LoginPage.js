import React, { useEffect } from 'react';
import { Container, Logo, BoxLogo, BoxInput, Inputs, Botao, BoxBotao, BotaoSignup, H1 } from './LoginPage-styled';
import { goToSignup } from '../../router/Coordinator';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import useForm from '../../hooks/useForm';

const Login = () => {

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            history.push('/control')
        }
    }, [])

    const history = useHistory();
    const [form, onChange, clearInput] = useForm({
        email: '',
        password: ''
    });

    const login = () => {
        const body = {
            email: form.email,
            password: form.password
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-silas-epps/login', body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                history.push('/control')
                clearInput();
            })
            .catch((err) => {
                console.log(err)
                alert("Dados Errados!")
            })
    }

    return (
        <Container>
            <BoxLogo>
                <Logo>LabeX</Logo>
                <H1>Login</H1>
            </BoxLogo>
            <BoxInput>
                <form>
                    <Inputs
                        name='email'
                        value={form.email}
                        onChange={onChange}
                        placeholder='Email'
                        required>
                    </Inputs>
                    <Inputs
                        name='password'
                        value={form.password}
                        onChange={onChange}
                        type='password'
                        placeholder='Senha'>
                    </Inputs>
                </form>
                <BoxBotao>
                    <Botao onClick={login}>Acessar</Botao>
                    <BotaoSignup onClick={() => goToSignup(history)}>Cadastrar</BotaoSignup>
                </BoxBotao>
            </BoxInput>

        </Container>
    )
}

export default Login;
