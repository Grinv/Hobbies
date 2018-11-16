import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from './Wrapper';
import './root.css';

window.onload = () => ReactDOM.render(React.createElement(Wrapper), document.getElementById('root'));