// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { Users, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar({ basket }) {
  const totalItems = basket.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-[#becf00]/90 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-auto py-2 sm:py-4">
          
          {/* LEFT — Logo / Brand */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity"
          >
            <Users className="w-7 h-7 sm:w-8 sm:h-8 text-slate-700" />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-800">
                Training and Events
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-600">
                Exclusive opportunities for Members and Non-Members
              </p>
            </div>
          </Link>

          {/* RIGHT — Partner Logos + Basket */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            
            {/* Partner Logos */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <img
                src="/InnovationCenter.png"
                alt="Innovation Center logo"
                className="h-6 sm:h-8 md:h-10 w-auto object-contain"
              />
              <img
                src="/SpaceSync.png"
                alt="SpaceSync logo"
                className="h-6 sm:h-8 md:h-10 w-auto object-contain"
              />
            </div>

            {/* Basket */}
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8 text-slate-800 hover:text-[#e65831] transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#e65831] text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {totalItems}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
