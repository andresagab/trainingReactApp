import React from "react";
import Card from "./Card";

function ExerciseList(props) {
    return(
        <div>
            {
                //Iteración y asignación de la DATA en un COMPONENTE Card.js
                props.exercises.map((exercise) => {
                    return (
                        //Llamado del Card y envio de sus respectivos props
                        <Card
                            title={exercise.title}
                            description={exercise.description}
                            img={exercise.img}
                            leftColor={exercise.leftColor}
                            rightColor={exercise.rightColor}
                        />
                    )
                })
            }
        </div>
    );
}

export default ExerciseList;
