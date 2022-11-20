import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;