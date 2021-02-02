import React from 'react';
import HomePage from '../pages/Home/HomePage';
import ApplicationForm from '../pages/ApplicationFormPage';
import CreateTrip from '../pages/CreateTripPage';
import ListTrips from '../pages/ListTripsPage';
import Login from '../pages/LoginPage';
import TripDetails from '../pages/TripDetailsPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/application-form'>
                   <ApplicationForm/> 
                </Route>
                <Route exact path='/login'>
                    <Login/>
                </Route>
                <Route exact path='/trips/:create'>
                    <CreateTrip/>
                </Route>
                <Route exact path='/trips/:list'>
                    <ListTrips/>
                </Route>
                <Route exact path='/trips/:details'>
                    <TripDetails/>
                </Route>
            </Switch>
        </BrowserRouter>
        
    )
}

export default Router;
