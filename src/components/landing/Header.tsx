import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 flex items-center justify-between",
        scrolled ? "bg-background shadow-md" : "bg-transparent",
      )}
    >
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold text-primary mr-8">
          FEOYCS 2025
        </a>
        <nav className="hidden md:flex space-x-6">
          <a
            href="/#speakers"
            className="text-foreground hover:text-primary transition-colors"
          >
            Speakers
          </a>
          <a
            href="/#agenda"
            className="text-foreground hover:text-primary transition-colors"
          >
            Agenda
          </a>
          <a
            href="/#venue"
            className="text-foreground hover:text-primary transition-colors"
          >
            Venue
          </a>
          <a
            href="/#sponsors"
            className="text-foreground hover:text-primary transition-colors"
          >
            Sponsors
          </a>
          <a
            href="/contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
      <Button
        className="bg-[#20BF55] hover:bg-[#1ca348] text-white"
        onClick={() => (window.location.href = "/register")}
      >
        Register Now
      </Button>
    </header>
  );
}
