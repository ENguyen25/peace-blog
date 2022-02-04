import './App.css';
import { BrowserRouter as NavRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import LandingPage from './components/LandingPage'; 
import UpcyclingPage from './components/UpcyclingPage'; 
import MindfulnessPage from './components/MindfulnessPage'; 

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <NavRouter>
            <NavBar />
            <section className="main-content">
              <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/Upcycling" element={<UpcyclingPage />} />
                <Route exact path="/Mindfulness" element={<MindfulnessPage />} />
              </Routes>
            </section>
          </NavRouter>
        </header>
    </div>
  );
}

export default App;
