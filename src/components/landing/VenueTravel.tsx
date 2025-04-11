import { MapPin, Clock, Calendar, Phone, Mail, Globe } from "lucide-react";

export default function VenueTravel() {
  return (
    <section id="venue" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Venue & Travel Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Venue Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Event Venue
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">
                    Hyatt Regency Lost Pines Resort and Spa
                  </h4>
                  <p className="text-gray-600">
                    575 Hyatt Lost Pines Rd, Cedar Creek, TX 78612
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Conference Dates</h4>
                  <p className="text-gray-600">May 15-17, 2025</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Registration Hours</h4>
                  <p className="text-gray-600">May 15: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">May 16-17: 7:30 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Contact</h4>
                  <p className="text-gray-600">(512) 308-1234</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">info@digitalcmcsummit.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Globe className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Website</h4>
                  <p className="text-gray-600">www.hyattregencylostpines.com</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-medium mb-2">Transportation</h4>
                <p className="text-gray-600 mb-2">
                  The resort is approximately 20 miles from Austin-Bergstrom
                  International Airport (AUS).
                </p>
                <p className="text-gray-600">
                  Shuttle service is available with advance reservation.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="h-full">
            <div className="bg-white p-2 rounded-lg shadow-md h-full">
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
      </div>
    </section>
  );
}
