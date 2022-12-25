import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Mockup from './components/Mockup';
import Join from './components/Join';

function App() {
  return (
    <div className="App">
      <Navbar id="navbar"/>
      <Hero id="hero"/>
      <Steps id="steps"/>
      <Mockup id="mockup"/>
      <Join id="join"/>
    </div>
  );
}

export default App;
