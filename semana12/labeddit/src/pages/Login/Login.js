import React from 'react';
import { BodyLogin, BoxLogin, Logo, BoxTitle, BotaoEntrar, BoxInput, Input, Dstq, LinkSign} from './styled'

const Login = () => {
    return (
        <BodyLogin>
            <Logo>labbEddit</Logo>
            <BoxLogin>
                <BoxTitle>
                    <p>Bem Vindx ao <Dstq>labbEddit</Dstq>!</p>
                    <p>Aqui você encontra amigos, compartilha informações e dá risadas! </p>
                    <br />
                    <hr />
                    <br />
                    <h1>Login</h1>
                    <br />
                </BoxTitle>
                <BoxInput>
                    <Input placeholder='Nome' />
                    <Input placeholder='Senha' />
                    <br />
                    <BotaoEntrar>Entrar</BotaoEntrar>
                </BoxInput>
                <BoxTitle>
                    <p>Ainda não tem conta?<LinkSign href='/signup'> Cadastre-se</LinkSign></p>
                </BoxTitle>

            </BoxLogin>
        </BodyLogin>
    )
}

export default Login;