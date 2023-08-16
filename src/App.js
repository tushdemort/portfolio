import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Social from './Components/Social';

function App() {
  return (
    <>
    <Navbar />
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <br/>
    <Social/>
    </>
  );
}

export default App;
