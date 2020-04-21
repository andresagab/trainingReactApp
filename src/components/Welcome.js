import React from "react";
import './styles/Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Componente funcional: Cuando no se va a trabajar con los estados de tipo arrow (array) functions
const Welcome = ({username}) => (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {username}</h1>
                <p>Let´s workout to get someone gains!</p>
            </div>
        </div>
);
export default Welcome;
