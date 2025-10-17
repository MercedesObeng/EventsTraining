// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import EventsPage from './pages/EventsPage';
import EventDetailsPage from './pages/EventDetailsPage';
import Navbar from './components/Navbar';
import { Navbar2 } from './components/Navbar2';
import { Footer } from './components/Footer';

export default function App() {
  const [basket, setBasket] = useState([]);

  const addToBasket = (event) => {
    setBasket((prev) => [...prev, event]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar2 />
      <Navbar basket={basket} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<EventsPage />} />
          <Route
            path="/events/:id"
            element={<EventDetailsPage addToBasket={addToBasket} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
