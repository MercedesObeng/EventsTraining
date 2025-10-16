// src/components/EventList.jsx
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import EventCard from './EventCard';
import events from '../data/events'; // ✅ Import the events data directly

export default function EventList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const eventTypes = ['All', 'Networking', 'Training', 'Workshop', 'Conference'];

  // Filtering logic remains the same
  const filteredEvents = events.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-[#e6eaf1] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events by keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#becf00] focus:border-transparent transition-all"
                />
              </div>

              <div className="flex items-center gap-3">
                <Filter className="text-gray-600 w-5 h-5" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#becf00] focus:border-transparent bg-white cursor-pointer transition-all"
                >
                  {eventTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No events found matching your criteria.</p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-gray-700">
              <p className="text-lg">
                Showing{' '}
                <span className="font-semibold text-[#e65831]">
                  {filteredEvents.length}
                </span>{' '}
                event{filteredEvents.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map(event => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
