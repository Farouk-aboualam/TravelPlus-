import { useState } from 'react';

export default function CustomTrip() {
  const [step, setStep] = useState(1);
  const [tripData, setTripData] = useState({
    destination: '',
    travelers: 2,
    nights: 3,
    budget: '',
    activities: [] as string[],
    accommodation: '',
    startDate: '',
    name: '',
    email: '',
    phone: '',
    meetingPreference: 'online',
    meetingDate: '',
    meetingTime: '',
  });

  const destinations = [
    'Marrakech', 'Fès', 'Casablanca', 'Essaouira', 'Chefchaouen',
    'Merzouga (Désert)', 'Agadir', 'Tanger', 'Rabat', 'Ouarzazate',
    'Dakhla', 'Ifrane', 'Destinations Internationales'
  ];

  const activities = [
    '🏜️ Désert & Bivouac', '🕌 Visites Culturelles', '🏖️ Plage & Détente',
    '⛳ Golf', '🏄 Surf & Sports Nautiques', '🐪 Balade à Chameau',
    '🎈 Montgolfière', '🏔️ Randonnée', '👨‍🍳 Cours de Cuisine',
    '🧘 Spa & Bien-être', '🛍️ Shopping', '📸 Photographie'
  ];

  const budgets = [
    'Économique (< 5000 MAD/pers)',
    'Confort (5000-10000 MAD/pers)',
    'Premium (10000-20000 MAD/pers)',
    'Luxe (> 20000 MAD/pers)',
    'Sur mesure'
  ];

  const accommodations = [
    '3 étoiles', '4 étoiles', '5 étoiles', 'Riads authentiques',
    'Hôtels boutique', 'Resorts de luxe', 'Bivouac de luxe'
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const toggleActivity = (activity: string) => {
    if (tripData.activities.includes(activity)) {
      setTripData({
        ...tripData,
        activities: tripData.activities.filter(a => a !== activity)
      });
    } else {
      setTripData({
        ...tripData,
        activities: [...tripData.activities, activity]
      });
    }
  };

  const handleSubmit = () => {
    // Format email content
    const emailBody = `
DEMANDE DE VOYAGE PERSONNALISÉ
==============================

DÉTAILS DU VOYAGE:
-----------------
Destination: ${tripData.destination}
Nombre de voyageurs: ${tripData.travelers}
Durée: ${tripData.nights} nuits
Budget: ${tripData.budget}
Date de départ souhaitée: ${tripData.startDate || 'Flexible'}
Type d'hébergement: ${tripData.accommodation}

Activités souhaitées:
${tripData.activities.map(a => `- ${a}`).join('\n')}

INFORMATIONS CLIENT:
-------------------
Nom: ${tripData.name}
Email: ${tripData.email}
Téléphone: ${tripData.phone}

PRÉFÉRENCE RENDEZ-VOUS:
----------------------
Type: ${tripData.meetingPreference === 'online' ? 'Visioconférence' : 'En personne à l\'agence'}
Date souhaitée: ${tripData.meetingDate || 'À définir'}
Heure souhaitée: ${tripData.meetingTime || 'À définir'}

---
Envoyé depuis le configurateur de voyage Travel Plus
Date: ${new Date().toLocaleString('fr-FR')}
    `.trim();

    const mailtoLink = `mailto:farouk.aboualamm@gmail.com?subject=Demande de voyage personnalisé - ${tripData.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">
            Créez Votre Voyage Sur Mesure
          </h1>
          <p className="text-xl text-white/90">
            Configurez votre voyage idéal en quelques clics
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Destination' },
              { num: 2, label: 'Détails' },
              { num: 3, label: 'Activités' },
              { num: 4, label: 'Coordonnées' },
              { num: 5, label: 'Rendez-vous' }
            ].map((s) => (
              <div key={s.num} className="flex items-center flex-1">
                <div className={`flex items-center ${s.num < 5 ? 'flex-1' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    step >= s.num ? 'bg-gold text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {s.num}
                  </div>
                  <span className={`ml-2 text-sm hidden md:block ${step >= s.num ? 'text-navy font-semibold' : 'text-gray-500'}`}>
                    {s.label}
                  </span>
                </div>
                {s.num < 5 && (
                  <div className={`flex-1 h-1 mx-2 ${step > s.num ? 'bg-gold' : 'bg-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Step 1: Destination */}
          {step === 1 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <h2 className="text-3xl font-serif text-navy mb-6">Choisissez Votre Destination</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {destinations.map((dest) => (
                  <button
                    key={dest}
                    onClick={() => setTripData({...tripData, destination: dest})}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      tripData.destination === dest
                        ? 'border-gold bg-gold/10'
                        : 'border-gray-200 hover:border-gold'
                    }`}
                  >
                    <div className="font-semibold text-navy">{dest}</div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                disabled={!tripData.destination}
                className="mt-8 w-full md:w-auto px-10 py-4 bg-gold text-white rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold-dark transition-all"
              >
                Continuer →
              </button>
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <h2 className="text-3xl font-serif text-navy mb-6">Détails du Voyage</h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-navy font-semibold mb-2">Nombre de voyageurs</label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={tripData.travelers}
                      onChange={(e) => setTripData({...tripData, travelers: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-semibold mb-2">Nombre de nuits</label>
                    <input
                      type="number"
                      min="1"
                      max="30"
                      value={tripData.nights}
                      onChange={(e) => setTripData({...tripData, nights: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Date de départ souhaitée (optionnel)</label>
                  <input
                    type="date"
                    value={tripData.startDate}
                    onChange={(e) => setTripData({...tripData, startDate: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Budget par personne</label>
                  <div className="space-y-2">
                    {budgets.map((budget) => (
                      <button
                        key={budget}
                        onClick={() => setTripData({...tripData, budget})}
                        className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                          tripData.budget === budget
                            ? 'border-gold bg-gold/10'
                            : 'border-gray-200 hover:border-gold'
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Type d'hébergement</label>
                  <select
                    value={tripData.accommodation}
                    onChange={(e) => setTripData({...tripData, accommodation: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                  >
                    <option value="">Choisir...</option>
                    {accommodations.map((acc) => (
                      <option key={acc} value={acc}>{acc}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="px-8 py-3 border-2 border-navy text-navy rounded-full font-semibold hover:bg-navy hover:text-white transition-all"
                >
                  ← Retour
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!tripData.budget || !tripData.accommodation}
                  className="flex-1 px-10 py-4 bg-gold text-white rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold-dark transition-all"
                >
                  Continuer →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Activities */}
          {step === 3 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <h2 className="text-3xl font-serif text-navy mb-6">Activités Souhaitées</h2>
              <p className="text-gray-600 mb-6">Sélectionnez toutes les activités qui vous intéressent</p>
              
              <div className="grid md:grid-cols-3 gap-4">
                {activities.map((activity) => (
                  <button
                    key={activity}
                    onClick={() => toggleActivity(activity)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      tripData.activities.includes(activity)
                        ? 'border-gold bg-gold/10'
                        : 'border-gray-200 hover:border-gold'
                    }`}
                  >
                    {activity}
                  </button>
                ))}
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="px-8 py-3 border-2 border-navy text-navy rounded-full font-semibold hover:bg-navy hover:text-white transition-all"
                >
                  ← Retour
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="flex-1 px-10 py-4 bg-gold text-white rounded-full font-semibold hover:bg-gold-dark transition-all"
                >
                  Continuer →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {step === 4 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <h2 className="text-3xl font-serif text-navy mb-6">Vos Coordonnées</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-navy font-semibold mb-2">Nom complet *</label>
                  <input
                    type="text"
                    value={tripData.name}
                    onChange={(e) => setTripData({...tripData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    value={tripData.email}
                    onChange={(e) => setTripData({...tripData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-navy font-semibold mb-2">Téléphone *</label>
                  <input
                    type="tel"
                    value={tripData.phone}
                    onChange={(e) => setTripData({...tripData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(3)}
                  className="px-8 py-3 border-2 border-navy text-navy rounded-full font-semibold hover:bg-navy hover:text-white transition-all"
                >
                  ← Retour
                </button>
                <button
                  onClick={() => setStep(5)}
                  disabled={!tripData.name || !tripData.email || !tripData.phone}
                  className="flex-1 px-10 py-4 bg-gold text-white rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold-dark transition-all"
                >
                  Continuer →
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Meeting Booking */}
          {step === 5 && (
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <h2 className="text-3xl font-serif text-navy mb-6">Planifier un Rendez-vous</h2>
              <p className="text-gray-600 mb-6">
                Choisissez une date et heure pour discuter de votre projet avec notre équipe
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-navy font-semibold mb-2">Type de rendez-vous</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setTripData({...tripData, meetingPreference: 'online'})}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        tripData.meetingPreference === 'online'
                          ? 'border-gold bg-gold/10'
                          : 'border-gray-200 hover:border-gold'
                      }`}
                    >
                      <div className="text-4xl mb-2">💻</div>
                      <div className="font-semibold text-navy">Visioconférence</div>
                      <div className="text-sm text-gray-600">Zoom ou Google Meet</div>
                    </button>
                    <button
                      onClick={() => setTripData({...tripData, meetingPreference: 'office'})}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        tripData.meetingPreference === 'office'
                          ? 'border-gold bg-gold/10'
                          : 'border-gray-200 hover:border-gold'
                      }`}
                    >
                      <div className="text-4xl mb-2">🏢</div>
                      <div className="font-semibold text-navy">À l'agence</div>
                      <div className="text-sm text-gray-600">Casablanca</div>
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-navy font-semibold mb-2">Date souhaitée</label>
                    <input
                      type="date"
                      value={tripData.meetingDate}
                      onChange={(e) => setTripData({...tripData, meetingDate: e.target.value})}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-navy font-semibold mb-2">Créneau horaire</label>
                    <select
                      value={tripData.meetingTime}
                      onChange={(e) => setTripData({...tripData, meetingTime: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none"
                    >
                      <option value="">Choisir un créneau</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(4)}
                  className="px-8 py-3 border-2 border-navy text-navy rounded-full font-semibold hover:bg-navy hover:text-white transition-all"
                >
                  ← Retour
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-10 py-4 bg-gradient-to-r from-gold to-gold-dark text-white rounded-full font-semibold hover:shadow-xl transition-all flex items-center justify-center"
                >
                  <span>Envoyer Ma Demande</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}