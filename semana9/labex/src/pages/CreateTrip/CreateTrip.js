import React from 'react';
import {useProtectPage} from '../../hooks/useProtectPage';

const CreateTrip = () => {

    useProtectPage();

    return (
        <div>
            <h1>Criar viagem</h1>
        </div>
    )
}

export default CreateTrip;
