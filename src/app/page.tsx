import Chatbot from "@/components/chat-bot";
import Navbar from "@/components/landing-page/navbar";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import Features from "@/components/landing-page/features";
import CallToAction from "@/components/landing-page/call-to-action";
import MainWrapper from "@/components/landing-page/main-wrapper";
import LandingPageWrapper from "@/components/landing-page/landing-page-wrapper";

export default function Home() {
  return (
    <LandingPageWrapper>
      <Chatbot />
      <Navbar />
      <MainWrapper>
        <Hero />
        <Features />
        <CallToAction />
      </MainWrapper>
      <Footer />
    </LandingPageWrapper>
  );
}
