export default function About() {
  const team = [
    {
      name: "Mohamed ABOUALAM",
      role: "Président",
      icon: "👔"
    },
    {
      name: "Soumia AMZIL",
      role: "Directrice Générale",
      icon: "💼"
    },
    {
      name: "Taoufik RACHAD",
      role: "Département Corporate",
      icon: "🏢"
    },
    {
      name: "Myriem BRAHIMI",
      role: "Département Outgoing",
      icon: "✈️"
    },
    {
      name: "Farouk ABOUALAM",
      role: "Marketing & Sales",
      icon: "📊"
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque détail de nos services"
    },
    {
      icon: "🤝",
      title: "Confiance",
      description: "La confiance de nos clients est notre plus grande récompense"
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Nous innovons constamment pour offrir des expériences uniques"
    },
    {
      icon: "❤️",
      title: "Passion",
      description: "Notre passion pour le voyage guide chacune de nos actions"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy via-navy-light to-blue-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 animate-fade-in">
            À Propos de Travel Plus
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            29 ans d'expertise au service de vos voyages
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-wide">Notre Histoire</span>
              <h2 className="text-4xl font-serif text-navy mt-2 mb-6">
                Depuis 1995
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Fondée en 1995, <strong className="text-navy">Travel Plus</strong> est née de la passion de créer 
                  des expériences de voyage authentiques et mémorables au cœur du Maroc.
                </p>
                <p>
                  Au fil des années, nous avons évolué pour devenir l'un des acteurs majeurs du tourisme sur mesure 
                  et de l'organisation d'événements professionnels au Maroc, tout en maintenant notre engagement 
                  initial : offrir à chaque client une expérience unique adaptée à ses désirs.
                </p>
                <p>
                  Aujourd'hui, avec plus de <strong className="text-gold">500 événements organisés</strong> et 
                  <strong className="text-gold"> 50+ entreprises partenaires</strong>, nous continuons à innover 
                  et à repousser les limites de l'excellence dans le secteur du voyage.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gold to-gold-dark rounded-2xl p-12 text-white text-center">
                <div className="text-7xl mb-6">🏆</div>
                <h3 className="text-3xl font-bold mb-4">29+ Années</h3>
                <p className="text-xl text-white/90 mb-6">d'Excellence & d'Innovation</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-white/80">Événements</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-white/80">Partenaires</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-3xl font-bold">10K+</div>
                    <div className="text-white/80">Clients</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="text-3xl font-bold">40+</div>
                    <div className="text-white/80">Pays</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wide">Nos Valeurs</span>
            <h2 className="text-4xl font-serif text-navy mt-2">
              Ce Qui Nous Anime
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold font-semibold text-sm uppercase tracking-wide">Notre Équipe</span>
            <h2 className="text-4xl font-serif text-navy mt-2">
              Les Artisans de Vos Voyages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-navy to-navy-light rounded-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                  {member.icon}
                </div>
                <h3 className="font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-sm text-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-6">
              Pourquoi Choisir Travel Plus ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "✨", text: "Circuits 100% personnalisables selon vos envies" },
              { icon: "🎯", text: "Organisation MICE et événements d'entreprise clé en main" },
              { icon: "🏆", text: "Partenariats avec les meilleurs hôtels 5* au Maroc et à l'international" },
              { icon: "🌍", text: "Expertise reconnue sur plus de 40 destinations" },
              { icon: "💎", text: "Meilleur rapport qualité/prix garanti" },
              { icon: "🛡️", text: "Assistance 24/7 pendant votre voyage" },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <span className="text-4xl">{item.icon}</span>
                <p className="text-white/90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-navy mb-6">
            Prêt à Partir à l'Aventure ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rejoignez les milliers de voyageurs qui nous ont fait confiance
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-gold text-white rounded-full font-semibold text-lg hover:bg-gold-dark transition-all hover:scale-105 shadow-xl"
          >
            Contactez-Nous
          </a>
        </div>
      </section>
    </div>
  );
}