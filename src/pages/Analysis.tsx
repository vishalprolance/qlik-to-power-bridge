
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileUp, Database, Sheet, BarChart3, AlertCircle, Settings } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Analysis = () => {
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast({
        title: "File selected",
        description: `${file.name} has been selected for analysis.`,
      });
      simulateAnalysis();
    }
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResults(true);
      toast({
        title: "Analysis complete",
        description: "The Qlik application has been analyzed successfully.",
      });
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Qlik Application Analysis</h1>
        <p className="text-muted-foreground">
          Upload or connect to your Qlik applications to analyze their structure and complexity
        </p>
      </div>

      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="upload">Upload</TabsTrigger>
          <TabsTrigger value="connect">Connect</TabsTrigger>
          <TabsTrigger value="sample">Sample Apps</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload Qlik Application</CardTitle>
              <CardDescription>
                Upload your QVF (Qlik Sense) or QVW (QlikView) files for analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full gap-6">
                <div className="border-2 border-dashed rounded-lg p-8 text-center border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors">
                  <FileUp className="mx-auto h-10 w-10 text-muted-foreground mb-4" />
                  <h3 className="font-medium mb-2">Drag & drop your file here</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supported formats: .qvf, .qvw
                  </p>
                  <div className="flex justify-center">
                    <label htmlFor="file-upload">
                      <Input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        accept=".qvf,.qvw"
                        onChange={handleFileUpload}
                      />
                      <Button variant="outline">Browse Files</Button>
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="connect" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Connect to Qlik Server</CardTitle>
              <CardDescription>
                Connect to your Qlik Sense or QlikView server to analyze applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="space-y-2">
                  <label htmlFor="server-url" className="text-sm font-medium">Server URL</label>
                  <Input id="server-url" placeholder="https://qlik.yourdomain.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="username" className="text-sm font-medium">Username</label>
                  <Input id="username" placeholder="Username" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <Input id="password" type="password" placeholder="Password" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => toast({
                title: "Coming soon",
                description: "This feature will be available in a future update."
              })}>
                Connect & Analyze
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="sample" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sample Applications</CardTitle>
              <CardDescription>
                Try our analysis with pre-loaded sample Qlik applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <Sheet className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Sales Analysis</p>
                      <p className="text-xs text-muted-foreground">QlikView sample app</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={simulateAnalysis}>
                    Analyze
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <Sheet className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Executive Dashboard</p>
                      <p className="text-xs text-muted-foreground">Qlik Sense sample app</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={simulateAnalysis}>
                    Analyze
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center gap-3">
                    <Sheet className="h-6 w-6 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Inventory Management</p>
                      <p className="text-xs text-muted-foreground">Qlik Sense sample app</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={simulateAnalysis}>
                    Analyze
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {isAnalyzing && (
        <Card className="animate-pulse-slow">
          <CardHeader>
            <CardTitle>Analyzing Application...</CardTitle>
            <CardDescription>
              This may take a few moments depending on the complexity of your Qlik application
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="h-4 bg-muted rounded-full w-3/4"></div>
            <div className="h-4 bg-muted rounded-full w-1/2"></div>
            <div className="h-4 bg-muted rounded-full w-5/6"></div>
            <div className="h-4 bg-muted rounded-full w-2/3"></div>
          </CardContent>
        </Card>
      )}

      {hasResults && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analysis Results: Executive Dashboard</CardTitle>
              <CardDescription>
                Qlik Sense application analysis summary
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Application Type</h3>
                  <p className="text-lg font-medium">Qlik Sense</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Sheets/Reports</h3>
                  <p className="text-lg font-medium">9</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Data Tables</h3>
                  <p className="text-lg font-medium">12</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Visualizations</h3>
                  <p className="text-lg font-medium">47</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Variables</h3>
                  <p className="text-lg font-medium">15</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Complexity Score</h3>
                  <p className="text-lg font-medium text-amber-500">Medium</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" /> Data Sources
                </CardTitle>
                <CardDescription>
                  Data connections used in this application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="border rounded-md p-3">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">SQL Database</span>
                      <span className="text-sm text-muted-foreground">Primary</span>
                    </div>
                    <p className="text-sm text-muted-foreground">SQL Server | SALES_DB</p>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Excel Files</span>
                      <span className="text-sm text-muted-foreground">Secondary</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Excel | 3 files</p>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">REST API</span>
                      <span className="text-sm text-muted-foreground">Secondary</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Web API | Customer Data</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" /> Visualization Types
                </CardTitle>
                <CardDescription>
                  Types of visualizations used in this application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Bar Charts</span>
                    <span className="font-medium">14</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "28%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Line Charts</span>
                    <span className="font-medium">9</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "19%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Pie/Donut Charts</span>
                    <span className="font-medium">7</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>Tables/Pivot Tables</span>
                    <span className="font-medium">11</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "23%" }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span>KPIs/Gauges</span>
                    <span className="font-medium">6</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-amber-200">
            <CardHeader className="border-b">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-500" /> 
                    Migration Considerations
                  </CardTitle>
                  <CardDescription>
                    Key areas to focus on during migration
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href="/mapping">
                    Proceed to Mapping
                    <Settings className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">!</div>
                  <div>
                    <h4 className="font-medium">Complex Set Analysis (5 instances)</h4>
                    <p className="text-sm text-muted-foreground">
                      This app uses complex set analysis expressions which will need careful translation to DAX
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">!</div>
                  <div>
                    <h4 className="font-medium">Custom Calendar Logic</h4>
                    <p className="text-sm text-muted-foreground">
                      Calendar dimensions use custom fiscal periods that will need to be recreated
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-sm">!</div>
                  <div>
                    <h4 className="font-medium">Advanced Visualizations (3 instances)</h4>
                    <p className="text-sm text-muted-foreground">
                      Some custom visualizations may require Power BI custom visuals or alternative approaches
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/30">
              <p className="text-sm text-muted-foreground">
                These insights are based on automated analysis and may require further investigation.
              </p>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Analysis;
