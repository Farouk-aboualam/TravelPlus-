export default function Enterprise() {
  const services = [
    {
      icon: "🏨",
      title: "Visites et Excursions",
      description: "Organisation complète de vos visites professionnelles"
    },
    {
      icon: "🏢",
      title: "Réservation d'hôtels",
      description: "Hébergement de luxe pour vos collaborateurs"
    },
    {
      icon: "🚗",
      title: "Transferts VIP",
      description: "Transport premium pour vos équipes"
    },
    {
      icon: "📊",
      title: "Séminaires",
      description: "Organisation de séminaires sur mesure"
    },
    {
      icon: "🎯",
      title: "Team Building",
      description: "Activités mémorables pour renforcer vos équipes"
    },
    {
      icon: "🎪",
      title: "Conventions",
      description: "Gestion complète de vos événements d'entreprise"
    },
  ];

  const events = [
    {
      name: "Lions Club International 2024",
      location: "Marrakech",
      date: "26 Mai - 02 Juin 2024",
      participants: "560 personnes",
      nations: "36 nations"
    },
    {
      name: "LCI Casablanca 2024",
      location: "Casablanca",
      participants: "500 participantes",
      nations: "40 pays"
    },
    {
      name: "Convention Electroplanet",
      location: "Mazagan Beach Club, El Jadida",
      date: "24-25 Septembre 2024",
      participants: "120 personnes"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-serif mb-6">
              MICE & Événements d'Entreprise
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Votre partenaire de confiance pour le tourisme d'affaires et l'organisation d'événements
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-navy mb-8">À Propos de Notre Service MICE</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Travel Plus est une DMC dont l'activité est dédiée spécialement au <strong>Tourisme d'Affaires</strong> et 
              l'organisation des événements pour nos clients partenaires au Maroc et à l'étranger en s'adaptant à leur besoin 
              et à leur budget.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous avons une étroite collaboration avec les différents hôtels au Maroc et une multitude de choix des hôtels 
              à travers le monde via nos plateformes en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-navy text-center mb-12">
            Nos Principaux Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-gold"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Objective */}
      <section className="py-16 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Notre Objectif</h2>
            <p className="text-2xl font-light text-gold mb-8">
              Joindre l'utile à l'agréable
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-gold text-4xl mb-4">💎</div>
              <h3 className="text-lg font-semibold mb-2">Meilleur Rapport Qualité/Prix</h3>
              <p className="text-white/80 text-sm">Des services premium à des tarifs compétitifs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-gold text-4xl mb-4">👥</div>
              <h3 className="text-lg font-semibold mb-2">Suivi Personnalisé</h3>
              <p className="text-white/80 text-sm">Un accompagnement dédié pour vos événements</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-gold text-4xl mb-4">🎨</div>
              <h3 className="text-lg font-semibold mb-2">Diversité de Produits</h3>
              <p className="text-white/80 text-sm">Solutions adaptées à tous vos besoins</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-gold text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-semibold mb-2">Expérience Mémorable</h3>
              <p className="text-white/80 text-sm">Team building inoubliables pour vos équipes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-navy text-center mb-12">
            Événements Récents Organisés
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-gold to-gold-dark p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
                  <p className="text-white/90">📍 {event.location}</p>
                </div>
                <div className="p-6">
                  {event.date && (
                    <p className="text-gray-600 mb-2">📅 {event.date}</p>
                  )}
                  <p className="text-navy font-semibold">👥 {event.participants}</p>
                  {event.nations && (
                    <p className="text-navy font-semibold">🌍 {event.nations}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6">Services VIP Premium</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-2xl">✓</span>
                    <span>Séjours VIP avec service personnalisé</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-2xl">✓</span>
                    <span>Gestion des déplacements au Maroc et à l'étranger</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-2xl">✓</span>
                    <span>Organisation complète de vos événements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-2xl">✓</span>
                    <span>Fast Track aéroports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-2xl">✓</span>
                    <span>Assistance permanente 24/7</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <p className="text-4xl mb-4">🏆</p>
                  <h3 className="text-2xl font-bold mb-4">Le Maroc, Destination Idéale</h3>
                  <p className="text-white/90">
                    Infrastructures de pointe, hébergement de luxe, restauration gastronomique 
                    et assistance permanente pour vos événements professionnels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-navy text-center mb-4">
            Ils Nous Font Confiance !
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Des entreprises leaders qui nous ont choisis pour leurs événements et déplacements professionnels
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {/* Placeholder for company logos - you'll replace these */}
            {[
              { name: "Lions Club International", year: "2024" },
              { name: "Electroplanet", year: "2024" },
              { name: "3N Services", year: "2024" },
              { name: "Harvard University", year: "2022" },
              { name: "DGSN", year: "2022" },
              { name: "Club 41", year: "2018" },
            ].map((client, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
              >
                {/* Replace this div with <img src="/logos/client.png" /> */}
                <div className="w-full h-20 bg-gradient-to-br from-navy/10 to-gold/10 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-navy/30">LOGO</span>
                </div>
                <p className="text-sm font-semibold text-navy">{client.name}</p>
                <p className="text-xs text-gray-500">{client.year}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-navy to-navy-light rounded-xl text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-white/80">Événements Organisés</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gold to-gold-dark rounded-xl text-white">
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-white/80">Entreprises Partenaires</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-accent to-navy-light rounded-xl text-white">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <p className="text-white/80">Participants</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-navy-dark to-navy rounded-xl text-white">
              <div className="text-4xl font-bold mb-2">40+</div>
              <p className="text-white/80">Pays Représentés</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gold to-gold-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Prêt à Organiser Votre Prochain Événement ?
          </h2>
          <p className="text-xl mb-8">
            Contactez-nous pour un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:Travelplus@gmail.com"
              className="px-8 py-4 bg-white text-gold rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105"
            >
              📧 Nous Contacter
            </a>
            <a 
              href="tel:+212522228428"
              className="px-8 py-4 bg-navy text-white rounded-full font-semibold hover:bg-navy-dark transition-all hover:scale-105"
            >
              📞 +212 522 22 84 28
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}