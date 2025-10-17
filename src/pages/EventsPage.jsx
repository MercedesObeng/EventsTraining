// src/pages/EventsPage.jsx
import EventList from '../components/EventList';
import { motion } from "framer-motion";

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-white px-6 sm:px-10 lg:px-20 py-12">
            <div className="bg-white py-12 z-10">
                <div className="max-w-7xl mx-auto px-6 text-left text-black">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
                            Training and Events
                        </h1>
                        <p className="text-lg mb-4 drop-shadow-lg">
                            Discover courses and special events available  to
                            our members and to non-memebers.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Full-width Divider */}
            <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
                <hr className="border-t border-gray-300 w-full" />
            </div>

            <div>
                <EventList />
            </div>
        </div>
    );
}
