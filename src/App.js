import React from 'react';
import './App.css';
import MarketShare from './components/MarketShare';
import ProjectedGrowth from './components/ProjectedGrowth';
import EVTypes from './components/EVTypes';
import MarketSize from './components/MarketSize';

function App() {
  return (
    <div className="App">
      <h1>EV Market Report in India (2022)</h1>
      <MarketShare />
      <ProjectedGrowth />
      <EVTypes />
      <MarketSize />
    </div>
  );
}

export default App;
