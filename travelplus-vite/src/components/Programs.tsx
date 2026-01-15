import { useState } from 'react';

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('all');

  const programs = [
    {
      id: 1,
      category: 'cultural',
      title: "Circuit des Villes Impériales",
      duration: "10 Jours / 9 Nuits",
      cities: "Casablanca / Rabat / Fès / Marrakech / Essaouira",
      image: "🕌",
      description: "Un circuit culturel classique permettant la découverte des différentes facettes du MAROC, ses richesses historiques et architecturales.",
      highlights: ["Mosquée Hassan II", "Jardins Majorelle", "Médinas historiques", "Palais royaux"]
    },
    {
      id: 2,
      category: 'desert',
      title: "La Route des Kasbahs",
      duration: "10 Jours / 9 Nuits",
      cities: "Marrakech / Ouarzazate / Zagora / Merzouga",
      image: "🏜️",
      description: "Découverte du Sud Marocain avec les coutumes de chaque région visitée, l'architecture berbère des Kasbahs et la splendeur du Sahara.",
      highlights: ["Bivouac de luxe", "Balade à dos de chameau", "Souk de Marrakech", "Vallée du Dadès"]
    },
    {
      id: 3,
      category: 'cultural',
      title: "La Découverte du Maroc",
      duration: "14 Jours / 13 Nuits",
      cities: "Casablanca / Tanger / Chefchaouen / Rabat / Fès / Merzouga / Marrakech",
      image: "🌍",
      description: "Sillonnez le Maroc et découvrez l'essence du Royaume, du Nord au Sud. Nature, culture, mer, désert et montagnes - le Maroc est un pays de tous les contrastes.",
      highlights: ["Chefchaouen la ville bleue", "Tanneries de Fès", "Désert de Merzouga", "Grottes d'Hercule"]
    },
    {
      id: 4,
      category: 'beach',
      title: "Séjours Balnéaires",
      duration: "Sur mesure",
      cities: "Agadir / Taghazout / Dakhla / Essaouira",
      image: "🏖️",
      description: "Détente sur les meilleures plages de l'océan Atlantique. Un embarras de choix d'hôtels 5* en All Inclusive, pieds dans l'eau.",
      highlights: ["Plages paradisiaques", "Surf à Taghazout", "Hôtels 5* luxe", "Kitesurf à Dakhla"]
    },
    {
      id: 5,
      category: 'special',
      title: "Golf au Maroc",
      duration: "Sur mesure",
      cities: "Marrakech / Agadir / Rabat / Tanger",
      image: "⛳",
      description: "37 parcours de golf répartis à travers le Maroc. Pratiquez votre passion dans les meilleures conditions au milieu de cadres splendides.",
      highlights: ["37 parcours disponibles", "Infrastructures modernes", "Cadres exceptionnels", "Service premium"]
    },
  ];

  const destinations = [
    { name: "Marrakech", tag: "Red City", icon: "🔴" },
    { name: "Fès", tag: "Berceau de la Culture", icon: "📚" },
    { name: "Essaouira", tag: "Ville du Vent", icon: "🌊" },
    { name: "Chefchaouen", tag: "Cité Bleue", icon: "💙" },
    { name: "Merzouga", tag: "Splendeur du Désert", icon: "🏜️" },
    { name: "Agadir", tag: "The Sunny Town", icon: "☀️" },
    { name: "Dakhla", tag: "Nouvelle Tendance", icon: "🪂" },
    { name: "Tanger", tag: "La Mystérieuse", icon: "🌙" },
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy via-navy-light to-blue-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 animate-fade-in">
            Nos Programmes & Circuits
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Découvrez le Maroc à travers nos circuits soigneusement élaborés
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-gold text-white shadow-lg scale-105'
                  : 'bg-white text-navy hover:bg-gold hover:text-white'
              }`}
            >
              Tous les Circuits
            </button>
            <button
              onClick={() => setActiveCategory('cultural')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'cultural'
                  ? 'bg-gold text-white shadow-lg scale-105'
                  : 'bg-white text-navy hover:bg-gold hover:text-white'
              }`}
            >
              🕌 Circuits Culturels
            </button>
            <button
              onClick={() => setActiveCategory('desert')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'desert'
                  ? 'bg-gold text-white shadow-lg scale-105'
                  : 'bg-white text-navy hover:bg-gold hover:text-white'
              }`}
            >
              🏜️ Désert & Aventure
            </button>
            <button
              onClick={() => setActiveCategory('beach')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'beach'
                  ? 'bg-gold text-white shadow-lg scale-105'
                  : 'bg-white text-navy hover:bg-gold hover:text-white'
              }`}
            >
              🏖️ Séjours Balnéaires
            </button>
            <button
              onClick={() => setActiveCategory('special')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'special'
                  ? 'bg-gold text-white shadow-lg scale-105'
                  : 'bg-white text-navy hover:bg-gold hover:text-white'
              }`}
            >
              ⛳ Spécial Golf
            </button>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-navy to-navy-light p-8 text-center">
                  <div className="text-6xl mb-4">{program.image}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-gold font-semibold">{program.duration}</p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Itinéraire</p>
                    <p className="text-navy font-medium">{program.cities}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-navy mb-2">Points Forts:</p>
                    <div className="flex flex-wrap gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`/programmes/${program.id}`}
                    className="block w-full text-center px-6 py-3 bg-gold text-white rounded-full font-semibold hover:bg-gold-dark transition-all hover:shadow-lg"
                  >
                    Voir les Détails
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-navy text-center mb-12">
            Immersion dans la Culture Marocaine
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-4xl mb-3">{dest.icon}</div>
                <h3 className="font-bold text-navy mb-1">{dest.name}</h3>
                <p className="text-sm text-gray-600">{dest.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Activities */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
            Activités Spéciales
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: "🪂", name: "Kite Surf", location: "Dakhla" },
              { icon: "🐪", name: "Balade Chameau", location: "Merzouga" },
              { icon: "🏍️", name: "Quad", location: "Agafay / Merzouga" },
              { icon: "🎈", name: "Montgolfière", location: "Marrakech" },
              { icon: "🛟", name: "Jet Ski", location: "Agadir" },
              { icon: "👨‍🍳", name: "Cours de Cuisine", location: "Marrakech" },
              { icon: "🏄", name: "Surf", location: "Essaouira / Taghazout" },
              { icon: "🧘", name: "Hammam & Spa", location: "Toutes les villes" },
            ].map((activity, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{activity.icon}</div>
                <h3 className="font-semibold mb-1">{activity.name}</h3>
                <p className="text-sm text-white/70">{activity.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-gold to-gold-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Prêt pour Votre Aventure Marocaine ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour personnaliser votre circuit
          </p>
          <a
            href="/personnaliser"
            className="inline-block px-10 py-4 bg-white text-gold rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
          >
            Créer Mon Voyage Sur Mesure
          </a>
        </div>
      </section>
    </div>
  );
}