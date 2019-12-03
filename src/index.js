import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './assets/styles/App.scss';
import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges.jsx';

const container = document.getElementById('app');

ReactDOM.render(<Badges />, container);
