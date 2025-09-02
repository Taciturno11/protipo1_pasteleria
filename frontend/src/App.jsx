import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Tarifas from './pages/Tarifas';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarifas" element={<Tarifas />} />
            {/* Aquí irán más rutas en el futuro */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;