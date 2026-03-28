"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Quote } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  location: string;
  title: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
        style={{ backgroundColor: '#020e28' }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, location, title }, i) => (
                <div 
                  className="p-8 rounded-2xl border max-w-xs w-full" 
                  key={i}
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'rgba(255, 193, 7, 0.3)',
                    boxShadow: '0 4px 20px rgba(255, 193, 7, 0.1)'
                  }}
                >
                  <div className="mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(255, 193, 7, 0.2)' }}
                    >
                      <Quote size={20} color="#FFC107" />
                    </div>
                  </div>
                  <div style={{ color: '#ffffff', fontSize: '0.9rem', lineHeight: '1.6', fontStyle: 'italic' }}>
                    "{text}"
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <div 
                      className="h-10 w-10 rounded-full flex items-center justify-center font-bold"
                      style={{ backgroundColor: '#FFC107', color: '#000' }}
                    >
                      {name.charAt(0)}
                    </div>
                    <div className="flex flex-col">
                      <div style={{ color: '#FFC107', fontWeight: 600, fontSize: '0.9rem' }}>
                        {name} – {location}
                      </div>
                      <div style={{ color: '#ffffff', fontSize: '0.8rem', opacity: 0.8 }}>
                        {title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export default function TestimonialsSec() {
  const { t } = useTranslation();

  const testimonials: Testimonial[] = [
    {
      text: t('testimonials.quote1', "HiHub desarrolló una línea de productos premium personalizada para nosotros, combinando diseño innovador y cadena de suministro eficiente. ¡Un socio excepcional para Urbaneer!"),
      name: "Orietta Carranza",
      location: "Costa Rica",
      title: "Founder of Urbaneer"
    },
    {
      text: t('testimonials.quote2', "HiHub se convirtió en el verdadero socio de Dogpaper: desde el abastecimiento de materiales ecológicos hasta el empaque personalizado, dominaron cada detalle cumpliendo con los estándares europeos."),
      name: "Stefan Oelti",
      location: "Germany",
      title: "Founder of Dogpaper"
    },
    {
      text: t('testimonials.quote3', "HiHub entrega soluciones personalizadas para Solarmex: desde proyectos de iluminación gubernamental hasta maquinaria industrial. Un socio confiable con experiencia asiática."),
      name: "Carlos Cabañas",
      location: "México",
      title: "Founder of Solarmex"
    },
    {
      text: t('testimonials.quote4', "HiHub superó las expectativas en nuestro complejo proyecto de turbinas/compresores. Su dominio técnico fue clave para el éxito industrial."),
      name: "Anthony Canaves",
      location: "Venezuela",
      title: "Industrial Systems Specialist"
    },
    {
      text: t('testimonials.quote5', "HiHub y el Ing. Manrique Rodríguez fueron cruciales para nuestros proyectos geotérmicos en Costa Rica: excelencia técnica y verdadera asociación."),
      name: "Edgar Pérez",
      location: "Costa Rica",
      title: "Director of DYMSA"
    },
    {
      text: t('testimonials.quote6', "HiHub hizo realidad mi sueño de plantas artificiales: convirtiendo los temores de una startup en un negocio próspero."),
      name: "Karol Gamboa",
      location: "Costa Rica",
      title: "Founder of Aruma Interiors"
    }
  ];

  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);

  return (
    <section className="sec-padding" style={{ backgroundColor: '#020e28' }}>
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center mb-10"
        >
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mt-5"
            style={{ color: '#FFC107' }}
          >
            {t('testimonials.title', 'Lo Que Dicen Nuestros Clientes')}
          </h2>
        </motion.div>

        <div 
          className="flex justify-center gap-6 mt-10 max-h-[600px] overflow-hidden"
          style={{ 
            maskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)'
          }}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={25} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
        </div>
      </div>
    </section>
  );
}
