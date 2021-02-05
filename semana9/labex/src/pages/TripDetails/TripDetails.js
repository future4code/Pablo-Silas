import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import { Box, H1, DivTrip, H2, DivCandidate, Nav } from './TripDetails-styled';
import { useParams } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectPage';
import Candidate from '../../components/Candidate';


const TripDetails = () => {
    const pathParams = useParams();
    const [trips, setTrips] = useState({});
    const [candidates, setCandidates] = useState([]);

    useProtectedPage();

    useEffect(() => {
        getTripDetail();
    }, [])

    const getTripDetail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-silas-epps/trip/${pathParams.id}`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                setTrips(res.data.trip);
                setCandidates(res.data.trip.candidates);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const decideCandidate = (approve, candidateId) => {
        const body = {
            approve: approve
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-silas-epps/trips/${pathParams.id}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: localStorage.getItem('token')
            }
        }).then(() => {
            alert('Usuario aprovado!')
            getTripDetail();
        })
            .catch((err) => {
                alert('Erro ao aprovar!')


            })

    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <Box>
                <H1>Detalhes da Viagem</H1>
                <Nav>
                    <DivTrip>
                        <H2>Informações da viagem</H2>
                        <p><strong>Nome: </strong>{trips.name}</p>
                        <p><strong>Descrição: </strong>{trips.description}</p>
                        <p><strong>Planeta: </strong>{trips.planet}</p>
                        <p><strong>Data: </strong>{trips.date}</p>
                        <p><strong>Duração: </strong>{trips.durationInDays} dias</p>
                    </DivTrip>
                    <DivCandidate>
                        <H2>Candidatos a viagem</H2>
                        {candidates.map((i) => {
                            return <Candidate decideCandidate={decideCandidate} candidate={i} />
                        })}
                    </DivCandidate>
                </Nav>
            </Box>
            <Footer/>
        </div>
    )
}

export default TripDetails;
