
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, FileUp, FileSpreadsheet, Database, BarChart3, ListChecks } from "lucide-react";
import MigrationRoadmap from "@/components/MigrationRoadmap";

const Dashboard = () => {
  // Mock data - in a real app, this would come from state management or backend
  const overallProgress = 35;
  const stageProgress = [
    { name: "Analysis", progress: 80, link: "/analysis" },
    { name: "Mapping", progress: 40, link: "/mapping" },
    { name: "Data Modeling", progress: 20, link: "/data-modeling" },
    { name: "Visualization", progress: 0, link: "/visualization" },
  ];
  
  const recentActivities = [
    { action: "Analyzed QlikView app", date: "Today, 2:30 PM" },
    { action: "Created data source mappings", date: "Yesterday, 4:15 PM" },
    { action: "Started new project", date: "Apr 12, 2025, 10:00 AM" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Migration Dashboard</h1>
        <Button asChild>
          <Link to="/analysis">
            Upload Qlik App
            <FileUp className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress}%</div>
            <Progress value={overallProgress} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Migration in progress</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Qlik Apps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground mt-2">Uploaded for analysis</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Data Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-2">Identified in Qlik apps</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Days to Complete</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground mt-2">Estimated time remaining</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Migration Roadmap</CardTitle>
            <CardDescription>Follow these steps for a successful migration</CardDescription>
          </CardHeader>
          <CardContent>
            <MigrationRoadmap />
          </CardContent>
        </Card>
        
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Stage Progress</CardTitle>
            <CardDescription>Track your progress through each migration stage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stageProgress.map((stage) => (
                <div key={stage.name} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{stage.name}</span>
                    <span className="text-sm text-muted-foreground">{stage.progress}%</span>
                  </div>
                  <Progress value={stage.progress} />
                  <div className="flex justify-end">
                    <Button variant="link" size="sm" asChild className="h-auto p-0">
                      <Link to={stage.link}>
                        Continue
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>Continue your migration journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FileSpreadsheet className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Complete Feature Mapping</h3>
                  <p className="text-sm text-muted-foreground">Map Qlik features to Power BI equivalents</p>
                  <Button variant="link" asChild className="p-0 h-auto mt-1">
                    <Link to="/mapping">
                      Continue Mapping
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Database className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Set Up Data Model</h3>
                  <p className="text-sm text-muted-foreground">Begin creating your Power BI data model</p>
                  <Button variant="link" asChild className="p-0 h-auto mt-1">
                    <Link to="/data-modeling">
                      Start Modeling
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <BarChart3 className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-medium">Create Visualizations</h3>
                  <p className="text-sm text-muted-foreground">Recreate your Qlik visualizations in Power BI</p>
                  <Button variant="link" asChild className="p-0 h-auto mt-1">
                    <Link to="/visualization">
                      Explore Visuals
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest migration activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="h-2 w-2 mt-2 rounded-full bg-primary" />
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <Link to="/progress">
                  <ListChecks className="mr-2 h-4 w-4" />
                  View All Progress
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
