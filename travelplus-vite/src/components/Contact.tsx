import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    country: '',
    destination: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create email body
      const emailBody = `
NOUVELLE DEMANDE DE CONTACT - TRAVEL PLUS
==========================================

INFORMATIONS CLIENT:
-------------------
Nom: ${formData.name}
Âge: ${formData.age} ans
Email: ${formData.email}
Téléphone: ${formData.phone}
Pays: ${formData.country}

DÉTAILS DU VOYAGE:
-----------------
Destination préférée: ${formData.destination}
Budget: ${formData.budget}

MESSAGE:
--------
${formData.message || 'Aucun message'}

---
Envoyé depuis le formulaire de contact Travel Plus
Date: ${new Date().toLocaleString('fr-FR')}
      `.trim();

      // Use mailto (simple solution)
      const mailtoLink = `mailto:farouk.aboualamm@gmail.com?subject=Nouvelle demande - ${formData.name}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({
        name: '',
        age: '',
        email: '',
        phone: '',
        country: '',
        destination: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const destinations = [
    'Maroc - Villes Impériales',
    'Maroc - Désert',
    'Maroc - Plages',
    'Turquie',
    'Égypte',
    'Dubaï',
    'Thaïlande',
    'Maldives',
    'Europe',
    'Autre destination'
  ];

  const budgets = [
    'Moins de 5 000 MAD',
    '5 000 - 10 000 MAD',
    '10 000 - 20 000 MAD',
    '20 000 - 50 000 MAD',
    'Plus de 50 000 MAD',
    'Budget entreprise'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 animate-fade-in">
            Contactez-Nous
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Partagez vos envies de voyage, nous créerons l'expérience parfaite pour vous
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-bold text-navy mb-2">Email</h3>
              <a href="mailto:Travelplus@gmail.com" className="text-gold hover:underline">
                Travelplus@gmail.com
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-bold text-navy mb-2">Téléphone</h3>
              <a href="tel:+212522228428" className="text-gold hover:underline">
                +212 522 22 84 28
              </a>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-bold text-navy mb-2">Adresse</h3>
              <p className="text-gray-600">
                39 Rue Omar Slaoui<br />Casablanca, Maroc
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-3xl font-serif text-navy mb-8 text-center">
              Demande de Devis Personnalisé
            </h2>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
                <p className="font-semibold">✓ Votre demande a été envoyée avec succès!</p>
                <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
                <p className="font-semibold">✗ Une erreur est survenue</p>
                <p className="text-sm">Veuillez réessayer ou nous contacter directement.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Age */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-navy text-sm font-semibold mb-2">
                    Nom Complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-navy text-sm font-semibold mb-2">
                    Âge <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="18"
                    max="120"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="Votre âge"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-navy text-sm font-semibold mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-navy text-sm font-semibold mb-2">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                    placeholder="+212 6XX XXX XXX"
                  />
                </div>
              </div>

              {/* Country */}
              <div>
                <label className="block text-navy text-sm font-semibold mb-2">
                  Pays de Résidence <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder="Maroc, France, etc."
                />
              </div>

              {/* Destination */}
              <div>
                <label className="block text-navy text-sm font-semibold mb-2">
                  Destination Préférée <span className="text-red-500">*</span>
                </label>
                <select
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Choisir une destination</option>
                  {destinations.map((dest) => (
                    <option key={dest} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-navy text-sm font-semibold mb-2">
                  Budget Estimé <span className="text-red-500">*</span>
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Sélectionner un budget</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-navy text-sm font-semibold mb-2">
                  Message Additionnel (Optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez vos attentes, préférences, dates souhaitées..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-gold to-gold-dark text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <span>Envoyer ma demande</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                En soumettant ce formulaire, vous acceptez d'être contacté par Travel Plus concernant votre demande.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - placeholder) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-navy text-center mb-8">
            Visitez Notre Agence
          </h2>
          <div className="bg-navy/10 rounded-xl h-96 flex items-center justify-center">
            <p className="text-gray-600">
              📍 39 Rue Omar Slaoui, Casablanca
              <br />
              <span className="text-sm">(Google Maps intégration à venir)</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}