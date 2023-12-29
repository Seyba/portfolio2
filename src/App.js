import './App.css';
import { Navbar2 } from './component/Navbar2';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import {Projects} from './pages/Projects';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar2/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>      
    </>
  );
}

export default App;
