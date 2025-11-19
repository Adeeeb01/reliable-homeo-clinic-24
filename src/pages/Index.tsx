import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, Star, Heart, Stethoscope, Shield, Users, CheckCircle, PhoneCall } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import achievement1 from "@/assets/achievement-1.jpg";
import achievement2 from "@/assets/achievement-2.jpg";
import achievement3 from "@/assets/achievement-3.jpg";
import achievement4 from "@/assets/achievement-4.jpg";
import achievement5 from "@/assets/achievement-5.jpg";
import achievement6 from "@/assets/achievement-6.jpg";
import achievement7 from "@/assets/achievement-7.jpg";


const Index = () => {
  const achievements = [
    {
      image: achievement1,
      title: "IIHP Conference Honor",
      description: "Honored by Sri Chinna Jeeyar Swamiji for exemplary homeopathic service in 2023."
    },
    {
      image: achievement2,
      title: "Treasurer Award - IIHP",
      description: "Aster Prime Hospital recognized as Treasurer of IIHP (Indian Institute of Homeopathic Physicians) Greater Hyderabad for three years consecutively."
    },
    {
      image: achievement3,
      title: "Dr. Badreuddin Siddiqui Memorial Quiz",
      description: "Led the 2024 Dr. Badreuddin Siddiqui Quiz for all Homeopathy Medical Colleges."
    },
    {
      image: achievement4,
      title: "Switzerland Oncology Training",
      description: "Certified in Integrated Oncology Training in Dornach, Switzerland."
    },
    {
      image: achievement5,
      title: "Recognition for Outstanding Contributions to Homeopathy",
      description: "Honored and facilitated at the prestigious National Homeopathy Seminar 2025."
    },
    {
      image: achievement6,
      title: "Excellent Service Award 2014",
      description: "Received the national award for homeopathic service in 2014."
    },
    {
      image: achievement7,
      title: "PG Homeopathy London Achievement",
      description: "Secured 3rd position in Asia-Pacific for PG Homeopathy, London."
    }
  ];

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
    { number: "15+", label: "Years Experience" },
    { number: "2", label: "Convenient Locations" },
  ];

  const testimonials = [
    {
      name: "Mohammed Rahman",
      condition: "Chronic Sinusitis",
      text: "I was having sinus problems for a long time, and Dr. Noman kindly consulted me even with our different time zones. His treatment worked very well, and my sinus issues are now completely better. I am truly thankful to him.",
      rating: 5
    },
    {
      name: "Leena Sharma",
      condition: "Vitamin Deficiency",
      text: "I visited Dr. Noman for my health concerns, and he quickly found that I had Vitamin B12 and D3 deficiencies. He explained everything clearly and gave me the right treatment. I feel much better now and really appreciate his care.",
      rating: 5
    },
    {
      name: "Tarun Sharma",
      condition: "Family Medicine",
      text: "My family and I have been seeing Dr. Noman for all our health needs. He is very patient, knowledgeable, and caring. He listens to us with attention and explains everything in a simple way. We truly value his support and highly recommend him.",
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
                  Led by Dr. Nomaan Siddiqui, experience gentle, effective healthcare that treats you as a whole person. 
                  Trusted by thousands in Hyderabad for over 75 years with a legacy of healing excellence.
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
                    window.open(`https://wa.me/919700222005?text=${encodeURIComponent(message)}`, "_blank");
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
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-primary">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Awards & Recognition
              </h2>
              <p className="text-xl text-muted-foreground">
                Celebrating excellence in homeopathic medicine and patient care
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                })
              ]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {achievements.map((achievement, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="shadow-healing overflow-hidden">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={achievement.image} 
                            alt={achievement.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-lg text-center">
                            {achievement.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground text-center leading-relaxed">
                            {achievement.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 mb-6">
                  {/* <div className="w-20 h-20 rounded-full overflow-hidden sm:block hidden"> */}
                  <div className="w-20 h-20 rounded-full overflow-hidden sm:block hidden">
                    <img 
                      src="/lovable-uploads/drnoman.jpg" 
                      alt="Dr. Nomaan Siddiqui" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div className="space-y-2 !ml-0 sm:!ml-2"> */}
                  <div className="space-y-2 !ml-0 sm:!ml-2">
                    <h2 className="text-4xl font-bold text-foreground">
                      Meet Dr. Nomaan Siddiqui
                    </h2>
                    <p className="text-lg text-primary font-medium">
                      B.H.M.S, M.D. (Homeopathy) | Managing Director Reliable Clinics
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Dr. Nomaan Siddiqui continues the 75-year legacy of Reliable Homeo Clinics, 
                    founded in 1955 by his grandfather, the late Dr. Badreuddin Siddiqui. With 15+ years 
                    of clinical practice, he combines traditional 
                    homeopathic wisdom with modern medical expertise.
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span>Treasurer of IIHP (Indian Institute of Homeopathic Physicians)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span>Life member of IIHP (Greater Hyderabad)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span>Integrated Oncology training - Dornach, Switzerland</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span>Active participant in major Indian homeopathic events</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span>Contributor to national homeopathy boards</span>
                    </div>
                  </div>
                </div>

                <Button variant="trust" size="lg" asChild>
                  <Link to="/about">Learn More About Our Legacy</Link>
                </Button>
              </div>

              <div className="space-y-6">
                <Card className="shadow-healing">
                  <CardHeader>
                    <CardTitle className="text-center text-xl">Our Treatment Philosophy</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {/* "Every prescription is individualized, using time-tested homeopathic protocols 
                      delivered with empathy and precision." */}
                      "I treat, He cures."
                    </p>
                    <div className="text-center">
                      <span className="text-sm text-primary font-medium">- Dr. Nomaan Siddiqui</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-primary">75+</div>
                    <div className="text-sm text-muted-foreground">Years of Legacy</div>
                  </div>
                  <div className="text-center p-4 bg-card rounded-lg">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Years BHMS Experience</div>
                  </div>
                </div>
              </div>
            </div>
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
                    4-1-414, Sagar Plaza, Opposite Sachin Sports,<br/> Abids road, Bank Street.
                  </p>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Monday to Thursday & Saturday: 11:30 AM - 2:30 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Monday, Wednesday & Saturday: 6 AM - 9 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Sunday: 1 PM - 3 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Contact: +91 77803 96837</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-muted-foreground">Appointment is on walk-in basis</span>
                  </div>

                  <Button variant="outline" className="w-full" onClick={()=>window.open("https://maps.app.goo.gl/F9Nb8nv8zjj7QCmf7")}>
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Maps
                  </Button>
                </CardContent>
              </Card>

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
                    #13-6-437/B/2, Khadar Bagh, Nanal Nagar, opposite humanity hospital.<br />
                    (Near Quba Masjid & Premier Hospital)
                  </p>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">Tuesday & Thursday only: 5 PM - 8 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-muted-foreground">Contact: +91 86869 04404</span>
                  </div> 
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-muted-foreground">Appointment booking timings: 11 AM to 1 PM</span>
                  </div>
                  

                  <Button variant="outline" className="w-full" onClick={()=>window.open("https://maps.app.goo.gl/x4ZpyjXGcnxCdyuY8")}>
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
                onClick={() => window.location.href = "tel:+917780396837"}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call: +91 77803 96837
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
            <div className="grid md:grid-cols-2 gap-8 text-center justify-center">
              <div className="space-y-4 w-96">
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

              <div className="space-y-4 w-96">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;