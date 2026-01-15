import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import Enterprise from './components/Enterprise';
import Programs from './components/Programs';
import Contact from './components/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <HomeContent />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/entreprises" element={<Enterprise />} />
          <Route path="/programmes" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;