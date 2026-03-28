import { useTranslation } from 'react-i18next';
import ServiciosImg from '@/images/servicios.png';
import { Ship, Plane, Truck, Users, Package, LayoutGrid } from 'lucide-react';
import TextAnimation from '@/components/elements/TextAnimation';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';

export default function ServiciosSec() {
    const { t } = useTranslation();

    const leftServices = [
        { titleKey: "servicios.air", icon: Plane },
        { titleKey: "servicios.planning", icon: LayoutGrid },
        { titleKey: "servicios.ground", icon: Truck }
    ];

    const rightServices = [
        { titleKey: "servicios.consulting", icon: Users },
        { titleKey: "servicios.packaging", icon: Package },
        { titleKey: "servicios.maritime", icon: Ship }
    ];

    return (
        <section 
            className="choose-sec2 bg-cover" 
            style={{ 
                backgroundColor: '#020e28',
                backgroundImage: 'url(/assets/choose-bg-DROpmhSL.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: 'clamp(1.5rem, 3vw, 5rem)',
                paddingBottom: 'clamp(1.5rem, 3vw, 5rem)'
            }}
        >
            <div className="container">
                <div className="sec-intro mx-auto text-center mb-3 mb-md-4">
                    <FadeInAdvanced variant="fadeInUp">
                        <span className="sub-title2 fadeInUp" style={{ color: '#FFC107' }}>
                            {t('servicios.subtitle', 'Lo Que Ofrecemos')}
                        </span>
                    </FadeInAdvanced>
                    <h2 className="sec-title" style={{ color: '#FFC107', fontSize: 'clamp(1.3rem, 4vw, 2.5rem)', wordWrap: 'break-word', hyphens: 'manual' }}>
                        <TextAnimation animationStyle="style1">
                            {t('servicios.title', 'Servicios de Transporte que Nos Distinguen')}
                        </TextAnimation>
                    </h2>
                </div>

                {/* Desktop: Left-Image-Right layout | Mobile: 2 columns x 3 rows */}
                <div className="row g-2 mt-5 align-items-center d-none d-lg-flex">
                    {/* Left Column Services - Desktop */}
                    <div className="col-lg-3 d-flex flex-column justify-content-center">
                        {leftServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <FadeInAdvanced key={`left-${index}`} variant="fadeInUp" delay={index * 0.1}>
                                    <div className="single-choose d-flex align-items-center mb-3">
                                        <h3 className="display-6 fw-bold mb-0" style={{ color: '#000', fontSize: 'clamp(0.85rem, 3vw, 1.1rem)' }}>
                                            {t(service.titleKey)}
                                        </h3>
                                        <span 
                                            className="icon d-flex align-items-center justify-content-center"
                                            style={{ 
                                                backgroundColor: '#FFC107',
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '8px',
                                                marginLeft: '10px'
                                            }}
                                        >
                                            <IconComponent size={24} color="#000" strokeWidth={2} />
                                        </span>
                                    </div>
                                </FadeInAdvanced>
                            );
                        })}
                    </div>

                    {/* Middle Column - Globe Image - Desktop only */}
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <FadeInAdvanced variant="fadeIn">
                            <div className="choose-media text-center">
                                <img 
                                    src={ServiciosImg} 
                                    alt="Global Logistics" 
                                    className="img-fluid"
                                    style={{ maxHeight: '400px' }}
                                />
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Right Column Services - Desktop */}
                    <div className="col-lg-3 reverse-choose d-flex flex-column justify-content-center">
                        {rightServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <FadeInAdvanced key={`right-${index}`} variant="fadeInUp" delay={index * 0.1}>
                                    <div className="single-choose d-flex align-items-center mb-3">
                                        <span 
                                            className="icon d-flex align-items-center justify-content-center"
                                            style={{ 
                                                backgroundColor: '#FFC107',
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '8px',
                                                marginRight: '10px',
                                                order: 1
                                            }}
                                        >
                                            <IconComponent size={24} color="#000" strokeWidth={2} />
                                        </span>
                                        <h3 className="display-6 fw-bold mb-0" style={{ color: '#000', fontSize: 'clamp(0.85rem, 3vw, 1.1rem)', order: 2 }}>
                                            {t(service.titleKey)}
                                        </h3>
                                    </div>
                                </FadeInAdvanced>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile: 2 columns x 3 rows grid */}
                <div className="row g-2 mt-2 d-lg-none">
                    {/* Row 1: Air + Planning */}
                    <div className="col-6">
                        <FadeInAdvanced variant="fadeInUp" delay={0}>
                            <div className="single-choose d-flex align-items-center justify-content-between p-2" style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '8px', minHeight: '60px' }}>
                                <h3 className="fw-bold mb-0 text-start" style={{ color: '#000', fontSize: '0.8rem', flexGrow: 1, marginRight: '8px' }}>
                                    {t('servicios.air')}
                                </h3>
                                <span 
                                    className="icon d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: '#FFC107', width: '40px', height: '40px', borderRadius: '6px' }}
                                >
                                    <Plane size={20} color="#000" strokeWidth={2} />
                                </span>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    <div className="col-6">
                        <FadeInAdvanced variant="fadeInUp" delay={0.1}>
                            <div className="single-choose d-flex align-items-center justify-content-between p-2" style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '8px', minHeight: '60px' }}>
                                <h3 className="fw-bold mb-0 text-start" style={{ color: '#000', fontSize: '0.8rem', flexGrow: 1, marginRight: '8px' }}>
                                    {t('servicios.planning')}
                                </h3>
                                <span 
                                    className="icon d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: '#FFC107', width: '40px', height: '40px', borderRadius: '6px' }}
                                >
                                    <LayoutGrid size={20} color="#000" strokeWidth={2} />
                                </span>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    
                    {/* Row 2: Ground + Consulting */}
                    <div className="col-6">
                        <FadeInAdvanced variant="fadeInUp" delay={0.2}>
                            <div className="single-choose d-flex align-items-center justify-content-between p-2" style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '8px', minHeight: '60px' }}>
                                <h3 className="fw-bold mb-0 text-start" style={{ color: '#000', fontSize: '0.8rem', flexGrow: 1, marginRight: '8px' }}>
                                    {t('servicios.ground')}
                                </h3>
                                <span 
                                    className="icon d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: '#FFC107', width: '40px', height: '40px', borderRadius: '6px' }}
                                >
                                    <Truck size={20} color="#000" strokeWidth={2} />
                                </span>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    <div className="col-6">
                        <FadeInAdvanced variant="fadeInUp" delay={0.3}>
                            <div className="single-choose d-flex align-items-center justify-content-between p-2" style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '8px', minHeight: '60px' }}>
                                <h3 className="fw-bold mb-0 text-start" style={{ color: '#000', fontSize: '0.8rem', flexGrow: 1, marginRight: '8px' }}>
                                    {t('servicios.consulting')}
                                </h3>
                                <span 
                                    className="icon d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: '#FFC107', width: '40px', height: '40px', borderRadius: '6px' }}
                                >
                                    <Users size={20} color="#000" strokeWidth={2} />
                                </span>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    
                    {/* Row 3: Packaging + Maritime */}
                    <div className="col-6">
                        <FadeInAdvanced variant="fadeInUp" delay={0.4}>
                            <div className="single-choose d-flex align-items-center justify-content-between p-2" style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '8px', minHeight: '60px' }}>
                                <h3 className="fw-bold mb-0 text-start" style={{ color: '#000', fontSize: '0.8rem', flexGrow: 1, marginRight: '8px' }}>
                                    {t('servicios.packaging')}
                                </h3>
                                <span 
                                    className="icon d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: '#FFC107', width: '40px', height: '40px', borderRadius: '6px' }}
                                >
                                    <Package size={20} color="#000" strokeWidth={2} />
                                </span>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    <div className="col-6">
                        <FadeInAdvanced variant="fadeInUp" delay={0.5}>
                            <div className="single-choose d-flex align-items-center justify-content-between p-2" style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '8px', minHeight: '60px' }}>
                                <h3 className="fw-bold mb-0 text-start" style={{ color: '#000', fontSize: '0.8rem', flexGrow: 1, marginRight: '8px' }}>
                                    {t('servicios.maritime')}
                                </h3>
                                <span 
                                    className="icon d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: '#FFC107', width: '40px', height: '40px', borderRadius: '6px' }}
                                >
                                    <Ship size={20} color="#000" strokeWidth={2} />
                                </span>
                            </div>
                        </FadeInAdvanced>
                    </div>
                </div>
            </div>
        </section>
    );
}
