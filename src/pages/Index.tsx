import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Target, 
  Award, 
  TrendingUp, 
  BookOpen, 
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-students.jpg";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Career Aptitude Quiz",
      description: "Discover your strengths and interests with our comprehensive assessment",
      link: "/quiz"
    },
    {
      icon: Target,
      title: "College Predictor",
      description: "Get personalized college recommendations based on your academic performance",
      link: "/predictor"
    },
    {
      icon: Award,
      title: "Scholarship Explorer",
      description: "Find government scholarships from NSP, UGC, AICTE, and state portals",
      link: "/scholarships"
    },
    {
      icon: TrendingUp,
      title: "Progress Dashboard",
      description: "Track your journey with personalized analytics and reminders",
      link: "/dashboard"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Guided" },
    { number: "500+", label: "Government Colleges" },
    { number: "100+", label: "Active Scholarships" },
    { number: "95%", label: "Success Rate" }
  ];

  const benefits = [
    "Authentic data from AISHE, UGC, AICTE",
    "Real-time college admission predictions", 
    "Comprehensive scholarship database",
    "Personalized career recommendations",
    "Government college focus",
    "Free platform for all students"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-gradient-hero text-primary-foreground">
                  Trusted by 10,000+ Students
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                  Your Path to the
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> Right Career</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Discover your ideal career path, predict college admissions, and find government scholarships - all in one platform powered by authentic government data.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link to="/quiz">
                    Start Career Quiz
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                  <Link to="/predictor">College Predictor</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-2xl font-bold text-primary">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-strong">
                <img 
                  src={heroImage} 
                  alt="Students collaborating and studying" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating cards */}
              <Card className="absolute -bottom-6 -left-6 w-48 shadow-medium">
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                    <span className="text-sm font-semibold">95% Success Rate</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Students found their ideal colleges</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need for Career Success</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools powered by authentic government data to guide your educational journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-medium hover:shadow-strong transition-shadow group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{feature.description}</CardDescription>
                  <Button variant="ghost" size="sm" className="p-0 h-auto" asChild>
                    <Link to={feature.link} className="text-primary hover:text-primary/80">
                      Explore <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose CareerGuide?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We leverage authentic data from government sources to provide you with the most accurate and up-to-date information for your career decisions.
              </p>
              
              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Trusted by Students Nationwide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <GraduationCap className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-2xl font-bold text-primary">500+</p>
                    <p className="text-xs text-muted-foreground">Government Colleges</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <Award className="w-8 h-8 mx-auto mb-2 text-secondary" />
                    <p className="text-2xl font-bold text-secondary">100+</p>
                    <p className="text-xs text-muted-foreground">Active Scholarships</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Data sourced from AISHE, UGC, AICTE, NSP, and State Portals
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Shape Your Future?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their ideal career path and college with our comprehensive guidance platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/quiz">
                Take Career Quiz
                <BookOpen className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CareerGuide</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering students with authentic government data for informed career decisions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
