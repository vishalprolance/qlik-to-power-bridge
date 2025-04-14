
import { useEffect, useState } from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  BarChart3, 
  FileSpreadsheet, 
  HelpCircle, 
  Home,
  Database, 
  LineChart, 
  Menu,
  PieChart 
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

const pageIcons: Record<string, React.ElementType> = {
  '/dashboard': Home,
  '/analysis': PieChart,
  '/mapping': FileSpreadsheet,
  '/data-modeling': Database,
  '/visualization': BarChart3,
  '/progress': LineChart,
  '/resources': HelpCircle,
};

const pageTitles: Record<string, string> = {
  '/dashboard': 'Migration Dashboard',
  '/analysis': 'Qlik Application Analysis',
  '/mapping': 'Feature & Connection Mapping',
  '/data-modeling': 'Data Model Recreation',
  '/visualization': 'Visualization Recreation',
  '/progress': 'Progress Tracking',
  '/resources': 'Resources & Documentation',
};

const Header = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentIcon, setCurrentIcon] = useState<React.ElementType | null>(null);
  
  useEffect(() => {
    const title = pageTitles[location.pathname] || 'Not Found';
    const icon = pageIcons[location.pathname] || null;
    
    setCurrentTitle(title);
    setCurrentIcon(icon);
    
    // Update page title
    document.title = `${title} | Qlik to Power BI Migration`;
  }, [location.pathname]);
  
  const handleStartNewProject = () => {
    toast({
      title: "New Project",
      description: "Project creation feature coming soon.",
    });
  };
  
  const IconComponent = currentIcon || Home;
  
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger>
            <Button variant="ghost" size="icon" aria-label="Toggle sidebar">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </SidebarTrigger>
          <div className="flex items-center gap-2">
            {currentIcon && <IconComponent className="h-5 w-5 text-muted-foreground" />}
            <h1 className="text-lg font-semibold">{currentTitle}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleStartNewProject} variant="outline">
            Start New Project
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
