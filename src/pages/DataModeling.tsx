
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, FileText, GitCompare, Link, Star } from "lucide-react";
import { Code } from "lucide-react";

const DataModeling = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Data Model Recreation</h1>
        <p className="text-muted-foreground">
          Guidelines and best practices for recreating your Qlik data model in Power BI
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="concepts">Key Concepts</TabsTrigger>
          <TabsTrigger value="tools">Modeling Tools</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Modeling Approach</CardTitle>
              <CardDescription>
                The key differences between Qlik and Power BI data modeling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="flex items-center font-medium text-lg mb-3">
                      <span className="inline-block w-6 h-6 rounded-full bg-qlik text-white text-center text-xs font-bold mr-2">Q</span>
                      Qlik Data Model
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs">1</div>
                        <span><span className="font-medium">Associative model</span> with automatic connections between tables</span>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs">2</div>
                        <span>Tables connected via <span className="font-medium">identical field names</span></span>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs">3</div>
                        <span>Star, snowflake, and complex schemas supported</span>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs">4</div>
                        <span><span className="font-medium">Synthetic keys</span> created for multiple fields connection</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="flex items-center font-medium text-lg mb-3">
                      <span className="inline-block w-6 h-6 rounded-full bg-powerbi text-white text-center text-xs font-bold mr-2">P</span>
                      Power BI Data Model
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs">1</div>
                        <span><span className="font-medium">Explicit relationships</span> must be defined between tables</span>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs">2</div>
                        <span>Uses <span className="font-medium">one-to-many relationships</span> by default</span>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs">3</div>
                        <span>Star schema recommended for optimal performance</span>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs">4</div>
                        <span>Includes <span className="font-medium">bi-directional filtering</span> options</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Migration Strategy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-sm">
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary text-white flex items-center justify-center text-xs">1</div>
                        <span><span className="font-medium">Identify fact and dimension tables</span> in your Qlik model</span>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary text-white flex items-center justify-center text-xs">2</div>
                        <span><span className="font-medium">Restructure to star schema</span> if possible for better Power BI performance</span>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary text-white flex items-center justify-center text-xs">3</div>
                        <span>Create <span className="font-medium">explicit relationships</span> between tables in Power BI</span>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary text-white flex items-center justify-center text-xs">4</div>
                        <span>Use Power Query to handle <span className="font-medium">data transformations</span> and clean up</span>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-primary text-white flex items-center justify-center text-xs">5</div>
                        <span>Create <span className="font-medium">calculated columns and measures</span> using DAX to replace Qlik expressions</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Link className="mr-2 h-5 w-5" />
                  Relationship Considerations
                </CardTitle>
                <CardDescription>
                  Key differences in table relationships
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border p-3 rounded-md">
                  <h4 className="font-medium mb-1">Many-to-Many Relationships</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    While Qlik handles many-to-many relationships naturally, Power BI requires special handling.
                  </p>
                  <div className="text-sm">
                    <span className="font-medium">Solution:</span> Create bridge tables or use CROSSFILTER functions in DAX
                  </div>
                </div>
                
                <div className="border p-3 rounded-md">
                  <h4 className="font-medium mb-1">Circular References</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Qlik&apos;s associative model handles circular references, but they should be avoided in Power BI.
                  </p>
                  <div className="text-sm">
                    <span className="font-medium">Solution:</span> Restructure data model to eliminate circular dependencies
                  </div>
                </div>
                
                <div className="border p-3 rounded-md">
                  <h4 className="font-medium mb-1">Filter Direction</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Power BI relationships have explicit filter directions that must be configured.
                  </p>
                  <div className="text-sm">
                    <span className="font-medium">Solution:</span> Use bi-directional filtering cautiously as it impacts performance
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="mr-2 h-5 w-5" />
                  Best Practices
                </CardTitle>
                <CardDescription>
                  Recommendations for optimal data modeling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs mt-0.5">✓</div>
                    <span className="text-sm">Aim for a <span className="font-medium">star schema</span> with fact tables connected to dimension tables</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs mt-0.5">✓</div>
                    <span className="text-sm">Use <span className="font-medium">calculated columns</span> sparingly and focus on measures for performance</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs mt-0.5">✓</div>
                    <span className="text-sm">Create a proper <span className="font-medium">date dimension</span> table with calendar hierarchies</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs mt-0.5">✓</div>
                    <span className="text-sm">Use <span className="font-medium">Power Query</span> for data transformations instead of DAX when possible</span>
                  </li>
                  <li className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs mt-0.5">✓</div>
                    <span className="text-sm">Consider <span className="font-medium">data volume</span> and aggregation needs when designing your model</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="concepts" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Qlik to Power BI Concept Mapping</CardTitle>
                <CardDescription>
                  How key Qlik concepts translate to Power BI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Qlik</h4>
                        <p className="font-medium">Script Expressions</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Power BI</h4>
                        <p className="font-medium">Power Query M</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b pb-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Qlik</h4>
                        <p className="font-medium">Chart Expressions</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Power BI</h4>
                        <p className="font-medium">DAX Measures</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b pb-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Qlik</h4>
                        <p className="font-medium">Synthetic Keys</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Power BI</h4>
                        <p className="font-medium">Composite Keys/Relationships</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b pb-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Qlik</h4>
                        <p className="font-medium">Set Analysis</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Power BI</h4>
                        <p className="font-medium">CALCULATE with Filters</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b pb-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Qlik</h4>
                        <p className="font-medium">Master Items</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Power BI</h4>
                        <p className="font-medium">Measures/Calculated Columns</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Qlik</h4>
                        <p className="font-medium">Variables</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Power BI</h4>
                        <p className="font-medium">Parameters/What-if Parameters</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data Types & Calculations</CardTitle>
                <CardDescription>
                  Understanding data type differences and calculation approaches
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Data Types</h3>
                  <div className="border rounded-md p-3 space-y-2">
                    <p className="text-sm">
                      <span className="font-medium">Qlik</span> treats most numeric data as dual (numeric and string)
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Power BI</span> requires explicit data typing with less automatic conversion
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Calculations</h3>
                  <div className="border rounded-md p-3 space-y-2">
                    <p className="text-sm mb-2">
                      <span className="font-medium">Qlik:</span> Chart expressions evaluated at runtime
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Power BI:</span> Three calculation types:
                    </p>
                    <ul className="text-sm space-y-1 pl-5 list-disc">
                      <li>Calculated columns (computed at data refresh)</li>
                      <li>Measures (computed at visualization rendering)</li>
                      <li>Calculated tables (defined using DAX)</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Context Differences</h3>
                  <div className="border rounded-md p-3">
                    <p className="text-sm mb-2">
                      <span className="font-medium">Qlik:</span> Expressions evaluated in the context of current selections
                    </p>
                    <p className="text-sm mb-2">
                      <span className="font-medium">Power BI:</span> Uses row context and filter context:
                    </p>
                    <ul className="text-sm space-y-1 pl-5 list-disc">
                      <li>Row context for calculated columns</li>
                      <li>Filter context for measures</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GitCompare className="mr-2 h-5 w-5" />
                Case Study: Converting Complex Qlik Model
              </CardTitle>
              <CardDescription>
                Step-by-step approach for converting a complex Qlik data model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-qlik pl-4">
                  <h3 className="font-medium mb-2">Original Qlik Model</h3>
                  <ul className="text-sm space-y-2">
                    <li>Complex associative model with 15 tables</li>
                    <li>Multiple fact tables connected to shared dimensions</li>
                    <li>Synthetic keys handling complex relationships</li>
                    <li>Circular references for special business logic</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-md p-3">
                    <h4 className="font-medium mb-2">Step 1: Analysis</h4>
                    <p className="text-sm">Mapped table relationships and identified fact/dimension tables</p>
                  </div>
                  
                  <div className="border rounded-md p-3">
                    <h4 className="font-medium mb-2">Step 2: Restructuring</h4>
                    <p className="text-sm">Created bridge tables for many-to-many relationships and eliminated circular references</p>
                  </div>
                  
                  <div className="border rounded-md p-3">
                    <h4 className="font-medium mb-2">Step 3: Modeling</h4>
                    <p className="text-sm">Built star schema with explicit relationships in Power BI</p>
                  </div>
                </div>
                
                <div className="border-l-4 border-powerbi pl-4">
                  <h3 className="font-medium mb-2">Resulting Power BI Model</h3>
                  <ul className="text-sm space-y-2">
                    <li>Star schema with centralized fact tables</li>
                    <li>Consolidated dimensions with clear hierarchies</li>
                    <li>Explicit one-to-many relationships</li>
                    <li>Date dimension table with time intelligence functions</li>
                    <li>Complex logic moved from model structure to DAX measures</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-md p-4 text-sm">
                  <p className="mb-2"><span className="font-medium">Key Insight:</span> The major restructuring work focused on:</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Clarifying fact vs. dimension tables</li>
                    <li>Creating proper relationship cardinality</li>
                    <li>Moving complex logic from the data structure to DAX measures</li>
                    <li>Creating a proper date dimension to replace Qlik&apos;s automatic calendar</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tools" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Power Query for ETL</CardTitle>
                <CardDescription>
                  Replacing Qlik's script functionality with Power Query
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-2">Key Capabilities</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Data extraction from multiple source types</li>
                    <li>• Complex transformations and data cleaning</li>
                    <li>• Column management and data type conversion</li>
                    <li>• Merging and appending queries (similar to Qlik joins)</li>
                    <li>• Custom functions with M language</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Common Qlik to Power Query Translations</h3>
                  <div className="space-y-3">
                    <div className="border rounded-md p-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <h4 className="text-xs text-muted-foreground">Qlik Script</h4>
                          <p className="text-sm font-mono overflow-x-auto">
                            LOAD * FROM file.csv<br />
                            WHERE Value &gt; 100;
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs text-muted-foreground">Power Query M</h4>
                          <p className="text-sm font-mono overflow-x-auto">
                            Source = Csv.Document(...)<br />
                            Filtered = Table.SelectRows(Source, each [Value] &gt; 100)
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <h4 className="text-xs text-muted-foreground">Qlik Script</h4>
                          <p className="text-sm font-mono overflow-x-auto">
                            LOAD *,<br />
                            Year(Date) as Year<br />
                            FROM data;
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs text-muted-foreground">Power Query M</h4>
                          <p className="text-sm font-mono overflow-x-auto">
                            Source = ...<br />
                            AddedYear = Table.AddColumn(Source, &quot;Year&quot;, each Date.Year([Date]))
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>DAX for Calculations</CardTitle>
                <CardDescription>
                  Converting Qlik expressions to DAX measures and calculations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-b pb-3">
                  <h3 className="font-medium mb-2">Key DAX Functions</h3>
                  <ul className="text-sm space-y-1">
                    <li>• CALCULATE - filters context (equivalent to Qlik set analysis)</li>
                    <li>• SUM, AVERAGE, MIN, MAX - aggregation functions</li>
                    <li>• FILTER - for complex filtering logic</li>
                    <li>• RELATED - accessing data across relationships</li>
                    <li>• Time intelligence functions (SAMEPERIODLASTYEAR, etc.)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Common Qlik to DAX Translations</h3>
                  <div className="space-y-3">
                    <div className="border rounded-md p-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <h4 className="text-xs text-muted-foreground">Qlik Expression</h4>
                          <p className="text-sm font-mono overflow-x-auto">
                            Sum(Sales)
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs text-muted-foreground">DAX Measure</h4>
                          <p className="text-sm font-mono overflow-x-auto">
                            Total Sales = SUM(Sales[Amount])
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-3">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <h4 className="text-xs text-muted-foreground">Qlik Expression</h4>
                          <p className="text-sm font-mono overflow-x-auto">
                            Sum({&lt;Year={2023}&gt;} Sales)
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs text-muted-foreground">DAX Measure</h4>
                          <p className="text-sm font-mono overflow-x-auto">
                            Sales 2023 = CALCULATE(SUM(Sales[Amount]),<br />
                            Dates[Year]=2023)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5" />
                Interactive Tutorials & Resources
              </CardTitle>
              <CardDescription>
                Learn more about Power BI data modeling and DAX
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <Database className="h-10 w-10 mx-auto text-powerbi" />
                      <h3 className="font-medium mt-2">Power BI Data Modeling</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Learn best practices for data modeling in Power BI
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" size="sm">View Resource</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <Code className="h-10 w-10 mx-auto text-powerbi" />
                      <h3 className="font-medium mt-2">DAX Functions Guide</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Comprehensive guide to DAX functions and syntax
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" size="sm">View Resource</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <GitCompare className="h-10 w-10 mx-auto text-transition" />
                      <h3 className="font-medium mt-2">Migration Tutorials</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Step-by-step tutorials for specific migration scenarios
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" size="sm">View Tutorials</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 text-center">
                <Button asChild>
                  <a href="https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-modeling-view" target="_blank" rel="noopener noreferrer">
                    Microsoft Power BI Documentation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DataModeling;
