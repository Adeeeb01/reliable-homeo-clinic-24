import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, Star, Heart, Stethoscope, Shield, Users, CheckCircle } from "lucide-react";


const Index = () => {
  const services = [
    {
      title: "Chronic Disease Management",
      description: "Effective treatment for long-term conditions like arthritis, diabetes complications, and autoimmune disorders.",
      icon: <Stethoscope className="h-8 w-8" />
    },
    {
      title: "Acute Care",
      description: "Quick relief for immediate concerns like fever, infections, injuries, and seasonal ailments.",
      icon: <Heart className="h-8 w-8" />
    },
    {
      title: "Children's Health", 
      description: "Safe, gentle treatment for all pediatric conditions from infancy through adolescence.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "Women's Wellness",
      description: "Specialized care for hormonal imbalances, reproductive health, and life-stage transitions.",
      icon: <Users className="h-8 w-8" />
    }
  ];

  const stats = [
    { number: "1000+", label: "Happy Patients" },
    { number: "10+", label: "Years Experience" },
    { number: "2", label: "Convenient Locations" },
    { number: "98%", label: "Success Rate" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      condition: "Chronic Migraine",
      text: "After years of suffering, I'm finally migraine-free for 6 months. The personalized care is exceptional.",
      rating: 5
    },
    {
      name: "Rajesh Kumar", 
      condition: "Digestive Issues",
      text: "My chronic acidity completely resolved. The doctors truly understand how to treat the root cause.",
      rating: 5
    },
    {
      name: "Sunitha Reddy",
      condition: "Child's Health",
      text: "My 7-year-old's immunity improved dramatically. No more frequent colds and cough episodes.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-warning fill-warning' : 'text-muted-foreground'}`} />
    ));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Natural Healing Through
                  <span className="block text-primary">Homeopathy</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Experience gentle, effective healthcare that treats you as a whole person. 
                  Trusted by thousands in Hyderabad for over a decade.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="healing" size="xl" asChild>
                  <Link to="/book">
                    <Phone className="h-5 w-5 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  onClick={() => {
                    const message = "Hello, I would like to know more about homeopathy treatment at Reliable Homeo Clinics.";
                    window.open(`https://wa.me/911234567890?text=${encodeURIComponent(message)}`, "_blank");
                  }}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-muted-foreground">No Side Effects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-muted-foreground">Safe for All Ages</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-muted-foreground">Natural Treatment</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-primary">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Comprehensive Homeopathic Care
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From chronic conditions to acute care, we provide gentle, effective treatment 
              that addresses the root cause of your health concerns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-healing hover:shadow-lg transition-smooth group">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-lg bg-gradient-healing flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More About Our Approach</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Convenient Locations in Hyderabad
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mehdipatnam Clinic */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Mehdipatnam Clinic</span>
                  </CardTitle>
                  <CardDescription>Our main clinic location</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    #13-6-437/B/2, Khadar Bagh, Nanal Nagar<br />
                    (Near Quba Masjid & Premier Hospital)
                  </p>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Mon-Sat: 9 AM - 7 PM</span>
                  </div>

                  <Button variant="outline" className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Maps
                  </Button>
                </CardContent>
              </Card>

              {/* Abids Clinic */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span>Abids Clinic</span>
                  </CardTitle>
                  <CardDescription>City center location</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    4-1-414, Opposite City Centre,<br />
                    Bank Street, Sagar Plaza
                  </p>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Mon-Sat: 10 AM - 8 PM</span>
                  </div>

                  <Button variant="outline" className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Maps
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                What Our Patients Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Real stories from real people who found healing through homeopathy
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-healing">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription className="text-trust-blue font-medium">
                          {testimonial.condition}
                        </CardDescription>
                      </div>
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-muted-foreground italic">
                      "{testimonial.text}"
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="trust" size="lg" asChild>
                <Link to="/testimonials">Read More Patient Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-healing text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join thousands who have found natural, gentle healing through homeopathy. 
              Book your consultation today and experience the difference personalized care makes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="xl"
                onClick={() => window.location.href = "tel:+911234567890"}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: +91 1234567890
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20"
                asChild
              >
                <Link to="/contact">
                  Find Our Locations
                </Link>
              </Button>
            </div>

            <p className="text-sm opacity-80 mt-6">
              Available Monday to Saturday • Same-day appointments often available
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="h-12 w-12 bg-gradient-healing rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground">Have Questions?</h4>
                <p className="text-sm text-muted-foreground">
                  Check our comprehensive FAQ section for answers to common questions about homeopathy.
                </p>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/faq">View FAQ</Link>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 bg-gradient-trust rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground">Health Tips</h4>
                <p className="text-sm text-muted-foreground">
                  Read our blog for natural health tips, homeopathy insights, and wellness advice.
                </p>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/blog">Read Blog</Link>
                </Button>
              </div>

              <div className="space-y-4">
                <div className="h-12 w-12 bg-secondary-blue rounded-full flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-foreground" />
                </div>
                <h4 className="font-semibold text-foreground">Insurance Info</h4>
                <p className="text-sm text-muted-foreground">
                  Learn about our affordable pricing and insurance options for homeopathic care.
                </p>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/insurance">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;