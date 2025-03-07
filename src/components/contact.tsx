import Contact from "./landing/Contact";
import Header from "./landing/Header";
import Footer from "./landing/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
