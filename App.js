import React from 'react';
import './App.css';
import Card from './componentes/Card';
import professoresData from './data/professores.json';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Instituto Federal do Piauí</h1>
        <h3>Corpo Docente</h3>
      </div>

      <div className="card-container">
        {professoresData.map((professor, index) => (
          <Card key={index} professor={professor} />
        ))}
      </div>
    </div>
  );
}

export default App;
