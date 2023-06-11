import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChavNaoEditavelA from './components/KeyPages/ChavNaoEditavelA';
import GeneralPoints from './components/points/GeneralPoints';
import Home from './components/Home';
import LoginPage from './components/login/LoginPage';
import OrgPage from './components/organizacao/orgpage/OrgPage';
import OrgPage2 from './components/organizacao/orgpage2/OrgPage2';
import PreOrg from './components/organizacao/pré org/PreOrg';

function App() {
  return (
    <div>

      <Router>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/score' element={<GeneralPoints />} />
          <Route path='/chaveamentoA' element={<ChavNaoEditavelA />} />
          <Route path='/chaveamentoB' element={''} />
          <Route path='/painel' element={<LoginPage />} />
          <Route path='paineladmin' element={<OrgPage />} />
          <Route path='paineladmin2' element={<OrgPage2 />} />
          <Route path='preadmin' element={<PreOrg />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;
