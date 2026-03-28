import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import AboutM from '@/images/consultants-img-06.jpg';
import Af1 from '@/images/af-1.png';
import Af2 from '@/images/af-2.png';
import TextAnimation from '@/components/elements/TextAnimation';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';

export default function AboutSec2() {
   const { t } = useTranslation();
   const [clientsCount, setClientsCount] = useState(0);
   const [satisfactionCount, setSatisfactionCount] = useState(0);
   const [yearsCount, setYearsCount] = useState(0);
   const [hasAnimated, setHasAnimated] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting && !hasAnimated) {
                  setHasAnimated(true);
                  
                  // Animate clients count to 1000+
                  let currentClients = 0;
                  const targetClients = 1000;
                  const incrementClients = targetClients / 50;
                  const timerClients = setInterval(() => {
                     currentClients += incrementClients;
                     if (currentClients >= targetClients) {
                        setClientsCount(targetClients);
                        clearInterval(timerClients);
                     } else {
                        setClientsCount(Math.floor(currentClients));
                     }
                  }, 30);

                  // Animate satisfaction to 98%
                  let currentSatisfaction = 0;
                  const targetSatisfaction = 98;
                  const incrementSatisfaction = targetSatisfaction / 50;
                  const timerSatisfaction = setInterval(() => {
                     currentSatisfaction += incrementSatisfaction;
                     if (currentSatisfaction >= targetSatisfaction) {
                        setSatisfactionCount(targetSatisfaction);
                        clearInterval(timerSatisfaction);
                     } else {
                        setSatisfactionCount(Math.floor(currentSatisfaction));
                     }
                  }, 30);

                  // Animate years to 10+
                  let currentYears = 0;
                  const targetYears = 10;
                  const incrementYears = targetYears / 50;
                  const timerYears = setInterval(() => {
                     currentYears += incrementYears;
                     if (currentYears >= targetYears) {
                        setYearsCount(targetYears);
                        clearInterval(timerYears);
                     } else {
                        setYearsCount(Math.floor(currentYears));
                     }
                  }, 30);
               }
            });
         },
         { threshold: 0.3 }
      );

      const desktopElement = document.getElementById('stats-badges');
      const mobileElement = document.getElementById('mobile-stats-badges');
      
      if (desktopElement) {
         observer.observe(desktopElement);
      }
      if (mobileElement) {
         observer.observe(mobileElement);
      }

      return () => {
         if (desktopElement) {
            observer.unobserve(desktopElement);
         }
         if (mobileElement) {
            observer.unobserve(mobileElement);
         }
      };
   }, [hasAnimated]);
   return (
      <>
         {/* About Section Start */}
         <section id="nosotros" className="about-sec2 overflow-hidden">
            <div className="container">
               <div className="row g-4 gx-5 align-items-center">
                  {/* Left column - LogiXpress style: large image + years badge bottom-right */}
                  <div className="col-lg-6">
                     <FadeInAdvanced variant='fadeInLeft'>
                        <div style={{ marginTop: '-20px', position: 'relative' }}>
                           <img src={AboutM} className="img-fluid w-100" alt="HiHub Global Operations" style={{ borderRadius: '8px', objectFit: 'cover', maxHeight: '500px' }} />
                           <div 
                              id="stats-badges"
                              className="position-absolute bottom-0 start-0 end-0 m-3 d-none d-md-flex flex-wrap gap-2 justify-content-center"
                           >
                              <div 
                                 className="px-3 py-2 rounded-3 text-center"
                                 style={{
                                    backgroundColor: '#FFC107',
                                    color: '#000',
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                    minWidth: '120px'
                                 }}
                              >
                                 <div style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>{clientsCount}+</div>
                                 <div style={{ fontSize: '0.75rem' }}>{t('about2.stats.clients')}</div>
                              </div>
                              <div 
                                 className="px-3 py-2 rounded-3 text-center"
                                 style={{
                                    backgroundColor: '#FFC107',
                                    color: '#000',
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                    minWidth: '120px'
                                 }}
                              >
                                 <div style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>{satisfactionCount}%</div>
                                 <div style={{ fontSize: '0.75rem' }}>{t('about2.stats.clientSatisfaction')}</div>
                              </div>
                              <div 
                                 className="px-3 py-2 rounded-3 text-center"
                                 style={{
                                    backgroundColor: '#FFC107',
                                    color: '#000',
                                    fontWeight: 'bold',
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                    minWidth: '120px'
                                 }}
                              >
                                 <div style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>{yearsCount}+</div>
                                 <div style={{ fontSize: '0.75rem' }}>{t('about2.stats.yearsExperience')}</div>
                              </div>
                           </div>
                        </div>
                        {/* Mobile stats - below image in 3 columns */}
                        <div id="mobile-stats-badges" className="d-flex d-md-none gap-2 justify-content-center mt-3">
                           <div 
                              className="px-2 py-2 rounded-3 text-center flex-fill"
                              style={{
                                 backgroundColor: '#FFC107',
                                 color: '#000',
                                 fontWeight: 'bold',
                                 boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                 minWidth: '80px'
                              }}
                           >
                              <div style={{ fontSize: '1.2rem', lineHeight: '1.2' }}>{clientsCount}+</div>
                              <div style={{ fontSize: '0.65rem' }}>{t('about2.stats.clients')}</div>
                           </div>
                           <div 
                              className="px-2 py-2 rounded-3 text-center flex-fill"
                              style={{
                                 backgroundColor: '#FFC107',
                                 color: '#000',
                                 fontWeight: 'bold',
                                 boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                 minWidth: '80px'
                              }}
                           >
                              <div style={{ fontSize: '1.2rem', lineHeight: '1.2' }}>{satisfactionCount}%</div>
                              <div style={{ fontSize: '0.65rem' }}>{t('about2.stats.satisfaction')}</div>
                           </div>
                           <div 
                              className="px-2 py-2 rounded-3 text-center flex-fill"
                              style={{
                                 backgroundColor: '#FFC107',
                                 color: '#000',
                                 fontWeight: 'bold',
                                 boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                                 minWidth: '80px'
                              }}
                           >
                              <div style={{ fontSize: '1.2rem', lineHeight: '1.2' }}>{yearsCount}+</div>
                              <div style={{ fontSize: '0.65rem' }}>{t('about2.stats.years')}</div>
                           </div>
                        </div>
                     </FadeInAdvanced>
                  </div>
                  <div className="col-xl-6 ps-xl-4">
                     <div className="about-content text-center text-md-start">
                        <span className="sub-title2 fadeInUp single d-block text-center text-md-start" style={{ color: '#ffffff' }}>
                           {t('about2.subtitle')}
                        </span>
                        <h2 className="sec-title text-center text-md-start" style={{ color: '#ffffff', fontSize: 'clamp(1.3rem, 4vw, 2.5rem)', wordWrap: 'break-word', hyphens: 'manual' }}>
                           <TextAnimation animationStyle="style3">
                              {t('about2.title')}
                           </TextAnimation>
                        </h2>
                        <p className="lead text-center text-md-start" style={{ color: '#ffffff' }}>{t('about2.description')}</p>
                        <ul className="check d-flex flex-column align-items-center align-items-md-start" style={{ color: '#ffffff' }}>
                           <li>{t('about2.check1')}</li>
                           <li>{t('about2.check2')}</li>
                           <li>{t('about2.check3')}</li>
                           <li>{t('about2.check4')}</li>
                        </ul>
                     </div>
                  </div>
               </div>
               
               {/* Centered Footer Card - Mobile optimized */}
               <div className="row mt-5">
                  <div className="col-12">
                     <div className="about-footer d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 gap-sm-5 bg-shade round mx-auto px-3 py-3" style={{ maxWidth: '800px' }}>
                        <div className="af-item d-flex align-items-center gap-3" style={{ maxWidth: '100%' }}>
                           <img src={Af1} alt="transform" style={{ filter: 'brightness(0)', width: '40px', height: '40px', flexShrink: 0 }} />
                           <div className="af-info" style={{ minWidth: 0 }}>
                              <h3 className="h6 mb-1" style={{ color: '#000000', fontSize: '0.95rem' }}>{t('about2.footer1.title')}</h3>
                              <p className="mb-0" style={{ color: '#000000', fontSize: '0.8rem', lineHeight: '1.3' }}>{t('about2.footer1.desc')}</p>
                           </div>
                        </div>
                        <div className="af-item d-flex align-items-center gap-3" style={{ maxWidth: '100%' }}>
                           <img src={Af2} alt="transform" style={{ filter: 'brightness(0)', width: '40px', height: '40px', flexShrink: 0 }} />
                           <div className="af-info" style={{ minWidth: 0 }}>
                              <h3 className="h6 mb-1" style={{ color: '#000000', fontSize: '0.95rem' }}>{t('about2.footer2.title')}</h3>
                              <p className="mb-0" style={{ color: '#000000', fontSize: '0.8rem', lineHeight: '1.3' }}>{t('about2.footer2.desc')}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* About Section End */}
      </>

   );
}
