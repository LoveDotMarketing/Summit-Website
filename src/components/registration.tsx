import Registration from "./landing/Registration";
import Header from "./landing/Header";
import Footer from "./landing/Footer";

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <Registration />
      </div>
      <Footer />
    </div>
  );
}
