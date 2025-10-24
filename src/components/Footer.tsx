import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-healing">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">Reliable Homeo</span>
                <span className="text-xs text-muted-foreground">Clinics</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing gentle, natural, and effective homeopathy care to the people of Hyderabad. 
              Your trusted partner in holistic healing.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href="tel:+911234567890" className="hover:text-primary transition-smooth">
                +91 1234567890
              </a>
            </div>
          </div>

          {/* Mehdipatnam Clinic */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Mehdipatnam Clinic</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  #13-6-437/B/2, Khadar Bagh,<br />
                  Nanal Nagar<br />
                  (Near Quba Masjid & Premier Hospital)
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon-Sat: 9 AM - 7 PM</span>
              </div>
            </div>
          </div>

          {/* Abids Clinic */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Abids Clinic</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  4-1-414, Opposite City Centre,<br />
                  Bank Street, Sagar Plaza
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Mon-Sat: 10 AM - 8 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2">
              <Link
                to="/about"
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                About Us
              </Link>
              <Link
                to="/book"
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Book Appointment
              </Link>
              <Link
                to="/faq"
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                FAQ
              </Link>
              <Link
                to="/blog"
                className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                Health Tips
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Reliable Homeo Clinics. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-smooth">
                Terms of Service
              </Link>
              <a 
                href="mailto:info@reliablehomeo.com" 
                className="flex items-center space-x-2 hover:text-primary transition-smooth"
              >
                <Mail className="h-4 w-4" />
                <span>info@reliablehomeo.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;