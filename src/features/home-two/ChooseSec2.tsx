import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';
import TextAnimation from "@/components/elements/TextAnimation";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";
import { 
  Search, 
  ShieldCheck, 
  Ship, 
  Lightbulb, 
  Globe, 
  Monitor 
} from 'lucide-react';

export default function ChooseSec2() {
    const { t }: { t: TFunction } = useTranslation();

    const services = [
        {
            title: t('choose2.sourcing.title'),
            icon: Search,
            items: [
                t('choose2.sourcing.item1'),
                t('choose2.sourcing.item2')
            ]
        },
        {
            title: t('choose2.quality.title'),
            icon: ShieldCheck,
            items: [
                t('choose2.quality.item1'),
                t('choose2.quality.item2')
            ]
        },
        {
            title: t('choose2.logistics.title'),
            icon: Ship,
            items: [
                t('choose2.logistics.item1'),
                t('choose2.logistics.item2')
            ]
        },
        {
            title: t('choose2.consulting.title'),
            icon: Lightbulb,
            items: [
                t('choose2.consulting.item1')
            ]
        },
        {
            title: t('choose2.fairs.title'),
            icon: Globe,
            items: [
                t('choose2.fairs.item1')
            ]
        },
        {
            title: t('choose2.it.title'),
            icon: Monitor,
            items: [
                t('choose2.it.item1')
            ]
        }
    ];

    return (
        <>
            {/* Services Section Start */}
            <section
                className="services-detailed-sec sec-padding overflow-hidden"
                style={{ backgroundColor: '#020e28' }}
            >
                <div className="container ct-container">
                    <div className="sec-intro mx-auto text-center mb-5">
                        <span className="sub-title2 fadeInUp single" style={{ color: '#FFC107' }}>
                            {t('services2.subtitle', 'Our Services')}
                        </span>
                        <h2 className="sec-title text-center" style={{ color: '#FFC107', maxWidth: '900px', margin: '0 auto', lineHeight: '1.3', fontSize: 'clamp(1.4rem, 4vw, 2.5rem)' }}>
                            <TextAnimation animationStyle="style1">
                                {t('choose2.mainTitle')}
                            </TextAnimation>
                        </h2>
                        <p className="lead mt-3 text-center" style={{ color: '#ffffff', maxWidth: '800px', margin: '0 auto' }}>
                            {t('choose2.mainSubtitle')}
                        </p>
                    </div>

                    <div className="row g-4 align-items-stretch">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <FadeInAdvanced variant="fadeInUp" delay={index * 100}>
                                        <div 
                                            className="service-detail-card p-3 p-md-4 rounded-4 h-100 d-flex flex-column"
                                            style={{ 
                                                backgroundColor: '#020e28',
                                                border: '1px solid rgba(255, 193, 7, 0.5)',
                                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                                                minHeight: 'auto',
                                                transition: 'all 0.3s ease',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-5px)';
                                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 193, 7, 0.3)';
                                                e.currentTarget.style.borderLeft = '4px solid #FFC107';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
                                                e.currentTarget.style.borderLeft = '1px solid rgba(255, 193, 7, 0.5)';
                                            }}
                                        >
                                            <div className="d-flex align-items-center mb-3">
                                                <div 
                                                    className="icon-wrapper d-flex align-items-center justify-content-center rounded-3 me-3"
                                                    style={{ 
                                                        width: '40px', 
                                                        height: '40px', 
                                                        backgroundColor: 'rgba(255, 193, 7, 0.2)'
                                                    }}
                                                >
                                                    <IconComponent size={20} color="#FFC107" strokeWidth={2} />
                                                </div>
                                                <h3 className="h6 mb-0 fw-bold" style={{ color: '#FFC107', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)' }}>
                                                    {service.title}
                                                </h3>
                                            </div>
                                            <ul className="list-unstyled mb-0 flex-grow-1">
                                                {service.items.map((item, idx) => (
                                                    <li 
                                                        key={idx} 
                                                        className="mb-2 d-flex"
                                                        style={{ color: '#ffffff', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', lineHeight: '1.5' }}
                                                    >
                                                        <span className="me-2 flex-shrink-0" style={{ color: '#FFC107' }}>•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </FadeInAdvanced>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Services Section End */}
        </>
    );
}
