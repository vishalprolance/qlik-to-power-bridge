
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowRight, 
  CheckCircle2, 
  Code, 
  Database, 
  FileText, 
  Search,
  BarChart3
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const Mapping = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter features based on search term
  const filterFeatures = (features: any[]) => {
    if (!searchTerm) return features;
    
    return features.filter(feature => 
      feature.qlikFeature.toLowerCase().includes(searchTerm.toLowerCase()) || 
      feature.powerBIEquivalent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feature.category?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  // Mock data for feature mappings
  const expressionMappings = [
    { 
      qlikFeature: "Sum(Sales)", 
      powerBIEquivalent: "SUM(Sales[Amount])", 
      category: "Aggregation",
      complexity: "Simple"
    },
    { 
      qlikFeature: "Count(distinct Customer)", 
      powerBIEquivalent: "DISTINCTCOUNT(Customers[CustomerID])", 
      category: "Aggregation",
      complexity: "Simple"
    },
    { 
      qlikFeature: "If(Sum(Sales) > 1000, 'High', 'Low')", 
      powerBIEquivalent: "IF(SUM(Sales[Amount]) > 1000, \"High\", \"Low\")", 
      category: "Conditional",
      complexity: "Medium"
    },
    { 
      qlikFeature: "Sum({<Year={\"2023\"}>} Sales)", 
      powerBIEquivalent: "CALCULATE(SUM(Sales[Amount]), 'Date'[Year] = \"2023\")", 
      category: "Set Analysis",
      complexity: "Medium"
    },
    { 
      qlikFeature: "Sum({<Region={'USA'}, Product={\"*Laptop*\"}>} Sales)", 
      powerBIEquivalent: "CALCULATE(SUM(Sales[Amount]), 'Region'[Name] = \"USA\", CONTAINSX(Products, Products[Name], \"Laptop\"))", 
      category: "Set Analysis",
      complexity: "Complex"
    },
    {
      qlikFeature: "Aggr(Sum(Sales), Customer, Product)",
      powerBIEquivalent: "SUMMARIZE(Sales, Customers[Name], Products[Name], \"Total\", SUM(Sales[Amount]))",
      category: "Aggregation",
      complexity: "Complex"
    }
  ];
  
  const visualMappings = [
    { 
      qlikFeature: "Bar Chart", 
      powerBIEquivalent: "Stacked Bar Chart / Clustered Bar Chart", 
      category: "Basic",
      complexity: "Simple"
    },
    { 
      qlikFeature: "Line Chart", 
      powerBIEquivalent: "Line Chart", 
      category: "Basic",
      complexity: "Simple"
    },
    { 
      qlikFeature: "Combo Chart", 
      powerBIEquivalent: "Line and Clustered Column Chart", 
      category: "Basic",
      complexity: "Medium"
    },
    { 
      qlikFeature: "Pivot Table", 
      powerBIEquivalent: "Matrix", 
      category: "Table",
      complexity: "Medium"
    },
    { 
      qlikFeature: "Treemap", 
      powerBIEquivalent: "Treemap", 
      category: "Advanced",
      complexity: "Medium"
    },
    { 
      qlikFeature: "Gauge", 
      powerBIEquivalent: "Gauge", 
      category: "KPI",
      complexity: "Simple"
    }
  ];
  
  const connectionMappings = [
    { 
      qlikFeature: "ODBC Connection", 
      powerBIEquivalent: "ODBC Connector", 
      category: "Database",
      complexity: "Medium"
    },
    { 
      qlikFeature: "Web File Connection", 
      powerBIEquivalent: "Web Connector", 
      category: "Web",
      complexity: "Medium"
    },
    { 
      qlikFeature: "Folder Connection", 
      powerBIEquivalent: "Folder Data Source", 
      category: "Files",
      complexity: "Simple"
    },
    { 
      qlikFeature: "REST API Connector", 
      powerBIEquivalent: "Web API Connection", 
      category: "API",
      complexity: "Complex"
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Feature & Connection Mapping</h1>
        <p className="text-muted-foreground">
          Map Qlik features and data connections to their Power BI equivalents
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Card>
            <CardHeader>
              <CardTitle>Search Features</CardTitle>
              <CardDescription>
                Find mappings for specific Qlik features or Power BI equivalents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for features, expressions..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Mapping Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center text-sm mb-2">
                <span>Expressions Mapped</span>
                <span className="font-medium">6/15</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
              </div>
              
              <div className="flex justify-between items-center text-sm mb-2">
                <span>Visualizations Mapped</span>
                <span className="font-medium">6/8</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
              
              <div className="flex justify-between items-center text-sm mb-2">
                <span>Connections Mapped</span>
                <span className="font-medium">4/5</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="expressions" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="expressions">Expressions</TabsTrigger>
          <TabsTrigger value="visualizations">Visualizations</TabsTrigger>
          <TabsTrigger value="connections">Data Connections</TabsTrigger>
        </TabsList>
        
        <TabsContent value="expressions" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Expression Mapping
              </CardTitle>
              <CardDescription>
                Qlik expressions and their Power BI DAX equivalents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filterFeatures(expressionMappings).map((mapping, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                      <div className="p-4">
                        <div className="flex justify-between">
                          <Badge variant="outline" className="mb-2">Qlik</Badge>
                          <Badge variant={
                            mapping.complexity === 'Simple' ? 'outline' : 
                            mapping.complexity === 'Medium' ? 'secondary' : 
                            'destructive'
                          } className="mb-2">
                            {mapping.complexity}
                          </Badge>
                        </div>
                        <div className="font-mono text-sm bg-muted p-2 rounded-md overflow-x-auto">
                          {mapping.qlikFeature}
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between">
                          <Badge variant="outline" className="mb-2">Power BI (DAX)</Badge>
                          <Badge variant="outline" className="mb-2">{mapping.category}</Badge>
                        </div>
                        <div className="font-mono text-sm bg-muted p-2 rounded-md overflow-x-auto">
                          {mapping.powerBIEquivalent}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                
                {filterFeatures(expressionMappings).length === 0 && (
                  <div className="text-center py-6 text-muted-foreground">
                    No expression mappings found matching your search.
                  </div>
                )}
                
                <div className="flex justify-center mt-4">
                  <Button variant="outline">
                    View More Examples
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Custom Expression Converter
              </CardTitle>
              <CardDescription>
                Convert your Qlik expressions to Power BI DAX
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-md p-4 bg-muted/30">
                <p className="text-center text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  The expression converter tool will be available in a future update.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="visualizations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5" />
                Visualization Mapping
              </CardTitle>
              <CardDescription>
                Qlik visualizations and their Power BI equivalents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterFeatures(visualMappings).map((mapping, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{mapping.category}</Badge>
                        <Badge variant={
                          mapping.complexity === 'Simple' ? 'outline' : 
                          mapping.complexity === 'Medium' ? 'secondary' : 
                          'destructive'
                        }>
                          {mapping.complexity}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-muted-foreground">Qlik</div>
                          <div className="font-medium">{mapping.qlikFeature}</div>
                        </div>
                        <div className="flex items-center justify-center py-1">
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Power BI</div>
                          <div className="font-medium">{mapping.powerBIEquivalent}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {filterFeatures(visualMappings).length === 0 && (
                  <div className="text-center py-6 text-muted-foreground md:col-span-2 lg:col-span-3">
                    No visualization mappings found matching your search.
                  </div>
                )}
              </div>
              
              <div className="flex justify-center mt-6">
                <Button variant="outline">
                  View Visualization Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="connections" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-5 w-5" />
                Data Connection Mapping
              </CardTitle>
              <CardDescription>
                Map your Qlik data connections to Power BI data sources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filterFeatures(connectionMappings).map((mapping, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">{mapping.category}</Badge>
                        <Badge variant={
                          mapping.complexity === 'Simple' ? 'outline' : 
                          mapping.complexity === 'Medium' ? 'secondary' : 
                          'destructive'
                        }>
                          {mapping.complexity}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs text-muted-foreground">Qlik Connection Type</div>
                          <div className="font-medium">{mapping.qlikFeature}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Power BI Connection Type</div>
                          <div className="font-medium">{mapping.powerBIEquivalent}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {filterFeatures(connectionMappings).length === 0 && (
                  <div className="text-center py-6 text-muted-foreground">
                    No connection mappings found matching your search.
                  </div>
                )}
              </div>
              
              <div className="mt-6 p-4 border rounded-md bg-muted/30">
                <h4 className="font-medium mb-2">Connection Configuration Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Use Power BI's native connectors whenever possible for best performance</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Consider implementing Direct Query for large datasets</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Use Power Query to replicate Qlik's data transformation logic</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Your Project's Data Connections</CardTitle>
              <CardDescription>
                Current data connections from your Qlik app analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">SQL Database (Qlik)</h4>
                    <Badge>Mapped</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Connection to SALES_DB on SQL Server
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <div className="text-xs text-muted-foreground mb-1">Power BI Equivalent</div>
                    <div className="font-medium">SQL Server connector</div>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Excel Files (Qlik)</h4>
                    <Badge>Mapped</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Excel files from shared folder
                  </div>
                  <div className="bg-muted p-3 rounded-md">
                    <div className="text-xs text-muted-foreground mb-1">Power BI Equivalent</div>
                    <div className="font-medium">Excel connector</div>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">REST API (Qlik)</h4>
                    <Badge variant="outline">Not Mapped</Badge>
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">
                    Customer data from API
                  </div>
                  <Button size="sm" variant="secondary">Map Connection</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Mapping;
