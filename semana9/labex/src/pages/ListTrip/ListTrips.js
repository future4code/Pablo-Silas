import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Box, H1 } from './ListTrip-styled';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ListTrips = () => {

    const [trip, setTrip] = useState({});
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(!token){
            history.push('/login')
        }   

        getTrip()
    }, [history])

    const getTrip = () => {

        axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/pablo-silas-epps/trips')
        .then((res) => {
            console.log(res.data.trips)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Box>
                    <H1>Lista de Viagens</H1>
                </Box>
            </div>
        </div>
    )
}

export default ListTrips;
