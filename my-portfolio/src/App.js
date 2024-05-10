import './App.css';
import { Home } from './components/Header';
import { Links } from '../src/components/Links';
import { DesignProcess } from './components/DesignProcess';
import { Projects } from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Iterative } from './components/Iterative';
import { Personas } from './components/Personas';
import { Development } from './components/Development';

function App() {
  return (
    <div className="App">
      <Router>
        <Links />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/iterative' element={<Iterative />} />
          <Route path='/personas' element={<Personas />} />
          <Route path='/development' element={<Development />} />
          <Route path='/design-process' element={<DesignProcess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
