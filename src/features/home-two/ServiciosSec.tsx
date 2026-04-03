import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ServiciosImg from '@/images/servicios.png';
import { Ship, Truck, Users, Package, LayoutGrid, MapPin, DollarSign, AlertTriangle, ArrowRight, X, Factory, Anchor, Globe, Zap, Scale, Flame } from 'lucide-react';
import TextAnimation from '@/components/elements/TextAnimation';
import FadeInAdvanced from '@/components/elements/FadeInAdvanced';

export default function ServiciosSec() {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const [showSourcingModal, setShowSourcingModal] = useState(false);

    const leftServices = [
        { titleKey: "servicios.air", icon: Globe },
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
                                    <div 
                                        className="single-choose d-flex align-items-center mb-3"
                                        onClick={() => {
                                            if (service.titleKey === 'servicios.air') setShowModal(true);
                                            if (service.titleKey === 'servicios.planning') setShowSourcingModal(true);
                                        }}
                                        style={{ cursor: (service.titleKey === 'servicios.air' || service.titleKey === 'servicios.planning') ? 'pointer' : 'default' }}
                                    >
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
                            <div 
                                className="single-choose d-flex align-items-center justify-content-between p-2" 
                                onClick={() => setShowModal(true)}
                                style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '8px', minHeight: '60px', cursor: 'pointer' }}
                            >
                                <h3 className="fw-bold mb-0 text-start" style={{ color: '#000', fontSize: '0.8rem', flexGrow: 1, marginRight: '8px' }}>
                                    {t('servicios.air')}
                                </h3>
                                <span 
                                    className="icon d-flex align-items-center justify-content-center"
                                    style={{ backgroundColor: '#FFC107', width: '40px', height: '40px', borderRadius: '6px' }}
                                >
                                    <Globe size={20} color="#000" strokeWidth={2} />
                                </span>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    <div className="col-6">
                        <FadeInAdvanced variant="fadeInUp" delay={0.1}>
                            <div 
                                className="single-choose d-flex align-items-center justify-content-between p-2" 
                                onClick={() => setShowSourcingModal(true)}
                                style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: '8px', minHeight: '60px', cursor: 'pointer' }}
                            >
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

            {/* Incoterms Modal */}
            {showModal && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '20px'
                    }}
                    onClick={() => setShowModal(false)}
                >
                    <div 
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            maxWidth: '600px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflow: 'auto',
                            position: 'relative'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setShowModal(false)}
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '8px',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            <X size={24} color="#000" />
                        </button>

                        {/* Modal content */}
                        <div style={{ padding: '32px' }}>
                            <h2 style={{ color: '#020e28', marginBottom: '24px', fontSize: '24px', fontWeight: 'bold' }}>
                                INCOTERMS ESENCIALES
                            </h2>

                            {/* EXW */}
                            <div style={{ marginBottom: '24px', padding: '20px', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                    <Factory size={20} color="#F7941D" />
                                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#020e28' }}>
                                        EXW — Ex Works (En fábrica)
                                    </h3>
                                </div>
                                <div style={{ marginLeft: '28px' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <MapPin size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}><strong>Entrega:</strong> en la fábrica del proveedor</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <DollarSign size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}>El cliente asume todos los costos (transporte, exportación y flete)</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <AlertTriangle size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}>Mayor riesgo y responsabilidad para el cliente</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                        <ArrowRight size={16} color="#F7941D" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}><strong>Uso:</strong> cuando tienes equipo o presencia en origen</p>
                                    </div>
                                </div>
                            </div>

                            {/* FOB */}
                            <div style={{ marginBottom: '24px', padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                    <Anchor size={20} color="#F7941D" />
                                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#020e28' }}>
                                        FOB — Free On Board
                                    </h3>
                                </div>
                                <div style={{ marginLeft: '28px' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <MapPin size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}><strong>Entrega:</strong> en el puerto (ej: Shanghai / Ningbo)</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <DollarSign size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}>El proveedor cubre hasta que la mercancía se carga al barco</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <AlertTriangle size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}>Buen balance entre control y costo</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                        <ArrowRight size={16} color="#F7941D" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151', fontWeight: 'bold' }}>El más recomendado</p>
                                    </div>
                                </div>
                            </div>

                            {/* CIF */}
                            <div style={{ padding: '20px', backgroundColor: '#f9fafb', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                    <Ship size={20} color="#F7941D" />
                                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#020e28' }}>
                                        CIF — Cost, Insurance & Freight
                                    </h3>
                                </div>
                                <div style={{ marginLeft: '28px' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <MapPin size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}><strong>Entrega:</strong> en el puerto de destino</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <DollarSign size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}>El proveedor cubre transporte y seguro</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <AlertTriangle size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}>Menor control sobre costos y logística</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                        <ArrowRight size={16} color="#F7941D" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}><strong>Uso:</strong> Más simple de ejecutar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Sourcing/Manufacturing Modal */}
            {showSourcingModal && (
                <div 
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '20px'
                    }}
                    onClick={() => setShowSourcingModal(false)}
                >
                    <div 
                        style={{
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            maxWidth: '700px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflow: 'auto',
                            position: 'relative'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setShowSourcingModal(false)}
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '8px',
                                transition: 'background-color 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            <X size={24} color="#000" />
                        </button>

                        {/* Modal content */}
                        <div style={{ padding: '32px' }}>
                            <h2 style={{ color: '#020e28', marginBottom: '8px', fontSize: '24px', fontWeight: 'bold' }}>
                                Sourcing / Fabricación
                            </h2>
                            <p style={{ color: '#6b7280', marginBottom: '24px', fontSize: '14px' }}>
                                Hihub Global Tech Limited
                            </p>

                            {/* Ready-made */}
                            <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#f0fdf4', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                    <Zap size={20} color="#F7941D" />
                                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#020e28' }}>
                                        Ready-made
                                    </h3>
                                </div>
                                <div style={{ marginLeft: '28px' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <ArrowRight size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}><strong>Enfoque HIHUB:</strong> Selección directa de fábrica</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                        <Zap size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151', fontWeight: 'bold' }}>Complejidad: Rápido</p>
                                    </div>
                                </div>
                            </div>

                            {/* OEM */}
                            <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#fef3c7', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                    <Scale size={20} color="#F7941D" />
                                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#020e28' }}>
                                        OEM
                                    </h3>
                                </div>
                                <div style={{ marginLeft: '28px' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <ArrowRight size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}><strong>Enfoque HIHUB:</strong> Personalización sobre base existente</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                        <Scale size={16} color="#f59e0b" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151', fontWeight: 'bold' }}>Complejidad: Medio</p>
                                    </div>
                                </div>
                            </div>

                            {/* ODM */}
                            <div style={{ padding: '20px', backgroundColor: '#fee2e2', borderRadius: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                    <Flame size={20} color="#F7941D" />
                                    <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#020e28' }}>
                                        ODM
                                    </h3>
                                </div>
                                <div style={{ marginLeft: '28px' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                        <ArrowRight size={16} color="#6b7280" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151' }}><strong>Enfoque HIHUB:</strong> Desarrollo desde cero</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                                        <Flame size={16} color="#ef4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <p style={{ margin: 0, color: '#374151', fontWeight: 'bold' }}>Complejidad: Alto</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
