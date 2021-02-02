import React from "react";
import { Switch, Route } from "react-router-dom";
import ClickCounter from './components/ClickCounter/clickCounter'
import Clock from './components/Clock/clock'
import Todo from './components/Todo/todo'
export default (
    <Switch>
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/" component={ClickCounter} />

    </Switch>
);
