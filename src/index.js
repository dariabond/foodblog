import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import {BrowserRouter} from 'react-router-dom'
import AppRoot from './components/approot.js';

//TODO read about let
ReactDOM.render(
    <BrowserRouter>
        <AppRoot/>
    </BrowserRouter>, document.getElementById('root'));