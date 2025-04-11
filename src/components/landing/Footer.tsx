import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-deep-space text-starlight py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">FEOYCS SUMMIT 2025</h2>
            <p className="text-starlight/80 mb-6 max-w-md">
              The premier conference for content management and digital strategy
              professionals.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-starlight hover:text-gold-dust transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-starlight hover:text-gold-dust transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="text-starlight hover:text-gold-dust transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#"
                  className="text-starlight/80 hover:text-gold-dust transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/speakers"
                  className="text-starlight/80 hover:text-gold-dust transition-colors"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="/agenda"
                  className="text-starlight/80 hover:text-gold-dust transition-colors"
                >
                  Agenda
                </a>
              </li>
              <li>
                <a
                  href="/venue"
                  className="text-starlight/80 hover:text-gold-dust transition-colors"
                >
                  Venue
                </a>
              </li>
              <li>
                <a
                  href="/sponsorship"
                  className="text-starlight/80 hover:text-gold-dust transition-colors"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-starlight/80 hover:text-gold-dust transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail mr-2 mt-1"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>info@feoycs2025.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone mr-2 mt-1"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin mr-2 mt-1"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cosmic-blue/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-starlight/60 text-sm mb-4 md:mb-0">
            © 2025 FEOYCS Summit. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-starlight/60 hover:text-gold-dust text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-starlight/60 hover:text-gold-dust text-sm transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-starlight/60 hover:text-gold-dust text-sm transition-colors"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
