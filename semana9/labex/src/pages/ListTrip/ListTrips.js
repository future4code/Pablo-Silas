import React from 'react';
import HeaderList from '../../components/HeaderList';
import Footer from '../../components/Footer';
import { H1, Box, BoxTrip, LinkDetails } from './ListTrip-styled';
import { useTripsList } from '../../hooks/useTripList';
import { useProtectedPage } from '../../hooks/useProtectPage';

const ListTrips = () => {

    const trip = useTripsList();


    useProtectedPage();

    return (
        <div>
            <div>
                <HeaderList />
            </div>
            <div>
                <Box>
                    <H1>Lista de Viagens</H1>
                    {trip.map((trip) => {
                        return (
                            <BoxTrip>
                                <LinkDetails href={`/control/trips/detail/${trip.id}`}><p>{trip.name}</p></LinkDetails>
                            </BoxTrip>
                        )
                    }

                    )}
                </Box>
            </div>
            <Footer/>
        </div>
    )
}

export default ListTrips;
