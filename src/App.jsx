import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnvironmentalAlerts from './EnvironmentalAlerts.jsx';
import EnvironmentalMap from './EnvironmentalMap.jsx';
import './styles.css'; // Import custom CSS

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/alerts" element={<EnvironmentalAlerts />} />
        <Route path="/map" element={<EnvironmentalMap />} />
      </Routes>
    </Router>
  );
};

export default App;
