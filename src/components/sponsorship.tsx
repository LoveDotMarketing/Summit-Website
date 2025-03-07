import Header from "./landing/Header";
import Footer from "./landing/Footer";
import SponsorshipOpportunities from "./landing/SponsorshipOpportunities";

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <SponsorshipOpportunities />
      </div>
      <Footer />
    </div>
  );
}
