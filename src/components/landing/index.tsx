import Header from "./Header";
import Hero from "./Hero";
import EventDetails from "./EventDetails";
import AppBanner from "./AppBanner";
import KeyTopics from "./KeyTopics";
import Speakers from "./Speakers";
import Agenda from "./Agenda";
import WhyAttend from "./WhyAttend";
import Sponsors from "./Sponsors";
import Registration from "./Registration";
import Contact from "./Contact";
import Footer from "./Footer";
import VenueTravel from "./VenueTravel";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <EventDetails />
      <AppBanner />
      <WhyAttend />
      <Agenda />
      <Speakers />
      <Sponsors />
      <VenueTravel />
      <KeyTopics />
      <Registration />
      <Contact />
      <Footer />
    </div>
  );
}
