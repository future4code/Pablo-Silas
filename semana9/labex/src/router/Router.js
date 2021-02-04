import React from 'react';
import HomePage from '../pages/Home/HomePage';
import ApplicationForm from '../pages/ApplicationForm/ApplicationForm';
import CreateTrip from '../pages/CreateTrip/CreateTrip';
import ListTrips from '../pages/ListTrip/ListTrips';
import Login from '../pages/Login/LoginPage';
import TripDetails from '../pages/TripDetails/TripDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route exact path='/application-form'>
                    <ApplicationForm />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/create'>
                    <CreateTrip />
                </Route>
                <Route exact path='/list'>
                    <ListTrips />
                </Route>
                <Route exact path='/detail'>
                    <TripDetails />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}

export default Router;
