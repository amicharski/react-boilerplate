import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import './styles/normalize.scss';
import './styles/small.scss';
import './styles/medium.scss';
import './styles/large.scss';

render( <Router>
            <App />
        </Router>, document.getElementById("app"));