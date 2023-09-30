
import './App.css';
import Navbar from './components/Navbar'
import {Route, Routes} from "react-router-dom"
import Home from '../src/components/Home'
import Services from './components/Services';
import { Products } from './components/Products';
import { Signup } from './components/Signup';

function App() {
  return (
        <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<Signup />} />
        </Routes>
        </>
  );
}

export default App;
