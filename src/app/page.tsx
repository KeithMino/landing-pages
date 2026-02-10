import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Outcome from "@/components/Outcome";
import ServicePillars from "@/components/ServicePillars";
import Bonuses from "@/components/Bonuses";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import Availability from "@/components/Availability";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <WhoIsThisFor />
        <Outcome />
        <ServicePillars />
        <Bonuses />
        <Pricing />
        <Guarantee />
        <Availability />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
