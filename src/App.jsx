import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EnvironmentalAlerts from './Components/EnvironmentalAlerts';
import EnvironmentalMap from './Components/EnvironmentalMap';
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
