import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Starfield Background */}
      <div className="absolute inset-0 starfield">
        <div className="stars"></div>
        <div className="stars"></div>
        <div className="stars"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-starlight mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          FEDERAL END OF YEAR COLLABORATION SUMMIT 2025
        </h1>
        <p className="text-xl md:text-2xl text-starlight/90 mb-10 max-w-3xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
          Empowering Collaboration, Shaping the Future of VA Contracts
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="text-starlight hover:bg-gold-dust hover:text-deep-space text-lg px-8 py-6 h-auto font-medium transition-transform hover:scale-105 bg-rocket-red shadow-lg"
            onClick={() => (window.location.href = "/registration")}
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-starlight text-deep-space bg-starlight hover:bg-gold-dust hover:text-deep-space text-lg px-8 py-6 h-auto font-medium transition-transform hover:scale-105 shadow-lg"
            onClick={() => (window.location.href = "/agenda")}
          >
            View Agenda
          </Button>
        </div>
        <div className="mt-16 text-starlight/80">
          <p className="text-sm drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
            September 2nd - 5th, 2025 • Austin, TX
          </p>
        </div>
      </div>
    </section>
  );
}
