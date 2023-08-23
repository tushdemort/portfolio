import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Socials from './Components/Socials';


function App() {
  return (
    <>
    <Navbar />
    <Home/>
    <About/>
    <Projects/>
    <Skills/>
    <br/>
    <br/>
    <Socials/>
    </>
  );
}

export default App;
