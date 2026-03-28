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
            className="choose-sec2 bg-cover sec-padding" 
            style={{ 
                backgroundColor: '#020e28',
                backgroundImage: 'url(/assets/choose-bg-DROpmhSL.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container">
                <div className="sec-intro mx-auto text-center">
                    <FadeInAdvanced variant="fadeInUp">
                        <span className="sub-title2 fadeInUp" style={{ color: '#FFC107' }}>
                            {t('servicios.subtitle', 'Lo Que Ofrecemos')}
                        </span>
                    </FadeInAdvanced>
                    <h2 className="sec-title" style={{ color: '#FFC107' }}>
                        <TextAnimation animationStyle="style1">
                            {t('servicios.title', 'Servicios de Transporte que Nos Distinguen')}
                        </TextAnimation>
                    </h2>
                </div>

                <div className="row g-1 mt-5 align-items-center">
                    {/* Left Column Services */}
                    <div className="col-lg-3 col-sm-6 d-flex flex-column justify-content-center">
                        {leftServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <FadeInAdvanced key={index} variant="fadeInUp" delay={index * 0.1}>
                                    <div className="single-choose d-flex align-items-center mb-3">
                                        <h3 className="display-6 fw-bold mb-0" style={{ color: '#000', fontSize: '1.1rem' }}>
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

                    {/* Middle Column - Globe Image */}
                    <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center">
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

                    {/* Right Column Services - reverse-choose makes lines point left */}
                    <div className="col-lg-3 col-sm-6 reverse-choose d-flex flex-column justify-content-center">
                        {rightServices.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <FadeInAdvanced key={index} variant="fadeInUp" delay={index * 0.1}>
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
                                        <h3 className="display-6 fw-bold mb-0" style={{ color: '#000', fontSize: '1.1rem', order: 2 }}>
                                            {t(service.titleKey)}
                                        </h3>
                                    </div>
                                </FadeInAdvanced>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
