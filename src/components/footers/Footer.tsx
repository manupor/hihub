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
                    <div className="row footer-widgets">
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
                                        <Link to="/#faq">{t('footer.faq', 'FAQ')}</Link>
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
