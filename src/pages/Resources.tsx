
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, BookOpen, FileText, GraduationCap, Search, Video } from "lucide-react";
import { useState } from "react";

const resources = [
  {
    title: "Power BI Documentation",
    description: "Official Microsoft documentation for Power BI Desktop and Service",
    category: "Documentation",
    type: "Official",
    url: "https://learn.microsoft.com/power-bi/",
    tags: ["documentation", "reference", "official"]
  },
  {
    title: "DAX Guide",
    description: "Comprehensive guide to Data Analysis Expressions (DAX)",
    category: "Documentation",
    type: "Community",
    url: "https://dax.guide/",
    tags: ["dax", "formulas", "reference"]
  },
  {
    title: "Guy in a Cube",
    description: "YouTube channel with Power BI tutorials and news",
    category: "Video",
    type: "Community",
    url: "https://www.youtube.com/c/GuyinaCube",
    tags: ["tutorial", "video", "news"]
  },
  {
    title: "SQLBI",
    description: "Advanced DAX patterns and techniques",
    category: "Training",
    type: "Community",
    url: "https://www.sqlbi.com/",
    tags: ["dax", "advanced", "modeling"]
  },
  {
    title: "Microsoft Power BI Community",
    description: "Forums and discussions for Power BI users",
    category: "Community",
    type: "Official",
    url: "https://community.powerbi.com/",
    tags: ["forum", "community", "help"]
  },
  {
    title: "Migration from QlikView to Power BI",
    description: "Official Microsoft guide on migrating from QlikView to Power BI",
    category: "Migration",
    type: "Official",
    url: "https://learn.microsoft.com/power-bi/guidance/migrate-from-qlikview",
    tags: ["migration", "qlikview", "guide"]
  },
  {
    title: "Migrating from Qlik to Power BI",
    description: "Best practices for a successful migration",
    category: "Migration",
    type: "Community",
    url: "#",
    tags: ["migration", "qlik", "best practices"]
  },
  {
    title: "Power BI DAX Functions Reference",
    description: "Complete reference for all DAX functions",
    category: "Documentation",
    type: "Official",
    url: "https://learn.microsoft.com/dax/",
    tags: ["dax", "reference", "functions"]
  },
  {
    title: "Power Query M Formula Language",
    description: "Reference documentation for Power Query formulas",
    category: "Documentation",
    type: "Official",
    url: "https://learn.microsoft.com/powerquery-m/",
    tags: ["power query", "m", "etl"]
  },
  {
    title: "Enterprise DNA",
    description: "Advanced Power BI training courses and resources",
    category: "Training",
    type: "Community",
    url: "https://enterprisedna.co/",
    tags: ["training", "courses", "advanced"]
  },
  {
    title: "Power BI Tips",
    description: "Tips and tricks for Power BI development",
    category: "Blog",
    type: "Community",
    url: "https://powerbi.tips/",
    tags: ["tips", "tricks", "blog"]
  },
  {
    title: "Qlik to Power BI: Expression Conversion",
    description: "Guide for converting Qlik expressions to DAX",
    category: "Migration",
    type: "Community",
    url: "#",
    tags: ["conversion", "expressions", "dax"]
  }
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const categories = [...new Set(resources.map(resource => resource.category))];
  
  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
    const matchesCategory = selectedCategories.length === 0 || 
      selectedCategories.includes(resource.category);
      
    return matchesSearch && matchesCategory;
  });
  
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Learning Resources</h1>
        <p className="text-muted-foreground">
          Documentation, guides, and training materials to support your Qlik to Power BI migration
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Search Resources</CardTitle>
              <CardDescription>
                Find helpful documentation and learning materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative mb-6">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by keyword, topic, or tag..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map(category => (
                  <Badge 
                    key={category} 
                    variant={selectedCategories.includes(category) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="official">Official</TabsTrigger>
                  <TabsTrigger value="migration">Migration</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all" className="pt-4">
                  <div className="grid grid-cols-1 gap-4">
                    {filteredResources.length > 0 ? (
                      filteredResources.map((resource, idx) => (
                        <ResourceCard key={idx} resource={resource} />
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">No resources found matching your criteria</p>
                        <Button 
                          variant="link" 
                          onClick={() => {
                            setSearchTerm("");
                            setSelectedCategories([]);
                          }}
                        >
                          Clear filters
                        </Button>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="official" className="pt-4">
                  <div className="grid grid-cols-1 gap-4">
                    {filteredResources.filter(r => r.type === "Official").length > 0 ? (
                      filteredResources
                        .filter(r => r.type === "Official")
                        .map((resource, idx) => (
                          <ResourceCard key={idx} resource={resource} />
                        ))
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">No official resources found matching your criteria</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="migration" className="pt-4">
                  <div className="grid grid-cols-1 gap-4">
                    {filteredResources.filter(r => r.category === "Migration").length > 0 ? (
                      filteredResources
                        .filter(r => r.category === "Migration")
                        .map((resource, idx) => (
                          <ResourceCard key={idx} resource={resource} />
                        ))
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">No migration resources found matching your criteria</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="community" className="pt-4">
                  <div className="grid grid-cols-1 gap-4">
                    {filteredResources.filter(r => r.type === "Community").length > 0 ? (
                      filteredResources
                        .filter(r => r.type === "Community")
                        .map((resource, idx) => (
                          <ResourceCard key={idx} resource={resource} />
                        ))
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">No community resources found matching your criteria</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Resource Types</CardTitle>
              <CardDescription>
                Browse by content format
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 p-2 border rounded-md hover:bg-muted/50 cursor-pointer">
                <div className="bg-primary/10 p-2 rounded-md">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Documentation</p>
                  <p className="text-xs text-muted-foreground">Official guides & reference</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 border rounded-md hover:bg-muted/50 cursor-pointer">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Video Tutorials</p>
                  <p className="text-xs text-muted-foreground">Step-by-step walkthroughs</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 border rounded-md hover:bg-muted/50 cursor-pointer">
                <div className="bg-primary/10 p-2 rounded-md">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Training Courses</p>
                  <p className="text-xs text-muted-foreground">In-depth learning materials</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 border rounded-md hover:bg-muted/50 cursor-pointer">
                <div className="bg-primary/10 p-2 rounded-md">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Sample Files</p>
                  <p className="text-xs text-muted-foreground">Templates & examples</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Submit a Resource
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>
                Essential first steps
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-2">
                <h4 className="font-medium">Migration Roadmap</h4>
                <p className="text-sm text-muted-foreground">
                  Follow our structured approach to migration
                </p>
                <Button variant="link" className="p-0" size="sm">
                  View Roadmap
                </Button>
              </div>
              
              <div className="border-l-4 border-secondary pl-4 py-2">
                <h4 className="font-medium">Download Power BI Desktop</h4>
                <p className="text-sm text-muted-foreground">
                  Free to download and start developing
                </p>
                <Button variant="link" className="p-0" size="sm">
                  Download Now
                </Button>
              </div>
              
              <div className="border-l-4 border-accent pl-4 py-2">
                <h4 className="font-medium">Migration Checklist</h4>
                <p className="text-sm text-muted-foreground">
                  Key items to address during your migration
                </p>
                <Button variant="link" className="p-0" size="sm">
                  View Checklist
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface ResourceCardProps {
  resource: {
    title: string;
    description: string;
    category: string;
    type: string;
    url: string;
    tags: string[];
  };
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const getCategoryIcon = () => {
    switch (resource.category) {
      case 'Documentation':
        return <BookOpen className="h-5 w-5" />;
      case 'Video':
        return <Video className="h-5 w-5" />;
      case 'Training':
        return <GraduationCap className="h-5 w-5" />;
      default:
        return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <Badge variant="outline">{resource.category}</Badge>
          <Badge variant={resource.type === "Official" ? "default" : "secondary"}>
            {resource.type}
          </Badge>
        </div>
        <CardTitle className="text-lg mt-2">
          {resource.title}
        </CardTitle>
        <CardDescription>
          {resource.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {resource.tags.map((tag, idx) => (
            <Badge key={idx} variant="outline" className="bg-muted/50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          {getCategoryIcon()}
          <span>{resource.category}</span>
        </div>
        <Button asChild size="sm">
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            View Resource
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Resources;
