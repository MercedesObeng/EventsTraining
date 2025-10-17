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

            {/* Event Info + Highlights + Summary Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
                {/* LEFT COLUMN - Main content */}
                <div className="lg:col-span-2">
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
                </div>

                {/* RIGHT COLUMN - Summary Card */}
                <div className="lg:col-span-1">
                    <div className="bg-[#e6eaf1] border border-gray-200 rounded-2xl shadow-sm p-6 sticky top-24">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Event Summary</h3>

                        <div className="space-y-4 text-gray-700">
                            {/* Date */}
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-[#becf00]" />
                                <span>{event.date}</span>
                            </div>

                            {/* Time */}
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-[#becf00]" />
                                <span>{event.time}</span>
                            </div>

                            {/* Location / Format */}
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-[#becf00]" />
                                {event.format ? (
                                    <span>Virtual Event</span>
                                ) : (
                                    <span>{event.location}</span>
                                )}
                            </div>

                            <hr className="border-gray-300 my-4" />

                            {/* Prices */}
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">Pricing</h4>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold text-[#e65831]">Member:</span> £{event.memberPrice.toFixed(2)}
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-semibold text-[#e65831]">Non-Member:</span> £{event.nonMemberPrice.toFixed(2)}
                                </p>
                            </div>

                            {/* Tickets Info */}
                            <div className="mt-4 text-sm text-gray-600">
                                <p>Max {event.maxTickets} tickets per booking</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Purchase Tickets Section */}
            <div className="bg-[#e6eaf1] rounded-2xl shadow-sm p-6 sm:p-8 mt-12 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Purchase Tickets</h3>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-10 space-y-6 sm:space-y-0 mb-6">
                    {/* Member toggle */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <label className="font-medium text-gray-700 whitespace-nowrap">Select Type:</label>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsMember(true)}
                                className={`px-5 py-2 rounded-lg border transition-all duration-200 ${isMember
                                    ? 'bg-[#becf00] text-gray-900 font-semibold border-[#becf00]'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border-gray-300'
                                    }`}
                            >
                                Member
                            </button>
                            <button
                                onClick={() => setIsMember(false)}
                                className={`px-5 py-2 rounded-lg border transition-all duration-200 ${!isMember
                                    ? 'bg-[#e65831] text-white font-semibold border-[#e65831]'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border-gray-300'
                                    }`}
                            >
                                Non-Member
                            </button>
                        </div>
                    </div>

                    {/* Ticket quantity */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <label className="font-medium text-gray-700 whitespace-nowrap">Tickets:</label>
                        <div className="flex items-center gap-3">
                            <input
                                type="number"
                                min="1"
                                max={event.maxTickets}
                                value={quantity}
                                onChange={(e) =>
                                    setQuantity(Math.min(event.maxTickets, Math.max(1, parseInt(e.target.value) || 1)))
                                }
                                className="w-24 border border-gray-300 rounded-lg px-3 py-2 text-center shadow-sm focus:ring-2 focus:ring-[#becf00] focus:outline-none"
                            />
                            <span className="text-sm text-gray-500">max {event.maxTickets}</span>
                        </div>
                    </div>
                </div>

                {/* Total and button */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-gray-300 pt-6">
                    <p className="text-xl font-semibold text-gray-800 mb-4 sm:mb-0">
                        Total: £{totalPrice.toFixed(2)}
                    </p>
                    <button
                        onClick={() => addToBasket({ ...event, isMember, quantity })}
                        className="bg-[#becf00] hover:bg-[#a8b800] text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-sm"
                    >
                        Add to Basket
                    </button>
                </div>
            </div>

        </div>
    );
}
