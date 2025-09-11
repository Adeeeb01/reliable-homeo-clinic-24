import { Stethoscope, Award, Users, Clock } from "lucide-react";
import aboutImage from "@/assets/about-homeo.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              About Reliable Homeo Clinics
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
              Dedicated to providing gentle, natural healing through the time-tested principles of homeopathy
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Reliable Homeo Clinics was founded with a simple yet powerful vision: to bring the gentle, 
                  effective healing of homeopathy to the people of Hyderabad. Our journey began with 
                  experienced practitioners who believed in treating not just symptoms, but the whole person.
                </p>
                <p>
                  With over a decade of combined experience, our team has helped thousands of patients 
                  find relief from chronic conditions, acute ailments, and everything in between. We've built 
                  our reputation on trust, compassion, and most importantly, results.
                </p>
                <p>
                  Today, we proudly serve the community from our two convenient locations in Mehdipatnam 
                  and Abids, making quality homeopathic care accessible to families across the city.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Natural homeopathy medicine and healing elements" 
                className="rounded-xl shadow-healing w-full"
              />
              <div className="absolute inset-0 bg-gradient-healing opacity-10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To provide effective, gentle, and natural homeopathy care that promotes long-term healing, 
              builds trust within our community, and treats every patient as family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-lg bg-gradient-healing flex items-center justify-center">
                  <Stethoscope className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground">Professional Care</h3>
              <p className="text-sm text-muted-foreground">
                Experienced doctors with deep knowledge of homeopathic principles and modern healthcare practices.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-lg bg-gradient-trust flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground">Community Focus</h3>
              <p className="text-sm text-muted-foreground">
                Building lasting relationships with families and serving as a trusted healthcare partner.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-lg bg-gradient-healing flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground">Proven Results</h3>
              <p className="text-sm text-muted-foreground">
                Track record of successful treatments and satisfied patients across various health conditions.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-lg bg-gradient-trust flex items-center justify-center">
                  <Clock className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground">Long-term Healing</h3>
              <p className="text-sm text-muted-foreground">
                Focus on addressing root causes rather than just managing symptoms for lasting wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profiles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Meet Our Doctors</h2>
            <p className="text-lg text-muted-foreground">
              Experienced practitioners committed to your health and well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl shadow-card p-8 text-center">
              <div className="w-24 h-24 bg-gradient-healing rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">Dr</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Chief Practitioner</h3>
              <p className="text-trust-blue font-medium mb-4">Mehdipatnam Clinic</p>
              <p className="text-muted-foreground leading-relaxed">
                Over 15 years of experience in classical homeopathy with specialization in chronic diseases, 
                pediatric care, and women's health. Dedicated to providing personalized treatment plans 
                for each patient's unique needs.
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-card p-8 text-center">
              <div className="w-24 h-24 bg-gradient-trust rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">Dr</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Senior Practitioner</h3>
              <p className="text-trust-blue font-medium mb-4">Abids Clinic</p>
              <p className="text-muted-foreground leading-relaxed">
                Expert in acute and chronic conditions with 12+ years of practice. Known for compassionate 
                care and detailed case taking. Specializes in respiratory conditions, digestive disorders, 
                and stress-related ailments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Why Choose Us?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-success flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Individualized Treatment</h4>
                    <p className="text-muted-foreground text-sm">
                      Each patient receives a customized treatment plan based on their unique symptoms, 
                      constitution, and health history.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-success flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Safe & Natural</h4>
                    <p className="text-muted-foreground text-sm">
                      Homeopathic remedies are gentle, non-toxic, and have no harmful side effects, 
                      making them safe for all ages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-success flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Holistic Approach</h4>
                    <p className="text-muted-foreground text-sm">
                      We treat the person as a whole - mind, body, and spirit - not just isolated symptoms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-success flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Convenient Locations</h4>
                    <p className="text-muted-foreground text-sm">
                      Two well-equipped clinics in prime locations with easy accessibility and parking facilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-success flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Affordable Care</h4>
                    <p className="text-muted-foreground text-sm">
                      Quality healthcare that doesn't break the bank, with transparent pricing and 
                      flexible payment options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 rounded-full bg-success flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Proven Track Record</h4>
                    <p className="text-muted-foreground text-sm">
                      Thousands of satisfied patients and successful treatments across various health conditions.
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

export default About;