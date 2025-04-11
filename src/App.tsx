import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ContactPage from "./components/contact";
import RegistrationPage from "./components/registration";
import SponsorshipPage from "./components/sponsorship";
import AgendaPage from "./components/agenda";
import SpeakersPage from "./components/speakers";
import VenuePage from "./components/venue";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/sponsorship" element={<SponsorshipPage />} />
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/venue" element={<VenuePage />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" element={<div />} />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
