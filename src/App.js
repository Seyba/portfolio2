import './App.css';
import { Navbar2 } from './component/Navbar2';
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact';
import { Footer } from './pages/Footer';
import { NotFoundPage } from './pages/NotFoundPage';
import {Projects} from './pages/Projects';
import { Project } from './pages/Project';
import { PortfolioContext } from './context/portfolioContext'
import { projectData } from './utils/data';

function App() {
  return (
    <>
      <PortfolioContext.Provider value={{projectData}}>
        <BrowserRouter>
          <Navbar2/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/project/:id" element={<Project/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>  
      </PortfolioContext.Provider>
    </>
  );
}

export default App;
