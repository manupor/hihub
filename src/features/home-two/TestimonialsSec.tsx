import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import FadeInAdvanced from "@/components/elements/FadeInAdvanced";

export default function TestimonialsSec() {
    const testimonials = [
        {
            quote: "HiHub developed a custom premium product line for us, combining innovative design and efficient supply chain. An exceptional partner for Urbaneer!",
            name: "Orietta Carranza",
            location: "Costa Rica",
            title: "Founder of Urbaneer"
        },
        {
            quote: "HiHub became Dogpaper's true partner – from sourcing eco-materials to customized packaging, they mastered every detail while meeting European standards.",
            name: "Stefan Oelti",
            location: "Germany",
            title: "Founder of Dogpaper"
        },
        {
            quote: "HiHub delivers customized solutions for Solarmex – from government lighting projects to industrial machinery. A trusted partner with Asian expertise.",
            name: "Carlos Cabañas",
            location: "México",
            title: "Founder of Solarmex"
        },
        {
            quote: "HiHub exceeded expectations on our complex turbine/compressor project. Their technical mastery was key to industrial success.",
            name: "Anthony Canaves",
            location: "Venezuela",
            title: "Industrial Systems Specialist"
        },
        {
            quote: "HiHub and Eng. Manrique Rodriguez were crucial for our Costa Rican geothermal projects - technical excellence and true partnership.",
            name: "Edgar Pérez",
            location: "Costa Rica",
            title: "Director of DYMSA"
        },
        {
            quote: "HiHub made my artificial plant dream a reality - turning startup fears into a thriving business.",
            name: "Karol Gamboa",
            location: "Costa Rica",
            title: "Founder of Aruma Interiors"
        }
    ];

    return (
        <>
            <section className="testimonials-sec sec-padding" style={{ backgroundColor: '#020e28' }}>
                <div className="container ct-container">
                    <div className="sec-intro mx-auto text-center mb-5">
                        <span className="sub-title2 fadeInUp single" style={{ color: '#FFC107' }}>
                            Testimonials
                        </span>
                        <h2 className="sec-title text-center" style={{ color: '#FFC107', maxWidth: '900px', margin: '0 auto' }}>
                            What Our Clients Say
                        </h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                loop={true}
                                spaceBetween={30}
                                speed={800}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1
                                    },
                                    768: {
                                        slidesPerView: 2
                                    },
                                    1200: {
                                        slidesPerView: 3
                                    }
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <SwiperSlide key={index}>
                                        <FadeInAdvanced variant="fadeInUp" delay={index * 100}>
                                            <div 
                                                className="testimonial-card p-4 rounded-4 h-100 d-flex flex-column"
                                                style={{ 
                                                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                                    border: '1px solid rgba(255, 193, 7, 0.3)',
                                                    minHeight: '320px',
                                                    position: 'relative'
                                                }}
                                            >
                                                <div 
                                                    className="quote-icon mb-3"
                                                    style={{
                                                        width: '40px',
                                                        height: '40px',
                                                        backgroundColor: 'rgba(255, 193, 7, 0.2)',
                                                        borderRadius: '8px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Quote size={20} color="#FFC107" />
                                                </div>
                                                
                                                <p 
                                                    className="testimonial-text mb-4 flex-grow-1"
                                                    style={{ 
                                                        color: '#ffffff', 
                                                        fontSize: '0.95rem', 
                                                        lineHeight: '1.6',
                                                        fontStyle: 'italic'
                                                    }}
                                                >
                                                    "{testimonial.quote}"
                                                </p>
                                                
                                                <div className="testimonial-author">
                                                    <h4 className="h6 mb-1 fw-bold" style={{ color: '#FFC107' }}>
                                                        {testimonial.name} – {testimonial.location}
                                                    </h4>
                                                    <p className="mb-0" style={{ color: '#00d4ff', fontSize: '0.85rem' }}>
                                                        {testimonial.title}
                                                    </p>
                                                </div>
                                            </div>
                                        </FadeInAdvanced>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
