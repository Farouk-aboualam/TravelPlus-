import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import About from './components/About';
import Enterprise from './components/Enterprise';
import Programs from './components/Programs';
import Contact from './components/Contact';
import CustomTrip from './components/CustomTrip';

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
          <Route path="/a-propos" element={<About />} />
          <Route path="/entreprises" element={<Enterprise />} />
          <Route path="/programmes" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personnaliser" element={<CustomTrip />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;