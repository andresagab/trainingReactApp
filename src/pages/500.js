import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../components/styles/Errors.css';
import ImageError from './../images/500.png';

const FatalError = () => {
    return(
        <div className='mx-auto text-center'>
            <h1 className='Error_Text'>Error: 500 unexpected error</h1>
            <img src={ImageError} alt='500 unexpected error' className='Error_Image'/>
        </div>
    );
}

export default FatalError;
