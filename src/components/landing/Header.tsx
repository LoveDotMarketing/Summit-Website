import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    // Set initial scroll state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 flex items-center justify-between",
        "bg-nebula",
        scrolled ? "shadow-md" : "",
      )}
    >
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold text-gold-dust mr-8">
          FEOYCS 2025
        </a>
        <nav className="hidden md:flex space-x-6">
          <a
            href="/speakers"
            className="text-starlight hover:text-gold-dust transition-colors"
          >
            SPEAKERS
          </a>
          <a
            href="/agenda"
            className="text-starlight hover:text-gold-dust transition-colors"
          >
            AGENDA
          </a>
          <a
            href="/venue"
            className="text-starlight hover:text-gold-dust transition-colors"
          >
            VENUE
          </a>
          <a
            href="/sponsorship"
            className="text-starlight hover:text-gold-dust transition-colors"
          >
            SPONSORS
          </a>
          <a
            href="/contact"
            className="text-starlight hover:text-gold-dust transition-colors"
          >
            CONTACT
          </a>
        </nav>
      </div>
      <Button
        className="bg-rocket-red hover:bg-gold-dust hover:text-deep-space text-starlight"
        onClick={() => (window.location.href = "/registration")}
      >
        REGISTER NOW
      </Button>
    </header>
  );
}
