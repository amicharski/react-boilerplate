import React, { createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import Footer from './common/Footer';
import Color from './Color';

export const PageContext = createContext();

function App() {

    return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/color" component={Color} />
                    <Route component={PageNotFound} />
                </Switch>
                <Footer />
            </div>
    );
}

export default App;