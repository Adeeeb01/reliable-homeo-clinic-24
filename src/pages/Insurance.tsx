import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Phone, MessageCircle, Shield, IndianRupee } from "lucide-react";

const Insurance = () => {
  const paymentMethods = [
    { name: "Cash", icon: <IndianRupee className="h-5 w-5" /> },
    { name: "Credit Cards", icon: <CreditCard className="h-5 w-5" /> },
    { name: "Debit Cards", icon: <CreditCard className="h-5 w-5" /> },
    { name: "UPI Payments", icon: <Phone className="h-5 w-5" /> },
    { name: "Bank Transfer", icon: <Shield className="h-5 w-5" /> },
    { name: "Payment Apps", icon: <Phone className="h-5 w-5" /> }
  ];

  const insurancePartners = [
    "Star Health Insurance",
    "HDFC ERGO",
    "ICICI Lombard", 
    "New India Assurance",
    "United India Insurance",
    "Oriental Insurance",
    "Bajaj Allianz",
    "Max Bupa Health Insurance"
  ];

  const pricingFeatures = [
    "Transparent pricing with no hidden costs",
    "Affordable consultation fees",
    "Minimal medicine costs",
    "Family packages available", 
    "Senior citizen discounts",
    "Student discounts",
    "Flexible payment plans",
    "Insurance claim assistance"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Insurance & Payments
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
              Affordable homeopathic care with flexible payment options and insurance support
            </p>
          </div>
        </div>
      </section>

      {/* Affordable Care */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Quality Care That's Affordable
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that effective healthcare should be accessible to everyone. Our transparent pricing 
              and insurance support make quality homeopathic treatment affordable for all families.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Consultation Fees */}
            <Card className="shadow-healing text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-healing rounded-full mx-auto flex items-center justify-center mb-4">
                  <IndianRupee className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Consultation Fees</CardTitle>
                <CardDescription>Transparent, affordable pricing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Initial Consultation</span>
                    <span className="font-semibold text-primary">₹500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Follow-up Visit</span>
                    <span className="font-semibold text-primary">₹300</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Medicine (monthly)</span>
                    <span className="font-semibold text-primary">₹200-400</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  *Prices may vary based on individual treatment requirements
                </p>
              </CardContent>
            </Card>

            {/* Insurance Coverage */}
            <Card className="shadow-healing text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-gradient-trust rounded-full mx-auto flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Insurance Coverage</CardTitle>
                <CardDescription>We accept major insurance plans</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">We accept insurance from:</p>
                  <ul className="text-xs space-y-1">
                    <li>• Major health insurance providers</li>
                    <li>• Corporate health plans</li>
                    <li>• Government employee schemes</li>
                    <li>• Cashless and reimbursement</li>
                  </ul>
                </div>
                <Button variant="appointment" size="sm" className="w-full">
                  Check Your Coverage
                </Button>
              </CardContent>
            </Card>

            {/* Payment Options */}
            <Card className="shadow-healing text-center">
              <CardHeader>
                <div className="h-16 w-16 bg-secondary-blue rounded-full mx-auto flex items-center justify-center mb-4">
                  <CreditCard className="h-8 w-8 text-foreground" />
                </div>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Multiple convenient payment options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-muted rounded-md">
                      {method.icon}
                      <span>{method.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  All payments are secure and processed safely
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Accepted Insurance Providers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {insurancePartners.map((provider, index) => (
                <div key={index} className="bg-card rounded-lg p-4 text-center shadow-soft hover:shadow-card transition-smooth">
                  <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground">{provider}</p>
                </div>
              ))}
            </div>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-center">Insurance Claim Process</CardTitle>
                <CardDescription className="text-center">
                  We make insurance claims simple and hassle-free
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">
                      1
                    </div>
                    <h4 className="font-semibold text-foreground">Verify Coverage</h4>
                    <p className="text-sm text-muted-foreground">
                      Bring your insurance card and we'll verify your coverage before treatment.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">
                      2
                    </div>
                    <h4 className="font-semibold text-foreground">Treatment Documentation</h4>
                    <p className="text-sm text-muted-foreground">
                      We provide detailed receipts and medical certificates for your claims.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold">
                      3
                    </div>
                    <h4 className="font-semibold text-foreground">Claim Assistance</h4>
                    <p className="text-sm text-muted-foreground">
                      Our staff helps you with the claim process and required documentation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Why Our Pricing Makes Sense
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {pricingFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-hero rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground text-center mb-4">
                Cost Comparison: Homeopathy vs Conventional Treatment
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Homeopathic Treatment</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Consultation fees</span>
                      <span className="text-primary font-medium">₹300-500</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medicine cost (monthly)</span>
                      <span className="text-primary font-medium">₹200-400</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average treatment duration</span>
                      <span className="text-primary font-medium">3-6 months</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total cost estimate</span>
                      <span className="text-success">₹3,000-6,000</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Conventional Treatment</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Specialist consultation</span>
                      <span className="text-muted-foreground">₹800-2000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medicine cost (monthly)</span>
                      <span className="text-muted-foreground">₹1,000-3,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ongoing management</span>
                      <span className="text-muted-foreground">Years/Lifetime</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-semibold">
                      <span>Total cost estimate</span>
                      <span className="text-destructive">₹15,000+/year</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Flexible Payment Options
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="shadow-card text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Pay Per Visit</CardTitle>
                  <CardDescription>Most flexible option</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pay for each consultation and medicine separately. 
                    No commitment, complete flexibility.
                  </p>
                  <Button variant="outline" className="w-full">
                    Choose This Plan
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center border-primary">
                <CardHeader>
                  <CardTitle className="text-lg">Treatment Package</CardTitle>
                  <CardDescription>Best value for most patients</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Pre-pay for a complete treatment course and save 15%. 
                    Includes consultations and medicines.
                  </p>
                  <Button variant="healing" className="w-full">
                    Most Popular
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardHeader>
                  <CardTitle className="text-lg">Family Plan</CardTitle>
                  <CardDescription>For multiple family members</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Special rates when multiple family members 
                    need treatment. Significant cost savings.
                  </p>
                  <Button variant="trust" className="w-full">
                    Family Discounts
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Payment Questions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Questions About Payment or Insurance?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our billing team is here to help you understand your options and make healthcare affordable. 
              Don't let cost concerns prevent you from getting the care you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="healing" 
                size="lg"
                onClick={() => window.location.href = "tel:+911234567890"}
              >
                <Phone className="h-5 w-5 mr-2" />
                Call for Pricing Info
              </Button>
              
              <Button 
                variant="appointment" 
                size="lg"
                onClick={() => {
                  const message = "Hello, I have questions about insurance coverage and payment options for homeopathy treatment.";
                  window.open(`https://wa.me/911234567890?text=${encodeURIComponent(message)}`, "_blank");
                }}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Billing Team
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-6">
              We'll verify your insurance coverage before your first visit and explain all costs upfront.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insurance;