import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "About Homeopathy",
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          q: "What is homeopathy and how does it work?",
          a: "Homeopathy is a natural system of medicine that works on the principle of 'like cures like.' It uses highly diluted substances to trigger the body's natural healing system. The remedies are selected based on your individual symptoms, constitution, and overall health picture."
        },
        {
          q: "Is homeopathy safe for children and pregnant women?",
          a: "Yes, homeopathy is completely safe for people of all ages, including infants, children, pregnant women, and elderly patients. The remedies are non-toxic, have no side effects, and do not interact with other medications."
        },
        {
          q: "How long does homeopathic treatment take to work?",
          a: "The response time varies depending on the condition and individual. Acute conditions may show improvement within hours or days, while chronic conditions typically require weeks to months for significant improvement. Most patients start noticing positive changes within 2-4 weeks of treatment."
        },
        {
          q: "Can I take homeopathic medicines with other medications?",
          a: "Yes, homeopathic medicines can be safely taken alongside conventional medications. They do not interfere with other treatments. However, always inform your homeopath about any other medications you're taking for the best treatment plan."
        }
      ]
    },
    {
      title: "Treatment & Appointments",
      icon: <MessageCircle className="h-6 w-6" />,
      questions: [
        {
          q: "How do I book an appointment?",
          a: "You can book an appointment by calling us at +91 86869 04404 or +91 77803 96837 or sending a WhatsApp message. We offer appointments at both our Mehdipatnam and Abids locations. Our staff will help you choose the most convenient time and location."
        },
        {
          q: "What should I bring to my appointment?",
          a: "Please bring any recent medical reports, test results, and a list of current medications. It's also helpful to note down your symptoms and when they occur. This information helps us provide the best possible treatment plan."
        },
      ]
    },
    {
      title: "Conditions & Effectiveness",
      icon: <HelpCircle className="h-6 w-6" />,
      questions: [
        {
          q: "What conditions can homeopathy treat effectively?",
          a: "Homeopathy can treat a wide range of conditions including chronic pain, digestive disorders, respiratory problems, skin conditions, hormonal imbalances, stress-related disorders, children's health issues, and many acute conditions. We've successfully treated conditions like arthritis, migraine, asthma, eczema, IBS, and more."
        },
        {
          q: "Is homeopathy effective for serious or chronic diseases?",
          a: "Yes, homeopathy is particularly effective for chronic diseases. Many patients with long-standing conditions like arthritis, chronic fatigue, autoimmune disorders, and recurring infections have found significant relief. The treatment works by strengthening your body's natural healing capacity."
        },
        {
          q: "Can homeopathy help with mental health issues?",
          a: "Absolutely. Homeopathy takes a holistic approach and is very effective for stress, anxiety, depression, sleep disorders, and other mental health concerns. The treatment addresses both emotional and physical aspects of health, promoting overall well-being."
        },
        {
          q: "What if my condition doesn't improve with homeopathy?",
          a: "While homeopathy has a high success rate, individual responses vary. If you don't see improvement within the expected timeframe, we'll reassess your case, potentially adjust the treatment, or recommend additional investigations. We're committed to finding the best solution for your health."
        }
      ]
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
              Get answers to common questions about homeopathy, our treatments, and clinic procedures
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="healing" 
                onClick={() => window.location.href = "tel:+917780396837"}
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us: +91 77803 96837
              </Button>
              <Button 
                variant="appointment" 
                onClick={() => {
                  const message = "Hello, I have a question about homeopathy treatment at Reliable Homeo Clinics.";
                  window.open(`https://wa.me/919700222005?text=${encodeURIComponent(message)}`, "_blank");
                }}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-healing">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-xl">
                    <div className="h-10 w-10 rounded-lg bg-gradient-healing flex items-center justify-center text-primary-foreground">
                      {category.icon}
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                  <CardDescription>
                    Common questions and detailed answers about {category.title.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      {/* <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our experienced team is always ready to address your specific concerns and help you understand 
              how homeopathy can benefit your health. Don't hesitate to reach out!
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="text-center shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Speak with Our Doctor</CardTitle>
                  <CardDescription>Get professional medical advice</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="healing" 
                    className="w-full"
                    onClick={() => window.location.href = "tel:+911234567890"}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center shadow-card">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Questions</CardTitle>
                  <CardDescription>Fast response via WhatsApp</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="appointment" 
                    className="w-full"
                    onClick={() => {
                      const message = "Hello, I have some questions about homeopathy treatment that aren't covered in the FAQ.";
                      window.open(`https://wa.me/919700222005?text=${encodeURIComponent(message)}`, "_blank");
                    }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Message Us Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Additional Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="h-12 w-12 bg-gradient-healing rounded-full flex items-center justify-center mx-auto">
                  <HelpCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground">Health Blog</h4>
                <p className="text-sm text-muted-foreground">
                  Read our articles about natural health and homeopathy tips
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-12 w-12 bg-gradient-trust rounded-full flex items-center justify-center mx-auto">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-foreground">Patient Stories</h4>
                <p className="text-sm text-muted-foreground">
                  Learn from other patients' experiences with homeopathy
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-12 w-12 bg-secondary-blue rounded-full flex items-center justify-center mx-auto">
                  <Phone className="h-6 w-6 text-foreground" />
                </div>
                <h4 className="font-semibold text-foreground">Contact Info</h4>
                <p className="text-sm text-muted-foreground">
                  Clinic locations, timings, and contact details
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;