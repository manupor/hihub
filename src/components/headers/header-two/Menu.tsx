import { Link } from "react-router-dom";
import LogoW from "@/images/clients/logo-hihub-white.png";
import { useContext } from 'react';
import ProjectContext from '@/components/context/ProjectContext';
import MenuList from "@/components/MenuList";
import LanguageSelect, { type LanguageOpt } from "@/components/elements/LanguageSelect";
import { useTranslation } from "react-i18next";

interface MenuProps {
    currentLanguage: LanguageOpt;
    setCurrentLanguage: (language: LanguageOpt) => void;
}

export default function Menu({ currentLanguage, setCurrentLanguage }: MenuProps) {
    const { t } = useTranslation();
    const context = useContext(ProjectContext);
    if (!context) throw new Error("Context Null");
    const { isMobile, setIsMobile } = context;
    return (
        <>
            <div className="container ct-container">
                <Link to="/" className="navbar-brand">
                    <img src={LogoW} alt="HiHub Global Logo" className="img-fluid" style={{ height: '50px', width: 'auto', marginLeft: '20px' }} />
                </Link>
                <button
                    onClick={() => setIsMobile(pre => !pre)}
                    className="navbar-toggler offcanvas-nav-btn"
                    type="button"
                    aria-label="Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="12"
                        fill="none"
                        viewBox="0 0 14 12"
                    >
                        <path
                            fill="#020e28"
                            d="M0 .75Q.063.063.75 0h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 1.437 0 .75m0 5Q.063 5.063.75 5h12.5q.687.063.75.75-.063.687-.75.75H.75Q.063 6.437 0 5.75m13.25 5.75H.75q-.687-.063-.75-.75.063-.687.75-.75h12.5q.687.063.75.75-.063.687-.75.75"
                        />
                    </svg>
                </button>
                <div className="nav-cta d-none d-md-flex  order-lg-3">
                    <div className="d-flex align-items-center justify-content-between gap-3">
                        <LanguageSelect languageItem={currentLanguage} onChange={setCurrentLanguage} />
                        <button 
                            onClick={() => window.dispatchEvent(new CustomEvent('openChatWidget'))}
                            className="btn btn-primary btn-hover"
                        >
                            {t('nav.contactUs')} <i className="fa fa-arrow-right"></i>
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className={`offcanvas offcanvas-start offcanvas-nav ${isMobile ? 'show' : ''}`}>
                    <div className="offcanvas-header">
                        <Link to="/" className="text-inverse">
                            <img src={LogoW} alt="HiHub Global Logo" style={{ height: '50px', width: 'auto' }} />
                        </Link>
                        <button
                            onClick={() => setIsMobile(pre => !pre)}
                            type="button"
                            className="btn-close bg-primary"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="offcanvas-body pt-0 align-items-center justify-content-between">
                        <MenuList />
                        
                        {/* Mobile CTA Section - Mirrors Desktop Features */}
                        <div className="mobile-cta-section d-xl-none mt-4 pt-4 border-top border-secondary">
                            <div className="d-flex flex-column gap-3">
                                {/* Language Selector */}
                                <div className="mobile-language-selector">
                                    <LanguageSelect languageItem={currentLanguage} onChange={setCurrentLanguage} />
                                </div>
                                
                                {/* Primary CTA */}
                                <button 
                                    onClick={() => {
                                        window.dispatchEvent(new CustomEvent('openChatWidget'));
                                        setIsMobile(false);
                                    }}
                                    className="btn btn-primary btn-hover w-100 py-3 fs-6 fw-semibold"
                                >
                                    {t('nav.contactUs')} <i className="fa fa-arrow-right ms-2"></i>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
