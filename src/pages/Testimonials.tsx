import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, MessageCircle } from "lucide-react";

const Testimonials = () => {
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
    },
    {
      name: "Mohammed Furquan",
      condition: "General Medicine",
      text: "Dr. Noman is the best doctor I have ever met. I was suffering from a condition that other doctors could not help me with, but his treatment and guidance helped me recover quickly. Today I am healthy and living happily with my family, all thanks to him.",
      rating: 5
    },
    {
      name: "Adeeb Mirza",
      condition: "Urological Care",
      text: "I was visiting from Canada when my mother suddenly had severe pain from a large kidney stone. We were very worried and did not know what to do, but Dr. Noman supported us from the first visit. He explained everything with kindness and gave a treatment that helped my mother pass the stone within one month. His care and compassion meant so much to us during this difficult time. We are very grateful to him.",
      rating: 5
    }
  ];
  

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-warning fill-warning' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Patient Testimonials
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
              Real stories from real patients who found healing through our natural homeopathic treatments
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center mb-16">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <p className="text-muted-foreground">Happy Patients</p>
            </div>
            {/* <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">98%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div> */}
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">15+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              What Our Patients Say
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="shadow-healing hover:shadow-lg transition-smooth relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-primary/20">
                    <Quote className="h-12 w-12" />
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-foreground text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-trust-blue font-medium">{testimonial.condition}</p>
                        {/* <p className="text-xs text-muted-foreground">{testimonial.location} Clinic</p> */}
                      </div>
                      <div className="flex space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="flex justify-between items-center text-xs text-muted-foreground pt-4 border-t border-border">
                      {/* <span className="bg-secondary px-3 py-1 rounded-full">
                        {testimonial.duration}
                      </span> */}
                      <span>⭐ Verified Patient</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories by Condition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Conditions We've Successfully Treated
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { condition: "Chronic Pain", count: "150+" },
                { condition: "Digestive Disorders", count: "200+" },
                { condition: "Skin Conditions", count: "120+" },
                { condition: "Respiratory Issues", count: "180+" },
                { condition: "Children's Health", count: "250+" },
                { condition: "Women's Health", count: "140+" },
                { condition: "Mental Health", count: "90+" },
                { condition: "Autoimmune Conditions", count: "60+" },
                { condition: "Hormonal Imbalances", count: "110+" }
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-lg p-6 text-center shadow-soft hover:shadow-card transition-smooth">
                  <div className="text-2xl font-bold text-primary mb-2">{item.count}</div>
                  <p className="text-sm text-foreground font-medium">{item.condition}</p>
                  <p className="text-xs text-muted-foreground mt-1">Patients Treated</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Ready to Share Your Success Story?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of patients who have found natural healing through homeopathy. 
              Book your consultation today and start your journey to better health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="healing" 
                size="lg"
                onClick={() => window.location.href = "tel:+917780396837"}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Book Your Consultation
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const message = "Hello, I read your testimonials and would like to know more about homeopathy treatment.";
                  window.open(`https://wa.me/919700222005?text=${encodeURIComponent(message)}`, "_blank");
                }}
              >
                Ask Questions on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Review Guidelines */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Share Your Experience
              </h3>
              <p className="text-muted-foreground mb-6">
                Have you been treated at Reliable Homeo Clinics? We'd love to hear about your experience 
                and how homeopathy has helped improve your health and well-being.
              </p>
              
              <Button 
                variant="trust" 
                onClick={() => {
                  const message = "Hello, I would like to share my experience as a patient at Reliable Homeo Clinics.";
                  window.open(`https://wa.me/919700222005?text=${encodeURIComponent(message)}`, "_blank");
                }}
              >
                Share Your Story
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4">
                All testimonials are from verified patients and published with consent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;