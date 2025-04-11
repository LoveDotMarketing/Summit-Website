import Contact from "./landing/Contact";
import Header from "./landing/Header";
import Footer from "./landing/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-nebula">
      <Header />
      <div className="pt-24 bg-nebula">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
