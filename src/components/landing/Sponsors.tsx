export default function Sponsors() {
  // Placeholder for sponsor logos
  const sponsors = [
    { name: "TechCorp", tier: "platinum" },
    { name: "InnovateSoft", tier: "platinum" },
    { name: "DataSystems", tier: "gold" },
    { name: "CloudSecure", tier: "gold" },
    { name: "AIVentures", tier: "gold" },
    { name: "ContentFlow", tier: "silver" },
    { name: "RegTech Solutions", tier: "silver" },
    { name: "DigitalTransform", tier: "silver" },
  ];

  return (
    <section id="sponsors" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-4 font-['Roboto']">
            Our Sponsors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Inter']">
            Supported by leading organizations in digital content management and
            technology
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#0B4F6C] mb-6 text-center font-['Roboto']">
            Platinum Sponsors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {sponsors
              .filter((sponsor) => sponsor.tier === "platinum")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white h-32 rounded-lg shadow-sm flex items-center justify-center p-6 border border-gray-100"
                >
                  <div className="text-2xl font-bold text-[#0B4F6C]">
                    {sponsor.name}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-[#0B4F6C] mb-6 text-center font-['Roboto']">
            Gold Sponsors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sponsors
              .filter((sponsor) => sponsor.tier === "gold")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white h-24 rounded-lg shadow-sm flex items-center justify-center p-4 border border-gray-100"
                >
                  <div className="text-xl font-bold text-[#0B4F6C]">
                    {sponsor.name}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-[#0B4F6C] mb-6 text-center font-['Roboto']">
            Silver Sponsors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {sponsors
              .filter((sponsor) => sponsor.tier === "silver")
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white h-20 rounded-lg shadow-sm flex items-center justify-center p-3 border border-gray-100"
                >
                  <div className="text-lg font-bold text-[#0B4F6C]">
                    {sponsor.name}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 font-['Inter']">
            Interested in becoming a sponsor?
          </p>
          <a
            href="/sponsorship"
            className="inline-block px-6 py-3 bg-[#01BAEF] hover:bg-[#01a7d6] text-white font-medium rounded-md transition-colors"
          >
            Become A Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
