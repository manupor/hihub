import { useState } from "react";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import TextAnimation from "@/components/elements/TextAnimation";

export default function FaqSec() {
    const { t } = useTranslation();

    // Build translated FAQ data
    const faqData = [
        { id: 1, question: t('faq.q1'), answer: t('faq.a1') },
        { id: 2, question: t('faq.q2'), answer: t('faq.a2') },
        { id: 3, question: t('faq.q3'), answer: t('faq.a3') },
        { id: 4, question: t('faq.q4'), answer: t('faq.a4') },
        { id: 5, question: t('faq.q5'), answer: t('faq.a5') },
    ];

    // State to track which accordion item is open
    const [openItem, setOpenItem] = useState<number>(1);

    // Toggle accordion item
    const toggleAccordion = (id: number) => {
        setOpenItem(openItem === id ? 0 : id);
    };

    return (
        <>
            {/* FAQ Section Start */}
            <section id="faq" className="faq-sec overflow-hidden sec-padding position-relative">
                <div className="container">
                    <div className="sec-intro mx-auto text-center">
                        <span className="sub-title2 fadeInUp" style={{ color: '#ffffff' }}>
                            <TextAnimation animationStyle="style1">
                                {t('faq.subtitle')}
                            </TextAnimation>
                        </span>
                        <h2 className="sec-title" style={{ color: '#ffffff' }}>
                            <TextAnimation animationStyle="style1">
                                {t('faq.title')}
                            </TextAnimation>
                        </h2>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-8">
                            <div
                                className="faq-accordion rounded-4"
                                id="tv-accordion"
                            >
                                {faqData.map((faq) => (
                                    <div
                                        key={faq.id}
                                        className={`accordion-item ${openItem === faq.id ? 'active' : ''}`}
                                    >
                                        <h2
                                            className="accordion-header"
                                            id={`heading${faq.id}`}
                                        >
                                            <button
                                                className={`accordion-button display-5 ${openItem === faq.id ? '' : 'collapsed'}`}
                                                type="button"
                                                onClick={() => toggleAccordion(faq.id)}
                                                aria-expanded={openItem === faq.id}
                                                aria-controls={`collapse${faq.id}`}
                                            >
                                                {faq.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={`collapse${faq.id}`}
                                            className={`accordion-collapse collapse ${openItem === faq.id ? 'show' : ''}`}
                                            aria-labelledby={`heading${faq.id}`}
                                        >
                                            <motion.div
                                                initial={{ y: 20, opacity: 0 }}
                                                whileInView={{ y: 0, opacity: 1 }}
                                                transition={{
                                                    duration: 0.5,
                                                    ease: "easeOut"
                                                }}
                                                viewport={{ amount: 0.5 }}
                                                className="accordion-body">
                                                <p>{faq.answer}</p>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ Section End */}
        </>
    );
}