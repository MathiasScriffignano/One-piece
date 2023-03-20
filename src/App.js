import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';

function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact Component={Accueil} />
    </Routes>
  </Router>
  );
}

export default App;
