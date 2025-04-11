import Header from "./landing/Header";
import Footer from "./landing/Footer";
import SponsorshipOpportunities from "./landing/SponsorshipOpportunities";

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-nebula">
      <Header />
      <div className="pt-24 bg-nebula">
        <SponsorshipOpportunities />
      </div>
      <Footer />
    </div>
  );
}
