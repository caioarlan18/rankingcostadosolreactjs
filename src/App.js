import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChavA from './components/KeyPages/ChavA';

import Home from './components/Home';
function App() {
  return (
    <div>

      <Router>
        <Home />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='chaveA' element={<ChavA />} />
          <Route path='chaveB' element={''} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
