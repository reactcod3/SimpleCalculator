import React from 'react';
import './App.css';
import Calculator from '../src/containers/Calculator/Calculator';

function App() {
  return (
    <div className="container mainContainer" >
      <div className="row mainRow">
        <div className="col-3"></div>
        <div className="col-6 flexBox">
            <Calculator />
        </div>
        <div className="col-3"></div>
      </div>
      
    </div>
  );
}

export default App;
