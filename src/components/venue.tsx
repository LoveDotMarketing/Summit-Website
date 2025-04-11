import VenueTravel from "./landing/VenueTravel";
import Header from "./landing/Header";
import Footer from "./landing/Footer";

export default function VenuePage() {
  return (
    <div className="min-h-screen bg-nebula">
      <Header />
      <div className="pt-24">
        {" "}
        {/* Add padding to account for fixed header */}
        <VenueTravel />
      </div>
      <Footer />
    </div>
  );
}
