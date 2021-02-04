import React from 'react';
import Header  from '../../components/Header';
import { Box, H1, Inputs } from './ApplicationForm-styled';


const ApplicationForm = () => {
    

    return (
        <div>
            <div>
                <Header/>
            </div>
            <Box>
                <H1>Aplicar para Viagem</H1>
                <Inputs
                 placeholder='Nome do Candidato'
                />
                <Inputs
                 placeholder='Idade'
                />
                <Inputs
                 placeholder='Texto de Aplicação'
                />
                <Inputs
                 placeholder='Profissão'
                />
            </Box>
        </div>
    )
}

export default ApplicationForm;
