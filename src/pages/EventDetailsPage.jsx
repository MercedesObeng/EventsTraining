// src/pages/EventDetailsPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Calendar, Clock, MapPin, CheckCircle } from "lucide-react";
import { useState } from 'react';
import events from '../data/events';

export default function EventDetailsPage({ addToBasket }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === parseInt(id));

  const [isMember, setIsMember] = useState(true);
  const [quantity, setQuantity] = useState(1);

  if (!event) {
    return <div className="p-8 text-center text-gray-600">Event not found.</div>;
  }

  const pricePerTicket = isMember ? event.memberPrice : event.nonMemberPrice;
  const totalPrice = pricePerTicket * quantity;

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

      {/* Full-width Divider */}
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-20">
                <hr className="border-t border-gray-300 w-full" />
            </div>

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

      {/* Highlights */}
      <div className="rounded-xl p-6 mb-8">
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

      {/* Includes */}
      <div className="rounded-xl p-6 mb-8">
        <h3 className="text-2xl font-semibold text-[#e65831] mb-4">What’s Included</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {event.includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Ticket Purchase Section */}
      <div className="border-t border-gray-300 pt-6 mt-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Purchase Tickets</h3>

        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 space-y-4 sm:space-y-0 mb-4">
          {/* Member toggle */}
          <div className="flex items-center gap-4">
            <label className="font-medium text-gray-700">Select Type:</label>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMember(true)}
                className={`px-4 py-2 rounded-lg border ${
                  isMember ? 'bg-[#becf00] text-gray-900 font-semibold' : 'bg-white text-gray-600'
                }`}
              >
                Member
              </button>
              <button
                onClick={() => setIsMember(false)}
                className={`px-4 py-2 rounded-lg border ${
                  !isMember ? 'bg-[#e65831] text-white font-semibold' : 'bg-white text-gray-600'
                }`}
              >
                Non-Member
              </button>
            </div>
          </div>

          {/* Ticket quantity */}
          <div className="flex items-center gap-3">
            <label className="font-medium text-gray-700">Tickets:</label>
            <input
              type="number"
              min="1"
              max={event.maxTickets}
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.min(event.maxTickets, Math.max(1, parseInt(e.target.value) || 1)))
              }
              className="w-20 border rounded-lg px-2 py-1 text-center"
            />
            <span className="text-sm text-gray-500">max {event.maxTickets}</span>
          </div>
        </div>

        {/* Total and button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
          <p className="text-xl font-semibold text-gray-800 mb-4 sm:mb-0">
            Total: £{totalPrice.toFixed(2)}
          </p>
          <button
            onClick={() => addToBasket({ ...event, isMember, quantity })}
            className="bg-[#becf00] hover:bg-[#a8b800] text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}
