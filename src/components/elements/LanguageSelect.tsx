import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export type LanguageOpt = {
    id?: number;
    flag: string;
    language: string;
    code: string;
}

interface CustomSelectProps {
    languageArray?: LanguageOpt[];
    languageItem?: LanguageOpt;
    onChange?: (value: LanguageOpt) => void;
}
const defaultOptions: LanguageOpt[] = [
    { flag: "🇺🇸", language: "English", code: "en" },
    { flag: "🇪🇸", language: "Español", code: "es" },
];

const LanguageSelect: React.FC<CustomSelectProps> = ({
    languageArray = defaultOptions,
    languageItem,
    onChange,
}) => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = React.useState(false);
    
    // Initialize selected based on current i18n language
    const getInitialLanguage = () => {
        if (languageItem) return languageItem;
        const currentLang = i18n.language || 'es';
        return languageArray.find(lang => lang.code === currentLang) || languageArray[1]; // Default to Spanish
    };
    
    const [selected, setSelected] = React.useState<LanguageOpt>(getInitialLanguage());
    const selectRef = useRef<HTMLDivElement>(null);
    
    // Update selected when i18n language changes
    useEffect(() => {
        const currentLang = i18n.language || 'es';
        const matchingLang = languageArray.find(lang => lang.code === currentLang);
        if (matchingLang && matchingLang.code !== selected.code) {
            setSelected(matchingLang);
        }
    }, [i18n.language, languageArray, selected.code]);
    
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (item: LanguageOpt) => {
        setSelected(item);
        onChange?.(item);
        setIsOpen(false);
        
        // Change i18n language for entire website
        i18n.changeLanguage(item.code);
        
        // Update HTML lang attribute for chat widget detection
        document.documentElement.lang = item.code;
        
        // Trigger storage event to notify chat widget
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: item.code } }));
    };

    return (
        <div className="dropdown lang-select" ref={selectRef}>
            <Link className={`dropdown-toggle d-flex gap-1 align-items-center ${isOpen ? "show" : ""}`}
                to="#"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span style={{ fontSize: '20px' }}>{selected.flag}</span>
                <span style={{ color: 'white', fontFamily: 'inherit' }}>{selected.language}</span>
            </Link>

            <ul className={`dropdown-menu ${isOpen ? "show" : ""}`} style={{ position: "absolute", margin: "0px", transform: "translate(0px, 5px)" }}>
                {
                    languageArray.map((item: LanguageOpt, i) => (
                        <li key={i}>
                            <Link to="#" className="dropdown-item"
                                onClick={() => handleSelect(item)}
                            >
                                <span style={{ fontSize: '20px', marginRight: '8px' }}>{item.flag}</span>
                                <span style={{ color: '#1a1a2e', fontFamily: 'inherit' }}>{item?.language}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default LanguageSelect;

