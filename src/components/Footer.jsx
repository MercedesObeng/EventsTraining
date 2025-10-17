import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, RotateCcw } from 'lucide-react'; // icons

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#e6eaf1] text-slate-200 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Member Benefits (left) */}
          <div className="md:w-1/2 text-left">
            <h3 className="text-lg font-bold mb-2 text-[#3b3c43]">Members benefits</h3>
            <p className="text-sm text-[#3b3c43]">
              The members offers platform is part of SpaceSync, created for the Innovation Center to give members easy access to exclusive local and national discounts, perks, and rewards.
            </p>
          </div>

          {/* Links (right, header & items aligned) */}
          <div className="md:w-1/6 md:ml-auto text-left">
            <h4 className="text-sm font-semibold uppercase mb-3 text-[#3b3c43]">Links</h4>
            <ul className="space-y-2 text-sm text-[#3b3c43]">
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a
                  href="https://www.innovationcentre-kg.co.uk/"
                  className="hover:text-slate-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Innovation Center Website
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img src="/favicon.png" alt="SpaceSync Logo" className="w-4 h-4" />
                <a
                  href="https://spacesync.co.uk/"
                  className="hover:text-slate-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SpaceSync Help
                </a>
              </li>
              <li className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                <a
                  href="#"
                  className="hover:text-slate-500 transition-colors"
                >
                  Back to Hub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-slate-400 mt-8 pt-6 text-left text-sm text-slate-400">
          <a href="/debug">© {new Date().getFullYear()}</a> Space Sync. Built for the Innovation Center. Innovation Center is a trading name of Oxford Innovation.
        </div>
      </div>
    </motion.footer>
  );
}
