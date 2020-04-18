import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../components/styles/Errors.css';
import Image404 from './../images/404.png';

const NotFound = () => {
    return(
        <div className='mx-auto text-center'>
            <h1 className='Error_Text'>Error: 404 page not found</h1>
            <img src={Image404} alt='404 not found' className='Error_Image'/>
        </div>
    );
}

export default NotFound;
