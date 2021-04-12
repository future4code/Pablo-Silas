import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToHome } from '../../routes/Coordinators';
import {Logo, Mensagem, BotaoVoltar, BoxError} from './styled';

const Error = () => {
    const history = useHistory();
    return(
        <BoxError>
            <Logo>labEddit</Logo>
            <Mensagem>Essa página não existe, tente um endereço válido!</Mensagem>
            <BotaoVoltar onClick={() => goToHome(history)}>Página inicial</BotaoVoltar>
        </BoxError>
    )

}

export default Error;