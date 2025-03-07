import { Button } from "@/components/ui/button";

export default function SponsorshipOpportunities() {
  const sponsorshipTiers = [
    {
      name: "Platinum",
      price: "$15,000",
      benefits: [
        "Premium logo placement on all conference materials",
        "Dedicated 10x10 exhibition space in prime location",
        "45-minute keynote speaking opportunity",
        "Full-page ad in conference program",
        "6 complimentary conference passes",
        "Sponsored email blast to all attendees",
        "Logo on conference website with link",
        "Social media promotion (6 dedicated posts)",
        "Access to opt-in attendee list",
        "Opportunity to provide branded swag in welcome bags",
      ],
      color: "bg-gradient-to-r from-[#0B4F6C] to-[#01BAEF]",
    },
    {
      name: "Gold",
      price: "$10,000",
      benefits: [
        "Prominent logo placement on conference materials",
        "8x8 exhibition space",
        "30-minute speaking opportunity in breakout session",
        "Half-page ad in conference program",
        "4 complimentary conference passes",
        "Logo on conference website with link",
        "Social media promotion (4 dedicated posts)",
        "Access to opt-in attendee list",
        "Opportunity to provide branded item in welcome bags",
      ],
      color: "bg-[#FFD700]/90",
    },
    {
      name: "Silver",
      price: "$5,000",
      benefits: [
        "Logo on conference materials",
        "6x6 exhibition space",
        "Quarter-page ad in conference program",
        "2 complimentary conference passes",
        "Logo on conference website",
        "Social media promotion (2 dedicated posts)",
        "Opportunity to provide branded item in welcome bags",
      ],
      color: "bg-[#C0C0C0]/90",
    },
    {
      name: "Bronze",
      price: "$2,500",
      benefits: [
        "Logo on conference materials",
        "Shared exhibition table",
        "1 complimentary conference pass",
        "Logo on conference website",
        "Social media mention",
      ],
      color: "bg-[#CD7F32]/90",
    },
  ];

  const specialOpportunities = [
    {
      name: "Welcome Reception Sponsor",
      price: "$8,000",
      description:
        "Exclusive sponsorship of the opening reception with branding opportunities throughout the venue.",
    },
    {
      name: "Lunch Sponsor",
      price: "$6,000",
      description:
        "Sponsor lunch for all attendees on one conference day with signage and recognition.",
    },
    {
      name: "Coffee Break Sponsor",
      price: "$3,000",
      description:
        "Branding during all coffee breaks on a selected day with opportunity for product sampling.",
    },
    {
      name: "Lanyard Sponsor",
      price: "$4,000",
      description:
        "Your logo on all attendee lanyards for maximum visibility throughout the event.",
    },
    {
      name: "Mobile App Sponsor",
      price: "$7,500",
      description:
        "Exclusive branding on the conference mobile app used by all attendees.",
    },
    {
      name: "Wi-Fi Sponsor",
      price: "$5,000",
      description:
        "Your brand as the Wi-Fi password with signage throughout the venue.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#0B4F6C] mb-4 font-['Roboto']">
            Sponsorship Opportunities
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-['Inter']">
            Showcase your brand to industry leaders and decision-makers in
            digital content management
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B4F6C] mb-8 font-['Roboto']">
            Why Sponsor the FEOYCS Summit 2025?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="text-[#01BAEF] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3 font-['Roboto']">
                Access to Decision Makers
              </h3>
              <p className="text-gray-600 font-['Inter']">
                Connect with 800+ senior-level professionals from enterprise
                organizations and government agencies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="text-[#01BAEF] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3 font-['Roboto']">
                Brand Visibility
              </h3>
              <p className="text-gray-600 font-['Inter']">
                Showcase your solutions to a targeted audience of content
                management and digital strategy professionals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <div className="text-[#01BAEF] mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0B4F6C] mb-3 font-['Roboto']">
                Lead Generation
              </h3>
              <p className="text-gray-600 font-['Inter']">
                Generate high-quality leads and build relationships with
                potential clients in your target market.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-[#0B4F6C] mb-4 font-['Roboto']">
              Attendee Demographics
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#01BAEF] mb-2">
                  65%
                </div>
                <p className="text-gray-600 font-['Inter']">
                  Director level or above
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#01BAEF] mb-2">
                  40%
                </div>
                <p className="text-gray-600 font-['Inter']">
                  Enterprise organizations
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#01BAEF] mb-2">
                  30%
                </div>
                <p className="text-gray-600 font-['Inter']">
                  Government agencies
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#01BAEF] mb-2">
                  800+
                </div>
                <p className="text-gray-600 font-['Inter']">
                  Expected attendees
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B4F6C] mb-8 font-['Roboto']">
            Sponsorship Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col"
              >
                <div className={`${tier.color} text-white p-6 text-center`}>
                  <h3 className="text-2xl font-bold mb-2 font-['Roboto']">
                    {tier.name}
                  </h3>
                  <div className="text-3xl font-bold">{tier.price}</div>
                </div>

                <div className="p-6 flex-grow">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
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
                        <span className="text-gray-700 text-sm font-['Inter']">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 pt-0">
                  <Button className="w-full bg-[#0B4F6C] hover:bg-[#0a4559] text-white">
                    Contact Us
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B4F6C] mb-8 font-['Roboto']">
            Special Sponsorship Opportunities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <h3 className="text-xl font-bold text-[#0B4F6C] mb-2 font-['Roboto']">
                  {opportunity.name}
                </h3>
                <div className="text-[#01BAEF] font-bold mb-3">
                  {opportunity.price}
                </div>
                <p className="text-gray-600 mb-6 text-sm font-['Inter']">
                  {opportunity.description}
                </p>
                <Button className="w-full bg-[#0B4F6C] hover:bg-[#0a4559] text-white">
                  Inquire
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#0B4F6C] to-[#01BAEF] rounded-xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-['Roboto']">
            Ready to Become a Sponsor?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-['Inter']">
            Contact our sponsorship team to discuss custom packages and secure
            your spot at the FEOYCS Summit 2025.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#0B4F6C] hover:bg-white/90 text-lg px-8 py-6 h-auto font-medium"
            >
              Download Prospectus
            </Button>
            <Button
              size="lg"
              className="bg-[#20BF55] hover:bg-[#1ca348] text-white text-lg px-8 py-6 h-auto font-medium"
            >
              Contact Sponsorship Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
