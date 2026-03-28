import { useEffect, useRef, useState } from "react";
import Flag from "@/images/flag.png";
import Menu from "@/components/headers/header-two/Menu";
import { type LanguageOpt } from "@/components/elements/LanguageSelect";

const language: LanguageOpt[] = [
    { flag: Flag, language: "English", code: "en" },
    { flag: Flag, language: "Español", code: "es" },
];
export default function Header() {
    const [isStick, setIsSticky] = useState<boolean>(false);
    const [currentLanguage, setCurrentLanguage] = useState<LanguageOpt>(language[0])
    const headerRef = useRef<HTMLElement>(null); 

    
    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const headerHeight = headerRef.current.offsetHeight;
                if (window.scrollY > headerHeight) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header ref={headerRef} className="header header-2">
                <div className="sticky-height"></div>
                <div className="header-wrapper">
                    {/* Navigation Menu Start */}
                    <div className={`header-nav-wrapper header-sticky ${isStick ? 'scroll-on' : ''}`}>
                        <nav className="navbar navbar-expand-xl">
                            <Menu currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
