import React from "react";
import Loading from "../components/Loading";
import FatalError from "./500";
import ExerciseNew from "./ExerciseNew";

class ExerciseNewContainer extends React.Component{

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        loading: false,
        error: null
    };

    handleChange = e => {
        // console.log(`${e.target.name}: ${e.target.value}`);
        this.setState({
            form : {
                ...this.state.form,//Mantener los datos almacenados previamente
                [e.target.name]: e.target.value//Si hay diferencias en los valores, actualizamos la variables
            }
        });
    }

    handleSubmit = async e => {
        //Cancelamos el reload de la página
        e.preventDefault();
        //Mostramos la barra de carga
        this.setState({
            loading: true
        });
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch('http://localhost:8000/api/exercises', config);//aqui se hace el envio de la petición POST con su respectiva DATA
            let json = await res.json();
            this.setState({
                loading: false
            });
            this.props.history.push('/');
        } catch (error) {
            this.setState({
                loading: false,
                error
            });
        }
    }

    render() {
        if (this.state.error) return <FatalError/>
        if (this.state.loading) return <Loading/>
        return <ExerciseNew
            form={this.state.form}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
        />
    }

}

export default ExerciseNewContainer;
