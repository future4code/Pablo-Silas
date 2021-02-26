import React, { useEffect, useState } from 'react';
import { BodyLogin, BoxLogin, Logo, BoxTitle, BotaoEntrar, BoxInput, Input, Dstq, LinkSign } from './styled'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import CircularProgress from '@material-ui/core/CircularProgress';
import swal from 'sweetalert';

const Login = () => {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token) {
            history.push('/feed')
        }
    }, [history])


    const [form, onChange, clearInput] = useForm({
        email: '',
        password: ''
    });

    const login = () => {
        setIsLoading(true)
        const body = {
            email: form.email,
            password: form.password
        }
    
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login', body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                history.push('/feed')
                clearInput();
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                swal({
                    title: "Algo está errado!",
                    text: "Tente novamente :)",
                    icon: "warning",
                    dangerMode: true,

                });
            })
    }

    return (
        <BodyLogin>
            <Logo>labEddit</Logo>
            <BoxLogin>
                <BoxTitle>
                    <p>Bem Vindx ao <Dstq>labEddit</Dstq>!</p>
                    <p>Aqui você encontra amigos, compartilha informações e dá risadas! </p>
                    <br />
                    <hr />
                    <br />
                    <h1>Login</h1>
                    <br />
                </BoxTitle>
                <BoxInput>
                    <Input
                        name='email'
                        placeholder='E-mail'
                        value={form.email}
                        onChange={onChange}
                        required
                    />
                    <Input
                        name='password'
                        type='password'
                        placeholder='Senha'
                        value={form.password}
                        onChange={onChange}
                        required
                    />
                    <br />
                    <BotaoEntrar onClick={login}>
                       {isLoading? <CircularProgress color={'inherit'} size={24}/> : <>Entrar</>}
                    </BotaoEntrar>
                </BoxInput>
                <BoxTitle>
                    <p>Ainda não tem conta?<LinkSign href='/signup'> Cadastre-se</LinkSign></p>
                </BoxTitle>

            </BoxLogin>
        </BodyLogin>
    )
}

export default Login;