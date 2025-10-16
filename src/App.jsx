// src/App.jsx
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import EventList from './components/EventList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <EventList /> {/* No props needed now */}
      <Footer />
    </div>
  );
}

export default App;
