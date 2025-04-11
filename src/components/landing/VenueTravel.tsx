import { MapPin, Clock, Calendar, Phone, Mail, Globe } from "lucide-react";

export default function VenueTravel() {
  return (
    <section id="venue" className="py-16 bg-nebula">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gold-dust">
          VENUE & TRAVEL INFORMATION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Venue Details */}
          <div className="bg-cosmic-blue p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gold-dust">
              EVENT VENUE
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-dust mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gold-dust">
                    Hyatt Regency Lost Pines Resort and Spa
                  </h4>
                  <p className="text-starlight">
                    575 Hyatt Lost Pines Rd, Cedar Creek, TX 78612
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-gold-dust mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gold-dust">
                    CONFERENCE DATES
                  </h4>
                  <p className="text-starlight">May 15-17, 2025</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-gold-dust mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gold-dust">
                    REGISTRATION HOURS
                  </h4>
                  <p className="text-starlight">May 15: 8:00 AM - 6:00 PM</p>
                  <p className="text-starlight">May 16-17: 7:30 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-gold-dust mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gold-dust">CONTACT</h4>
                  <p className="text-starlight">(512) 308-1234</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-gold-dust mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gold-dust">EMAIL</h4>
                  <p className="text-starlight">info@digitalcmcsummit.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Globe className="h-5 w-5 text-gold-dust mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gold-dust">WEBSITE</h4>
                  <p className="text-starlight">
                    www.hyattregencylostpines.com
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-lunar/30">
                <h4 className="font-medium text-gold-dust mb-2">
                  TRANSPORTATION
                </h4>
                <p className="text-starlight mb-2">
                  The resort is approximately 20 miles from Austin-Bergstrom
                  International Airport (AUS).
                </p>
                <p className="text-starlight">
                  Shuttle service is available with advance reservation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="h-full">
            <div className="bg-cosmic-blue p-2 rounded-lg shadow-md h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.536928140474!2d-97.4474138239122!3d30.1646527128644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644bd645aef0267%3A0x1f7a97d16accedeb!2sHyatt%20Regency%20Lost%20Pines%20Resort%20and%20Spa!5e0!3m2!1sen!2sus!4v1742416775020!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="/venue"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-cosmic-blue text-starlight shadow-sm hover:bg-cosmic-blue/80 h-10 rounded-md px-8"
          >
            View Venue
          </a>
        </div>
      </div>
    </section>
  );
}
