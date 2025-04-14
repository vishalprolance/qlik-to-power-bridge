
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { 
  BarChart3, 
  FileSpreadsheet, 
  HelpCircle, 
  Home,
  Database, 
  LineChart, 
  List,
  PieChart
} from 'lucide-react';

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    title: "Qlik Analysis",
    path: "/analysis",
    icon: PieChart,
  },
  {
    title: "Feature Mapping",
    path: "/mapping",
    icon: FileSpreadsheet,
  },
  {
    title: "Data Modeling",
    path: "/data-modeling",
    icon: Database,
  },
  {
    title: "Visualization",
    path: "/visualization",
    icon: BarChart3,
  },
  {
    title: "Progress Tracking",
    path: "/progress",
    icon: LineChart,
  },
  {
    title: "Resources",
    path: "/resources",
    icon: HelpCircle,
  }
];

const AppSidebar = () => {
  const location = useLocation();
  
  return (
    <Sidebar>
      <SidebarHeader className="px-2 py-4">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="flex items-center justify-center">
            <div className="h-8 w-8 bg-migration-gradient rounded-md flex items-center justify-center">
              <span className="text-white font-bold">QB</span>
            </div>
          </div>
          <div className="font-semibold text-lg">Qlik to Power BI</div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Migration Process</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild data-active={location.pathname === item.path}>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            <span className="block">Migration Assistant</span>
            <span className="block">v1.0.0</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
