import React, { useState, useEffect } from 'react';
import Header  from '../../components/Header';
import axios from 'axios';
import { BoxLogo } from './TripDetails-styled';
import {useProtectPage} from '../../hooks/useProtectPage';

const TripDetails = () => {

    const [trip, setTrip] = useState({});
    useProtectPage();

    useEffect(() => {

        getTripDetail()
    }, [])  

    const getTripDetail = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-silas-epps/trip/:id', {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setTrip(res.data.trip)
        })
        .catch((err) => {
            console.log(err)
        })
    }

 

    return (
        <div>
            <div>
                <Header/>
            </div>
            <BoxLogo>
                <h2>{trip.name}</h2> 
                <p>{trip.description}</p>
            </BoxLogo>
     </div>
    )
}

export default TripDetails;
