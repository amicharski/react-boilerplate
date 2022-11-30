import React, { createContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import Footer from './common/Footer';
import Color from './Color';
import DesignPrinciples from './design_principles/DesignPrinciples';
import BasicControls from './basic_controls/BasicControls';
import Structure from './structure/Structure';
import DataVisualization from './data_visualization/DataVisualization';
import Patterns from './patterns/Patterns';
import DeveloperBestPractices from './developer_best_practices/DeveloperBestPractices';
import ProofOfConcept from './proof_of_concept/ProofOfConcept';

export const PageContext = createContext();

function App() {

    return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/color" component={Color} />
                    <Route path="/design_principles/" component={DesignPrinciples} />
                    <Route path="/basic_controls/" component={BasicControls} />
                    <Route path="/structure/" component={Structure} />
                    <Route path="/data_visualization/" component={DataVisualization} />
                    <Route path="/patterns/" component={Patterns} />
                    <Route path="/developer_best_practices" component={DeveloperBestPractices} />
                    <Route path="/proof_of_concept" component={ProofOfConcept} />
                    <Route component={PageNotFound} />
                </Switch>
                <Footer />
            </div>
    );
}

export default App;