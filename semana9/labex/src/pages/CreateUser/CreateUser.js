import React from 'react';
import { Container, Logo, BoxLogo, BoxInput, Inputs, Botao, BoxBotao, BotaoLogin, H1 } from './CreateUser-styled';
import { goToLogin } from '../../router/Coordinator';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import useForm from '../../hooks/useForm';


const CreateUser = () => {

    const history = useHistory();
    const [form, onChange, clearInput] = useForm({
        email: '',
        password: ''
       
    });



    const create = () => {
        const body = {
            email: form.email,
            password: form.password
         
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-silas/signup', body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                history.push('/login')
                clearInput();
                alert('Usuario criado com sucesso!')
            })
            .catch((err) => {
                alert('Erro ao criar usuário!')
                console.log(err)
            })

    }

    return (
        <Container>
            <BoxLogo>
                <Logo>LabeX</Logo>
                <H1>Cadastro</H1>
                <BoxInput>
                    <form>
                        <Inputs
                            name='email'
                            value={form.email}
                            onChange={onChange}
                            placeholder='Novo email'
                            required>
                        </Inputs>
                        <Inputs
                            name='password'
                            value={form.password}
                            onChange={onChange}
                            type='password'
                            placeholder='Senha'
                            required>
                            
                        </Inputs>
                    </form>
                    <BoxBotao>
                        <Botao onClick={create}>Criar</Botao>
                        <BotaoLogin onClick={() => goToLogin(history)}>Login</BotaoLogin>
                    </BoxBotao>
                </BoxInput>
            </BoxLogo>
        </Container>
    )
}

export default CreateUser;
