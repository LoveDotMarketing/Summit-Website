import Registration from "./landing/Registration";
import Header from "./landing/Header";
import Footer from "./landing/Footer";

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-nebula">
      <Header />
      <div className="pt-24 bg-nebula">
        <Registration />
      </div>
      <Footer />
    </div>
  );
}
