import React from "react";
import Card from '../components/Card'
import Welcome from '../components/Welcome'

class Exercises extends React.Component{

    render(){
        return (
            <div>
                <Welcome username="Andres"/>
                <Card
                    title="Mi titulo"
                    description="mi descripción"
                    img=""
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />
            </div>
        );
    }

}

export default Exercises;
