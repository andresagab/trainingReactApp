import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/AddButton.css'
import {Link} from "react-router-dom";

const AddButton = () => (
    <Link to='/ExercisesContainer/new'>
        <img src='https://raw.githubusercontent.com/RpL02/FitnessApp/master/src/images/add.png' className='Fitness-Add'/>
    </Link>
);

export default AddButton;
