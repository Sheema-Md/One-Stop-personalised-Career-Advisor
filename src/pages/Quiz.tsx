import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Brain, Lightbulb } from "lucide-react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which activity interests you the most?",
      options: [
        "Solving mathematical problems",
        "Writing creative stories",
        "Conducting scientific experiments", 
        "Managing business operations"
      ],
      category: "interest"
    },
    {
      id: 2,
      question: "What type of environment do you prefer working in?",
      options: [
        "Laboratory or research facility",
        "Office with team collaboration",
        "Outdoor fieldwork",
        "Creative studio or workshop"
      ],
      category: "environment"
    },
    {
      id: 3,
      question: "Which subject did you enjoy most in school?",
      options: [
        "Mathematics and Physics",
        "Literature and History",
        "Biology and Chemistry",
        "Economics and Business Studies"
      ],
      category: "academic"
    }
  ];

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-medium">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Your Career Recommendations</CardTitle>
                <CardDescription>Based on your quiz responses, here are personalized suggestions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-secondary">Recommended Stream</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xl font-semibold text-primary">Science & Technology</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Your responses indicate strong analytical and problem-solving skills
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-secondary">Top Career Paths</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="text-sm">• Software Engineering</li>
                        <li className="text-sm">• Data Science</li>
                        <li className="text-sm">• Research & Development</li>
                        <li className="text-sm">• Biotechnology</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => window.location.href = '/predictor'}>
                    Find Colleges
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = '/scholarships'}>
                    Explore Scholarships
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Career Aptitude Quiz</h1>
            <p className="text-muted-foreground">
              Answer questions to discover your ideal career path and academic stream
            </p>
          </div>

          <Card className="shadow-medium">
            <CardHeader>
              <div className="flex justify-between items-center mb-4">
                <CardTitle className="text-lg">
                  Question {currentQuestion + 1} of {questions.length}
                </CardTitle>
                <span className="text-sm text-muted-foreground">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <Progress value={progress} className="mb-4" />
              <CardDescription className="text-lg">
                {questions[currentQuestion].question}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQuestion] || ""}
                onValueChange={handleAnswerSelect}
                className="space-y-4"
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion]}
                >
                  {currentQuestion === questions.length - 1 ? "View Results" : "Next"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;