import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Exercises from "../pages/Exercises";
import ExerciseNew from "../pages/ExerciseNew";
import NotFound from "../pages/NotFound";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Exercises}/>
            <Route exact path="/Exercises/new" component={ExerciseNew}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default App;
