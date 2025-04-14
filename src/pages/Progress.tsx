import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle2,
  Circle,
  CircleDashed,
  Clock,
  FileCheck,
  FileQuestion,
  List,
  ListChecks,
  Play,
  Trash2
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

const Progress = () => {
  const { toast } = useToast();
  
  // Mock projects data
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Executive Dashboard",
      type: "Qlik Sense",
      progress: 65,
      createdAt: "Apr 10, 2025",
      tasks: {
        total: 24,
        completed: 16,
        inProgress: 4,
        notStarted: 4
      }
    }
  ]);
  
  // Mock tasks data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Analyze Qlik App Structure",
      status: "completed",
      category: "Analysis",
      dueDate: "Apr 12, 2025",
      notes: "Completed analysis of data model and visualizations"
    },
    {
      id: 2,
      title: "Map Data Connections",
      status: "completed",
      category: "Mapping",
      dueDate: "Apr 14, 2025",
      notes: "All 3 data connections mapped to Power BI equivalents"
    },
    {
      id: 3,
      title: "Create Power BI Data Model",
      status: "in-progress",
      category: "Data Modeling",
      dueDate: "Apr 18, 2025",
      notes: "Working on relationships between fact and dimension tables"
    },
    {
      id: 4,
      title: "Convert Set Analysis Expressions",
      status: "in-progress",
      category: "Data Modeling",
      dueDate: "Apr 20, 2025",
      notes: "Converting complex set analysis to DAX"
    },
    {
      id: 5,
      title: "Recreate KPI Visualizations",
      status: "not-started",
      category: "Visualization",
      dueDate: "Apr 25, 2025",
      notes: "Need to recreate 5 KPI visuals"
    },
    {
      id: 6,
      title: "Test Report Performance",
      status: "not-started",
      category: "Testing",
      dueDate: "Apr 30, 2025",
      notes: "Performance testing and optimization"
    }
  ]);
  
  const handleStatusChange = (taskId: number, newStatus: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    
    setTasks(updatedTasks);
    
    // Update project progress
    const totalTasks = updatedTasks.length;
    const completedTasks = updatedTasks.filter(task => task.status === "completed").length;
    const inProgressTasks = updatedTasks.filter(task => task.status === "in-progress").length;
    const notStartedTasks = updatedTasks.filter(task => task.status === "not-started").length;
    
    const progress = Math.round((completedTasks / totalTasks) * 100);
    
    const updatedProjects = projects.map(project => {
      return {
        ...project,
        progress,
        tasks: {
          total: totalTasks,
          completed: completedTasks,
          inProgress: inProgressTasks,
          notStarted: notStartedTasks
        }
      };
    });
    
    setProjects(updatedProjects);
    
    toast({
      title: "Task updated",
      description: `Task status changed to ${newStatus}`,
    });
  };
  
  const handleDeleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    
    toast({
      title: "Task deleted",
      description: "The task has been removed from your list",
    });
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "in-progress":
        return <CircleDashed className="h-4 w-4 text-amber-500" />;
      case "not-started":
        return <Circle className="h-4 w-4 text-muted-foreground" />;
      default:
        return <Circle className="h-4 w-4 text-muted-foreground" />;
    }
  };
  
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "Analysis":
        return <Badge variant="outline" className="bg-blue-50">Analysis</Badge>;
      case "Mapping":
        return <Badge variant="outline" className="bg-purple-50">Mapping</Badge>;
      case "Data Modeling":
        return <Badge variant="outline" className="bg-amber-50">Data Modeling</Badge>;
      case "Visualization":
        return <Badge variant="outline" className="bg-green-50">Visualization</Badge>;
      case "Testing":
        return <Badge variant="outline" className="bg-red-50">Testing</Badge>;
      default:
        return <Badge variant="outline">{category}</Badge>;
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Progress Tracking</h1>
        <p className="text-muted-foreground">
          Track your migration progress and manage tasks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader className="pb-2">
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>
                {project.type} • Created {project.createdAt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm text-muted-foreground">{project.progress}%</span>
                  </div>
                  <ProgressBar value={project.progress} />
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="border rounded-md p-2">
                    <div className="text-2xl font-bold text-green-500">{project.tasks.completed}</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="border rounded-md p-2">
                    <div className="text-2xl font-bold text-amber-500">{project.tasks.inProgress}</div>
                    <div className="text-xs text-muted-foreground">In Progress</div>
                  </div>
                  <div className="border rounded-md p-2">
                    <div className="text-2xl font-bold text-muted-foreground">{project.tasks.notStarted}</div>
                    <div className="text-xs text-muted-foreground">Not Started</div>
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  View Project Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        
        <Card className="bg-muted/30 border-dashed">
          <CardContent className="p-6 flex flex-col items-center justify-center h-full">
            <FileQuestion className="h-8 w-8 text-muted-foreground mb-2" />
            <h3 className="font-medium mb-1">Start New Project</h3>
            <p className="text-sm text-muted-foreground text-center mb-4">
              Track progress for another migration project
            </p>
            <Button variant="outline" size="sm">
              Add Project
            </Button>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="checklist" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="checklist">
            <ListChecks className="h-4 w-4 mr-2" />
            Task Checklist
          </TabsTrigger>
          <TabsTrigger value="timeline">
            <Clock className="h-4 w-4 mr-2" />
            Timeline
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="checklist" className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Migration Tasks</CardTitle>
                <CardDescription>
                  Manage and track your migration tasks
                </CardDescription>
              </div>
              <Button>
                Add New Task
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-start justify-between p-3 border rounded-md">
                    <div className="flex items-start gap-3">
                      <button 
                        className="mt-1" 
                        onClick={() => {
                          let newStatus;
                          switch (task.status) {
                            case "not-started":
                              newStatus = "in-progress";
                              break;
                            case "in-progress":
                              newStatus = "completed";
                              break;
                            case "completed":
                              newStatus = "not-started";
                              break;
                            default:
                              newStatus = "not-started";
                          }
                          handleStatusChange(task.id, newStatus);
                        }}
                      >
                        {getStatusIcon(task.status)}
                      </button>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{task.title}</h3>
                          {getCategoryBadge(task.category)}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Due: {task.dueDate}</p>
                        <p className="text-sm mt-2">{task.notes}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {task.status === "not-started" && (
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleStatusChange(task.id, "in-progress")}
                        >
                          <Play className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Start task</span>
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        <Trash2 className="h-4 w-4 text-muted-foreground" />
                        <span className="sr-only">Delete task</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {tasks.length === 0 && (
                <div className="text-center py-12">
                  <List className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                  <h3 className="font-medium text-lg mb-2">No tasks yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Add tasks to track your migration progress
                  </p>
                  <Button>Add Your First Task</Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileCheck className="mr-2 h-5 w-5" />
                  Migration Checklist
                </CardTitle>
                <CardDescription>
                  Standard checklist for complete migration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h3 className="font-medium mb-2">Phase 1: Assessment & Planning</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Document Qlik applications</span>
                      </div>
                      <Badge variant="outline" className="bg-green-50">Completed</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Identify data sources</span>
                      </div>
                      <Badge variant="outline" className="bg-green-50">Completed</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CircleDashed className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">Define migration strategy</span>
                      </div>
                      <Badge variant="outline" className="bg-amber-50">In Progress</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border rounded-md">
                  <h3 className="font-medium mb-2">Phase 2: Data Preparation</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Map data connections</span>
                      </div>
                      <Badge variant="outline" className="bg-green-50">Completed</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CircleDashed className="h-4 w-4 text-amber-500" />
                        <span className="text-sm">Create data model in Power BI</span>
                      </div>
                      <Badge variant="outline" className="bg-amber-50">In Progress</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Circle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">Convert expressions to DAX</span>
                      </div>
                      <Badge variant="outline">Not Started</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Migration Milestones</CardTitle>
                <CardDescription>
                  Key progress points in your migration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6 relative">
                  <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-muted"></div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center">
                      <CheckCircle2 className="h-3 w-3" />
                    </div>
                    <h3 className="font-medium">Project Kickoff</h3>
                    <p className="text-xs text-muted-foreground">Apr 10, 2025</p>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full bg-green-500 text-white flex items-center justify-center">
                      <CheckCircle2 className="h-3 w-3" />
                    </div>
                    <h3 className="font-medium">Application Analysis Complete</h3>
                    <p className="text-xs text-muted-foreground">Apr 12, 2025</p>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full bg-amber-500 text-white flex items-center justify-center">
                      <CircleDashed className="h-3 w-3" />
                    </div>
                    <h3 className="font-medium">Data Model Creation</h3>
                    <p className="text-xs text-muted-foreground">Target: Apr 18, 2025</p>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                      <Circle className="h-3 w-3" />
                    </div>
                    <h3 className="font-medium">Dashboard Recreation</h3>
                    <p className="text-xs text-muted-foreground">Target: Apr 25, 2025</p>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                      <Circle className="h-3 w-3" />
                    </div>
                    <h3 className="font-medium">User Acceptance Testing</h3>
                    <p className="text-xs text-muted-foreground">Target: Apr 28, 2025</p>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1.5 h-5 w-5 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                      <Circle className="h-3 w-3" />
                    </div>
                    <h3 className="font-medium">Migration Complete</h3>
                    <p className="text-xs text-muted-foreground">Target: Apr 30, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="timeline" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Migration Timeline</CardTitle>
              <CardDescription>
                Visual timeline of your migration project
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-20 w-full my-10">
                {/* Timeline track */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2"></div>
                
                {/* Timeline points */}
                <div className="absolute top-1/2 left-[0%] -translate-y-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-green-500"></div>
                  <div className="absolute top-6 -left-10 w-20 text-center">
                    <p className="text-xs font-medium">Start</p>
                    <p className="text-xs text-muted-foreground">Apr 10</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="absolute top-6 -left-10 w-20 text-center">
                    <p className="text-xs font-medium">Analysis</p>
                    <p className="text-xs text-muted-foreground">Apr 12</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-[40%] -translate-y-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></div>
                  <div className="absolute top-6 -left-10 w-20 text-center">
                    <p className="text-xs font-medium">Data Model</p>
                    <p className="text-xs text-muted-foreground">Apr 18</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-[60%] -translate-y-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                  <div className="absolute top-6 -left-10 w-20 text-center">
                    <p className="text-xs font-medium">Dashboard</p>
                    <p className="text-xs text-muted-foreground">Apr 25</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-[80%] -translate-y-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                  <div className="absolute top-6 -left-10 w-20 text-center">
                    <p className="text-xs font-medium">Testing</p>
                    <p className="text-xs text-muted-foreground">Apr 28</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-[100%] -translate-y-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 rounded-full bg-muted"></div>
                  <div className="absolute top-6 -left-10 w-20 text-center">
                    <p className="text-xs font-medium">Complete</p>
                    <p className="text-xs text-muted-foreground">Apr 30</p>
                  </div>
                </div>
                
                {/* Progress indicator */}
                <div className="absolute top-1/2 left-0 h-1 bg-green-500 -translate-y-1/2" style={{ width: "30%" }}></div>
              </div>
              
              <div className="text-center mt-10">
                <div className="mb-1">Current phase: <span className="font-medium">Data Model Creation</span></div>
                <p className="text-sm text-muted-foreground">20 days total duration • 8 days remaining</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Task Timeline</CardTitle>
              <CardDescription>
                Upcoming and completed tasks by date
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-muted-foreground mb-3">Past</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 border rounded-md">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Analyze Qlik App Structure</h4>
                          <Badge variant="outline" className="bg-blue-50">Analysis</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Apr 12, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 border rounded-md">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Map Data Connections</h4>
                          <Badge variant="outline" className="bg-purple-50">Mapping</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Apr 14, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-muted-foreground mb-3">Current</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 border rounded-md">
                      <CircleDashed className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Create Power BI Data Model</h4>
                          <Badge variant="outline" className="bg-amber-50">Data Modeling</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Due: Apr 18, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 border rounded-md">
                      <CircleDashed className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Convert Set Analysis Expressions</h4>
                          <Badge variant="outline" className="bg-amber-50">Data Modeling</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Due: Apr 20, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-muted-foreground mb-3">Upcoming</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 border rounded-md">
                      <Circle className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Recreate KPI Visualizations</h4>
                          <Badge variant="outline" className="bg-green-50">Visualization</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Due: Apr 25, 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 border rounded-md">
                      <Circle className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Test Report Performance</h4>
                          <Badge variant="outline" className="bg-red-50">Testing</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">Due: Apr 30, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Progress;
