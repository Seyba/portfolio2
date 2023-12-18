import './App.css';
import { Navbar2 } from './component/Navbar2';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Navbar2/>
      
    </>
  );
}

export default App;
