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
      
      // Hero Section
      "hero.title": "Your Trusted Partner for Complex Projects in China",
      "hero.subtitle": "We connect your business with the best manufacturers and suppliers in China, managing the entire process from sourcing to delivery.",
      "hero.cta": "Get Started",
      "hero.slider.subtitle": "Professional Logistics Services",
      "hero.slider.title": "Flexible International Logistics Solution.",
      "hero.slider.description": "Professional logistics services designed to handle complex, high-value projects with unparalleled industry expertise in China and across Latin America.",
      "hero.slider.getStarted": "Get Started",
      "hero.slider.howItWorks": "How It Works",
      "hero.slider.discover": "Discover Excellence",
      
      // About Section
      "about.subtitle": "About Us",
      "about.title": "Your Trusted Partner for Complex Projects in China",
      "about.description1": "At HiHub Global, we specialize in comprehensive sourcing and logistics management for businesses looking to import equipment and products from China. With our local presence and deep market knowledge, we ensure quality, efficiency, and transparency at every step.",
      "about.description2": "Our team of experts handles everything from supplier selection and quality control to customs clearance and final delivery, allowing you to focus on growing your business.",
      "about.feature1": "Comprehensive sourcing management and quality control",
      "about.feature2": "Local presence to ensure compliance and quality standards",
      
      // Services Section
      "services.subtitle": "Our Services",
      "services.title": "Complete Solutions for Your Imports from China",
      "services.service1.title": "Sourcing & Supplier Selection",
      "services.service1.desc": "We identify and vet the best manufacturers for your specific needs",
      "services.service2.title": "Quality Control & Inspection",
      "services.service2.desc": "On-site inspections and quality assurance throughout production",
      "services.service3.title": "Logistics & Customs",
      "services.service3.desc": "End-to-end logistics management and customs clearance",
      "services.service4.title": "Project Management",
      "services.service4.desc": "Dedicated project managers for seamless coordination",
      
      // Contact Section
      "contact.subtitle": "Contact Us",
      "contact.title": "Ready to Start Your Project?",
      "contact.description": "Get in touch with our team to discuss your sourcing needs",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.address": "Address",
      
      // Footer
      "footer.description": "Your trusted partner for seamless logistics between China and Latin America.",
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
      "about2.subtitle": "About",
      "about2.title": "Why Businesses Trust Our Logistics Solution",
      "about2.description": "With more than a decade of experience providing solutions in China, HiHub Global helps companies navigate the region with complete confidence and precision — from sourcing to final delivery.",
      "about2.check1": "Fast & Reliable Delivery",
      "about2.check2": "Transparency in Every Step",
      "about2.check3": "Single Point of Contact",
      "about2.check4": "Cost-Effective Solutions",
      "about2.btn": "10+ Years Experience",
      "about2.callLabel": "Call Us Any Time:",
      "about2.yearsLabel": "Years of Excellence",
      "about2.footer1.title": "Global Logistics",
      "about2.footer1.desc": "Operations across China, LATAM and beyond",
      "about2.footer2.title": "Online Tracing",
      "about2.footer2.desc": "Real-time visibility for every shipment",
      "about2.stats.clients": "Clients",
      "about2.stats.satisfaction": "Satisfaction",
      "about2.stats.years": "Years Exp.",
      "about2.stats.clientSatisfaction": "Client Satisfaction",
      "about2.stats.yearsExperience": "Years of Experience",

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
      "choose2.mainTitle": "Strategic Solutions for Your Business",
      "choose2.mainSubtitle": "We provide strategic, high-impact solutions designed to meet the specific demands of your business.",
      "choose2.sourcing.title": "Sourcing and Procurement",
      "choose2.sourcing.item1": "Identify and evaluate suppliers to source goods and materials.",
      "choose2.sourcing.item2": "Negotiate prices and terms to ensure the best deals for clients.",
      "choose2.quality.title": "Quality Control and Inspection",
      "choose2.quality.item1": "Conduct quality checks and inspections on products before shipment.",
      "choose2.quality.item2": "Ensure compliance with safety and quality standards.",
      "choose2.logistics.title": "Logistics and Shipping",
      "choose2.logistics.item1": "Manage the transportation and logistics of goods from suppliers to clients.",
      "choose2.logistics.item2": "Handle customs clearance and documentation for international shipments.",
      "choose2.consulting.title": "Consulting Services",
      "choose2.consulting.item1": "Offer strategic advice on entering new markets, navigating regulations, and optimizing supply chains.",
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
      "servicios.subtitle": "WHAT WE OFFER",
      "servicios.title": "Transport Services That Set Us Apart",
      "servicios.maritime": "Maritime Freight",
      "servicios.air": "Air Shipping",
      "servicios.ground": "Ground Transport",
      "servicios.consulting": "Air Consulting",
      "servicios.packaging": "Packaging & Handling",
      "servicios.planning": "Space Planning",

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
      
      // Hero Section
      "hero.title": "Tu Socio de Confianza para Proyectos Complejos en China",
      "hero.subtitle": "Conectamos tu negocio con los mejores fabricantes y proveedores en China, gestionando todo el proceso desde el abastecimiento hasta la entrega.",
      "hero.cta": "Comenzar",
      "hero.slider.subtitle": "Servicios Profesionales de Logística",
      "hero.slider.title": "Solución Logística Internacional Flexible.",
      "hero.slider.description": "Servicios profesionales de logística diseñados para manejar proyectos complejos y de alto valor con experiencia industrial incomparable en China y América Latina.",
      "hero.slider.getStarted": "Comenzar",
      "hero.slider.howItWorks": "Cómo Funciona",
      "hero.slider.discover": "Descubre la Excelencia",
      
      // About Section
      "about.subtitle": "Nosotros",
      "about.title": "Tu Socio de Confianza para Proyectos Complejos en China",
      "about.description1": "En HiHub Global, nos especializamos en la gestión integral de abastecimiento y logística para empresas que buscan importar equipos y productos desde China. Con nuestra presencia local y profundo conocimiento del mercado, garantizamos calidad, eficiencia y transparencia en cada paso.",
      "about.description2": "Nuestro equipo de expertos maneja todo, desde la selección de proveedores y control de calidad hasta el despacho aduanero y la entrega final, permitiéndote enfocarte en hacer crecer tu negocio.",
      "about.feature1": "Gestión integral de abastecimiento y control de calidad",
      "about.feature2": "Presencia local para asegurar cumplimiento y estándares de calidad",
      
      // Services Section
      "services.subtitle": "Nuestros Servicios",
      "services.title": "Soluciones Completas para tus Importaciones desde China",
      "services.service1.title": "Abastecimiento y Selección de Proveedores",
      "services.service1.desc": "Identificamos y evaluamos los mejores fabricantes para tus necesidades específicas",
      "services.service2.title": "Control de Calidad e Inspección",
      "services.service2.desc": "Inspecciones en sitio y aseguramiento de calidad durante toda la producción",
      "services.service3.title": "Logística y Aduanas",
      "services.service3.desc": "Gestión logística integral y despacho aduanero de principio a fin",
      "services.service4.title": "Gestión de Proyectos",
      "services.service4.desc": "Gerentes de proyecto dedicados para una coordinación sin problemas",
      
      // Contact Section
      "contact.subtitle": "Contáctanos",
      "contact.title": "¿Listo para Comenzar tu Proyecto?",
      "contact.description": "Ponte en contacto con nuestro equipo para discutir tus necesidades de abastecimiento",
      "contact.email": "Correo",
      "contact.phone": "Teléfono",
      "contact.address": "Dirección",
      
      // Footer
      "footer.description": "Tu socio de confianza para logística integral entre China y América Latina.",
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
      "about2.subtitle": "Nosotros",
      "about2.title": "Por Qué las Empresas <br>Confían en Nuestra <br>Solución Logística",
      "about2.description": "Con más de una década de experiencia brindando soluciones en China, HiHub Global ayuda a las empresas a navegar la región con total confianza y precisión — desde el abastecimiento hasta la entrega final.",
      "about2.check1": "Entrega Rápida y Confiable",
      "about2.check2": "Transparencia en Cada Paso",
      "about2.check3": "Un Solo Punto de Contacto",
      "about2.check4": "Soluciones Rentables",
      "about2.btn": "10+ Años de Experiencia",
      "about2.callLabel": "Llámanos en Cualquier Momento:",
      "about2.yearsLabel": "Años de Excelencia",
      "about2.footer1.title": "Logística Global",
      "about2.footer1.desc": "Operaciones en China, LATAM y más allá",
      "about2.footer2.title": "Rastreo en Línea",
      "about2.footer2.desc": "Visibilidad en tiempo real de cada envío",
      "about2.stats.clients": "Clientes",
      "about2.stats.satisfaction": "Satisfacción",
      "about2.stats.years": "Años Exp.",
      "about2.stats.clientSatisfaction": "Satisfacción del Cliente",
      "about2.stats.yearsExperience": "Años de Experiencia",

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
      "choose2.mainTitle": "Soluciones Estratégicas para tu Negocio",
      "choose2.mainSubtitle": "Brindamos soluciones estratégicas de alto impacto diseñadas para satisfacer las demandas específicas de tu negocio.",
      "choose2.sourcing.title": "Abastecimiento y Adquisiciones",
      "choose2.sourcing.item1": "Identificar y evaluar proveedores para abastecerte de bienes y materiales.",
      "choose2.sourcing.item2": "Negociar precios y términos para garantizar los mejores acuerdos para los clientes.",
      "choose2.quality.title": "Control de Calidad e Inspección",
      "choose2.quality.item1": "Realizar controles de calidad e inspecciones en productos antes del envío.",
      "choose2.quality.item2": "Garantizar el cumplimiento de normas de seguridad y calidad.",
      "choose2.logistics.title": "Logística y Envío",
      "choose2.logistics.item1": "Gestionar el transporte y la logística de mercancías de proveedores a clientes.",
      "choose2.logistics.item2": "Manejar el despacho aduanero y la documentación para envíos internacionales.",
      "choose2.consulting.title": "Servicios de Consultoría",
      "choose2.consulting.item1": "Ofrecer asesoramiento estratégico para entrar en nuevos mercados, navegar regulaciones y optimizar cadenas de suministro.",
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
      "servicios.subtitle": "LO QUE OFRECEMOS",
      "servicios.title": "Servicios de Transporte que Nos Distinguen",
      "servicios.maritime": "Flete Marítimo",
      "servicios.air": "Envío Aéreo",
      "servicios.ground": "Transporte Terrestre",
      "servicios.consulting": "Consultoría Aérea",
      "servicios.packaging": "Embalaje y Manejo",
      "servicios.planning": "Planificación de Espacio",

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
