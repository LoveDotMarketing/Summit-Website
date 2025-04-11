import { Button } from "@/components/ui/button";

export default function EventDetails() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B4F6C] mb-6 font-['Roboto']">
              Event Details
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-['Inter']">
              Join us for three days of insightful discussions, hands-on
              workshops, and networking opportunities focused on digital
              innovation in content management and compliance.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#01BAEF] mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <h3 className="font-bold text-[#0B4F6C] font-['Roboto']">
                    Dates
                  </h3>
                  <p className="text-gray-600 font-['Inter']">
                    September 2nd - 5th, 2025
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#01BAEF] mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-bold text-[#0B4F6C] font-['Roboto']">
                    Location
                  </h3>
                  <p className="text-gray-600 font-['Inter']">
                    575 Hyatt Lost Pines Rd, Cedar Creek, TX 78612
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#01BAEF] mr-3 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="font-bold text-[#0B4F6C] font-['Roboto']">
                    Schedule
                  </h3>
                  <p className="text-gray-600 font-['Inter']">
                    9:00 AM - 5:00 PM (Daily)
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="bg-[#20BF55] hover:bg-[#1ca348] text-white px-8 py-6 h-auto text-lg font-medium"
              onClick={() => (window.location.href = "/registration")}
            >
              Register Now
            </Button>
          </div>

          <div className="bg-gradient-to-br from-[#0B4F6C]/10 to-[#01BAEF]/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-[#0B4F6C] mb-4 font-['Roboto']">
              What to Expect
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#20BF55] mr-3 mt-1"
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
                <p className="text-gray-700 font-['Inter']">
                  Expert-led sessions on digital transformation strategies
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#20BF55] mr-3 mt-1"
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
                <p className="text-gray-700 font-['Inter']">
                  Hands-on workshops with cutting-edge technologies
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#20BF55] mr-3 mt-1"
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
                <p className="text-gray-700 font-['Inter']">
                  Networking opportunities with industry leaders
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#20BF55] mr-3 mt-1"
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
                <p className="text-gray-700 font-['Inter']">
                  Exclusive insights on AI and machine learning applications
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#20BF55] mr-3 mt-1"
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
                <p className="text-gray-700 font-['Inter']">
                  Access to the latest research and case studies
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
