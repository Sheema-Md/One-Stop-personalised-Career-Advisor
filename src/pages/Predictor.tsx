import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, AlertTriangle } from "lucide-react";

const Predictor = () => {
  const [results, setResults] = useState<any>(null);
  const [formData, setFormData] = useState({
    marks: "",
    category: "",
    state: "",
    stream: ""
  });

  const handlePredict = () => {
    // Mock prediction results
    setResults({
      safe: [
        { name: "Delhi University - B.Sc. Computer Science", cutoff: "85%", location: "Delhi" },
        { name: "Jamia Millia Islamia - B.Tech CSE", cutoff: "88%", location: "Delhi" },
      ],
      target: [
        { name: "IIT Delhi - B.Tech CSE", cutoff: "95%", location: "Delhi" },
        { name: "NIT Trichy - B.Tech CSE", cutoff: "93%", location: "Tamil Nadu" },
      ],
      stretch: [
        { name: "IIT Bombay - B.Tech CSE", cutoff: "98%", location: "Maharashtra" },
        { name: "IIT Madras - B.Tech CSE", cutoff: "97%", location: "Tamil Nadu" },
      ]
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-2">College Admission Predictor</h1>
            <p className="text-muted-foreground">
              Get personalized college recommendations based on your academic performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Enter Your Details</CardTitle>
                <CardDescription>Provide your academic information for accurate predictions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="marks">Your Percentage/CGPA</Label>
                  <Input
                    id="marks"
                    placeholder="e.g., 92%"
                    value={formData.marks}
                    onChange={(e) => setFormData({...formData, marks: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(value) => setFormData({...formData, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                      <SelectItem value="ews">EWS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">Home State</Label>
                  <Select onValueChange={(value) => setFormData({...formData, state: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="west-bengal">West Bengal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stream">Preferred Stream</Label>
                  <Select onValueChange={(value) => setFormData({...formData, stream: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select stream" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="medical">Medical</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="commerce">Commerce</SelectItem>
                      <SelectItem value="arts">Arts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  className="w-full mt-6" 
                  onClick={handlePredict}
                  disabled={!formData.marks || !formData.category}
                >
                  Predict Colleges
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="space-y-6">
              {results ? (
                <>
                  <Card className="border-secondary/20 shadow-medium">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                        <CardTitle className="text-lg text-secondary">Safe Colleges</CardTitle>
                      </div>
                      <CardDescription>High probability of admission</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {results.safe.map((college: any, index: number) => (
                        <div key={index} className="p-3 rounded-lg border border-border">
                          <h4 className="font-semibold text-sm">{college.name}</h4>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-muted-foreground">{college.location}</span>
                            <Badge variant="secondary" className="text-xs">Cutoff: {college.cutoff}</Badge>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20 shadow-medium">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <CardTitle className="text-lg text-primary">Target Colleges</CardTitle>
                      </div>
                      <CardDescription>Moderate probability - worth applying</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {results.target.map((college: any, index: number) => (
                        <div key={index} className="p-3 rounded-lg border border-border">
                          <h4 className="font-semibold text-sm">{college.name}</h4>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-muted-foreground">{college.location}</span>
                            <Badge variant="outline" className="text-xs">Cutoff: {college.cutoff}</Badge>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border-destructive/20 shadow-medium">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                        <CardTitle className="text-lg text-destructive">Stretch Colleges</CardTitle>
                      </div>
                      <CardDescription>Challenging but possible - dream colleges</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {results.stretch.map((college: any, index: number) => (
                        <div key={index} className="p-3 rounded-lg border border-border">
                          <h4 className="font-semibold text-sm">{college.name}</h4>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-muted-foreground">{college.location}</span>
                            <Badge variant="destructive" className="text-xs">Cutoff: {college.cutoff}</Badge>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card className="shadow-medium">
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <Target className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Enter your details to get personalized college predictions
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictor;