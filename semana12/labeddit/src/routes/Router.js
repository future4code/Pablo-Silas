import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Feed from '../pages/Feed/Feed';
import PostPage from '../pages/PostPage/PostPage';
import Error from '../pages/Error/Error';


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Login/>
                </Route>
                <Route exact path='/signup'>
                    <SignUp/>
                </Route>
                <Route exact path='/feed'>
                    <Feed/>
                </Route>
                <Route exact path='/post/:id'>
                    <PostPage/>
                </Route>
                <Route >
                  <Error/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;