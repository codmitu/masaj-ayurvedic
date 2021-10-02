import { useState } from 'react';
import './App.css';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { ServicesContact } from './components/ServicesContact';
import { Sidebar } from './components/Sidebar';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <ServicesContact />
      <Footer />
    </div>
  );
}

export default App;
