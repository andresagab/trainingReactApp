import React from "react";
import Card from "./Card";

const ExerciseList = ({exercises}) => (
    <div>
        {
            //Iteración y asignación de la DATA en un COMPONENTE Card.js
            exercises.map((exercise) => {
                return (
                    //Llamado del Card y envio de sus respectivos props
                    <Card
                        key={exercise.id}
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

export default ExerciseList;
