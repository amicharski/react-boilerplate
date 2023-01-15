import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/normalize.scss';
import './styles/small.scss';
import './styles/medium.scss';
import './styles/large.scss';

render( <BrowserRouter>
            <App />
        </BrowserRouter>, document.getElementById("app"));