import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class ExerciseNew extends React.Component{

    state = {};

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='tittle' placeholder='Tittle' value={this.state.tittle} onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='description' placeholder='Description' value={this.state.description} onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='img' placeholder='img' value={this.state.img} onChange={this.handleChange}/>
                    </div>
                    <div className='form-row'>
                        <div className='col'>
                            <input className='form-control' type='text' name='leftColor' placeholder='Left Color' value={this.state.leftColor} onChange={this.handleChange}/>
                        </div>
                        <div className='col'>
                            <input className='form-control' type='text' name='rightColor' placeholder='Right Color' value={this.state.rightColor} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button className='btn btn-primary float-right' type='submit'>Submit</button>
                </form>
            </div>
        );
    }

    handleChange = e => {
        // console.log(`${e.target.name}: ${e.target.value}`);
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = e => {
        //Cancelamos el reload de la página
        e.preventDefault();
        console.log(this.state);
    }

}

export default ExerciseNew;
