import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-nebula">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gold-dust mb-4">
            CONTACT US
          </h2>
          <p className="text-lg text-starlight max-w-3xl mx-auto">
            Have questions about the FEOYCS Summit 2025? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-starlight mb-1"
                  >
                    NAME
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full p-3 border border-cosmic-blue bg-nebula text-starlight rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-starlight mb-1"
                  >
                    EMAIL
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full p-3 border border-cosmic-blue bg-nebula text-starlight rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-starlight mb-1"
                >
                  SUBJECT
                </label>
                <Input
                  id="subject"
                  placeholder="Subject"
                  className="w-full p-3 border border-cosmic-blue bg-nebula text-starlight rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-starlight mb-1"
                >
                  MESSAGE
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full p-3 border border-cosmic-blue bg-nebula text-starlight rounded-md min-h-[150px]"
                />
              </div>

              <Button className="bg-rocket-red hover:bg-gold-dust hover:text-deep-space text-starlight px-8 py-6 h-auto text-lg font-medium w-full md:w-auto">
                SEND MESSAGE
              </Button>
            </form>
          </div>

          <div className="bg-cosmic-blue p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gold-dust mb-6">
              GET IN TOUCH
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-dust/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gold-dust"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gold-dust mb-1">
                    EMAIL
                  </h4>
                  <p className="text-starlight">info@feoycs2025.com</p>
                  <p className="text-starlight">sponsorship@feoycs2025.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-dust/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gold-dust"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gold-dust mb-1">
                    PHONE
                  </h4>
                  <p className="text-starlight">+1 (555) 123-4567</p>
                  <p className="text-starlight">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-dust/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gold-dust"
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
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gold-dust mb-1">
                    LOCATION
                  </h4>
                  <p className="text-starlight">
                    Hyatt Regency Lost Pines Resort and Spa
                  </p>
                  <p className="text-starlight">
                    575 Hyatt Lost Pines Rd, Cedar Creek, TX 78612
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-dust/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gold-dust"
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
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gold-dust mb-1">
                    CONFERENCE HOURS
                  </h4>
                  <p className="text-starlight">June 15-17, 2025</p>
                  <p className="text-starlight">9:00 AM - 5:00 PM (Daily)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
