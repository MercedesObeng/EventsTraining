export default function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-[#becf00] to-[#a8b800] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Events & Training
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-95">
            Discover upcoming business events, networking opportunities, and professional training courses designed to help your business grow and thrive in Essex.
          </p>
          <div className="mt-8">
            <button
              className="bg-[#e65831] hover:bg-[#d04825] text-white font-semibold px-8 py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              View All Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
