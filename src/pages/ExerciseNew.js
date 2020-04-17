import React from "react";
import Card from "../components/Card";
import ExerciseForm from "../components/ExerciseForm";

class ExerciseNew extends React.Component{

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    };

    render() {
        return (
            <div className='row'>
                <div className='col-sm'>
                    <Card
                        {...this.state.form}
                    />
                </div>
                <div className='col-sm'>
                    <ExerciseForm
                        onChange={this.handleChange}
                        form={this.state.form}
                    />
                </div>
            </div>
        )
    }

    handleChange = e => {
        // console.log(`${e.target.name}: ${e.target.value}`);
        this.setState({
            form : {
                ...this.state.form,//Mantener los datos almacenados previamente
                [e.target.name]: e.target.value//Si hay diferencias en los valores, actualizamos la variables
            }
        });
    }

}

export default ExerciseNew;
