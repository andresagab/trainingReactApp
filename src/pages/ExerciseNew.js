import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class ExerciseNew extends React.Component{

    render() {
        return (
            <div>
                <button className='btn btn-success' onClick={this.handleClick}>Send</button>
            </div>
        );
    }

    handleClick = () => {
        console.log(this);
    }

}

export default ExerciseNew;
