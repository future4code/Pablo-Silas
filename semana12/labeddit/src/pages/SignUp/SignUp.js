import React from 'react';
import { BodyLogin, BoxLogin, Logo, BoxTitle, BotaoEntrar, BoxInput, Input, Dstq, LinkSign} from './styled'

const SignUp = () => {
    return (
        <BodyLogin>
            <Logo>labbEddit</Logo>
            <BoxLogin>
                <BoxTitle>
                    <p>Cadastre-se no <Dstq>labbEddit</Dstq>!</p>
                    <p>Realizado seu cadastro você consegue navegar a vontade no site!</p>
                    <br />
                    <hr />
                    <br />
                    <h1>Cadastro</h1>
                    <br />
                </BoxTitle>
                <BoxInput>
                    <Input placeholder='Nome' />
                    <Input placeholder='Senha' />
                    <br />
                    <BotaoEntrar>Criar Conta</BotaoEntrar>
                </BoxInput>
                <BoxTitle>
                    <p>Já tem uma conta?<LinkSign href='/'> Acessar</LinkSign></p>
                </BoxTitle>

            </BoxLogin>
        </BodyLogin>
    )
}

export default SignUp;