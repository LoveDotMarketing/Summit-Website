import { Button } from "@/components/ui/button";

export default function Registration() {
  const pricingOptions = [
    {
      name: "Early Bird",
      price: "$799",
      description: "Available until March 15, 2025",
      features: [
        "Full conference access",
        "Workshop sessions",
        "Networking events",
        "Conference materials",
        "Lunch and refreshments",
      ],
    },
    {
      name: "Standard",
      price: "$999",
      description: "Regular registration rate",
      features: [
        "Full conference access",
        "Workshop sessions",
        "Networking events",
        "Conference materials",
        "Lunch and refreshments",
      ],
      highlighted: true,
    },
    {
      name: "Government",
      price: "$699",
      description: "For government employees",
      features: [
        "Full conference access",
        "Workshop sessions",
        "Networking events",
        "Conference materials",
        "Lunch and refreshments",
      ],
    },
  ];

  return (
    <section
      id="registration"
      className="py-20 px-6 bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Roboto']">
            Registration
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-['Inter']">
            Secure your spot at the premier digital content management
            conference of 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${option.highlighted ? "ring-4 ring-[#20BF55] transform scale-105" : ""}`}
            >
              <div
                className={`p-8 ${option.highlighted ? "bg-white" : "bg-white/95"}`}
              >
                <h3 className="text-2xl font-bold text-[#0B4F6C] mb-2 font-['Roboto']">
                  {option.name}
                </h3>
                <div className="text-3xl font-bold text-[#01BAEF] mb-2">
                  {option.price}
                </div>
                <p className="text-gray-600 mb-6 font-['Inter']">
                  {option.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#20BF55] mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 font-['Inter']">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 h-auto text-lg font-medium ${option.highlighted ? "bg-[#20BF55] hover:bg-[#1ca348] text-white" : "bg-[#0B4F6C] hover:bg-[#0a4559] text-white"}`}
                  onClick={() => (window.location.href = "/register")}
                >
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-white">
          <p className="mb-4 font-['Inter']">
            Group discounts available for teams of 3 or more
          </p>
          <a
            href="#"
            className="text-white underline hover:text-[#20BF55] transition-colors font-['Inter']"
          >
            Contact us for group registration
          </a>
        </div>

        <div className="mt-20 bg-white rounded-xl p-8 md:p-12 text-center shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-[#0B4F6C] mb-4 font-['Roboto']">
            Interested in Sponsorship Opportunities?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-['Inter']">
            Showcase your brand to industry leaders and decision-makers in
            digital content management. Various sponsorship packages are
            available to meet your marketing objectives.
          </p>
          <Button
            size="lg"
            className="bg-[#01BAEF] hover:bg-[#01a7d6] text-white text-lg px-8 py-6 h-auto font-medium"
            onClick={() => (window.location.href = "/sponsorship")}
          >
            View Sponsorship Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
