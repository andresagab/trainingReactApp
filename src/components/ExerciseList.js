import React from "react";
import Card from "./Card";

const ExerciseList = ({exercises}) => (
    <>
        {
            //Iteración y asignación de la DATA en un COMPONENTE Card.js
            exercises.map((exercise) => {
                return (
                    //Llamado del Card y envio de sus respectivos props
                    <Card
                        key={exercise.id}
                        {...exercise}
                    />
                )
            })
        }
    </>
);

export default ExerciseList;
