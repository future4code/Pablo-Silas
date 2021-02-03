import React from 'react';
import {useProtectPage} from '../../hooks/useProtectPage';

const ListTrips = () => {
    
    useProtectPage();

    return (
        <div>
            <h1>Lista de Viagem</h1>
        </div>
    )
}

export default ListTrips;
