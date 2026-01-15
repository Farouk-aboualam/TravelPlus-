export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-navy font-bold text-xl">
                T/P+
              </div>
              <span className="text-xl font-serif">TRAVEL PLUS</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Votre partenaire voyage de confiance depuis 1995. Créateurs d'expériences mémorables au Maroc et à l'international.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <span className="text-xl">📘</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <span className="text-xl">📷</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors">
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-white/80 hover:text-gold transition-colors">Accueil</a></li>
              <li><a href="/a-propos" className="text-white/80 hover:text-gold transition-colors">À Propos</a></li>
              <li><a href="/programmes" className="text-white/80 hover:text-gold transition-colors">Nos Programmes</a></li>
              <li><a href="/entreprises" className="text-white/80 hover:text-gold transition-colors">Entreprises</a></li>
              <li><a href="/contact" className="text-white/80 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Nos Services</h3>
            <ul className="space-y-2">
              <li><a href="/programmes" className="text-white/80 hover:text-gold transition-colors">Circuits Culturels</a></li>
              <li><a href="/programmes" className="text-white/80 hover:text-gold transition-colors">Désert & Aventure</a></li>
              <li><a href="/programmes" className="text-white/80 hover:text-gold transition-colors">Séjours Balnéaires</a></li>
              <li><a href="/entreprises" className="text-white/80 hover:text-gold transition-colors">MICE & Événements</a></li>
              <li><a href="/entreprises" className="text-white/80 hover:text-gold transition-colors">Team Building</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">Contactez-Nous</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <span className="text-gold mr-2">📍</span>
                <span className="text-white/80">
                  39 Rue Omar Slaoui<br />
                  Casablanca, Maroc
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-gold mr-2">📞</span>
                <a href="tel:+212522228428" className="text-white/80 hover:text-gold transition-colors">
                  +212 522 22 84 28/29
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-gold mr-2">📧</span>
                <a href="mailto:Travelplus@gmail.com" className="text-white/80 hover:text-gold transition-colors">
                  Travelplus@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-gold mr-2">⏰</span>
                <span className="text-white/80">
                  Lun - Ven: 9h - 18h<br />
                  Sam: 9h - 13h
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Travel Plus. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/mentions-legales" className="text-white/60 hover:text-gold text-sm transition-colors">
              Mentions Légales
            </a>
            <a href="/confidentialite" className="text-white/60 hover:text-gold text-sm transition-colors">
              Politique de Confidentialité
            </a>
            <a href="/cgv" className="text-white/60 hover:text-gold text-sm transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}