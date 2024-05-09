import './App.css';
import { Home } from './components/Header';
import { Links } from '../src/components/Links'
import { DesignProcess } from './components/DesignProcess';
import { Projects } from './components/Projects';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/design-process":
      Component = DesignProcess
      break
    case "/projects":
      Component = Projects
      break
  }
  return (

    <div className="App">
      <Links/>
      <Component />
    </div>
  );
}

export default App;
