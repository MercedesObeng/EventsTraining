// src/components/EventList.jsx
import { useState } from "react";
import EventCard from "./EventCard";
import EventFilter from "./EventFilter";
import events from "../data/events";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


export default function EventList() {
  const [filteredEvents, setFilteredEvents] = useState(events);

  const eventTypes = ["All", "Networking", "Training", "Workshop", "Conference"];

  // Handle updates from EventFilter
  const handleFilterChange = (searchTerm, selectedType) => {
    const lowerSearch = searchTerm.toLowerCase();

    const results = events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(lowerSearch) ||
        event.description.toLowerCase().includes(lowerSearch);
      const matchesType = selectedType === "All" || event.type === selectedType;
      return matchesSearch && matchesType;
    });

    setFilteredEvents(results);
  };

  return (
    <div className="bg-white py-16 min-h-screen">
      {/* Filter Component */}
      <EventFilter eventTypes={eventTypes} onFilterChange={handleFilterChange} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No events found matching your criteria.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6 text-gray-700">
              <p className="text-lg">
                Showing{" "}
                <span className="font-semibold text-[#e65831]">
                  {filteredEvents.length}
                </span>{" "}
                event{filteredEvents.length !== 1 ? "s" : ""}
              </p>
            </div>

            <AnimatePresence>
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {filteredEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link to={`/events/${event.id}`}>
                      <EventCard {...event} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

          </>
        )}
      </div>
    </div>
  );
}
