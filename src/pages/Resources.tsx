
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Code, 
  ExternalLink, 
  FileText, 
  GraduationCap, 
  MessageSquare, 
  PlayCircle, 
  Users 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Resources = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Resources & Documentation</h1>
        <p className="text-muted-foreground">
          Access guides, tutorials, and documentation to support your migration journey
        </p>
      </div>

      <Tabs defaultValue="guides" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="downloads">Downloads</TabsTrigger>
        </TabsList>
        
        <TabsContent value="guides" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Migration Guide</CardTitle>
                <CardDescription>
                  End-to-end migration process documentation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">Migration Planning Checklist</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">Assessment Framework Document</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">Phased Migration Approach</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">User Adoption Strategy</a>
                  </li>
                </ul>
                
                <Button className="w-full" variant="outline">
                  Download Complete Guide (PDF)
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Expression Translation</CardTitle>
                <CardDescription>
                  Convert Qlik expressions to Power BI DAX
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">Basic Aggregations</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">Set Analysis to CALCULATE</a>
                    <Badge variant="outline" className="text-xs">Popular</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">Time Functions</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">Advanced Calculations</a>
                  </li>
                </ul>
                
                <Button className="w-full" variant="outline">
                  View Expression Library
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Best Practices</CardTitle>
                <CardDescription>
                  Recommended approaches for optimal results
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">Data Modeling Patterns</a>
                    <Badge variant="outline" className="text-xs">Popular</Badge>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">Performance Optimization</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">Visualization Best Practices</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <a href="#" className="text-sm hover:underline">Governance & Security</a>
                  </li>
                </ul>
                
                <Button className="w-full" variant="outline">
                  Browse All Guides
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Featured Guide: Set Analysis to DAX Conversion</CardTitle>
              <CardDescription>
                Learn how to convert Qlik's powerful Set Analysis expressions to DAX
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Qlik Set Analysis</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                    <p>Sum({&lt;Year={2023}, Region={'North America'}&gt;} Sales)</p>
                  </div>
                  <p className="text-sm mt-3 text-muted-foreground">
                    Set Analysis in Qlik lets you create sets of data with custom selections,
                    overriding current selections.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Power BI DAX Equivalent</h3>
                  <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                    <p>CALCULATE(SUM(Sales[Amount]),<br />Dates[Year] = 2023,<br />Region[Name] = "North America")</p>
                  </div>
                  <p className="text-sm mt-3 text-muted-foreground">
                    CALCULATE in DAX filters the context in which an expression is evaluated,
                    similar to Qlik's Set Analysis.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-md mt-4">
                <h3 className="font-medium mb-2">Key Differences</h3>
                <ul className="space-y-1 text-sm">
                  <li>• DAX requires explicit relationship paths between tables</li>
                  <li>• Qlik's dollar-sign expansion has no direct equivalent in DAX</li>
                  <li>• Set modifiers (+=*-) must be recreated using DAX functions like UNION, INTERSECT</li>
                  <li>• Advanced set operations require more complex CALCULATE expressions</li>
                </ul>
              </div>
              
              <div className="flex justify-center mt-4">
                <Button>
                  Read Full Guide
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-3">
                  <PlayCircle className="h-12 w-12 text-muted-foreground opacity-70" />
                </div>
                <CardTitle className="text-lg">Migration Methodology</CardTitle>
                <CardDescription>
                  Step-by-step approach to migrating from Qlik to Power BI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <span>23:45</span>
                  <span>Beginner</span>
                </div>
                <Button variant="outline" className="w-full">
                  Watch Video
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-3">
                  <PlayCircle className="h-12 w-12 text-muted-foreground opacity-70" />
                </div>
                <CardTitle className="text-lg">Data Modeling Techniques</CardTitle>
                <CardDescription>
                  Converting Qlik associative models to Power BI star schema
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <span>31:12</span>
                  <span>Intermediate</span>
                </div>
                <Button variant="outline" className="w-full">
                  Watch Video
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center mb-3">
                  <PlayCircle className="h-12 w-12 text-muted-foreground opacity-70" />
                </div>
                <CardTitle className="text-lg">Advanced DAX for Qlik Users</CardTitle>
                <CardDescription>
                  Mastering DA equivalent functionality in Power BI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground mb-4">
                  <span>42:18</span>
                  <span>Advanced</span>
                </div>
                <Button variant="outline" className="w-full">
                  Watch Video
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Video Tutorial Series</CardTitle>
              <CardDescription>
                Complete learning path for Qlik to Power BI migration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Beginner Series: Migration Foundations</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">1. Understanding the Migration Process</span>
                      </div>
                      <span className="text-xs text-muted-foreground">15:22</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">2. Analyzing Your Qlik Environment</span>
                      </div>
                      <span className="text-xs text-muted-foreground">18:45</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">3. Power BI Fundamentals for Qlik Users</span>
                      </div>
                      <span className="text-xs text-muted-foreground">22:10</span>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Intermediate Series: Technical Implementation</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">1. Data Modeling Best Practices</span>
                      </div>
                      <span className="text-xs text-muted-foreground">31:12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">2. Recreating Qlik Visualizations</span>
                      </div>
                      <span className="text-xs text-muted-foreground">27:35</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">3. Set Analysis to DAX Translation</span>
                      </div>
                      <span className="text-xs text-muted-foreground">34:18</span>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Advanced Series: Optimization & Advanced Features</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">1. Advanced DAX Techniques</span>
                      </div>
                      <span className="text-xs text-muted-foreground">42:18</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">2. Performance Optimization</span>
                      </div>
                      <span className="text-xs text-muted-foreground">38:25</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">3. Complex Migration Case Studies</span>
                      </div>
                      <span className="text-xs text-muted-foreground">45:40</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="community" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Community Forums</CardTitle>
                <CardDescription>
                  Connect with other professionals migrating from Qlik to Power BI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-medium">Migration Assistant Community</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Our dedicated forum for users of this migration tool
                  </p>
                  <Button variant="outline" size="sm">
                    Join Community
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-medium">Power BI Community</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Microsoft's official community for Power BI users
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://community.powerbi.com" target="_blank" rel="noopener noreferrer">
                      Visit Forum
                    </a>
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-medium">Qlik Community</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Qlik's official community for Qlik users
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://community.qlik.com" target="_blank" rel="noopener noreferrer">
                      Visit Forum
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Expert Support</CardTitle>
                <CardDescription>
                  Get professional assistance with your migration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-medium">Ask an Expert</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Submit questions to our migration specialists
                  </p>
                  <Button variant="outline" size="sm">
                    Submit Question
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-medium">Migration Consulting</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Professional consulting services for complex migrations
                  </p>
                  <Button variant="outline" size="sm">
                    Learn About Services
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                    <h3 className="font-medium">Office Hours</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Weekly live Q&A sessions with migration experts
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Schedule
                    </Button>
                    <Button variant="outline" size="sm">
                      Register
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Featured Community Discussions</CardTitle>
              <CardDescription>
                Popular topics from our migration community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Handling Complex Set Analysis in Power BI</h3>
                    <Badge>Popular</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground my-2">
                    Discussion on translating complex set analysis expressions to DAX...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">23 replies · Updated 2 days ago</div>
                    <Button variant="outline" size="sm">
                      View Thread
                    </Button>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">Best Practices for Data Volume Migration</h3>
                    <Badge variant="secondary">Technical</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground my-2">
                    Strategies for handling large datasets when migrating from Qlik to Power BI...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">17 replies · Updated 5 days ago</div>
                    <Button variant="outline" size="sm">
                      View Thread
                    </Button>
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium">User Adoption Strategies</h3>
                    <Badge variant="outline">Case Study</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground my-2">
                    How we helped our organization's users transition from Qlik to Power BI...
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">12 replies · Updated 1 week ago</div>
                    <Button variant="outline" size="sm">
                      View Thread
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Button>
                  Explore All Discussions
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="downloads" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Templates & Tools</CardTitle>
                <CardDescription>
                  Resources to accelerate your migration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Migration Assessment Template</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Excel template for cataloging Qlik applications and planning migration
                  </p>
                  <Button variant="outline" size="sm">
                    Download Excel Template
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Power BI Theme for Qlik Users</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    JSON theme file with colors and styles familiar to Qlik users
                  </p>
                  <Button variant="outline" size="sm">
                    Download Theme File
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">DAX Pattern Library</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Common DAX patterns that mimic Qlik functionality
                  </p>
                  <Button variant="outline" size="sm">
                    Download DAX Library
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Detailed guides and reference materials
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Complete Migration Guide</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Comprehensive PDF guide covering all aspects of migration
                  </p>
                  <Button variant="outline" size="sm">
                    Download PDF (12MB)
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Expression Reference Sheet</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Quick reference for Qlik to DAX translations
                  </p>
                  <Button variant="outline" size="sm">
                    Download PDF (5MB)
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Migration Checklist</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Step-by-step checklist to ensure thorough migration
                  </p>
                  <Button variant="outline" size="sm">
                    Download PDF (3MB)
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Sample Files</CardTitle>
                <CardDescription>
                  Example files demonstrating migration scenarios
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Sales Dashboard Migration</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Before (Qlik) and after (Power BI) files for sales dashboard
                  </p>
                  <Button variant="outline" size="sm">
                    Download Sample Files
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Financial Reporting Migration</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Financial reports migrated from QlikView to Power BI
                  </p>
                  <Button variant="outline" size="sm">
                    Download Sample Files
                  </Button>
                </div>
                
                <div className="border rounded-md p-4">
                  <h3 className="font-medium mb-2">Data Model Examples</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Before and after data models showing transformation
                  </p>
                  <Button variant="outline" size="sm">
                    Download Sample Files
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Microsoft Power BI Resources</CardTitle>
              <CardDescription>
                Official Microsoft documentation and learning resources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <BookOpen className="h-10 w-10 mx-auto text-powerbi" />
                      <h3 className="font-medium mt-2">Official Documentation</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Microsoft's comprehensive Power BI documentation
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://learn.microsoft.com/en-us/power-bi/" target="_blank" rel="noopener noreferrer">
                          Visit Documentation
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <GraduationCap className="h-10 w-10 mx-auto text-powerbi" />
                      <h3 className="font-medium mt-2">Microsoft Learn</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Free learning paths and modules for Power BI
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://learn.microsoft.com/en-us/training/powerplatform/power-bi" target="_blank" rel="noopener noreferrer">
                          Start Learning
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <PlayCircle className="h-10 w-10 mx-auto text-powerbi" />
                      <h3 className="font-medium mt-2">Guy in a Cube</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Microsoft's official Power BI YouTube channel
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://www.youtube.com/c/GuyInACube" target="_blank" rel="noopener noreferrer">
                          Watch Videos
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6 text-center">
                <Button asChild>
                  <a href="https://powerbi.microsoft.com/en-us/" target="_blank" rel="noopener noreferrer">
                    Microsoft Power BI Website
                    <ExternalLink className="ml-2 h-4 w-4" />
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

export default Resources;
