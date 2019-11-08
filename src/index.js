// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello Platzi</h1>;
const container = document.getElementById('app');

// ReactDOM.render(__que__,__donde___)
ReactDOM.render(element, container);
