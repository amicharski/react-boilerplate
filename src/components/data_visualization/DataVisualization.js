import React from 'react';

function DataVisualization() {
    return (
        <div className="sparsely-limited">
            <div className="top-tile">
                <h1>Data Visualization</h1>
                <p>Charts, tables</p>
            </div>
            <div className="landing-tiles">
                <div className="tile">
                    <h2>Tables</h2>
                    <p>How to implement the various table features</p>
                </div>
                <div className="tile">
                    <h2>Repeating Dynamic Layout</h2>
                    <p>How to bound dynamic layouts to lists of data</p>
                </div>
                <div className="tile">
                    <h2>Table Pagination and Record Count</h2>
                    <p>How to implement pagination controls</p>
                </div>
                <div className="tile">
                    <h2>Hierarchical Tables</h2>
                    <p>How to use and style hierarchical tables</p>
                </div>
            </div>
        </div>
    );
}

export default DataVisualization;