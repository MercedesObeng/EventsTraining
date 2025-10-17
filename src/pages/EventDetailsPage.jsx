// src/pages/EventDetailsPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, MapPin, CheckCircle } from "lucide-react";
import events from '../data/events';

export default function EventDetailsPage({ addToBasket }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <div className="p-8 text-center text-gray-600">Event not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <ol className="flex items-center space-x-1 text-slate-600 mb-10">
        <li>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-[#e65831] text-sm font-bold hover:underline hover:text-[#e65831]/90"
          >
            Training and Events
          </button>
        </li>
        <ChevronRight className="w-4 h-4 text-slate-400" />
        <li className="text-slate-500 text-sm truncate max-w-[200px]">{event.title}</li>
      </ol>

      {/* Header */}
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-72 object-cover rounded-xl shadow-md mb-8"
      />

      <h1 className="text-4xl font-bold text-gray-900 mb-2">{event.title}</h1>
      <h2 className="text-lg text-gray-600 mb-6">{event.subheading}</h2>

      {/* Event Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-gray-700">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#becf00]" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#becf00]" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#becf00]" />
          <span>{event.location}</span>
        </div>
      </div>

      {/* Detailed Description */}
      <p className="text-gray-700 leading-relaxed mb-8">{event.detailedDescription}</p>

      {/* Highlights Section */}
      <div className="bg-transpaent rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-semibold text-[#e65831] mb-4">Event Highlights</h3>
        <ul className="space-y-2">
          {event.highlights.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <CheckCircle className="w-5 h-5 text-[#becf00] mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Includes Section */}
      <div className="bg-transparent rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-semibold text-[#e65831] mb-4">What’s Included</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {event.includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Action */}
      <button
        onClick={() => addToBasket(event)}
        className="bg-[#becf00] hover:bg-[#a8b800] text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
      >
        Add to Basket
      </button>
    </div>
  );
}
