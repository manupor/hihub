import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.clients": "Clients",
      "nav.contact": "Contact",
      "nav.contactUs": "Contact Us",
      "nav.about": "About Us",
      "nav.portal": "Customer Portal",
      
      // Hero Section
      "hero.title": "Bridge Between Costa Rica and China for OEM & ODM Solutions",
      "hero.subtitle": "We connect Latin American businesses with China's manufacturing power, protected by Hong Kong's legal framework and international standards.",
      "hero.cta": "Get Started",
      "hero.slider.subtitle": "OEM & ODM Business Hub",
      "hero.slider.title": "Your Gateway to China's Manufacturing Excellence",
      "hero.slider.description": "18 years of experience in China, managing OEM/ODM projects with absolute legal security and financial transparency for Latin American companies.",
      "hero.slider.getStarted": "Get Started",
      "hero.slider.howItWorks": "How It Works",
      "hero.slider.discover": "Discover Excellence",
      
      // About Section
      "about.subtitle": "About Us",
      "about.title": "The Best of Both Worlds: China's Power, Western Protection",
      "about.description1": "Founded with 18 years of living in China and 14 years of international trade experience, HiHub Global Technologies Limited operates from Hong Kong, giving you direct access to Chinese manufacturing with the security of British common law and international financial standards.",
      "about.description2": "We speak your language (Spanish, English, Mandarin, Italian, Portuguese) and understand both cultures. Our contracts are enforceable internationally, our capital flows freely, and our operations are completely transparent.",
      "about.feature1": "Hong Kong legal framework: robust, independent, and transparent",
      "about.feature2": "18 years in China with offices in Yiwu and Shanghai",
      
      // Services Section
      "services.subtitle": "Our Services",
      "services.title": "OEM & ODM Project Management from China",
      "services.service1.title": "OEM/ODM Project Management",
      "services.service1.desc": "Complete management of your custom manufacturing projects in China",
      "services.service2.title": "Legal & Contractual Security",
      "services.service2.desc": "Hong Kong common law contracts, internationally enforceable",
      "services.service3.title": "Quality Control & Factory Access",
      "services.service3.desc": "Direct factory access with rigorous quality control at every stage",
      "services.service4.title": "Export & Import Management",
      "services.service4.desc": "Complete logistics and customs handling for Latin America",
      
      // Contact Section
      "contact.subtitle": "Contact Us",
      "contact.title": "Ready to Start Your Project?",
      "contact.description": "Get in touch with our team to discuss your sourcing needs",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.address": "Address",
      
      // Footer
      "footer.description": "Hihub Global Technologies Limited - Your business hub between Latin America and China, registered in Hong Kong (TAX: 73367194-000).",
      "footer.servicesTitle": "Our Services",
      "footer.contactsTitle": "Contact",
      "footer.seaFreight": "Sea Freight",
      "footer.airShipping": "Air Shipping",
      "footer.landTransport": "Land Transport",
      "footer.warehousing": "Warehousing",
      "footer.consulting": "Consulting",
      "footer.customsClearance": "Customs Clearance",
      "footer.rights": "All rights reserved.",

      // About Section 2
      "about2.subtitle": "Why Choose Us",
      "about2.title": "Absolute Legal and Contractual Security",
      "about2.description": "Operating from Hong Kong gives you British common law protection, free capital flow, and international banking standards. Your contracts are firm, enforceable, and protected under a robust legal framework.",
      "about2.check1": "Hong Kong Legal Framework (Common Law)",
      "about2.check2": "Free Capital Flow & Convertible Currency (HKD)",
      "about2.check3": "International Compliance & Transparency",
      "about2.check4": "Direct Factory Access in China",
      "about2.btn": "18+ Years Experience",
      "about2.callLabel": "Call Us Any Time:",
      "about2.yearsLabel": "Years of Excellence",
      "about2.footer1.title": "China is the World's Factory",
      "about2.footer1.desc": "Everything is made in China - from complex industrial machinery to everyday items",
      "about2.footer2.title": "Face-to-Face Still Matters",
      "about2.footer2.desc": "We attend CIIE, Canton Fair, and Yiwu International Fair",
      "about2.stats.clients": "Clients",
      "about2.stats.satisfaction": "Satisfaction",
      "about2.stats.years": "Years in China",
      "about2.stats.clientSatisfaction": "Client Satisfaction",
      "about2.stats.yearsExperience": "Years in China",

      // Services / Choose Section
      "services2.subtitle": "Our Services",
      "services2.title": "Dependable Import Services for Companies of All Sizes",
      "services2.viewDetails": "View Details",
      "services2.choose.subtitle": "Our Services On Us",
      "services2.choose.title": "Transportation Services We Are Often Considered",
      "services2.seaFreight": "Sea Freight",
      "services2.airShipping": "Air Shipping",
      "services2.landTransport": "Land Transport",
      "services2.airConsulting": "Air Consulting",
      "services2.packingHandling": "Packing & Handling",
      "services2.floorPlanning": "Floor Planning",

      // Choose Section 2 - Detailed Services
      "choose2.mainTitle": "What This Means for You, Our Client",
      "choose2.mainSubtitle": "We deliver China's manufacturing power wrapped in Western trust, clear rules, and legal protection.",
      "choose2.sourcing.title": "Legal & Contractual Security",
      "choose2.sourcing.item1": "Hong Kong common law contracts - familiar and predictable for Western companies",
      "choose2.sourcing.item2": "Internationally enforceable agreements with clear dispute resolution mechanisms",
      "choose2.quality.title": "Financial Freedom & Transparency",
      "choose2.quality.item1": "Free capital flow with convertible HKD currency and world-class banking",
      "choose2.quality.item2": "International reporting and compliance standards for total clarity",
      "choose2.logistics.title": "OEM/ODM Project Management",
      "choose2.logistics.item1": "Complete management of custom manufacturing projects from concept to delivery",
      "choose2.logistics.item2": "Quality control, factory coordination, and export/import handling",
      "choose2.consulting.title": "Market Expertise",
      "choose2.consulting.item1": "18 years living in China with fluency in Spanish, English, Mandarin, Italian, and Portuguese",
      "choose2.fairs.title": "International Fairs",
      "choose2.fairs.item1": "Attending China's largest trade fair gives you the chance to build relationships with around 25,000 suppliers and is the best place to look for business opportunities and bring them back to your country.",
      "choose2.it.title": "IT Services",
      "choose2.it.item1": "IT services encompass a broad range of technology solutions designed to support businesses in managing their digital infrastructure, improving efficiency, and driving growth.",

      // Operations Section
      "ops.subtitle": "Our Channel Services",
      "ops.title": "Tailored Freight Solutions for Every Business",
      "ops.tab1.title": "Air Freight Solution",
      "ops.tab1.desc": "End-to-end airfreight management for time-sensitive cargo",
      "ops.tab2.title": "Warehouse Inventory",
      "ops.tab2.desc": "Strategic storage and inventory management in China and LATAM",
      "ops.tab3.title": "By Road Instant Solution",
      "ops.tab3.desc": "Reliable road freight from factory to your door, anywhere in LATAM",
      "ops.card.title": "Parcel Information",
      "ops.card.desc": "Our freight service delivers seamless logistics solutions",
      "ops.card.moreDetails": "More Details",

      // Clients Section
      "clients.title": "Our Clients",

      // Marquee Section
      "marquee.transport": "Transport",
      "marquee.logistic": "Logistic",
      "marquee.globalExport": "Global Export",
      "marquee.globalImport": "Global Import",

      // FAQ Section
      "faq.subtitle": "FAQ",
      "faq.title": "Frequently Asked Questions",
      "faq.form.title": "Make An Appointment",
      "faq.form.name": "First Name *",
      "faq.form.email": "Email *",
      "faq.form.phone": "Phone *",
      "faq.form.freight": "Select Freight",
      "faq.form.message": "Message *",
      "faq.form.submit": "Send My Appointment",
      "faq.form.success": "Your appointment request sent successfully!",
      "faq.freight.sky": "Freight Sky",
      "faq.freight.ship": "Freight Ship",
      "faq.freight.road": "Freight Road",
      "faq.freight.rail": "Freight Rail",
      "faq.q1": "How can I track my shipment?",
      "faq.a1": "You can easily track your shipment by entering your Tracking ID into our online tracking tool. Once submitted, you'll receive real-time updates on your shipment's location and delivery.",
      "faq.q2": "How do I get in touch with customer support?",
      "faq.a2": "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects are completed.",
      "faq.q3": "What if my shipment is delayed or lost?",
      "faq.a3": "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects are completed.",
      "faq.q4": "Can I schedule recurring shipments?",
      "faq.a4": "Meeting project deadlines is a top priority. We understand the importance of timely delivery and have established a comprehensive approach to ensure that all projects are completed.",
      "faq.q5": "What is your pricing model?",
      "faq.a5": "Teachers play a central role in education. They impart knowledge, facilitate learning, and help students develop critical thinking skills. Teachers also contribute to the social and emotional development of students.",
      "svcCard.1.title": "International Transport",
      "svcCard.1.desc": "We provide comprehensive cargo services prioritizing precision, efficiency, and worldwide connectivity.",
      "svcCard.2.title": "Local Truck Transport",
      "svcCard.2.desc": "We provide comprehensive cargo services prioritizing precision, efficiency, and worldwide connectivity.",
      "svcCard.3.title": "Air Freight",
      "svcCard.3.desc": "Identify and evaluate suppliers to source goods and materials. We negotiate prices and terms to ensure the best deals for clients.",
      "svcCard.4.title": "Rail Personal Delivery",
      "svcCard.4.desc": "We provide comprehensive cargo services prioritizing precision, efficiency, and worldwide connectivity.",
      "svcCard.5.title": "Skyline Express",
      "svcCard.5.desc": "Full factory quality checks and inspections on production before shipment. We ensure compliance with safety and quality standards.",
      "svcCard.6.title": "E-commerce Logistics",
      "svcCard.6.desc": "We provide comprehensive cargo services prioritizing precision, efficiency, and worldwide connectivity.",

      // Sidebar
      "sidebar.description": "We are a reliable transport agency providing safe and timely logistics solutions. Our services cover local and long-distance transportation needs.",
      "sidebar.servicesTitle": "Our Services",
      "sidebar.airFreight": "Air Freight",
      "sidebar.warehousing": "Warehousing",
      "sidebar.seaFreight": "Sea Freight",
      "sidebar.roadFreight": "Road Freight",
      "sidebar.customsBrokerage": "Customs Brokerage",
      "sidebar.getQuote": "Get a Quote",

      // Testimonials Section
      "testimonials.subtitle": "Testimonials",
      "testimonials.title": "What Our Clients Say",
      "testimonials.quote1": "HiHub developed a custom premium product line for us, combining innovative design and efficient supply chain. An exceptional partner for Urbaneer!",
      "testimonials.quote2": "HiHub became Dogpaper's true partner – from sourcing eco-materials to customized packaging, they mastered every detail while meeting European standards.",
      "testimonials.quote3": "HiHub delivers customized solutions for Solarmex – from government lighting projects to industrial machinery. A trusted partner with Asian expertise.",
      "testimonials.quote4": "HiHub exceeded expectations on our complex turbine/compressor project. Their technical mastery was key to industrial success.",
      "testimonials.quote5": "HiHub and Eng. Manrique Rodriguez were crucial for our Costa Rican geothermal projects - technical excellence and true partnership.",
      "testimonials.quote6": "HiHub made my artificial plant dream a reality - turning startup fears into a thriving business.",

      // Servicios Section
      "servicios.subtitle": "Logistics + Business",
      "servicios.title": "Key Elements of International Trade",
      "servicios.maritime": "Maritime Freight",
      "servicios.air": "ESSENTIAL INCOTERMS",
      "servicios.ground": "Ground Transport",
      "servicios.consulting": "Air Consulting",
      "servicios.packaging": "Packaging & Handling",
      "servicios.planning": "SOURCING/MANUFACTURING",

      // Footer
      "footer.quickLinks": "Quick Links",
      "footer.home": "Home",
      "footer.about": "About",
      "footer.services": "Services",
      "footer.clients": "Clients",
      "footer.contact": "Contact",
    }
  },
  es: {
    translation: {
      // Navigation
      "nav.home": "Inicio",
      "nav.services": "Servicios",
      "nav.clients": "Clientes",
      "nav.contact": "Contacto",
      "nav.contactUs": "Contáctanos",
      "nav.portal": "Portal del Cliente",
      
      // Hero Section
      "hero.title": "Puente entre Costa Rica y China para Soluciones OEM y ODM",
      "hero.subtitle": "Conectamos empresas latinoamericanas con el poder manufacturero de China, protegidos por el marco legal de Hong Kong y estándares internacionales.",
      "hero.cta": "Comenzar",
      "hero.slider.subtitle": "Hub de Negocios OEM y ODM",
      "hero.slider.title": "Tu Puerta de Acceso a la Excelencia Manufacturera de China",
      "hero.slider.description": "18 años de experiencia en China, gestionando proyectos OEM/ODM con absoluta seguridad jurídica y transparencia financiera para empresas latinoamericanas.",
      "hero.slider.getStarted": "Comenzar",
      "hero.slider.howItWorks": "Cómo Funciona",
      "hero.slider.discover": "Descubre la Excelencia",
      
      // About Section
      "about.subtitle": "Nosotros",
      "about.title": "Lo Mejor de Ambos Mundos: Poder de China, Protección Occidental",
      "about.description1": "Fundada con 18 años viviendo en China y 14 años de experiencia en comercio internacional, HiHub Global Technologies Limited opera desde Hong Kong, dándote acceso directo a la manufactura china con la seguridad del common law británico y estándares financieros internacionales.",
      "about.description2": "Hablamos tu idioma (Español, Inglés, Mandarín, Italiano, Portugués) y entendemos ambas culturas. Nuestros contratos son ejecutables internacionalmente, nuestro capital fluye libremente y nuestras operaciones son completamente transparentes.",
      "about.feature1": "Marco legal de Hong Kong: robusto, independiente y transparente",
      "about.feature2": "18 años en China con oficinas en Yiwu y Shanghai",
      
      // Services Section
      "services.subtitle": "Nuestros Servicios",
      "services.title": "Gestión de Proyectos OEM y ODM desde China",
      "services.service1.title": "Gestión de Proyectos OEM/ODM",
      "services.service1.desc": "Gestión completa de tus proyectos de manufactura personalizada en China",
      "services.service2.title": "Seguridad Jurídica y Contractual",
      "services.service2.desc": "Contratos bajo common law de Hong Kong, ejecutables internacionalmente",
      "services.service3.title": "Control de Calidad y Acceso a Fábricas",
      "services.service3.desc": "Acceso directo a fábricas con riguroso control de calidad en cada etapa",
      "services.service4.title": "Gestión de Exportación e Importación",
      "services.service4.desc": "Manejo completo de logística y aduanas para América Latina",
      
      // Contact Section
      "contact.subtitle": "Contáctanos",
      "contact.title": "¿Listo para Comenzar tu Proyecto?",
      "contact.description": "Ponte en contacto con nuestro equipo para discutir tus necesidades de abastecimiento",
      "contact.email": "Correo",
      "contact.phone": "Teléfono",
      "contact.address": "Dirección",
      
      // Footer
      "footer.description": "Hihub Global Technologies Limited - Tu hub de negocios entre América Latina y China, registrada en Hong Kong (TAX: 73367194-000).",
      "footer.servicesTitle": "Nuestros Servicios",
      "footer.contactsTitle": "Contacto",
      "footer.seaFreight": "Flete Marítimo",
      "footer.airShipping": "Envío Aéreo",
      "footer.landTransport": "Transporte Terrestre",
      "footer.warehousing": "Almacenamiento",
      "footer.consulting": "Consultoría",
      "footer.customsClearance": "Despacho Aduanero",
      "footer.rights": "Todos los derechos reservados.",

      // About Section 2
      "about2.subtitle": "Por Qué Elegirnos",
      "about2.title": "Seguridad Jurídica y <br>Contractual Absoluta",
      "about2.description": "Operar desde Hong Kong te da protección bajo common law británico, flujo libre de capitales y estándares bancarios internacionales. Tus contratos son firmes, ejecutables y protegidos bajo un marco legal robusto.",
      "about2.check1": "Marco Legal de Hong Kong (Common Law)",
      "about2.check2": "Flujo Libre de Capital y Moneda Convertible (HKD)",
      "about2.check3": "Cumplimiento y Transparencia Internacional",
      "about2.check4": "Acceso Directo a Fábricas en China",
      "about2.btn": "10+ Años de Experiencia",
      "about2.callLabel": "Llámanos en Cualquier Momento:",
      "about2.yearsLabel": "Años de Excelencia",
      "about2.footer1.title": "China es la Fábrica del Mundo",
      "about2.footer1.desc": "Todo se hace en China - desde maquinaria industrial compleja hasta artículos cotidianos",
      "about2.footer2.title": "Lo Virtual No Sustituye lo Presencial",
      "about2.footer2.desc": "Asistimos a CIIE, Feria de Cantón y Feria Internacional de Yiwu",
      "about2.stats.clients": "Clientes",
      "about2.stats.satisfaction": "Satisfacción",
      "about2.stats.years": "Años en China",
      "about2.stats.clientSatisfaction": "Satisfacción del Cliente",
      "about2.stats.yearsExperience": "Años en China",

      // Services / Choose Section
      "services2.subtitle": "Nuestros Servicios",
      "services2.title": "Servicios de Importación Confiables para Empresas de Todos los Tamaños",
      "services2.viewDetails": "Ver Detalles",
      "services2.choose.subtitle": "Lo Que Ofrecemos",
      "services2.choose.title": "Servicios de Transporte que Nos Distinguen",
      "services2.seaFreight": "Flete Marítimo",
      "services2.airShipping": "Envío Aéreo",
      "services2.landTransport": "Transporte Terrestre",
      "services2.airConsulting": "Consultoría Aérea",
      "services2.packingHandling": "Embalaje y Manejo",
      "services2.floorPlanning": "Planificación de Espacio",

      // Choose Section 2 - Detailed Services
      "choose2.mainTitle": "¿Qué Significa Esto para Ti, Nuestro Cliente?",
      "choose2.mainSubtitle": "Entregamos el poder manufacturero de China envuelto en confianza occidental, reglas claras y protección legal.",
      "choose2.sourcing.title": "Seguridad Jurídica y Contractual",
      "choose2.sourcing.item1": "Contratos bajo common law de Hong Kong - familiares y predecibles para empresas occidentales",
      "choose2.sourcing.item2": "Acuerdos ejecutables internacionalmente con mecanismos claros de resolución de disputas",
      "choose2.quality.title": "Libertad Financiera y Transparencia",
      "choose2.quality.item1": "Flujo libre de capitales con moneda HKD convertible y banca de clase mundial",
      "choose2.quality.item2": "Estándares internacionales de reporting y compliance para total claridad",
      "choose2.logistics.title": "Gestión de Proyectos OEM/ODM",
      "choose2.logistics.item1": "Gestión completa de proyectos de manufactura personalizada desde el concepto hasta la entrega",
      "choose2.logistics.item2": "Control de calidad, coordinación con fábricas y manejo de exportación/importación",
      "choose2.consulting.title": "Experiencia en el Mercado",
      "choose2.consulting.item1": "18 años viviendo en China con fluidez en Español, Inglés, Mandarín, Italiano y Portugués",
      "choose2.fairs.title": "Ferias Internacionales",
      "choose2.fairs.item1": "Asistir a la feria comercial más grande de China te da la oportunidad de construir relaciones con alrededor de 25,000 proveedores y es el mejor lugar para buscar oportunidades de negocio y llevarlas a tu país.",
      "choose2.it.title": "Servicios de TI",
      "choose2.it.item1": "Los servicios de TI abarcan una amplia gama de soluciones tecnológicas diseñadas para apoyar a las empresas en la gestión de su infraestructura digital, mejorar la eficiencia e impulsar el crecimiento.",

      // Operations Section
      "ops.subtitle": "Nuestros Servicios",
      "ops.title": "Soluciones de Carga a Medida para Cada Empresa",
      "ops.tab1.title": "Solución de Flete Aéreo",
      "ops.tab1.desc": "Gestión integral de carga aérea para mercancía urgente",
      "ops.tab2.title": "Inventario en Almacén",
      "ops.tab2.desc": "Almacenamiento estratégico y gestión de inventario en China y LATAM",
      "ops.tab3.title": "Solución Inmediata por Carretera",
      "ops.tab3.desc": "Flete terrestre confiable desde la fábrica hasta tu puerta, en cualquier lugar de LATAM",
      "ops.card.title": "Información del Envío",
      "ops.card.desc": "Nuestro servicio de carga ofrece soluciones logísticas sin interrupciones",
      "ops.card.moreDetails": "Más Detalles",

      // Clients Section
      "clients.title": "Nuestros Clientes",

      // Marquee Section
      "marquee.transport": "Transporte",
      "marquee.logistic": "Logística",
      "marquee.globalExport": "Exportación Global",
      "marquee.globalImport": "Importación Global",

      // FAQ Section
      "faq.subtitle": "Preguntas",
      "faq.title": "Preguntas Frecuentes",
      "faq.form.title": "Solicitar una Cita",
      "faq.form.name": "Nombre *",
      "faq.form.email": "Correo Electrónico *",
      "faq.form.phone": "Teléfono *",
      "faq.form.freight": "Seleccionar Flete",
      "faq.form.message": "Mensaje *",
      "faq.form.submit": "Enviar Solicitud",
      "faq.form.success": "¡Tu solicitud de cita fue enviada con éxito!",
      "faq.freight.sky": "Flete Aéreo",
      "faq.freight.ship": "Flete Marítimo",
      "faq.freight.road": "Flete Terrestre",
      "faq.freight.rail": "Flete Ferroviario",
      "faq.q1": "¿Cómo puedo rastrear mi envío?",
      "faq.a1": "Puedes rastrear fácilmente tu envío ingresando tu ID de seguimiento en nuestra herramienta de rastreo en línea. Una vez enviado, recibirás actualizaciones en tiempo real sobre la ubicación y entrega de tu envío.",
      "faq.q2": "¿Cómo me comunico con el servicio al cliente?",
      "faq.a2": "Cumplir con los plazos del proyecto es nuestra máxima prioridad. Entendemos la importancia de la entrega oportuna y hemos establecido un enfoque integral para garantizar que todos los proyectos se completen a tiempo.",
      "faq.q3": "¿Qué pasa si mi envío se retrasa o se pierde?",
      "faq.a3": "Cumplir con los plazos del proyecto es nuestra máxima prioridad. Entendemos la importancia de la entrega oportuna y hemos establecido un enfoque integral para garantizar que todos los proyectos se completen a tiempo.",
      "faq.q4": "¿Puedo programar envíos recurrentes?",
      "faq.a4": "Cumplir con los plazos del proyecto es nuestra máxima prioridad. Entendemos la importancia de la entrega oportuna y hemos establecido un enfoque integral para garantizar que todos los proyectos se completen a tiempo.",
      "faq.q5": "¿Cuál es su modelo de precios?",
      "faq.a5": "Los expertos juegan un papel central en la logística. Transmiten conocimiento, facilitan el aprendizaje y ayudan a los clientes a desarrollar soluciones efectivas para sus necesidades de importación.",

      // Service Cards (slider)
      "svcCard.1.title": "Transporte Internacional",
      "svcCard.1.desc": "Brindamos servicios integrales de carga priorizando precisión, eficiencia y conectividad mundial.",
      "svcCard.2.title": "Transporte Local por Camión",
      "svcCard.2.desc": "Brindamos servicios integrales de carga priorizando precisión, eficiencia y conectividad mundial.",
      "svcCard.3.title": "Flete Aéreo",
      "svcCard.3.desc": "Identificamos y evaluamos proveedores para abastecerte de bienes y materiales. Negociamos precios y condiciones para obtener los mejores acuerdos.",
      "svcCard.4.title": "Entrega Personal por Ferrocarril",
      "svcCard.4.desc": "Brindamos servicios integrales de carga priorizando precisión, eficiencia y conectividad mundial.",
      "svcCard.5.title": "Skyline Express",
      "svcCard.5.desc": "Controles de calidad e inspecciones completas en fábrica antes del envío. Garantizamos el cumplimiento de normas de seguridad y calidad.",
      "svcCard.6.title": "Logística E-commerce",
      "svcCard.6.desc": "Brindamos servicios integrales de carga priorizando precisión, eficiencia y conectividad mundial.",

      // Sidebar
      "sidebar.description": "Somos una agencia de transporte confiable que brinda soluciones logísticas seguras y oportunas. Nuestros servicios cubren necesidades de transporte local y de larga distancia.",
      "sidebar.servicesTitle": "Nuestros Servicios",
      "sidebar.airFreight": "Flete Aéreo",
      "sidebar.warehousing": "Almacenamiento",
      "sidebar.seaFreight": "Flete Marítimo",
      "sidebar.roadFreight": "Flete Terrestre",
      "sidebar.customsBrokerage": "Correduría Aduanera",
      "sidebar.getQuote": "Solicitar Cotización",

      // Testimonials Section
      "testimonials.subtitle": "Testimonios",
      "testimonials.title": "Lo Que Dicen Nuestros Clientes",
      "testimonials.quote1": "HiHub desarrolló una línea de productos premium personalizada para nosotros, combinando diseño innovador y cadena de suministro eficiente. ¡Un socio excepcional para Urbaneer!",
      "testimonials.quote2": "HiHub se convirtió en el verdadero socio de Dogpaper: desde el abastecimiento de materiales ecológicos hasta el empaque personalizado, dominaron cada detalle cumpliendo con los estándares europeos.",
      "testimonials.quote3": "HiHub entrega soluciones personalizadas para Solarmex: desde proyectos de iluminación gubernamental hasta maquinaria industrial. Un socio confiable con experiencia asiática.",
      "testimonials.quote4": "HiHub superó las expectativas en nuestro complejo proyecto de turbinas/compresores. Su dominio técnico fue clave para el éxito industrial.",
      "testimonials.quote5": "HiHub y el Ing. Manrique Rodríguez fueron cruciales para nuestros proyectos geotérmicos en Costa Rica: excelencia técnica y verdadera asociación.",
      "testimonials.quote6": "HiHub hizo realidad mi sueño de plantas artificiales: convirtiendo los temores de una startup en un negocio próspero.",

      // Servicios Section
      "servicios.subtitle": "Logistica + Negocio",
      "servicios.title": "Elementos clave del comercio internacional",
      "servicios.maritime": "Flete Marítimo",
      "servicios.air": "INCOTERMS ESENCIALES",
      "servicios.ground": "Transporte Terrestre",
      "servicios.consulting": "Consultoría Aérea",
      "servicios.packaging": "Embalaje y Manejo",
      "servicios.planning": "SOURCING/FABRICACIÓN",

      // Footer
      "footer.quickLinks": "Enlaces Rápidos",
      "footer.home": "Inicio",
      "footer.about": "Nosotros",
      "footer.services": "Servicios",
      "footer.clients": "Clientes",
      "footer.contact": "Contacto",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    lng: 'es',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['htmlTag', 'navigator'],
      caches: []
    }
  });

// Update HTML lang attribute when language changes
i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
