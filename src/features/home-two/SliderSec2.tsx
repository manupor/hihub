import { Link } from "react-router-dom";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import HeroImg from "@/images/Hero.jpg";
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

export default function SliderSec2() {
    const { t } = useTranslation();
    const [activeSlide] = useState(0);

    return (
        <>
            <section id="inicio" className="slider-sec2 position-relative">
                <div className="hero-slider2 swiper">
                    <Swiper
                        modules={[EffectCreative]}
                        slidesPerView={1}
                        loop={false}
                        spaceBetween={0}
                        effect="creative"
                        speed={1500}
                        creativeEffect={{
                            prev: {
                                scale: 1.1,
                                opacity: 0,
                                translate: [0, 0, 0]
                            },
                            next: {
                                scale: 1.3,
                                opacity: 0,
                                translate: [0, 0, 0]
                            }
                        }}
                        className="swiper-wrapper"
                    >
                        {/* Slide 1 */}
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="slide-item position-relative">
                                    <div
                                        className="item-bg"
                                        style={{
                                            backgroundImage: `url(${HeroImg})`,
                                        }}
                                    ></div>
                                    <div className="slide-content">
                                        <FadeInAdvanced
                                            key={`slide-0-subtitle-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={200}
                                            triggerOnce={false}
                                        >
                                            <span className="sub-title h5">
                                                {t('hero.slider.subtitle')}
                                            </span>
                                        </FadeInAdvanced>

                                        <FadeInAdvanced
                                            key={`slide-0-title-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={400}
                                            triggerOnce={false}
                                        >
                                            <h1 className="display-1 fw-bold">
                                                {t('hero.slider.title')}
                                            </h1>
                                        </FadeInAdvanced>

                                        <FadeInAdvanced
                                            key={`slide-0-desc-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={600}
                                            triggerOnce={false}
                                        >
                                            <p>
                                                {t('hero.slider.description')}
                                            </p>
                                        </FadeInAdvanced>

                                        <FadeInAdvanced
                                            key={`slide-0-btn-${activeSlide}`}
                                            variant="fadeInUp"
                                            delay={800}
                                            triggerOnce={false}
                                        >
                                            <div className="d-sm-flex slide-cta gap-4">
                                                <Link
                                                    to="/quote"
                                                    className="btn btn-hover btn-primary"
                                                >
                                                    {t('hero.slider.getStarted')}
                                                    <i className="fa fa-arrow-right"></i>
                                                    <span></span>
                                                </Link>
                                                <Link
                                                    to="#how-it-works"
                                                    className="btn btn-outline"
                                                >
                                                    {t('hero.slider.howItWorks')}
                                                    <i className="fa fa-arrow-right"></i>
                                                    <span></span>
                                                </Link>
                                            </div>
                                        </FadeInAdvanced>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </section>
        </>
    );
}