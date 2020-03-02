/*
const element = document.createElement('h1');

element.innerText = 'Hello world';

const container = document.getElementById('root');
container.appendChild(element);

*/
import React from 'react'
import ReactDOM from 'react-dom'

const word = 'World';
const element = <h1>Hello {word}</h1>;
const contaniner = document.getElementById('root');

function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
    if (user) return <h1>Hello, {formatName(user)}</h1>;
    return <h1>Hello Stranger.</h1>
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez',
    avatar: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png'
};

const namePerson = (
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar}/>
    </div>
);

ReactDOM.render(element, contaniner);
ReactDOM.render(namePerson, contaniner);
