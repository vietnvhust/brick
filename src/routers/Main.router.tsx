import DashBoard from 'containers/dashboard/DashBoard';
import HomePage from 'containers/hompage/HomePage';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/',
        component: DashBoard
    }
];
export default function MainRouter() {
    return (
        <Switch>
            <Route path="/" component={ HomePage } exact />
            <Route path="/dashboard" component={ DashBoard } exact />
        </Switch>
    )
}