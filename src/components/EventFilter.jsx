// src/components/EventFilter.jsx
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function EventFilter({ eventTypes = [], onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  // Whenever user changes filters, update parent
  useEffect(() => {
    onFilterChange(searchTerm, selectedType);
  }, [searchTerm, selectedType]);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 max-w-7xl mx-auto px-8 py-4 mt-6">
      {/* Search Input with Icon */}
      <div className="relative w-full sm:w-64">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="w-4 h-4 text-gray-700" />
        </span>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-10 py-2 border rounded-3xl bg-[#e6eaf1] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#e65831] transition-all"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2">
        {eventTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
              selectedType === type
                ? "bg-[#e65831] text-white shadow"
                : "bg-[#e6eaf1] text-gray-700 hover:bg-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
