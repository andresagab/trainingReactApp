import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

class ExerciseForm extends React.Component{

    render() {
        const { onChange, form } = this.props;
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='title' placeholder='Tittle' value={form.title} onChange={onChange}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='description' placeholder='Description' value={form.description} onChange={onChange}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='text' name='img' placeholder='img' value={form.img} onChange={onChange}/>
                    </div>
                    <div className='form-row'>
                        <div className='col'>
                            <input className='form-control' type='text' name='leftColor' placeholder='Left Color' value={form.leftColor} onChange={onChange}/>
                        </div>
                        <div className='col'>
                            <input className='form-control' type='text' name='rightColor' placeholder='Right Color' value={form.rightColor} onChange={onChange}/>
                        </div>
                    </div>
                    <button className='btn btn-primary float-right' type='submit'>Submit</button>
                </form>
            </div>
        );
    }

    handleSubmit = e => {
        //Cancelamos el reload de la página
        e.preventDefault();
        //console.log(form);
    }

}

export default ExerciseForm;
