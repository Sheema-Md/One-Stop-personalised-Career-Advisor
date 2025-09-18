import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Award, Calendar, DollarSign, Filter, ExternalLink } from "lucide-react";
import { useState } from "react";

const Scholarships = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const scholarships = [
    {
      id: 1,
      name: "National Scholarship Portal - Merit-cum-Means",
      amount: "₹12,000 - ₹20,000/year",
      deadline: "31st March 2024",
      eligibility: "Students from families with annual income < ₹2.5 Lakhs",
      category: "merit",
      authority: "Government of India",
      status: "Open"
    },
    {
      id: 2,
      name: "Central Sector Scheme of Scholarships",
      amount: "₹10,000 - ₹20,000/year",
      deadline: "30th April 2024", 
      eligibility: "Top 20,000 students in Class XII board exams",
      category: "merit",
      authority: "Ministry of Education",
      status: "Open"
    },
    {
      id: 3,
      name: "Prime Minister's Special Scholarship Scheme",
      amount: "₹3,000/month",
      deadline: "15th May 2024",
      eligibility: "Students from J&K pursuing professional courses",
      category: "regional",
      authority: "AICTE",
      status: "Open"
    },
    {
      id: 4,
      name: "Dr. APJ Abdul Kalam IGNITE Awards",
      amount: "₹25,000 - ₹10 Lakhs",
      deadline: "30th June 2024",
      eligibility: "Students with innovative ideas and projects",
      category: "innovation",
      authority: "NIF India",
      status: "Open"
    },
    {
      id: 5,
      name: "Post Matric Scholarship for SC Students",
      amount: "₹1,200 - ₹2,000/month",
      deadline: "Rolling basis",
      eligibility: "SC students pursuing post-matric studies",
      category: "social",
      authority: "State Governments",
      status: "Open"
    },
    {
      id: 6,
      name: "Minority Communities Scholarship",
      amount: "₹1,000 - ₹5,000/month",
      deadline: "31st December 2024",
      eligibility: "Students from minority communities",
      category: "social",
      authority: "Ministry of Minority Affairs",
      status: "Open"
    }
  ];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.eligibility.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || scholarship.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "merit": return "bg-primary/10 text-primary";
      case "social": return "bg-secondary/10 text-secondary";
      case "regional": return "bg-accent/10 text-accent";
      case "innovation": return "bg-destructive/10 text-destructive";
      default: return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Government Scholarships</h1>
            <p className="text-muted-foreground">
              Discover scholarships from NSP, UGC, AICTE, and state government programs
            </p>
          </div>

          {/* Filters */}
          <Card className="shadow-soft mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search scholarships..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <div className="w-full md:w-48">
                  <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger>
                      <Filter className="w-4 h-4 mr-2" />
                      <SelectValue placeholder="Filter by category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="merit">Merit-based</SelectItem>
                      <SelectItem value="social">Social Welfare</SelectItem>
                      <SelectItem value="regional">Regional</SelectItem>
                      <SelectItem value="innovation">Innovation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scholarships Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="shadow-medium hover:shadow-strong transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getCategoryColor(scholarship.category)}>
                      {scholarship.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {scholarship.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{scholarship.name}</CardTitle>
                  <CardDescription className="text-sm">
                    By {scholarship.authority}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-secondary" />
                      <span className="font-semibold text-secondary">{scholarship.amount}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-destructive" />
                      <span>Deadline: {scholarship.deadline}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">
                      <strong>Eligibility:</strong> {scholarship.eligibility}
                    </p>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredScholarships.length === 0 && (
            <div className="text-center py-12">
              <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No scholarships found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Scholarships;