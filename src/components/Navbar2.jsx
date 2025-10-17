import { Link, useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar2() {
    return (
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-50 bg-[#3A3A3A]/90 backdrop-blur-md shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/">
            {" "}
            {/*change to be the hub that it links back to */}
            <div className="flex justify-center items-center h-10 text-[#C4D334]">
              Go back to hub
            </div>
          </Link>
        </div>
      </motion.nav>
    );
  }