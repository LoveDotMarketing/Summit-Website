import { Button } from "@/components/ui/button";

export default function AppBanner() {
  return (
    <section className="py-16 px-6 bg-cosmic-blue">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-dust mb-4">
            GET THE EVENTNOVA.APP
          </h2>
          <p className="text-xl text-starlight max-w-2xl">
            Enhance your conference experience with our official mobile app.
            Access schedules, speaker profiles, and networking features on the
            go.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Button
            size="lg"
            className="hover:bg-gold-dust hover:text-deep-space text-starlight text-lg px-8 py-8 h-auto font-medium transition-transform hover:scale-105 shadow-lg bg-rocket-red"
            aria-label="Download EventNova.App for FEOYCS Summit 2025"
          >
            Install EventNova.App
          </Button>
        </div>
      </div>
    </section>
  );
}
