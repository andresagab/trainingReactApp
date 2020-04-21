import React from "react"
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButton from "../components/AddButton"
import Loading from "../components/Loading";
import FatalError from "./500";

class Exercises extends React.Component{

    //Babel remplaza la inicialización de propiedades, por lo tanto no es necesario hacer dicho trabajo en el constructor
    /*constructor(props) {
        super(props);
    }*/
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
        return (
            <React.Fragment>
                <Welcome username="Andres"/>
                <ExerciseList exercises={this.state.data}/>
                <AddButton/>
            </React.Fragment>
        );
    }

}

export default Exercises;
