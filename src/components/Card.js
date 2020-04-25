import React from 'react';
import './styles/Card.css';
import circlesImg from './../images/circles.png';
import emptyImg from './../images/empty.png';

const Card = ({title, description, img, leftColor, rightColor}) => (
    <div className='card mx-auto Fitness-Card' style={{backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})` }}>
        <div className='card-body'>
            <div className='row center'>
                <div className='col-6'>
                    <img className='float-right' src={img || emptyImg} alt='exercise'/>
                </div>
                <div className='col-6 Fitness-Card-Info'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)

/*class Card extends React.Component {

    render() {

        const {title, description, img, leftColor, rightColor} = this.props;//Caracterizamos la variables con lo almacenado en las props

        return (
            <div className="card mx-auto Fitness-Card" style={{backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})` }}>
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img className='float-right' src={img || emptyImg} alt='exercises'/>
                        </div>
                        <div className='col-6 Fitness-Card-Info'>
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
        //return super.render();
    }
}*/

export default Card;
