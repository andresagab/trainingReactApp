import React from "react"
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButton from "../components/AddButton"

const Exercises = ({data}) => (
    <React.Fragment>
        <Welcome username="Andres"/>
        <ExerciseList exercises={data}/>
        <AddButton/>
    </React.Fragment>
)
export default Exercises;
