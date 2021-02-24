import React from 'react';
import HomePage from '../pages/Home/HomePage';
import CreateTrip from '../pages/CreateTrip/CreateTrip';
import ListTrips from '../pages/ListTrip/ListTrips';
import Login from '../pages/Login/LoginPage';
import TripDetails from '../pages/TripDetails/TripDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Control from '../pages/Control/Control';
import Form from '../pages/Form/Form';
import CreateUser from '../pages/CreateUser/CreateUser';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route exact path='/form/:id'>
                    <Form/>
                </Route>

                <Route exact path='/login'>
                    <Login />
                </Route>

                <Route exact path='/signup'>
                    <CreateUser/>
                </Route>

                <Route exact path='/control/trips/create'>
                    <CreateTrip />
                </Route>

                <Route exact path='/control'>
                    <Control />
                </Route>

                <Route exact path='/control/trips'>
                    <ListTrips />
                </Route>

                <Route exact path='/control/trips/detail/:id'>
                    <TripDetails />
                </Route>

            </Switch>
        </BrowserRouter>

    )
}

export default Router;
