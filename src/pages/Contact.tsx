import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
              We're here to help. Reach out to us through any of the convenient methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Get In Touch
            </h2>

            {/* Quick Contact */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="text-center shadow-healing hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-healing flex items-center justify-center">
                      <Phone className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>Speak directly with our team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-primary mb-4">+91 1234567890</p>
                  <Button 
                    variant="healing" 
                    className="w-full"
                    onClick={() => window.location.href = "tel:+911234567890"}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center shadow-healing hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-gradient-trust flex items-center justify-center">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle>WhatsApp</CardTitle>
                  <CardDescription>Quick messaging support</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Fast response within 30 minutes</p>
                  <Button 
                    variant="appointment" 
                    className="w-full"
                    onClick={() => {
                      const message = "Hello, I have a question about your homeopathy services.";
                      window.open(`https://wa.me/911234567890?text=${encodeURIComponent(message)}`, "_blank");
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Us
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center shadow-healing hover:shadow-lg transition-smooth">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-secondary-blue flex items-center justify-center">
                      <Mail className="h-8 w-8 text-foreground" />
                    </div>
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Send us detailed queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-primary mb-4">info@reliablehomeo.com</p>
                  <Button 
                    variant="calm" 
                    className="w-full"
                    onClick={() => window.location.href = "mailto:info@reliablehomeo.com"}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Clinic Locations */}
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Our Clinic Locations
            </h3>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mehdipatnam Clinic */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Mehdipatnam Clinic</span>
                  </CardTitle>
                  <CardDescription>Our main clinic in Mehdipatnam</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p className="text-sm text-muted-foreground">
                          #13-6-437/B/2, Khadar Bagh, Nanal Nagar<br />
                          (Near Quba Masjid & Premier Hospital)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Working Hours</p>
                        <p className="text-sm text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Direct Contact</p>
                        <p className="text-sm text-muted-foreground">+91 1234567890</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open("https://maps.google.com/?q=13-6-437/B/2+Khadar+Bagh+Nanal+Nagar+Mehdipatnam", "_blank")}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Google Maps
                    </Button>
                    <Button 
                      variant="healing" 
                      className="w-full"
                      onClick={() => {
                        const message = "Hello, I would like to visit the Mehdipatnam clinic.";
                        window.open(`https://wa.me/911234567890?text=${encodeURIComponent(message)}`, "_blank");
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message for Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Abids Clinic */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Abids Clinic</span>
                  </CardTitle>
                  <CardDescription>Convenient city center location</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Address</p>
                        <p className="text-sm text-muted-foreground">
                          4-1-414, Opposite City Centre,<br />
                          Bank Street, Sagar Plaza
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Working Hours</p>
                        <p className="text-sm text-muted-foreground">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                        <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground">Direct Contact</p>
                        <p className="text-sm text-muted-foreground">+91 1234567890</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.open("https://maps.google.com/?q=4-1-414+Bank+Street+Sagar+Plaza+Abids", "_blank")}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Google Maps
                    </Button>
                    <Button 
                      variant="appointment" 
                      className="w-full"
                      onClick={() => {
                        const message = "Hello, I would like to visit the Abids clinic.";
                        window.open(`https://wa.me/911234567890?text=${encodeURIComponent(message)}`, "_blank");
                      }}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message for Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Information */}
            <div className="mt-16 bg-muted rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground text-center mb-6">
                Additional Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Emergency Consultation</h4>
                    <p className="text-muted-foreground">
                      For urgent health concerns, please call us directly. We strive to accommodate emergency 
                      consultations whenever possible.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Follow-up Appointments</h4>
                    <p className="text-muted-foreground">
                      Existing patients can schedule follow-up appointments through WhatsApp for added convenience.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Parking Facilities</h4>
                    <p className="text-muted-foreground">
                      Both our clinics offer convenient parking spaces for our patients' comfort and convenience.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Accessibility</h4>
                    <p className="text-muted-foreground">
                      Our clinics are designed to be accessible to patients with mobility challenges. 
                      Please let us know if you need any special assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;