import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Bio from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Resume from './pages/Resume';
import ProjectDisplay from './pages/ProjectDisplay';
import Certifications from './pages/Certifications';
import Education from './pages/Education';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/nimalportfolio' element={<Home />} />
          <Route path='/nimalportfolio/about' element={<Bio />} />
          <Route path='/nimalportfolio/education' element={<Education />} />
          <Route path='/nimalportfolio/resume' element={<Resume />} />
          <Route path='/nimalportfolio/projects' element={<Projects />} />
          <Route path='/nimalportfolio/project/:id' element={<ProjectDisplay />} />
          <Route path='/nimalportfolio/experience' element={<Experience />} />
          <Route path='/nimalportfolio/certs' element={<Certifications />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
