// Create this as src/components/HomeContent.tsx

export default function HomeContent() {
  const stats = [
    { number: "29+", label: "Années d'Expérience", icon: "🏆" },
    { number: "500+", label: "Événements Organisés", icon: "🎉" },
    { number: "50+", label: "Entreprises Partenaires", icon: "🤝" },
    { number: "40+", label: "Pays Représentés", icon: "🌍" },
  ];

  const services = [
    {
      icon: "✈️",
      title: "Voyages sur Mesure",
      description: "Circuits personnalisés adaptés à vos envies et votre budget",
      link: "/programmes"
    },
    {
      icon: "🏢",
      title: "MICE & Événements",
      description: "Organisation complète de vos événements d'entreprise",
      link: "/entreprises"
    },
    {
      icon: "🏨",
      title: "Séjours de Luxe",
      description: "Hébergements premium et expériences VIP",
      link: "/programmes"
    },
    {
      icon: "🎯",
      title: "Team Building",
      description: "Activités mémorables pour renforcer vos équipes",
      link: "/entreprises"
    },
  ];

  const featuredDestinations = [
    {
      name: "Marrakech",
      image: "🔴",
      tag: "La Ville Rouge",
      description: "Jardins Majorelle, souks animés, et palais somptueux"
    },
    {
      name: "Désert de Merzouga",
      image: "🏜️",
      tag: "Aventure Saharienne",
      description: "Bivouacs de luxe sous les étoiles du Sahara"
    },
    {
      name: "Essaouira",
      image: "🌊",
      tag: "Perle de l'Atlantique",
      description: "Médina classée UNESCO et plages dorées"
    },
    {
      name: "Chefchaouen",
      image: "💙",
      tag: "La Perle Bleue",
      description: "Ruelles bleues authentiques et montagnes du Rif"
    },
  ];

  const testimonials = [
    {
      name: "Lions Club International",
      event: "Convention 2024",
      text: "Une organisation impeccable pour notre événement de 560 participants de 36 nations. Service exceptionnel!",
      rating: 5
    },
    {
      name: "Electroplanet",
      event: "Convention Annuelle",
      text: "Travel Plus a géré notre convention avec professionnalisme. Nos 120 collaborateurs ont vécu une expérience mémorable.",
      rating: 5
    },
    {
      name: "Harvard University",
      event: "Morocco Discovery Tour",
      text: "Un circuit culturel enrichissant parfaitement organisé. Nos étudiants ont découvert le Maroc authentique.",
      rating: 5
    },
  ];

  return (
    <div>
      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Icon */}
            <div className="relative">
              <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-12 text-white">
                <div className="text-center">
                  <div className="text-8xl mb-6">🌍</div>
                  <h3 className="text-3xl font-serif mb-4">Depuis 1995</h3>
                  <p className="text-xl text-white/90">Votre partenaire voyage de confiance</p>
                </div>
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -right-6 bg-gold text-white px-6 py-4 rounded-xl shadow-2xl">
                <div className="text-3xl font-bold">29+</div>
                <div className="text-sm">Années</div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-navy mb-6">
                Qui Sommes-Nous ?
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  <strong className="text-navy">Travel Plus</strong> est une agence de voyages marocaine 
                  fondée en 1995, spécialisée dans le <strong>tourisme sur mesure</strong> et 
                  l'<strong>organisation d'événements professionnels</strong>.
                </p>
                <p>
                  Notre mission est de vous faire découvrir les mille et une facettes du Royaume, 
                  que ce soit pour vos voyages personnels ou vos événements d'entreprise, 
                  en nous adaptant parfaitement à vos besoins et votre budget.
                </p>
                <p>
                  Avec une <strong className="text-gold">équipe passionnée</strong> et une 
                  collaboration étroite avec les meilleurs hôtels au Maroc et à l'international, 
                  nous garantissons des <strong className="text-gold">expériences mémorables</strong> 
                  avec un service de qualité.
                </p>
              </div>

              {/* Key Points */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <span className="text-navy">Circuits 100% personnalisables selon vos envies</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <span className="text-navy">Organisation MICE et événements d'entreprise</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <span className="text-navy">Assistance 24/7 pendant votre voyage</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gold text-2xl mr-3">✓</span>
                  <span className="text-navy">Meilleur rapport qualité/prix garanti</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-gold text-white rounded-full font-semibold hover:bg-gold-dark transition-all hover:scale-105 shadow-lg"
                >
                  Découvrir Nos Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-navy to-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center text-white"
              >
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins de voyage et d'événements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
              Destinations Populaires
            </h2>
            <p className="text-xl text-gray-600">
              Explorez les joyaux du Maroc
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDestinations.map((dest, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Card */}
                <div className="bg-gradient-to-br from-navy to-navy-light p-8 text-white h-80 flex flex-col justify-end relative overflow-hidden">
                  {/* Background Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20 group-hover:scale-125 transition-transform duration-500">
                    {dest.image}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <span className="inline-block px-4 py-1 bg-gold text-white text-sm rounded-full mb-3">
                      {dest.tag}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                    <p className="text-white/90 text-sm">{dest.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/programmes"
              className="inline-block px-8 py-4 bg-navy text-white rounded-full font-semibold hover:bg-navy-dark transition-all hover:scale-105 shadow-lg"
            >
              Voir Tous Nos Circuits
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gold/10 to-blue-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">
              Ils Nous Font Confiance
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez les témoignages de nos clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-2xl">⭐</span>
                  ))}
                </div>

                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Prêt à Vivre une Expérience Inoubliable ?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contactez-nous dès aujourd'hui pour créer votre voyage sur mesure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-10 py-4 bg-gold text-white rounded-full font-semibold text-lg hover:bg-gold-dark transition-all hover:scale-105 shadow-xl"
            >
              Demander un Devis
            </a>
            <a
              href="/programmes"
              className="px-10 py-4 bg-white text-navy rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              Voir Nos Circuits
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}