import { Link } from "react-router-dom";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TabIcon from "@/images/tab-icon.png";
import TabMain1 from "@/images/air.jpg";
import TabMain2 from "@/images/Warehousing.jpg";
import TabMain3 from "@/images/road.jpg";
import OptBg from "@/images/opt-bg.png";
import TextAnimation from "@/components/elements/TextAnimation"
export default function OperationSec() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('air');

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <>
            {/* Operation Section Start */}
            <section className="operation-sec position-relative sec-padding" style={{ backgroundColor: '#020e28' }}>
                <div
                    className="operate-bg jarallax bg-cover position-absolute"
                    data-speed="0.8"
                    style={{ backgroundImage: `url(${OptBg})` }}
                ></div>

                <div className="container ct-container">
                    <div className="row">
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
                                        <div className="opt-card rounded-4 p-4" style={{ backgroundColor: '#020e28' }}>
                                            <span>
                                                <img src={TabIcon} alt="Icon" />
                                            </span>
                                            <h3 className="mt-3 h5">
                                                {t('ops.card.title')}
                                            </h3>
                                            <p>
                                                {t('ops.card.desc')}
                                            </p>
                                            <Link
                                                to="/single-service"
                                                className="link-btn"
                                            >
                                                {t('ops.card.moreDetails')}
                                                <i className="fa fa-arrow-right"></i>
                                            </Link>
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
                                        <div className="opt-card rounded-4 p-4" style={{ backgroundColor: '#020e28' }}>
                                            <span>
                                                <img src={TabIcon} alt="Icon" />
                                            </span>
                                            <h3 className="mt-3 h5">
                                                {t('ops.card.title')}
                                            </h3>
                                            <p>
                                                {t('ops.card.desc')}
                                            </p>
                                            <Link
                                                to="/single-service"
                                                className="link-btn"
                                            >
                                                {t('ops.card.moreDetails')}
                                                <i className="fa fa-arrow-right"></i>
                                            </Link>
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
                                        <div className="opt-card rounded-4 p-4" style={{ backgroundColor: '#020e28' }}>
                                            <span>
                                                <img src={TabIcon} alt="Icon" />
                                            </span>
                                            <h3 className="mt-3 h5">
                                                {t('ops.tab3.title')}
                                            </h3>
                                            <p>
                                                {t('ops.card.desc')}
                                            </p>
                                            <Link
                                                to="/single-service"
                                                className="link-btn"
                                            >
                                                {t('ops.card.moreDetails')}
                                                <i className="fa fa-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Operation Section End */}
        </>
    );
}
