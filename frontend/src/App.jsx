import './App.css'
import Dashboard from './pages/Dashboard.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CpuMetric from './components/cpuMetric';

function App() {
  return (
     <div className="dark">
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cpuMetric/:id" element={<CpuMetric />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;