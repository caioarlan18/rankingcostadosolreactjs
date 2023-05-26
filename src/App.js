import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChavA from './components/KeyPages/ChavA';
import GeneralPoints from './components/points/GeneralPoints';
import Home from './components/Home';
function App() {
  return (
    <div>

      <Router>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='GeneralPoints' element={<GeneralPoints />} />
          <Route path='chaveA' element={<ChavA />} />
          <Route path='chaveB' element={''} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
