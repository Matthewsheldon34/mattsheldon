
import './App.css'
import Home from '../src/Components/Home.jsx';
import Contact from '../src/Components/Contact.jsx';
import Projects from '../src/Components/Projects.jsx';
import About from '../src/Components/About.jsx';
import { Routes, Route,Navigate } from 'react-router';
function App() {


  return (
    <>
    <nav>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </nav>
  
    </>
  )
}

export default App
