import React from "react"
import Loading from "../components/Loading";
import FatalError from "./500";
import Exercises from "./Exercises";

class ExercisesContainer extends React.Component{

    //Babel remplaza la inicialización de propiedades, por lo tanto no es necesario hacer dicho trabajo en el constructor
    state = {
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount() {
        await this.fetchExercises();
    }

    async fetchExercises() {
        try {
            let res = await fetch('http://localhost:8000/api/exercises');
            let data = await res.json();
            this.setState({
                data,
                loading: false,
                error: null
            });
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render(){
        if (this.state.error) return <FatalError/>
        if (this.state.loading) return <Loading/>;
        return <Exercises
            data={this.state.data}
        />
    }

}

export default ExercisesContainer;
