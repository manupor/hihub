import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AboutM from '@/images/consultants-img-06.jpg';
import Af1 from '@/images/af-1.png';
import Af2 from '@/images/af-2.png';
import CounterUp from '@/components/elements/CounterUp';
import TextAnimation from '@/components/elements/TextAnimation';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';

export default function AboutSec2() {
   const { t } = useTranslation();
   return (
      <>
         {/* About Section Start */}
         <section id="nosotros" className="about-sec2 overflow-hidden">
            <div className="container">
               <div className="row g-4 gx-5 align-items-center">
                  {/* Left column - LogiXpress style: large image + years badge bottom-right */}
                  <div className="col-lg-6">
                     <FadeInAdvanced variant='fadeInLeft'>
                        <div style={{ position: 'relative' }}>
                           <div style={{
                              position: 'absolute',
                              bottom: '20px',
                              right: '20px',
                              zIndex: 2,
                              backgroundColor: '#F7941D',
                              color: 'white',
                              padding: '24px 28px',
                              borderRadius: '8px',
                              textAlign: 'center',
                              minWidth: '160px'
                           }}>
                              <div style={{ fontSize: '52px', fontWeight: 'bold', lineHeight: 1, marginBottom: '6px' }}>
                                 <CounterUp ending={10} />+
                              </div>
                              <div style={{ fontSize: '14px', lineHeight: '1.5' }}>{t('about2.yearsLabel')}</div>
                           </div>
                           <img src={AboutM} className="img-fluid w-100" alt="HiHub Global Operations" style={{ borderRadius: '8px', objectFit: 'cover', maxHeight: '500px' }} />
                        </div>
                     </FadeInAdvanced>
                  </div>
                  <div className="col-xl-6 ps-xl-4">
                     <div className="about-content">
                        <span className="sub-title2 fadeInUp single" style={{ color: '#ffffff' }}>
                           {t('about2.subtitle')}
                        </span>
                        <h2 className="sec-title" style={{ color: '#ffffff' }}>
                           <TextAnimation animationStyle="style3">
                              {t('about2.title')}
                           </TextAnimation>
                        </h2>
                        <p className="lead" style={{ color: '#ffffff' }}>{t('about2.description')}</p>
                        <ul className="check" style={{ color: '#ffffff' }}>
                           <li>{t('about2.check1')}</li>
                           <li>{t('about2.check2')}</li>
                           <li>{t('about2.check3')}</li>
                           <li>{t('about2.check4')}</li>
                        </ul>
                        <div className="d-sm-flex align-items-center about-cta gap-5">
                           <Link to="/about" className="btn btn-primary">{t('about2.btn')} <i className="fa fa-arrow-right"></i><span style={{ top: '267.45px', left: '119.6px' }}></span> </Link>

                           <div className="quick-call d-flex align-items-center">
                              <span className="bg-dark icon-lg rounded-circle text-info"><i
                                 className="fa-solid fa-phone-volume"></i></span>
                              <div className="conn-txt ms-3">
                                 <p className="m-0" style={{ color: '#ffffff' }}>{t('about2.callLabel')}</p>
                                 <a className="h6 text-primary" href="tel:148359505285">148 359 505 285</a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="about-footer d-sm-flex align-items-center gap-5 bg-shade round mt-5">
                        <div className="af-item d-flex align-items-start gap-4">
                           <img src={Af1} alt="transform" style={{ filter: 'brightness(0)' }} />
                           <div className="af-info">
                              <h3 className="h5" style={{ color: '#000000' }}>{t('about2.footer1.title')}</h3>
                              <p style={{ color: '#000000' }}>{t('about2.footer1.desc')}</p>
                           </div>
                        </div>
                        <div className="af-item d-flex align-items-start gap-4">
                           <img src={Af2} alt="transform" style={{ filter: 'brightness(0)' }} />
                           <div className="af-info">
                              <h3 className="h5" style={{ color: '#000000' }}>{t('about2.footer2.title')}</h3>
                              <p style={{ color: '#000000' }}>{t('about2.footer2.desc')}</p>
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
