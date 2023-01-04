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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/nimalportfolio' element={<Home />} />
          <Route path='/nimalportfolio/bio' element={<Bio />} />
          <Route path='/nimalportfolio/resume' element={<Resume />} />
          <Route path='/nimalportfolio/projects' element={<Projects />} />
          <Route path='/nimalportfolio/project/:id' element={<ProjectDisplay />} />
          {/* <Route path='/experience' element={<Experience />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
