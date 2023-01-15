import React, { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import Header from './common/Header';
import Footer from './common/Footer';
import Color from './design_principles/Color';
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
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/color" element={<Color />} />
                    <Route path="/design_principles/" element={<DesignPrinciples />} />
                    <Route path="/basic_controls/" element={<BasicControls />} />
                    <Route path="/structure/" element={<Structure />} />
                    <Route path="/data_visualization/" element={<DataVisualization />} />
                    <Route path="/patterns/" element={<Patterns />} />
                    <Route path="/developer_best_practices" element={<DeveloperBestPractices />} />
                    <Route path="/proof_of_concept" element={<ProofOfConcept />} />
                    <Route element={<PageNotFound />} />
                </Routes>
                <Footer />
            </div>
    );
}

export default App;