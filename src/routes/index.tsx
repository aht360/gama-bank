import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/recoveryPass' component={RecoveryPassword} />
            <Route path='/dashboard' component={Dashboard} isPrivate />
        </Switch>
    );
};

export default Routes;