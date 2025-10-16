import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold" style={{ color: '#becf00' }}>
                Essex Chambers
              </h1>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-gray-700 hover:text-[#becf00] transition-colors px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-[#becf00] transition-colors px-3 py-2 text-sm font-medium">
                Events
              </a>
              <a href="#" className="text-gray-700 hover:text-[#becf00] transition-colors px-3 py-2 text-sm font-medium">
                Training
              </a>
              <a href="#" className="text-gray-700 hover:text-[#becf00] transition-colors px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-[#becf00] transition-colors px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#becf00] hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-700 hover:text-[#becf00] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-[#becf00] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Events
            </a>
            <a href="#" className="text-gray-700 hover:text-[#becf00] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Training
            </a>
            <a href="#" className="text-gray-700 hover:text-[#becf00] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-[#becf00] hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
