import React from "react";
import './../styles/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Componente funcional: Cuando no se va a trabajar con los estados
function Welcome(props) {

    return(
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}</h1>
                <p>Let´s workout to get someone gains!</p>
            </div>
        </div>
    );

}

export default Welcome;
