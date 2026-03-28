import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { brandsData } from "@/data/brandsData";
import { useTranslation } from 'react-i18next';

export default function VideoSec2() {
    const { t } = useTranslation();
    return (
        <>
            {/* Brands Section Start */}
            <section id="clientes" className="brands-sec2" style={{ backgroundColor: '#020e28', paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="container ct-container brands-wrap2">
                    <h3 className="display-3 text-center" style={{ color: '#ffffff' }}>
                        {t('clients.title')}
                    </h3>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="brands-carousel swiper">
                                <div className="swiper-wrapper">
                                    <Swiper
                                        modules={[Autoplay, FreeMode]}
                                        loop={true}
                                        autoplay={{
                                            delay: 1,
                                            disableOnInteraction: false
                                        }}
                                        speed={5000}
                                        spaceBetween={80}
                                        slidesPerView="auto"
                                        freeMode={{
                                            enabled: true,
                                            momentum: false
                                        }}
                                        allowTouchMove={false}
                                        centeredSlides={false}
                                    >
                                        {brandsData.map((brand) => (
                                            <SwiperSlide key={brand.id} style={{ width: 'auto', background: 'transparent' }}>
                                                <div style={{ 
                                                    padding: '20px',
                                                    backgroundColor: '#ffffff',
                                                    border: '3px solid #FFC107',
                                                    borderRadius: '12px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    minWidth: '200px',
                                                    minHeight: '150px'
                                                }}>
                                                    <img 
                                                        src={brand.image} 
                                                        alt={brand.alt} 
                                                        style={{ 
                                                            height: '110px', 
                                                            width: 'auto', 
                                                            objectFit: 'contain',
                                                            display: 'block',
                                                            maxWidth: '180px'
                                                        }} 
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Brands Section End */}
        </>
    );
}
