import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Feed from '../pages/Feed/Feed';
import PostPage from '../pages/PostPage/PostPage';

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Login/>
                </Route>
            </Switch>
            <Switch>
                <Route exact path='/signup'>
                    <SignUp/>
                </Route>
            </Switch>
            <Switch>
                <Route exact path='/feed'>
                    <Feed/>
                </Route>
            </Switch>
            <Switch>
                <Route exact path='/post'>
                    <PostPage/>
                </Route>
            </Switch>
            <Switch>
                <Route>
                    
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;