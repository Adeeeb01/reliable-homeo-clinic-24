import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Leaf, Heart, Shield } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "Understanding Homeopathy: A Gentle Approach to Healing",
    excerpt: "Discover how homeopathy works with your body's natural healing mechanisms to restore health and vitality without side effects.",
    author: "Dr. Reliable Homeo Team",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Education"
  };

  const blogPosts = [
    {
      title: "Boosting Immunity Naturally: Homeopathic Solutions for Better Health",
      excerpt: "Learn about natural ways to strengthen your immune system using time-tested homeopathic principles and remedies.",
      author: "Dr. Reliable Homeo Team",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Immunity",
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: "Managing Stress and Anxiety with Homeopathy",
      excerpt: "Discover gentle, effective homeopathic approaches to mental wellness and stress management in today's fast-paced world.",
      author: "Dr. Reliable Homeo Team", 
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Mental Health",
      icon: <Heart className="h-5 w-5" />
    },
    {
      title: "Children's Health: Safe and Natural Homeopathic Care",
      excerpt: "A parent's guide to using homeopathy for common childhood ailments, from colds to behavioral issues.",
      author: "Dr. Reliable Homeo Team",
      date: "March 5, 2024",
      readTime: "8 min read",
      category: "Pediatric Care",
      icon: <Heart className="h-5 w-5" />
    },
    {
      title: "Seasonal Allergies: Natural Relief Through Homeopathy",
      excerpt: "Find lasting relief from seasonal allergies without the drowsiness and side effects of conventional antihistamines.",
      author: "Dr. Reliable Homeo Team",
      date: "March 1, 2024",
      readTime: "5 min read",
      category: "Allergies",
      icon: <Leaf className="h-5 w-5" />
    },
    {
      title: "Digestive Health: Homeopathic Solutions for Common Problems",
      excerpt: "Explore how homeopathy addresses digestive issues from acidity to IBS, focusing on root causes rather than symptoms.",
      author: "Dr. Reliable Homeo Team",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Digestive Health",
      icon: <Leaf className="h-5 w-5" />
    },
    {
      title: "Women's Health: Homeopathic Support Through Life Stages",
      excerpt: "Understanding how homeopathy can support women's health from adolescence through menopause and beyond.",
      author: "Dr. Reliable Homeo Team",
      date: "February 25, 2024",
      readTime: "9 min read",
      category: "Women's Health",
      icon: <Heart className="h-5 w-5" />
    }
  ];

  const categories = [
    { name: "All Posts", count: 15 },
    { name: "Education", count: 5 },
    { name: "Immunity", count: 3 },
    { name: "Mental Health", count: 2 },
    { name: "Pediatric Care", count: 2 },
    { name: "Allergies", count: 2 },
    { name: "Women's Health", count: 1 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-calm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Health Tips & Insights
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
              Discover natural healing wisdom, health tips, and the latest insights from our homeopathic experts
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
            
            <Card className="shadow-healing hover:shadow-lg transition-smooth overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-healing p-8 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <Leaf className="h-16 w-16 mx-auto mb-4" />
                    <div className="text-sm font-medium">Featured Article</div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <Button variant="healing">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Sidebar */}
              <div className="lg:w-1/4">
                <Card className="shadow-card sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                    <CardDescription>Browse articles by topic</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex justify-between items-center p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-smooth cursor-pointer">
                        <span className="text-sm">{category.name}</span>
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
                  <div className="text-sm text-muted-foreground">
                    Showing {blogPosts.length} of 15 articles
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {blogPosts.map((post, index) => (
                    <Card key={index} className="shadow-card hover:shadow-healing transition-smooth group cursor-pointer">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2 text-primary">
                            {post.icon}
                            <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        
                        <CardTitle className="text-lg group-hover:text-primary transition-smooth line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="group-hover:text-primary p-0 h-auto">
                          Read More
                          <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <Button variant="outline" size="lg">
                    Load More Articles
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-hero rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated with Health Tips
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get the latest articles, health tips, and natural healing insights delivered to your inbox. 
                Join our community of health-conscious individuals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  variant="healing"
                  onClick={() => {
                    const message = "Hello, I would like to subscribe to your health newsletter and tips.";
                    window.open(`https://wa.me/919700222005?text=${encodeURIComponent(message)}`, "_blank");
                  }}
                >
                  Subscribe via WhatsApp
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = "mailto:info@reliablehomeo.com?subject=Newsletter Subscription"}
                >
                  Email Subscription
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Coming Soon
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <Leaf className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Video Content</h4>
                <p className="text-sm text-muted-foreground">
                  Educational videos about homeopathy and natural healing
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <Heart className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Health Guides</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive guides for specific health conditions
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6 shadow-soft">
                <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Wellness Tips</h4>
                <p className="text-sm text-muted-foreground">
                  Daily wellness tips and preventive health advice
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;