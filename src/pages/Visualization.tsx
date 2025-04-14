
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  ChevronRight,
  CircleDashed,
  FileText,
  Grid3X3,
  Code,
  LayoutDashboard,
  PieChart,
  SearchIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface VisualMappingItem {
  qlikVisual: string;
  powerBIVisual: string;
  category: string;
  complexity: "Simple" | "Medium" | "Complex";
  description: string;
}

const Visualization = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const visualMappings: VisualMappingItem[] = [
    {
      qlikVisual: "Bar Chart",
      powerBIVisual: "Stacked Bar Chart / Clustered Bar Chart",
      category: "Bar Charts",
      complexity: "Simple",
      description: "Standard bar charts compare values across categories using rectangular bars."
    },
    {
      qlikVisual: "Line Chart",
      powerBIVisual: "Line Chart",
      category: "Line Charts",
      complexity: "Simple",
      description: "Line charts display trends over time or ordered categories."
    },
    {
      qlikVisual: "Pie Chart",
      powerBIVisual: "Pie Chart / Donut Chart",
      category: "Pie Charts",
      complexity: "Simple",
      description: "Pie charts show proportions of a whole using circular segments."
    },
    {
      qlikVisual: "Combo Chart",
      powerBIVisual: "Line and Clustered Column Chart",
      category: "Combo Charts",
      complexity: "Medium",
      description: "Combination charts display multiple series types in a single visualization."
    },
    {
      qlikVisual: "Scatter Plot",
      powerBIVisual: "Scatter Chart",
      category: "Scatter Charts",
      complexity: "Medium",
      description: "Scatter plots show relationships between two numerical variables."
    },
    {
      qlikVisual: "Treemap",
      powerBIVisual: "Treemap",
      category: "Hierarchical",
      complexity: "Medium",
      description: "Treemaps display hierarchical data as nested rectangles."
    },
    {
      qlikVisual: "Pivot Table",
      powerBIVisual: "Matrix",
      category: "Tables",
      complexity: "Medium",
      description: "Pivot tables/matrices display tabular data with row and column grouping."
    },
    {
      qlikVisual: "KPI",
      powerBIVisual: "Card / Multi-row Card",
      category: "KPIs",
      complexity: "Simple",
      description: "KPI visuals highlight important metrics with simple number displays."
    },
    {
      qlikVisual: "Gauge",
      powerBIVisual: "Gauge",
      category: "Gauges",
      complexity: "Simple",
      description: "Gauges show values on a circular scale with color-coded regions."
    },
    {
      qlikVisual: "Map",
      powerBIVisual: "Map / Filled Map",
      category: "Maps",
      complexity: "Medium",
      description: "Maps visualize geographical data with points, lines, or filled regions."
    },
    {
      qlikVisual: "Filter Pane",
      powerBIVisual: "Slicer",
      category: "Filters",
      complexity: "Simple",
      description: "Filter controls allow users to filter data interactively."
    },
    {
      qlikVisual: "Bullet Chart",
      powerBIVisual: "Custom Visual",
      category: "Custom",
      complexity: "Complex",
      description: "Bullet charts compare a primary measure to a target using a linear gauge."
    }
  ];

  const filteredVisuals = visualMappings.filter(item => 
    item.qlikVisual.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.powerBIVisual.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Visualization Recreation</h1>
        <p className="text-muted-foreground">
          Learn how to recreate your Qlik visualizations in Power BI
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Search Visualizations</CardTitle>
              <CardDescription>
                Find mapping information for specific visualization types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <SearchIcon className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for visualizations..."
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
              <CardTitle>Visualization Categories</CardTitle>
              <CardDescription>
                Browse visualizations by type
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(visualMappings.map(item => item.category))).map(category => (
                  <Badge 
                    key={category} 
                    variant="outline" 
                    className="cursor-pointer"
                    onClick={() => setSearchTerm(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="gallery" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="gallery">Visual Gallery</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="formatting">Formatting</TabsTrigger>
          <TabsTrigger value="interactivity">Interactivity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="gallery" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVisuals.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline">{item.category}</Badge>
                    <Badge variant={
                      item.complexity === "Simple" ? "outline" : 
                      item.complexity === "Medium" ? "secondary" : 
                      "destructive"
                    }>
                      {item.complexity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="bg-muted rounded-md p-4 mb-4 h-32 flex items-center justify-center">
                    {item.category === "Bar Charts" && <BarChart3 className="h-16 w-16 text-muted-foreground" />}
                    {item.category === "Pie Charts" && <PieChart className="h-16 w-16 text-muted-foreground" />}
                    {item.category === "Line Charts" && <LayoutDashboard className="h-16 w-16 text-muted-foreground" />}
                    {item.category === "Combo Charts" && <Grid3X3 className="h-16 w-16 text-muted-foreground" />}
                    {item.category === "Tables" && <Grid3X3 className="h-16 w-16 text-muted-foreground" />}
                    {item.category === "KPIs" && <FileText className="h-16 w-16 text-muted-foreground" />}
                    {item.category === "Gauges" && <CircleDashed className="h-16 w-16 text-muted-foreground" />}
                    {item.category === "Maps" && <LayoutDashboard className="h-16 w-16 text-muted-foreground" />}
                    {item.category === "Hierarchical" && <Grid3X3 className="h-16 w-16 text-muted-foreground" />}
                    {item.category === "Scatter Charts" && <Grid3X3 className="h-16 w-16 text-muted-foreground" />}
                    {item.category === "Filters" && <Grid3X3 className="h-16 w-16 text-muted-foreground" />}
                    {item.category === "Custom" && <Code className="h-16 w-16 text-muted-foreground" />}
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground">Qlik</div>
                      <div className="font-medium">{item.qlikVisual}</div>
                    </div>
                    <div className="flex items-center justify-center py-1">
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Power BI</div>
                      <div className="font-medium">{item.powerBIVisual}</div>
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {filteredVisuals.length === 0 && (
              <div className="lg:col-span-3 md:col-span-2 col-span-1 p-12 text-center">
                <div className="text-muted-foreground">
                  No visualizations found matching "{searchTerm}"
                </div>
                <Button variant="link" onClick={() => setSearchTerm("")}>
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Visualization Templates</CardTitle>
              <CardDescription>
                Ready-to-use visualization templates for common scenarios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-muted/30">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <LayoutDashboard className="h-10 w-10 mx-auto text-muted-foreground" />
                      <h3 className="font-medium mt-2">Executive Dashboard</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      KPI overview with trend visualizations
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" size="sm">View Template</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted/30">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <BarChart3 className="h-10 w-10 mx-auto text-muted-foreground" />
                      <h3 className="font-medium mt-2">Sales Analysis</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Product and customer sales breakdowns
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" size="sm">View Template</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-muted/30">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <Grid3X3 className="h-10 w-10 mx-auto text-muted-foreground" />
                      <h3 className="font-medium mt-2">Operational Metrics</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      Performance and efficiency monitoring
                    </p>
                    <div className="flex justify-center">
                      <Button variant="outline" size="sm">View Template</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">
                  More templates will be added in future updates
                </p>
                <Button variant="outline">
                  Request a Template
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Layout Recommendations</CardTitle>
              <CardDescription>
                Best practices for organizing your Power BI dashboards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <h3 className="font-medium mb-2">Visual Hierarchy</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs">1</div>
                      <span>Place KPIs and summary metrics at the top</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs">2</div>
                      <span>Organize related visualizations in logical groups</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="h-5 w-5 rounded-full bg-muted flex items-center justify-center text-xs">3</div>
                      <span>Use consistent sizing and alignment for a professional look</span>
                    </li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-2">Qlik to Power BI Layout Differences</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Power BI uses a grid layout system</li>
                      <li>• Mobile layout options are available</li>
                      <li>• Consider bookmarks for multiple views</li>
                      <li>• Use report pages instead of Qlik sheets</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 border rounded-md">
                    <h3 className="font-medium mb-2">Power BI Layout Features</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Use sections to group content</li>
                      <li>• Z-order controls layering of visuals</li>
                      <li>• Visual headers can be customized</li>
                      <li>• Background images support positioning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="formatting" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Formatting Best Practices</CardTitle>
              <CardDescription>
                Guidelines for consistent and professional-looking visualizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-3">Color Usage</h3>
                    <div className="space-y-3 text-sm">
                      <p>Use a <span className="font-medium">consistent color palette</span> throughout your reports:</p>
                      <div className="flex flex-wrap gap-2">
                        <div className="h-8 w-14 bg-blue-500 rounded"></div>
                        <div className="h-8 w-14 bg-green-500 rounded"></div>
                        <div className="h-8 w-14 bg-amber-500 rounded"></div>
                        <div className="h-8 w-14 bg-red-500 rounded"></div>
                        <div className="h-8 w-14 bg-purple-500 rounded"></div>
                      </div>
                      <ul className="space-y-1 pl-5 list-disc">
                        <li>Apply your brand colors consistently</li>
                        <li>Use color to highlight important insights</li>
                        <li>Consider color blindness in your palette</li>
                        <li>Match Qlik's color scheme if stakeholders expect it</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-3">Typography</h3>
                    <div className="space-y-3 text-sm">
                      <p>Create a <span className="font-medium">visual hierarchy</span> with consistent text formatting:</p>
                      <div className="space-y-2">
                        <div className="p-2 border rounded">
                          <div className="text-lg font-semibold">Report Title (24pt)</div>
                        </div>
                        <div className="p-2 border rounded">
                          <div className="text-base font-medium">Section Header (18pt)</div>
                        </div>
                        <div className="p-2 border rounded">
                          <div className="text-sm">Visual Title (14pt)</div>
                        </div>
                        <div className="p-2 border rounded">
                          <div className="text-xs">Axis Labels (10pt)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Visual Style Migration</CardTitle>
                    <CardDescription>How to transfer Qlik's visual styles to Power BI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="border rounded-md p-3">
                          <h4 className="font-medium mb-2">Import Theme</h4>
                          <p className="text-sm text-muted-foreground">
                            Create a custom Power BI theme JSON file to match your Qlik theme
                          </p>
                        </div>
                        
                        <div className="border rounded-md p-3">
                          <h4 className="font-medium mb-2">Format Pane</h4>
                          <p className="text-sm text-muted-foreground">
                            Use Power BI's Format pane to customize each visual's appearance
                          </p>
                        </div>
                        
                        <div className="border rounded-md p-3">
                          <h4 className="font-medium mb-2">Report Theme</h4>
                          <p className="text-sm text-muted-foreground">
                            Apply a theme to ensure consistent formatting across your report
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="bg-muted/30 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Qlik vs. Power BI: Formatting Options</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="py-2 px-3 text-left">Feature</th>
                          <th className="py-2 px-3 text-left">Qlik</th>
                          <th className="py-2 px-3 text-left">Power BI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-3 font-medium">Themes</td>
                          <td className="py-2 px-3">Themes.json</td>
                          <td className="py-2 px-3">JSON theme files or built-in themes</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-3 font-medium">Color Palettes</td>
                          <td className="py-2 px-3">Fixed palette with extensions</td>
                          <td className="py-2 px-3">Fully customizable via theme</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-3 font-medium">Visual Templates</td>
                          <td className="py-2 px-3">Master objects</td>
                          <td className="py-2 px-3">Report templates</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-3 font-medium">Conditional Formatting</td>
                          <td className="py-2 px-3">Expression-based</td>
                          <td className="py-2 px-3">Rules-based with advanced options</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="interactivity" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Interactivity Mapping</CardTitle>
              <CardDescription>
                Recreate Qlik's interactive experience in Power BI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-3">Qlik Selection Experience</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2 items-start">
                        <div className="h-5 w-5 rounded-full bg-qlik text-white flex items-center justify-center text-xs mt-0.5">Q</div>
                        <span>Associative selections across all visualizations</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <div className="h-5 w-5 rounded-full bg-qlik text-white flex items-center justify-center text-xs mt-0.5">Q</div>
                        <span>Current selections toolbar shows active filters</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <div className="h-5 w-5 rounded-full bg-qlik text-white flex items-center justify-center text-xs mt-0.5">Q</div>
                        <span>Lasso and multi-value selections</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <div className="h-5 w-5 rounded-full bg-qlik text-white flex items-center justify-center text-xs mt-0.5">Q</div>
                        <span>Green/white/gray to show possible/selected/excluded values</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h3 className="font-medium mb-3">Power BI Alternative</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2 items-start">
                        <div className="h-5 w-5 rounded-full bg-powerbi text-white flex items-center justify-center text-xs mt-0.5">P</div>
                        <span>Cross-filtering and cross-highlighting between visuals</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <div className="h-5 w-5 rounded-full bg-powerbi text-white flex items-center justify-center text-xs mt-0.5">P</div>
                        <span>Filter pane shows active filters</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <div className="h-5 w-5 rounded-full bg-powerbi text-white flex items-center justify-center text-xs mt-0.5">P</div>
                        <span>Ctrl+click for multi-select in visuals</span>
                      </li>
                      <li className="flex gap-2 items-start">
                        <div className="h-5 w-5 rounded-full bg-powerbi text-white flex items-center justify-center text-xs mt-0.5">P</div>
                        <span>Highlighted/non-highlighted states with customizable opacity</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Card className="bg-muted/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Implementation Strategies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-background rounded-md">
                        <h4 className="font-medium mb-1">Visual Interactions</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Configure how selecting data in one visual affects other visuals.
                        </p>
                        <div className="text-sm">
                          <span className="font-medium">How to:</span> Format visual &gt; Edit interactions &gt; Set to Filter, Highlight, or None
                        </div>
                      </div>
                      
                      <div className="p-3 bg-background rounded-md">
                        <h4 className="font-medium mb-1">Bookmarks</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Create saved states similar to Qlik's alternate states.
                        </p>
                        <div className="text-sm">
                          <span className="font-medium">How to:</span> View &gt; Bookmarks pane &gt; Add bookmark &gt; Configure bookmark
                        </div>
                      </div>
                      
                      <div className="p-3 bg-background rounded-md">
                        <h4 className="font-medium mb-1">Drill-through</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Create detailed views accessible via right-click.
                        </p>
                        <div className="text-sm">
                          <span className="font-medium">How to:</span> Create destination page &gt; Format page &gt; Drill-through &gt; Add fields
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Advanced Techniques</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 border rounded-md">
                          <h4 className="font-medium mb-1">Synced Slicers</h4>
                          <p className="text-muted-foreground">
                            Create slicers that work across multiple pages to mimic Qlik's global selections.
                          </p>
                        </div>
                        
                        <div className="p-3 border rounded-md">
                          <h4 className="font-medium mb-1">Buttons & Actions</h4>
                          <p className="text-muted-foreground">
                            Use buttons to apply bookmarks for complex filtering scenarios.
                          </p>
                        </div>
                        
                        <div className="p-3 border rounded-md">
                          <h4 className="font-medium mb-1">Custom Tooltips</h4>
                          <p className="text-muted-foreground">
                            Create report page tooltips to show detailed information on hover.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">User Training Considerations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm space-y-3">
                        <p>When transitioning users from Qlik to Power BI, focus training on these key differences:</p>
                        <ul className="space-y-2 pl-5 list-disc">
                          <li>Selection behavior differs (cross-filtering vs. associative model)</li>
                          <li>Filter pane replaces current selections toolbar</li>
                          <li>Interaction patterns (right-click menus, tooltips)</li>
                          <li>Navigation between report pages vs. Qlik sheets</li>
                        </ul>
                        <div className="pt-2">
                          <Link to="/resources">
                            <Button variant="outline" size="sm">
                              View Training Resources
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Visualization;
