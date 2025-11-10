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
              Hyderabad's trusted destination for ethical and scientific homeopathic care since 1949
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Our Heritage</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1955 by the late Dr. Badreuddin Siddiqui (grandfather of Dr. Nomaan Siddiqui), 
                  Reliable Homeo Clinics has served generations of patients with unwavering commitment to 
                  ethical homeopathic practice. For 32 years, Dr. Badreuddin Siddiqui established the 
                  foundation of excellence in homeopathic care.
                </p>
                <p>
                  Following this legacy, Dr. Aqeel Siddiqui (Dr. Nomaan’s father continued the family tradition from 1981 to 2021, ensuring 
                  uninterrupted quality care for the community. Today, Dr. Nomaan Siddiqui (B.H.M.S, M.D. Hom), 
                  practicing for 15+ years of Homeopathic clinical experience, continues this remarkable 
                  heritage as Managing Director.
                </p>
                <p>
                  Our three-generation legacy, expertise, and patient-first approach ensure every visitor 
                  receives the highest standard of personalized homeopathic care. We've built our reputation 
                  on trust, compassion, and most importantly, results that span over 75 years of healing.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/299114aa-4cb7-4073-a6e1-fd6dcfb93bc7.png" 
                alt="Dr. Nomaan Siddiqui - Lead Homeopathic Physician at Reliable Homeo Clinics" 
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
            <h2 className="text-3xl font-bold text-foreground mb-6">Meet Dr. Nomaan Siddiqui</h2>
            <p className="text-lg text-muted-foreground">
              Managing Director & Lead Homeopathic Physician continuing the family legacy
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl shadow-healing p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="w-32 h-32 rounded-full mx-auto lg:mx-0 overflow-hidden">
                    <img 
                      src="/lovable-uploads/299114aa-4cb7-4073-a6e1-fd6dcfb93bc7.png" 
                      alt="Dr. Nomaan Siddiqui" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Nomaan Siddiqui</h3>
                    <p className="text-trust-blue font-medium mb-1">B.H.M.S, M.D. Hom</p>
                    <p className="text-muted-foreground font-medium">Managing Director</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Nomaan Siddiqui brings 15+ years of BHMS experience 
                    in homeopathic care, blending traditional wisdom with modern medical expertise for superior 
                    results. As the third generation in his family to practice homeopathy, he maintains the 
                    highest standards of ethical and scientific care.
                  </p>
                  
                  <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-success"></div>
                      <span className="text-sm text-muted-foreground">Treasurer of IIHP (Indian Institute of Homeopathic Physicians)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-success"></div>
                      <span className="text-sm text-muted-foreground">Life member of IIHP ((Greater Hyderabad))</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-success"></div>
                      <span className="text-sm text-muted-foreground">Post Graduate from Hahnemann College of Homeopathy, London, United Kingdom</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-success"></div>
                      <span className="text-sm text-muted-foreground">Active participant in major Indian homeopathic events</span>
                    </div>
                  </div>
                  
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm text-muted-foreground italic text-center">
                      "I treat, He cures."
                    </p>
                  </div>
                </div>
              </div>
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

      {/* Patient Reviews */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Patient Reviews</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Hear what our patients say about their healing journey with us
            </p>
            <a 
              href="https://www.lybrate.com/hyderabad/doctor/dr-nomaan-siddiqui-homeopath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-healing text-primary-foreground rounded-lg hover:shadow-healing transition-all duration-300"
            >
              View All Reviews on Lybrate
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card rounded-xl shadow-healing p-6">
              <div className="mb-4">
                <h4 className="font-semibold text-foreground">Prativ</h4>
                <p className="text-sm text-muted-foreground">Feb 14, 2023</p>
              </div>
              <p className="text-muted-foreground italic">
                "Dr. Nomaan Siddiqui, I am so happy with your dedication and excellence you put up in your treatments. 
                The efforts and your wonderful advice you give to all the patients. I am very thankful to you. 
                No amount of thanks can express my feelings. Just keep on doing the good work by the good hands God has."
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-healing p-6">
              <div className="mb-4">
                <h4 className="font-semibold text-foreground">Paramjit</h4>
                <p className="text-sm text-muted-foreground">Jan 31, 2023</p>
              </div>
              <p className="text-muted-foreground italic">
                "Thank you so much doctor. You did the treatment with full enthusiasm and attention. 
                Thanks a lot for your treatment. I must say that you are really an expert Dr. Nomaan Siddiqui."
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-healing p-6">
              <div className="mb-4">
                <h4 className="font-semibold text-foreground">Patoj</h4>
                <p className="text-sm text-muted-foreground">Dec 03, 2022</p>
              </div>
              <p className="text-muted-foreground italic">
                "Dr. Nomaan Siddiqui I really appreciate his efforts he put with his patients and would 
                highly recommend everybody to get in touch with Dr. Nomaan Siddiqui for any related treatment 
                for the services the doctor provides."
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-healing p-6">
              <div className="mb-4">
                <h4 className="font-semibold text-foreground">Gurdeep</h4>
                <p className="text-sm text-muted-foreground">Dec 20, 2022</p>
              </div>
              <p className="text-muted-foreground italic">
                "Dr. Nomaan Siddiqui you are the best Homeopath among all I know. Thank you so very much. 
                I am completely satisfied with the results I observed."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;