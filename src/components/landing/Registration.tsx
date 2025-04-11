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
    <section id="registration" className="py-20 px-6 bg-cosmic-blue">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-dust mb-4">
            REGISTRATION
          </h2>
          <p className="text-xl text-starlight max-w-3xl mx-auto">
            Secure your spot at the premier digital content management
            conference of 2025
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${option.highlighted ? "ring-4 ring-gold-dust transform scale-105" : ""}`}
            >
              <div
                className={`p-8 ${option.highlighted ? "bg-nebula" : "bg-nebula/95"}`}
              >
                <h3 className="text-2xl font-bold text-gold-dust mb-2">
                  {option.name}
                </h3>
                <div className="text-3xl font-bold text-rocket-red mb-2">
                  {option.price}
                </div>
                <p className="text-starlight mb-6">{option.description}</p>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gold-dust mr-2 mt-0.5"
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
                      <span className="text-starlight">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 h-auto text-lg font-medium ${option.highlighted ? "bg-rocket-red hover:bg-gold-dust hover:text-deep-space text-starlight" : "bg-cosmic-blue hover:bg-gold-dust hover:text-deep-space text-starlight"}`}
                  onClick={() => (window.location.href = "/registration")}
                >
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center text-starlight">
          <p className="mb-4">
            Group discounts available for teams of 3 or more
          </p>
          <a
            href="#"
            className="text-starlight underline hover:text-gold-dust transition-colors"
          >
            Contact us for group registration
          </a>
        </div>

        <div className="mt-20 bg-nebula rounded-xl p-8 md:p-12 text-center shadow-lg border border-lunar/30">
          <h3 className="text-2xl md:text-3xl font-bold text-gold-dust mb-4">
            INTERESTED IN SPONSORSHIP OPPORTUNITIES?
          </h3>
          <p className="text-lg text-starlight mb-8 max-w-2xl mx-auto">
            Showcase your brand to industry leaders and decision-makers in
            digital content management. Various sponsorship packages are
            available to meet your marketing objectives.
          </p>
          <Button
            size="lg"
            className="bg-cosmic-blue hover:bg-gold-dust hover:text-deep-space text-starlight text-lg px-8 py-6 h-auto font-medium"
            onClick={() => (window.location.href = "/sponsorship")}
          >
            View Sponsorship Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
