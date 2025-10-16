import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#e6eaf1] border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#becf00' }}>
              Essex Chambers
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Supporting businesses across Essex with networking, training, and professional development opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-[#e65831] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#e65831] transition-colors">
                  Membership
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#e65831] transition-colors">
                  Events Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#e65831] transition-colors">
                  Training Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-[#e65831] transition-colors">
                  News & Insights
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-[#becf00]" />
                <span className="text-gray-700">01245 123 456</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-[#becf00]" />
                <span className="text-gray-700">info@essexchambers.co.uk</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[#becf00]" />
                <span className="text-gray-700">
                  Essex Chambers House<br />
                  Chelmsford, Essex<br />
                  CM1 2AB
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-[#becf00] hover:text-white transition-all duration-300 shadow-md"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-[#becf00] hover:text-white transition-all duration-300 shadow-md"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-[#becf00] hover:text-white transition-all duration-300 shadow-md"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-[#becf00] hover:text-white transition-all duration-300 shadow-md"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <button className="bg-[#e65831] hover:bg-[#d04825] text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
                Join Now
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Essex Chambers of Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
