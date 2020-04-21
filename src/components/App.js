import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ExercisesContainer from "../pages/ExercisesContainer";
import ExerciseNewContainer from "../pages/ExerciseNewContainer";
import NotFound from "../pages/400";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ExercisesContainer}/>
            <Route exact path="/ExercisesContainer/new" component={ExerciseNewContainer}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default App;
