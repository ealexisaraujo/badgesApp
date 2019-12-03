import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './assets/styles/global.scss';
import App from './Routes/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);
