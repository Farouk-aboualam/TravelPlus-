import { useState } from 'react';

export default function Hero() {
  const [searchData, setSearchData] = useState({
    destination: '',
    dateFrom: '',
    dateTo: '',
    travelers: 2,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70 z-10" />
        {/* Placeholder for background image - you'll add your own */}
        <div className="w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920')]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        
        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 animate-slide-up">
            TRAVEL PLUS
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-2 animate-slide-up delay-100">
            Your Travel & Events Partner
          </p>
          <div className="flex items-center justify-center space-x-2 animate-slide-up delay-200">
            <div className="h-px w-16 bg-gold" />
            <p className="text-white/80 text-lg">
              Des voyages sur mesure depuis 1995
            </p>
            <div className="h-px w-16 bg-gold" />
          </div>
        </div>

        {/* Search Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-slide-up delay-300">
          
          <div className="flex flex-wrap gap-4 mb-6">
            
            {/* Destination */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-navy text-sm font-semibold mb-2 text-left">
                Destination
              </label>
              <select 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                value={searchData.destination}
                onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
              >
                <option value="">Choisir une destination</option>
                <option value="maroc">Maroc</option>
                <option value="turquie">Turquie</option>
                <option value="egypte">Égypte</option>
                <option value="dubai">Dubaï</option>
                <option value="thailande">Thaïlande</option>
                <option value="maldives">Maldives</option>
              </select>
            </div>

            {/* Date From */}
            <div className="flex-1 min-w-[180px]">
              <label className="block text-navy text-sm font-semibold mb-2 text-left">
                Date de départ
              </label>
              <input 
                type="date"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                value={searchData.dateFrom}
                onChange={(e) => setSearchData({...searchData, dateFrom: e.target.value})}
              />
            </div>

            {/* Date To */}
            <div className="flex-1 min-w-[180px]">
              <label className="block text-navy text-sm font-semibold mb-2 text-left">
                Date de retour
              </label>
              <input 
                type="date"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                value={searchData.dateTo}
                onChange={(e) => setSearchData({...searchData, dateTo: e.target.value})}
              />
            </div>

            {/* Travelers */}
            <div className="flex-1 min-w-[150px]">
              <label className="block text-navy text-sm font-semibold mb-2 text-left">
                Voyageurs
              </label>
              <select 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                value={searchData.travelers}
                onChange={(e) => setSearchData({...searchData, travelers: parseInt(e.target.value)})}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Search Button */}
          <button className="w-full md:w-auto px-12 py-4 bg-gold text-white rounded-full font-semibold text-lg hover:bg-gold-dark transition-all duration-200 hover:shadow-xl hover:scale-105 flex items-center justify-center mx-auto group">
            <span>Rechercher votre voyage</span>
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Quick Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/personnaliser" className="text-navy hover:text-gold transition-colors text-sm font-medium underline">
              Créer un voyage sur mesure
            </a>
            <span className="text-gray-300">•</span>
            <a href="/programmes" className="text-navy hover:text-gold transition-colors text-sm font-medium underline">
              Nos programmes populaires
            </a>
            <span className="text-gray-300">•</span>
            <a href="/entreprises" className="text-navy hover:text-gold transition-colors text-sm font-medium underline">
              Solutions entreprises
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </div>
    </section>
  );
}