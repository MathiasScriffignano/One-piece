import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sunny from './components/Sunny';
import Luffy from './components/Luffy';
import Zorro from './components/Zorro';
import Chopper from './components/Chopper'
import Newsite from './components/PageNews/Newsite';

function App() {
  return (
    <NextUIProvider>
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact Component={Sunny} />
      <Route path='/luffy' exact Component={Luffy}/>
      <Route path='/zorro' exact Component={Zorro}/>
      <Route path='/chopper' exact Component={Chopper} />
      <Route path='/Newsite' exact Component={Newsite} />  
    </Routes>
    <Footer />  
  </Router>
  </NextUIProvider>
  );
}

export default App;
