/*
const element = document.createElement('h1');

element.innerText = 'Hello world';

const container = document.getElementById('root');
container.appendChild(element);

*/
import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card';

const contaniner = document.getElementById('root');

ReactDOM.render(<Card title="Mi titulo" description="mi descripción" img="" leftColor="#A74CF2" rightColor="#617BFB"/>, contaniner);
