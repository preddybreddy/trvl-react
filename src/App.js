
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../src/components/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
        </Routes>
        <Home />
      </Router>
    </>
  );
}

export default App;
