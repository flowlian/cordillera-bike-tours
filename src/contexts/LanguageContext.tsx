import { createContext, useContext, useState, ReactNode } from "react";

type Language = "de" | "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  de: {
    // Navigation
    "nav.home": "Home",
    "nav.tours": "Touren",
    "nav.about": "Über uns",
    "nav.faq": "FAQ",
    "nav.booking": "Beratung buchen",
    "nav.bookTour": "Tour buchen",
    
    // Hero
    "hero.title": "Radtouren in den Kolumbianischen Anden",
    "hero.subtitle": "Erlebe unvergessliche Mountainbike-Abenteuer in den spektakulären Bergen Kolumbiens.",
    "hero.exploreTours": "Touren entdecken",
    "hero.bookConsultation": "Beratung buchen",
    
    // Tours
    "tours.title": "Unsere Touren",
    "tours.subtitle": "Einzigartige Routen durch die spektakulärsten Bergregionen Kolumbiens. Für jeden Schwierigkeitsgrad die perfekte Tour.",
    "tours.duration": "Dauer",
    "tours.difficulty": "Schwierigkeit",
    "tours.elevation": "Höhe",
    "tours.distance": "Distanz",
    "tours.highlights": "Highlights",
    "tours.requestTour": "Tour anfragen",
    "tours.viewDetails": "Details ansehen",
    
    // About
    "about.title": "Über uns",
    "about.text1": "Wir sind eine kolumbianisch-deutsche Familie, deren Geist und Seele sich zwischen zwei Heimaten bewegen.",
    "about.text2": "Unsere Leidenschaft ist es, dir die spektakulärsten Trails der zentralen Anden-Gebirgskette zu zeigen.",
    "about.text3": "Mit lokalen Guides, die jeden Weg wie ihre Westentasche kennen, garantieren wir dir ein authentisches und sicheres Abenteuer. Egal ob Anfänger oder Experte – wir finden die perfekte Tour für dich.",
    "about.text4": "Alle unsere Touren sind mit Umweltverantwortung und fairen Bedingungen geplant. Du erlebst nicht nur atemberaubende Landschaften, sondern lernst auch die warmherzigen Menschen Kolumbiens kennen.",
    "about.safety": "Sicherheit",
    "about.safetyDesc": "Professionelle Guides, top Equipment, privater Transport, und sichere Unterkünfte für deine Sicherheit auf jeder Tour.",
    "about.sustainability": "Nachhaltigkeit",
    "about.sustainabilityDesc": "Touren mit Umweltverantwortung und fairen Bedingungen. Wir unterstützen lokale Gemeinschaften nachhaltig.",
    "about.passion": "Leidenschaft",
    "about.passionDesc": "Wir lieben die Berge Kolumbiens und teilen diese Begeisterung mit lokalen, nachhaltigen, organischen Erlebnissen.",
    "about.experience": "Erfahrung",
    "about.experienceDesc": "Über 10 Jahre Expertise in den kolumbianischen Anden mit verschiedenen Fahrradtypen und zugänglichen Touren.",
    
    // Packages
    "packages.title": "Tour-Pakete",
    "packages.subtitle": "Wähle ein Paket oder stelle deine individuelle Tour zusammen",
    "packages.day": "Tag",
    "packages.days": "Tage",
    "packages.from": "ab",
    "packages.perPerson": "pro Person",
    "packages.customizable": "Vollständig anpassbar",
    "packages.includes": "Beinhaltet",
    "packages.1day": "1-Tages-Abenteuer",
    "packages.1dayDesc": "Perfekt für einen Tagesausflug",
    "packages.3day": "3-Tages-Explorer",
    "packages.3dayDesc": "Entdecke mehrere Highlights",
    "packages.7day": "7-Tages-Expedition",
    "packages.7dayDesc": "Das ultimative Anden-Erlebnis",
    "packages.feature1": "Professionelle Guides",
    "packages.feature2": "Hochwertige Bikes & Equipment",
    "packages.feature3": "Frühstück inklusive",
    "packages.feature4": "Private Unterkunft",
    "packages.feature5": "Stadtrundfahrt Pereira",
    "packages.feature6": "Nachhaltige Tour-Praktiken",
    
    // Testimonials
    "testimonials.title": "Was unsere Gäste sagen",
    "testimonials.subtitle": "Erfahrungen von Abenteurern, die mit uns die Anden erkundet haben",
    
    // Newsletter
    "newsletter.title": "Kickstart-Einladung für 2 Pioniere",
    "newsletter.subtitle": "Sei unter den ersten, die unsere neuen Touren erleben. Wir suchen 2 Abenteurer, die bereit sind, die Reise mit uns zu beginnen.",
    "newsletter.placeholder": "Deine E-Mail-Adresse",
    "newsletter.button": "Informiert bleiben",
    "newsletter.features": "Exklusive Vorteile für Frühbucher",
    
    // FAQ
    "faq.title": "Häufig gestellte Fragen",
    "faq.subtitle": "Hier findest du Antworten auf die wichtigsten Fragen zu unseren Touren",
    
    // Booking
    "booking.title": "Bereit für dein Anden-Abenteuer?",
    "booking.subtitle": "Buche ein kostenloses 30-minütiges Beratungsgespräch und lass uns gemeinsam deine perfekte Tour planen.",
    "booking.cta": "Jetzt Beratung buchen",
    "booking.email": "Oder schreib uns direkt",
    "booking.feature1": "30 Min kostenlos",
    "booking.feature2": "Video oder Telefon",
    "booking.feature3": "Persönliche Beratung",
    
    // Footer
    "footer.tagline": "Dein Abenteuer in den Anden beginnt hier",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Kontakt",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.tours": "Tours",
    "nav.about": "About",
    "nav.faq": "FAQ",
    "nav.booking": "Book Consultation",
    "nav.bookTour": "Book Tour",
    
    // Hero
    "hero.title": "Bike Tours in the Colombian Andes",
    "hero.subtitle": "Experience unforgettable mountain biking adventures in Colombia's spectacular mountains.",
    "hero.exploreTours": "Explore Tours",
    "hero.bookConsultation": "Book Consultation",
    
    // Tours
    "tours.title": "Our Tours",
    "tours.subtitle": "Unique routes through Colombia's most spectacular mountain regions. The perfect tour for every skill level.",
    "tours.duration": "Duration",
    "tours.difficulty": "Difficulty",
    "tours.elevation": "Elevation",
    "tours.distance": "Distance",
    "tours.highlights": "Highlights",
    "tours.requestTour": "Request Tour",
    "tours.viewDetails": "View Details",
    
    // About
    "about.title": "About Us",
    "about.text1": "We are a Colombian-German family whose spirit and soul move between two homelands.",
    "about.text2": "Our passion is to show you the most spectacular trails of the Central Andes mountain range.",
    "about.text3": "With local guides who know every path like the back of their hand, we guarantee you an authentic and safe adventure. Whether you're a beginner or an expert – we'll find the perfect tour for you.",
    "about.text4": "All our tours are designed with environmental responsibility and fair conditions. You'll not only experience breathtaking landscapes but also meet the warm-hearted people of Colombia.",
    "about.safety": "Safety",
    "about.safetyDesc": "Professional guides, top equipment, private transport, and secure accommodations for your safety on every tour.",
    "about.sustainability": "Sustainability",
    "about.sustainabilityDesc": "Tours with environmental responsibility and fair conditions. We support local communities sustainably.",
    "about.passion": "Passion",
    "about.passionDesc": "We love Colombia's mountains and share this enthusiasm with local, sustainable, organic experiences.",
    "about.experience": "Experience",
    "about.experienceDesc": "Over 10 years of expertise in the Colombian Andes with different bike types and accessible tours.",
    
    // Packages
    "packages.title": "Tour Packages",
    "packages.subtitle": "Choose a package or customize your individual tour",
    "packages.day": "Day",
    "packages.days": "Days",
    "packages.from": "from",
    "packages.perPerson": "per person",
    "packages.customizable": "Fully customizable",
    "packages.includes": "Includes",
    "packages.1day": "1-Day Adventure",
    "packages.1dayDesc": "Perfect for a day trip",
    "packages.3day": "3-Day Explorer",
    "packages.3dayDesc": "Discover multiple highlights",
    "packages.7day": "7-Day Expedition",
    "packages.7dayDesc": "The ultimate Andes experience",
    "packages.feature1": "Professional guides",
    "packages.feature2": "High-quality bikes & equipment",
    "packages.feature3": "Breakfast included",
    "packages.feature4": "Private accommodation",
    "packages.feature5": "Pereira city tour",
    "packages.feature6": "Sustainable tour practices",
    
    // Testimonials
    "testimonials.title": "What Our Guests Say",
    "testimonials.subtitle": "Experiences from adventurers who explored the Andes with us",
    
    // Newsletter
    "newsletter.title": "Kickstart Invitation for 2 Pioneers",
    "newsletter.subtitle": "Be among the first to experience our new tours. We're looking for 2 adventurers ready to start the journey with us.",
    "newsletter.placeholder": "Your email address",
    "newsletter.button": "Stay Updated",
    "newsletter.features": "Exclusive benefits for early bookers",
    
    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to the most important questions about our tours",
    
    // Booking
    "booking.title": "Ready for Your Andes Adventure?",
    "booking.subtitle": "Book a free 30-minute consultation and let's plan your perfect tour together.",
    "booking.cta": "Book Consultation Now",
    "booking.email": "Or write to us directly",
    "booking.feature1": "30 min free",
    "booking.feature2": "Video or phone",
    "booking.feature3": "Personal consultation",
    
    // Footer
    "footer.tagline": "Your adventure in the Andes starts here",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.tours": "Tours",
    "nav.about": "Nosotros",
    "nav.faq": "FAQ",
    "nav.booking": "Reservar Consulta",
    "nav.bookTour": "Reservar Tour",
    
    // Hero
    "hero.title": "Recorridos en Bicicleta en los Andes Colombianos",
    "hero.subtitle": "Vive aventuras inolvidables en bicicleta de montaña en las espectaculares montañas de Colombia.",
    "hero.exploreTours": "Explorar Tours",
    "hero.bookConsultation": "Reservar Consulta",
    
    // Tours
    "tours.title": "Nuestros Tours",
    "tours.subtitle": "Rutas únicas a través de las regiones montañosas más espectaculares de Colombia. El tour perfecto para cada nivel.",
    "tours.duration": "Duración",
    "tours.difficulty": "Dificultad",
    "tours.elevation": "Altitud",
    "tours.distance": "Distancia",
    "tours.highlights": "Destacados",
    "tours.requestTour": "Solicitar Tour",
    "tours.viewDetails": "Ver Detalles",
    
    // About
    "about.title": "Nosotros",
    "about.text1": "Somos una familia colombo-alemana cuyo espíritu y alma se mueven entre dos hogares.",
    "about.text2": "Nuestra pasión es mostrarte los senderos más espectaculares de la cordillera central de los Andes.",
    "about.text3": "Con guías locales que conocen cada camino como la palma de su mano, te garantizamos una aventura auténtica y segura. Ya seas principiante o experto, encontraremos el tour perfecto para ti.",
    "about.text4": "Todos nuestros tours están diseñados con responsabilidad ambiental y condiciones justas. No solo experimentarás paisajes impresionantes, sino que también conocerás a la gente cálida de Colombia.",
    "about.safety": "Seguridad",
    "about.safetyDesc": "Guías profesionales, equipo de primera, transporte privado y alojamiento seguro para tu seguridad en cada tour.",
    "about.sustainability": "Sostenibilidad",
    "about.sustainabilityDesc": "Tours con responsabilidad ambiental y condiciones justas. Apoyamos a las comunidades locales de manera sostenible.",
    "about.passion": "Pasión",
    "about.passionDesc": "Amamos las montañas de Colombia y compartimos este entusiasmo con experiencias locales, sostenibles y orgánicas.",
    "about.experience": "Experiencia",
    "about.experienceDesc": "Más de 10 años de experiencia en los Andes colombianos con diferentes tipos de bicicletas y tours accesibles.",
    
    // Packages
    "packages.title": "Paquetes de Tours",
    "packages.subtitle": "Elige un paquete o personaliza tu tour individual",
    "packages.day": "Día",
    "packages.days": "Días",
    "packages.from": "desde",
    "packages.perPerson": "por persona",
    "packages.customizable": "Totalmente personalizable",
    "packages.includes": "Incluye",
    "packages.1day": "Aventura de 1 Día",
    "packages.1dayDesc": "Perfecto para una excursión de un día",
    "packages.3day": "Explorador de 3 Días",
    "packages.3dayDesc": "Descubre múltiples destacados",
    "packages.7day": "Expedición de 7 Días",
    "packages.7dayDesc": "La experiencia definitiva en los Andes",
    "packages.feature1": "Guías profesionales",
    "packages.feature2": "Bicicletas y equipo de alta calidad",
    "packages.feature3": "Desayuno incluido",
    "packages.feature4": "Alojamiento privado",
    "packages.feature5": "Tour por la ciudad de Pereira",
    "packages.feature6": "Prácticas de tour sostenibles",
    
    // Testimonials
    "testimonials.title": "Lo que Dicen Nuestros Huéspedes",
    "testimonials.subtitle": "Experiencias de aventureros que exploraron los Andes con nosotros",
    
    // Newsletter
    "newsletter.title": "Invitación de Inicio para 2 Pioneros",
    "newsletter.subtitle": "Sé de los primeros en experimentar nuestros nuevos tours. Buscamos 2 aventureros listos para comenzar el viaje con nosotros.",
    "newsletter.placeholder": "Tu dirección de correo",
    "newsletter.button": "Mantenerme Informado",
    "newsletter.features": "Beneficios exclusivos para los primeros reservadores",
    
    // FAQ
    "faq.title": "Preguntas Frecuentes",
    "faq.subtitle": "Encuentra respuestas a las preguntas más importantes sobre nuestros tours",
    
    // Booking
    "booking.title": "¿Listo para tu Aventura en los Andes?",
    "booking.subtitle": "Reserva una consulta gratuita de 30 minutos y planeemos juntos tu tour perfecto.",
    "booking.cta": "Reservar Consulta Ahora",
    "booking.email": "O escríbenos directamente",
    "booking.feature1": "30 min gratis",
    "booking.feature2": "Video o teléfono",
    "booking.feature3": "Consulta personal",
    
    // Footer
    "footer.tagline": "Tu aventura en los Andes comienza aquí",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.contact": "Contacto",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("de");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};