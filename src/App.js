import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChavA from './components/KeyPages/ChavA';
import GeneralPoints from './components/points/GeneralPoints';
import Home from './components/Home';
import LoginPage from './components/login/LoginPage';
function App() {
  return (
    <div>

      <Router>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/pontuaçãogeral' element={<GeneralPoints />} />
          <Route path='/chaveamentoA' element={<ChavA />} />
          <Route path='/chaveamentoB' element={''} />
          <Route path='/organização' element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
