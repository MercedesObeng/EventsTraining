// src/App.jsx
import Navbar from './components/Navbar';
import { Navbar2 } from './components/Navbar2';
import HeroSection from './components/HeroSection';
import EventList from './components/EventList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar2/>
      <Navbar />
      {/*<HeroSection />*/}
      <EventList /> {/* No props needed now */}
      <Footer />
    </div>
  );
}

export default App;
