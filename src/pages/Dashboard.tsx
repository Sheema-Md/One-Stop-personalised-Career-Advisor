import Navigation from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  BookOpen, 
  Target, 
  Award, 
  Calendar, 
  TrendingUp,
  Bell,
  CheckCircle,
  Clock
} from "lucide-react";

const Dashboard = () => {
  const userProfile = {
    name: "Priya Sharma",
    class: "12th Grade",
    stream: "Science",
    targetCareer: "Software Engineering",
    profileCompletion: 85
  };

  const recentActivities = [
    {
      id: 1,
      type: "quiz",
      title: "Completed Career Aptitude Quiz",
      date: "2 days ago",
      status: "completed"
    },
    {
      id: 2,
      type: "prediction",
      title: "Generated College Predictions",
      date: "5 days ago", 
      status: "completed"
    },
    {
      id: 3,
      type: "scholarship",
      title: "Applied for NSP Merit Scholarship",
      date: "1 week ago",
      status: "pending"
    }
  ];

  const upcomingReminders = [
    {
      id: 1,
      title: "JEE Main Registration Closes",
      date: "March 15, 2024",
      priority: "high"
    },
    {
      id: 2,
      title: "Scholarship Application Deadline",
      date: "March 31, 2024",
      priority: "medium"
    },
    {
      id: 3,
      title: "College Application Form Due",
      date: "April 10, 2024",
      priority: "low"
    }
  ];

  const recommendations = [
    {
      title: "Take Advanced Physics Quiz",
      description: "Based on your interest in engineering",
      action: "Start Quiz"
    },
    {
      title: "Explore IIT Preparation Tips",
      description: "Personalized study plan available",
      action: "View Tips"
    },
    {
      title: "Apply for Merit Scholarships",
      description: "3 scholarships match your profile",
      action: "Browse Now"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {userProfile.name}! 👋</h1>
            <p className="text-muted-foreground">
              Track your progress and continue your journey toward {userProfile.targetCareer}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Overview */}
              <Card className="shadow-medium">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle>Profile Overview</CardTitle>
                      <CardDescription>{userProfile.class} • {userProfile.stream} Stream</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Profile Completion</span>
                        <span className="text-sm text-muted-foreground">{userProfile.profileCompletion}%</span>
                      </div>
                      <Progress value={userProfile.profileCompletion} />
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong>Career Goal:</strong> {userProfile.targetCareer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">3</p>
                        <p className="text-xs text-muted-foreground">Quizzes Taken</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">12</p>
                        <p className="text-xs text-muted-foreground">Colleges Predicted</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">5</p>
                        <p className="text-xs text-muted-foreground">Scholarships Applied</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activities */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Recent Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg border border-border">
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          {activity.status === "completed" ? (
                            <CheckCircle className="w-4 h-4 text-secondary" />
                          ) : (
                            <Clock className="w-4 h-4 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">{activity.date}</p>
                        </div>
                        <Badge variant={activity.status === "completed" ? "secondary" : "outline"}>
                          {activity.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Reminders */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="w-5 h-5" />
                    Upcoming Reminders
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {upcomingReminders.map((reminder) => (
                    <div key={reminder.id} className="p-3 rounded-lg border border-border">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-3 h-3 text-muted-foreground" />
                        <Badge 
                          variant={
                            reminder.priority === "high" ? "destructive" : 
                            reminder.priority === "medium" ? "secondary" : "outline"
                          }
                          className="text-xs"
                        >
                          {reminder.priority}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium">{reminder.title}</p>
                      <p className="text-xs text-muted-foreground">{reminder.date}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Recommended Actions</CardTitle>
                  <CardDescription>Personalized suggestions for you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="p-3 rounded-lg bg-muted/50">
                      <p className="text-sm font-medium mb-1">{rec.title}</p>
                      <p className="text-xs text-muted-foreground mb-3">{rec.description}</p>
                      <Button size="sm" variant="outline" className="w-full">
                        {rec.action}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;