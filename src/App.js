import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import Luffy from './components/Luffy';
import Zorro from './components/Zorro';
import Chopper from './components/Chopper'

function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact Component={Accueil} />
      <Route path='/luffy' exact Component={Luffy}/>
      <Route path='/zorro' exact Component={Zorro}/>
      <Route path='/chopper' exact Component={Chopper} />
    </Routes>
  </Router>
  );
}

export default App;
