import React, { useState } from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import { useHistory } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import  swal  from  'sweetalert' ;
import { BodyLogin, BoxLogin, Logo, BoxTitle, BotaoEntrar, BoxInput, Input, LinkSign } from './styled'

const SignUp = () => {

    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const [form, onChange, clearInput] = useForm({
        email: '',
        password: '',
        username: ''

    });

    const create = () => {
        setIsLoading(true)
        const body = {
            email: form.email,
            password: form.password,
            username: form.username,

        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup', body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                history.push('/')
                setIsLoading(false)
                clearInput();
                swal({
                    title: "Usuário criado com sucesso!",
                    text: "Realize seu primeiro login!",
                    icon: "success",
                  });
            })
            .catch((err) => {
                setIsLoading(false)
                swal({
                    title: "Erro ao criar usuário :(",
                    text: "Corrija e tente novamente",
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
                    <h1>Cadastro</h1>
                    <br />
                </BoxTitle>
                <BoxInput>
                    <Input
                        name='email'
                        placeholder='Informe seu e-mail'
                        value={form.email}
                        onChange={onChange}
                        required
                    />
                    <Input
                        name='password'
                        placeholder='Nova senha'
                        value={form.password}
                        onChange={onChange}
                        required
                    />
                    <Input
                        name='username'
                        placeholder='Crie um nome de usuário'
                        value={form.username}
                        onChange={onChange}
                        required
                    />
                    <br />
                    <BotaoEntrar onClick={create}>{isLoading? <CircularProgress color={'inherit'} size={24}/> : <>Criar Conta</>}</BotaoEntrar>
                </BoxInput>
                <BoxTitle>
                    <p>Já tem uma conta?<LinkSign href='/'> Acessar</LinkSign></p>
                </BoxTitle>

            </BoxLogin>
        </BodyLogin>
    )
}

export default SignUp;