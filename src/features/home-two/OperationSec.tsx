import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import TabIcon from "@/images/tab-icon.png";
import TabMain1 from "@/images/air.jpg";
import TabMain2 from "@/images/Warehousing.jpg";
import TabMain3 from "@/images/road.jpg";
import TextAnimation from "@/components/elements/TextAnimation"
export default function OperationSec() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('air');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const slides = [
        {
            id: 'air',
            title: t('ops.tab1.title'),
            desc: t('ops.tab1.desc'),
            image: TabMain1,
            alt: 'Air freight cargo plane'
        },
        {
            id: 'byroad',
            title: t('ops.tab2.title'),
            desc: t('ops.tab2.desc'),
            image: TabMain2,
            alt: 'Warehouse inventory storage'
        },
        {
            id: 'road',
            title: t('ops.tab3.title'),
            desc: t('ops.tab3.desc'),
            image: TabMain3,
            alt: 'Road logistics delivery truck'
        }
    ];

    return (
        <>
            {/* Operation Section Start */}
            <section id="servicios" className="operation-sec position-relative sec-padding" style={{ backgroundColor: '#020e28' }}>

                <div className="container ct-container">
                    {/* Desktop Version */}
                    <div className="row d-none d-lg-flex">
                        <div className="col-lg-7 pe-lg-5">
                            <span className="sub-title2 fadeInUp single" style={{ color: '#FFC107' }}>
                                <TextAnimation animationStyle="style1">
                                    {t('ops.subtitle')}
                                </TextAnimation>
                            </span>
                            <h2 className="sec-title" style={{ color: '#FFC107' }}>
                                {t('ops.title')}
                            </h2>

                            <div
                                className="ct-tab nav flex-column nav-pills me-3"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <button
                                    className={`nav-link d-flex align-items-center justify-content-between ${activeTab === 'air' ? 'active' : ''}`}
                                    id="air-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="air"
                                    aria-selected={activeTab === 'air'}
                                    onClick={() => handleTabChange('air')}
                                >
                                    <span className="th-info text-start">
                                        <span className="h4 d-block">
                                            {t('ops.tab1.title')}
                                        </span>
                                        <span className="p d-block">
                                            {t('ops.tab1.desc')}
                                        </span>
                                    </span>
                                    <span className="icon-lg rounded-circle">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </button>

                                <button
                                    className={`nav-link d-flex align-items-center justify-content-between ${activeTab === 'byroad' ? 'active' : ''}`}
                                    id="byroad-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="byroad"
                                    aria-selected={activeTab === 'byroad'}
                                    onClick={() => handleTabChange('byroad')}
                                >
                                    <span className="th-info text-start">
                                        <span className="h4 d-block">
                                            {t('ops.tab2.title')}
                                        </span>
                                        <span className="p d-block">
                                            {t('ops.tab2.desc')}
                                        </span>
                                    </span>
                                    <span className="icon-lg rounded-circle">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </button>

                                <button
                                    className={`nav-link d-flex align-items-center justify-content-between ${activeTab === 'road' ? 'active' : ''}`}
                                    id="road-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="road"
                                    aria-selected={activeTab === 'road'}
                                    onClick={() => handleTabChange('road')}
                                >
                                    <span className="th-info text-start">
                                        <span className="h4 d-block">
                                            {t('ops.tab3.title')}
                                        </span>
                                        <span className="p d-block">
                                            {t('ops.tab3.desc')}
                                        </span>
                                    </span>
                                    <span className="icon-lg rounded-circle">
                                        <i className="fa fa-arrow-right"></i>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div
                                className="tab-content"
                                id="v-pills-tabContent"
                            >
                                <div
                                    className={`tab-pane fade ${activeTab === 'air' ? 'show active' : ''}`}
                                    id="air"
                                    role="tabpanel"
                                    aria-labelledby="air-tab"
                                >
                                    <div className="operation-content">
                                        <div className="operation-thumb">
                                            <img
                                                src={TabMain1}
                                                className="img-fluid"
                                                alt="Air freight cargo plane"
                                            />
                                        </div>
                                        <div className="opt-card rounded-4 p-4" style={{ backgroundColor: '#020e28', marginTop: '20px' }}>
                                            <span>
                                                <img src={TabIcon} alt="Icon" />
                                            </span>
                                            <h3 className="mt-3 h5" style={{ color: '#FFC107' }}>
                                                {t('ops.card.title')}
                                            </h3>
                                            <p style={{ color: '#ffffff' }}>
                                                {t('ops.card.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade ${activeTab === 'byroad' ? 'show active' : ''}`}
                                    id="byroad"
                                    role="tabpanel"
                                    aria-labelledby="byroad-tab"
                                >
                                    <div className="operation-content">
                                        <div className="operation-thumb">
                                            <img
                                                src={TabMain2}
                                                className="img-fluid"
                                                alt="Warehouse inventory storage"
                                            />
                                        </div>
                                        <div className="opt-card rounded-4 p-4" style={{ backgroundColor: '#020e28', marginTop: '20px' }}>
                                            <span>
                                                <img src={TabIcon} alt="Icon" />
                                            </span>
                                            <h3 className="mt-3 h5" style={{ color: '#FFC107' }}>
                                                {t('ops.card.title')}
                                            </h3>
                                            <p style={{ color: '#ffffff' }}>
                                                {t('ops.card.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`tab-pane fade ${activeTab === 'road' ? 'show active' : ''}`}
                                    id="road"
                                    role="tabpanel"
                                    aria-labelledby="road-tab"
                                >
                                    <div className="operation-content">
                                        <div className="operation-thumb">
                                            <img
                                                src={TabMain3}
                                                className="img-fluid"
                                                alt="Road logistics delivery truck"
                                            />
                                        </div>
                                        <div className="opt-card rounded-4 p-4" style={{ backgroundColor: '#020e28', marginTop: '20px' }}>
                                            <span>
                                                <img src={TabIcon} alt="Icon" />
                                            </span>
                                            <h3 className="mt-3 h5" style={{ color: '#FFC107' }}>
                                                {t('ops.tab3.title')}
                                            </h3>
                                            <p style={{ color: '#ffffff' }}>
                                                {t('ops.card.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Carousel Version */}
                    <div className="d-lg-none">
                        <div className="text-center mb-4">
                            <span className="sub-title2 fadeInUp single" style={{ color: '#FFC107' }}>
                                <TextAnimation animationStyle="style1">
                                    {t('ops.subtitle')}
                                </TextAnimation>
                            </span>
                            <h2 className="sec-title" style={{ color: '#FFC107', fontSize: 'clamp(1.3rem, 4vw, 2.5rem)' }}>
                                {t('ops.title')}
                            </h2>
                        </div>

                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={20}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            style={{ paddingBottom: '40px' }}
                        >
                            {slides.map((slide) => (
                                <SwiperSlide key={slide.id}>
                                    <div className="operation-content px-2">
                                        <div className="mb-3 p-4 rounded-3" style={{ 
                                            backgroundColor: 'rgba(255, 255, 255, 0.07)', 
                                            border: '1px solid rgba(255, 255, 255, 0.07)',
                                            borderLeft: '5px solid #FFC107'
                                        }}>
                                            <h3 className="h6 mb-3" style={{ color: '#ffffff' }}>
                                                {slide.title}
                                            </h3>
                                            <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem' }}>
                                                {slide.desc}
                                            </p>
                                        </div>
                                        <div className="operation-thumb mb-3">
                                            <img
                                                src={slide.image}
                                                className="img-fluid rounded-3"
                                                alt={slide.alt}
                                                style={{ width: '100%', height: 'auto' }}
                                            />
                                        </div>
                                        <div className="opt-card rounded-3 p-3" style={{ backgroundColor: '#020e28', marginTop: '0' }}>
                                            <span>
                                                <img src={TabIcon} alt="Icon" style={{ width: '30px', height: '30px' }} />
                                            </span>
                                            <h4 className="mt-2 h6" style={{ color: '#FFC107' }}>
                                                {t('ops.card.title')}
                                            </h4>
                                            <p className="mb-0" style={{ color: '#ffffff', fontSize: '0.85rem' }}>
                                                {t('ops.card.desc')}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* Operation Section End */}
        </>
    );
}
