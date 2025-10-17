import { Link, useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="sticky top-0 z-50 bg-[#becf00]/90 backdrop-blur-md shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-between items-center h-auto py-2 sm:py-4">
                    {/* Left: Logo / Brand */}
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
                                Exclusive opportunities for Memebrs and Non Memebrs
                            </p>
                        </div>
                    </Link>

                    {/* Right: Partner Logos */}
                    <div className="flex items-center space-x-2 sm:space-x-4 sm:mt-0">
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
                </div>
            </div>
        </motion.nav>
    );
}