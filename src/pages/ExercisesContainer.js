import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import FatalError from "./500";
import Exercises from "./Exercises";

const ExercisesContainer = () => {

    const [data, setData] = useState([]);//El parametro de useState es aquel que se le quiere asignar a la variable cuando arranque el componente
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchExercises();
    }, []);

    const fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises');
            let data = await res.json();
            setData(data);
            setLoading(false);
            setError(null);
        } catch (error) {
            setLoading(false);
            setError(null);
        }
    }

    if (loading) return <Loading/>
    if (error) return <FatalError/>
    return <Exercises
        data={data}
    />
}

/*class ExercisesContainer extends React.Component{

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

}*/

export default ExercisesContainer;
