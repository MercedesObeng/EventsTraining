import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventCard({ title, description, date, time, location, image, type }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-[#e65831] text-white px-3 py-1 rounded-full text-sm font-semibold">
            {type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="space-y-2 mb-6">
          <div className="flex items-center text-gray-700 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-[#becf00]" />
            <span>{date}</span>
          </div>

          <div className="flex items-center text-gray-700 text-sm">
            <Clock className="w-4 h-4 mr-2 text-[#becf00]" />
            <span>{time}</span>
          </div>

          <div className="flex items-center text-gray-700 text-sm">
            <MapPin className="w-4 h-4 mr-2 text-[#becf00]" />
            <span>{location}</span>
          </div>
        </div>

        <button className="w-full bg-[#becf00] hover:bg-[#a8b800] text-gray-900 font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
          Book Now
        </button>
      </div>
    </div>
  );
}
