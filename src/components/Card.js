import React from 'react';
import exerciseImg from './../images/exercise.png';
import circlesImg from './../images/circles.png';
import './../styles/Welcome.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                image: exerciseImg
            })
        }, 5000);
    }

    render() {

        const {title, description, img, leftColor, rightColor} = this.props;

        return (
            <div className="card mx-auto Fitness-Card" style={{backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`}}>
                <div className='card-body'>
                    <div className='row center'>
                        <div className='col-6'>
                            <img className='float-right' src={this.state.image}/>
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
}

export default Card;
