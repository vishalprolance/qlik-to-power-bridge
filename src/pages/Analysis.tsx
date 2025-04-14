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
import { Progress } from "@/components/ui/progress";
import { 
  FileUp, 
  Database, 
  Sheet, 
  BarChart3, 
  AlertCircle, 
  Settings,
  FileCheck,
  FileWarning,
  Loader2
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface AnalysisResult {
  appName: string;
  appType: "QlikView" | "Qlik Sense";
  complexity: "Low" | "Medium" | "High";
  sheets: number;
  dataTables: number;
  visualizations: number;
  variables: number;
  dataSources: DataSource[];
  visualizationTypes: VisualizationType[];
  migrationConsiderations: MigrationConsideration[];
}

interface DataSource {
  name: string;
  type: string;
  isPrimary: boolean;
  details: string;
}

interface VisualizationType {
  name: string;
  count: number;
  percentage: number;
}

interface MigrationConsideration {
  title: string;
  description: string;
  complexity: "Low" | "Medium" | "High";
  instances?: number;
}

const Analysis = () => {
  const { toast } = useToast();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasResults, setHasResults] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult | null>(null);
  const fileInputRef = useState<HTMLInputElement | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFile(file);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFile = (file: File) => {
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    
    if (fileExtension !== 'qvf' && fileExtension !== 'qvw') {
      toast({
        title: "Invalid file format",
        description: "Please upload a QVF (Qlik Sense) or QVW (QlikView) file.",
        variant: "destructive"
      });
      return;
    }

    setUploadedFile(file);
    toast({
      title: "File selected",
      description: `${file.name} has been selected for analysis.`,
    });

    simulateAnalysis(file);
  };

  const simulateAnalysis = (file: File) => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    const progressInterval = setInterval(() => {
      setAnalysisProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 300);

    setTimeout(() => {
      clearInterval(progressInterval);
      setAnalysisProgress(100);
      
      setTimeout(() => {
        setIsAnalyzing(false);
        setHasResults(true);
        
        const fileType = file.name.endsWith('.qvf') ? "Qlik Sense" : "QlikView";
        const mockResults: AnalysisResult = {
          appName: file.name.replace(/\.(qvf|qvw)$/i, ''),
          appType: fileType,
          complexity: "Medium",
          sheets: 9,
          dataTables: 12,
          visualizations: 47,
          variables: 15,
          dataSources: [
            {
              name: "SQL Database",
              type: "SQL Server",
              isPrimary: true,
              details: "SALES_DB"
            },
            {
              name: "Excel Files",
              type: "Excel",
              isPrimary: false,
              details: "3 files"
            },
            {
              name: "REST API",
              type: "Web API",
              isPrimary: false,
              details: "Customer Data"
            }
          ],
          visualizationTypes: [
            { name: "Bar Charts", count: 14, percentage: 28 },
            { name: "Line Charts", count: 9, percentage: 19 },
            { name: "Pie/Donut Charts", count: 7, percentage: 15 },
            { name: "Tables/Pivot Tables", count: 11, percentage: 23 },
            { name: "KPIs/Gauges", count: 6, percentage: 15 }
          ],
          migrationConsiderations: [
            {
              title: "Complex Set Analysis",
              description: "This app uses complex set analysis expressions which will need careful translation to DAX",
              complexity: "High",
              instances: 5
            },
            {
              title: "Custom Calendar Logic",
              description: "Calendar dimensions use custom fiscal periods that will need to be recreated",
              complexity: "Medium"
            },
            {
              title: "Advanced Visualizations",
              description: "Some custom visualizations may require Power BI custom visuals or alternative approaches",
              complexity: "Medium",
              instances: 3
            }
          ]
        };
        
        setAnalysisResults(mockResults);
        
        toast({
          title: "Analysis complete",
          description: `The ${fileType} application has been analyzed successfully.`,
        });
      }, 500);
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
                <div 
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 text-center ${
                    dragActive 
                      ? "border-primary bg-primary/10" 
                      : uploadedFile 
                        ? "border-green-500/25 bg-green-50 dark:bg-green-950/10" 
                        : "border-muted-foreground/25 hover:border-muted-foreground/50"
                  } transition-colors`}
                >
                  {uploadedFile ? (
                    <div className="flex flex-col items-center">
                      <FileCheck className="h-12 w-12 text-green-500 mb-4" />
                      <h3 className="font-medium mb-1">{uploadedFile.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        File selected for analysis
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setUploadedFile(null)}
                        className="mt-2"
                      >
                        Select Different File
                      </Button>
                    </div>
                  ) : (
                    <>
                      <FileUp className="mx-auto h-10 w-10 text-muted-foreground mb-4" />
                      <h3 className="font-medium mb-2">Drag & drop your file here</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Supported formats: .qvf, .qvw
                      </p>
                      <div className="flex justify-center">
                        <Input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          ref={(input) => fileInputRef.current = input}
                          accept=".qvf,.qvw"
                          onChange={handleFileUpload}
                        />
                        <Button variant="outline" onClick={triggerFileInput}>Browse Files</Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {uploadedFile && !isAnalyzing && !hasResults && (
                <div className="mt-6 flex justify-center">
                  <Button onClick={() => simulateAnalysis(uploadedFile)}>
                    Analyze Application
                  </Button>
                </div>
              )}
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
                  <Button variant="outline" size="sm" onClick={() => {
                    const mockFile = new File([""], "Sales Analysis.qvw", { type: "application/octet-stream" });
                    handleFile(mockFile);
                  }}>
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
                  <Button variant="outline" size="sm" onClick={() => {
                    const mockFile = new File([""], "Executive Dashboard.qvf", { type: "application/octet-stream" });
                    handleFile(mockFile);
                  }}>
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
                  <Button variant="outline" size="sm" onClick={() => {
                    const mockFile = new File([""], "Inventory Management.qvf", { type: "application/octet-stream" });
                    handleFile(mockFile);
                  }}>
                    Analyze
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {isAnalyzing && (
        <Card>
          <CardHeader>
            <CardTitle>Analyzing Application...</CardTitle>
            <CardDescription>
              This may take a few moments depending on the complexity of your Qlik application
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="text-sm">AI analysis in progress</span>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{Math.round(analysisProgress)}%</span>
              </div>
              <Progress value={analysisProgress} />
            </div>
            
            <div className="space-y-2 mt-4 text-sm text-muted-foreground">
              <p>• Scanning Qlik application structure</p>
              <p>• Analyzing data model and relationships</p>
              <p>• Identifying visualizations and expressions</p>
              <p>• Generating migration recommendations</p>
            </div>
          </CardContent>
        </Card>
      )}

      {hasResults && analysisResults && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Analysis Results: {analysisResults.appName}</CardTitle>
              <CardDescription>
                {analysisResults.appType} application analysis summary
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Application Type</h3>
                  <p className="text-lg font-medium">{analysisResults.appType}</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Sheets/Reports</h3>
                  <p className="text-lg font-medium">{analysisResults.sheets}</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Data Tables</h3>
                  <p className="text-lg font-medium">{analysisResults.dataTables}</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Visualizations</h3>
                  <p className="text-lg font-medium">{analysisResults.visualizations}</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Variables</h3>
                  <p className="text-lg font-medium">{analysisResults.variables}</p>
                </div>
                <div className="border rounded-md p-4">
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Complexity Score</h3>
                  <p className={`text-lg font-medium ${
                    analysisResults.complexity === 'High' ? 'text-red-500' : 
                    analysisResults.complexity === 'Medium' ? 'text-amber-500' : 
                    'text-green-500'
                  }`}>{analysisResults.complexity}</p>
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
                  {analysisResults.dataSources.map((source, index) => (
                    <div key={index} className="border rounded-md p-3">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{source.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {source.isPrimary ? 'Primary' : 'Secondary'}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{source.type} | {source.details}</p>
                    </div>
                  ))}
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
                  {analysisResults.visualizationTypes.map((viz, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between">
                        <span>{viz.name}</span>
                        <span className="font-medium">{viz.count}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full" 
                          style={{ width: `${viz.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
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
                {analysisResults.migrationConsiderations.map((consideration, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`h-6 w-6 rounded-full flex items-center justify-center text-sm
                      ${consideration.complexity === 'High' 
                        ? 'bg-red-100 text-red-600' 
                        : consideration.complexity === 'Medium'
                          ? 'bg-amber-100 text-amber-600'
                          : 'bg-green-100 text-green-600'
                      }`}>!</div>
                    <div>
                      <h4 className="font-medium">
                        {consideration.title}
                        {consideration.instances && ` (${consideration.instances} instances)`}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {consideration.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/30">
              <p className="text-sm text-muted-foreground">
                These insights are based on automated AI analysis and may require further investigation.
              </p>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Migration Recommendations</CardTitle>
              <CardDescription>Based on this Qlik application analysis, here are our recommended next steps</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 border border-blue-100 rounded-md dark:bg-blue-950/20 dark:border-blue-900/50">
                <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Power BI Architecture Recommendations</h3>
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Based on your Qlik application's complexity and data model, we recommend using Power BI Premium capacity 
                  with composite models to accommodate the multi-source data connections while maintaining performance.
                </p>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-medium">Key Migration Steps</h3>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center">1</div>
                  <div>
                    <h4 className="font-medium">Data Model Recreation</h4>
                    <p className="text-sm text-muted-foreground">
                      First, recreate your data model in Power BI, focusing on establishing proper relationships and implementing calculated columns.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href="/data-modeling">Go to Data Modeling</a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center">2</div>
                  <div>
                    <h4 className="font-medium">Expression Conversion</h4>
                    <p className="text-sm text-muted-foreground">
                      Convert complex Qlik expressions to DAX, particularly focusing on set analysis equivalents.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href="/mapping">View Expression Mapping</a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 text-primary flex items-center justify-center">3</div>
                  <div>
                    <h4 className="font-medium">Visualization Recreation</h4>
                    <p className="text-sm text-muted-foreground">
                      Rebuild your visualizations in Power BI, using appropriate alternatives for any custom Qlik visuals.
                    </p>
                    <div className="mt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href="/visualization">Explore Visualization Options</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t flex justify-between">
              <Button variant="outline">Download Analysis Report</Button>
              <Button>Continue to Feature Mapping</Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Analysis;
