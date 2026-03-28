import SEO from "@/components/elements/SEO";
import ErrorBoundary from "@/components/elements/ErrorBoundary";
import SliderSec2 from "@/features/home-two/SliderSec2";
import AboutSec2 from "@/features/home-two/AboutSec2";
import ChooseSec2 from "@/features/home-two/ChooseSec2";
import ServiciosSec from "@/features/home-two/ServiciosSec";
import VideoSec2 from "@/features/home-two/VideoSec2";
import TestimonialsSec from "@/features/home-two/TestimonialsSec";
import OperationSec from "@/features/home-two/OperationSec";
import ChatWidget from "@/components/ChatWidget";

export default function HomeTwo() {
    return (
        <>
            <SEO title="TransHub - Transport & Logistics" />
            <ErrorBoundary name="home-two Page">
                <SliderSec2 />

                <AboutSec2 />

                <ChooseSec2 />

                <ServiciosSec />

                <VideoSec2 />

                <TestimonialsSec />

                <OperationSec />

                <ChatWidget />
            </ErrorBoundary>
        </>
    );
}
