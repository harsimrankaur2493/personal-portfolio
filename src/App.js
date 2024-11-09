import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/Navbar';
import Hero from './Components/Hero';
import { Skills } from './Components/Skills';
import {Projects} from "./Components/Projects"
import { Footer } from './Components/Footer';



function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
