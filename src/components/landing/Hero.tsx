import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
          alt="Digital CMC Summit 2025 conference venue at Hyatt Regency Lost Pines Resort and Spa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Roboto']">
          Federal End of Year Collaboration Summit 2025
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 font-['Inter'] max-w-3xl mx-auto">
          Empowering Collaboration, Shaping the Future of VA Contracts
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="text-white hover:bg-[#0f712c]/90 text-lg px-8 py-6 h-auto font-medium transition-transform hover:scale-105 bg-[#0f712c]"
            onClick={() => (window.location.href = "/registration")}
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-black bg-white hover:bg-white/90 text-lg px-8 py-6 h-auto font-medium transition-transform hover:scale-105"
          >
            View Agenda
          </Button>
        </div>
        <div className="mt-16 text-white/80 font-['Inter']">
          <p className="text-sm">September 2nd - 5th, 2025 • Austin, TX</p>
        </div>
      </div>
    </section>
  );
}
