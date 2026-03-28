import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import FooterBg from "@/images/cargo-ship-sailing-through-ocean.jpg";
import LogoW from "@/images/clients/logo-hihub-white.png";
import JarallaxSection from "../elements/JarallaxSection";
export default function Footer() {
    const { t } = useTranslation();
    return (
        <>
            {/* Footer Start */}
            <JarallaxSection as='footer' imgSrc={FooterBg} speed={.2} className="footer bg-cover jarallax" overlayOpacity={.9}>
                <div className="container">
                    {/* Desktop Layout */}
                    <div className="row footer-widgets d-none d-md-flex">
                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="footer-widget about-footer">
                                <div className="f-logo">
                                    <Link to="/">
                                        <img src={LogoW} alt="Logo" style={{ height: '60px', width: 'auto' }} />
                                    </Link>
                                </div>
                                <p>
                                    HIHUB GLOBAL TECHNOLOGIES
                                </p>
                                <p>
                                    {t('footer.description')}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                            <div className="footer-widget">
                                <h3 className="widget-title">{t('footer.quickLinks', 'Enlaces Rápidos')}</h3>
                                <ul>
                                    <li>
                                        <Link to="/#inicio">{t('footer.home', 'Inicio')}</Link>
                                    </li>
                                    <li>
                                        <Link to="/#nosotros">{t('footer.about', 'Nosotros')}</Link>
                                    </li>
                                    <li>
                                        <Link to="/#servicios">{t('footer.services', 'Servicios')}</Link>
                                    </li>
                                    <li>
                                        <Link to="/#clientes">{t('footer.clients', 'Clientes')}</Link>
                                    </li>
                                    <li>
                                        <Link to="/#contacto">{t('footer.contact', 'Contacto')}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="footer-widget contact-widget">
                                <h3 className="widget-title">{t('footer.contactsTitle')}</h3>
                                <p className="mb-1">info@hihubglobal.com</p>
                                <p className="mb-1">+86 18958322517</p>
                                <p className="mb-3">Shanghai, China</p>
                                <p className="mb-0">
                                    Room 286, Building 298, Lane 1589, Zhuguang Road, Qingpu District, Shanghai, China
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Compact Layout */}
                    <div className="d-md-none text-center py-4" style={{
                        background: '#020e28',
                        borderRadius: '12px',
                        padding: '1.5rem'
                    }}>
                        {/* Logo */}
                        <div className="mb-3">
                            <Link to="/">
                                <img src={LogoW} alt="Logo" style={{ height: '50px', width: 'auto' }} />
                            </Link>
                        </div>
                        
                        {/* Company Name & Description */}
                        <div className="mb-3">
                            <p className="mb-2" style={{ fontSize: '0.9rem', fontWeight: '600', color: '#ffffff' }}>
                                HIHUB GLOBAL TECHNOLOGIES
                            </p>
                            <p className="mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.4', color: '#ffffff' }}>
                                {t('footer.description')}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="mb-3">
                            <h4 className="mb-2" style={{ fontSize: '1rem', fontWeight: '600', color: '#ffffff' }}>{t('footer.quickLinks', 'Enlaces Rápidos')}</h4>
                            <div className="d-flex flex-wrap justify-content-center gap-2" style={{ fontSize: '0.85rem' }}>
                                <Link to="/#inicio" style={{ color: '#FFC107', textDecoration: 'none' }}>{t('footer.home', 'Inicio')}</Link>
                                <span style={{ color: '#999' }}>•</span>
                                <Link to="/#nosotros" style={{ color: '#FFC107', textDecoration: 'none' }}>{t('footer.about', 'Nosotros')}</Link>
                                <span style={{ color: '#999' }}>•</span>
                                <Link to="/#servicios" style={{ color: '#FFC107', textDecoration: 'none' }}>{t('footer.services', 'Servicios')}</Link>
                                <span style={{ color: '#999' }}>•</span>
                                <Link to="/#clientes" style={{ color: '#FFC107', textDecoration: 'none' }}>{t('footer.clients', 'Clientes')}</Link>
                                <span style={{ color: '#999' }}>•</span>
                                <Link to="/#contacto" style={{ color: '#FFC107', textDecoration: 'none' }}>{t('footer.contact', 'Contacto')}</Link>
                            </div>
                        </div>

                        {/* Contact Info - 2 Columns */}
                        <div className="mb-2">
                            <h4 className="mb-2" style={{ fontSize: '1rem', fontWeight: '600', color: '#ffffff' }}>{t('footer.contactsTitle')}</h4>
                            <div className="row g-2" style={{ fontSize: '0.8rem' }}>
                                <div className="col-6">
                                    <p className="mb-1" style={{ color: '#ffffff' }}>info@hihubglobal.com</p>
                                    <p className="mb-0" style={{ color: '#ffffff' }}>+86 18958322517</p>
                                </div>
                                <div className="col-6">
                                    <p className="mb-1" style={{ color: '#ffffff' }}>Shanghai, China</p>
                                    <p className="mb-0" style={{ fontSize: '0.75rem', lineHeight: '1.3', color: '#ffffff' }}>
                                        Room 286, Building 298, Lane 1589, Zhuguang Road, Qingpu District
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                            <p className="text-info copy-right mb-0 order-2 order-md-1">
                                © 2025 HiHub Global. {t('footer.rights')}
                            </p>
                        </div>
                    </div>
                </div>
            </JarallaxSection>
            {/* Footer End */}
        </>
    );
}
