
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

interface Stage {
  id: number;
  title: string;
  description: string;
  path: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

const MigrationRoadmap = () => {
  const [stages, setStages] = useState<Stage[]>([
    {
      id: 1,
      title: "Qlik Application Analysis",
      description: "Analyze your Qlik applications to understand their structure",
      path: "/analysis",
      status: "in-progress"
    },
    {
      id: 2,
      title: "Feature & Connection Mapping",
      description: "Map Qlik features and data connections to Power BI equivalents",
      path: "/mapping",
      status: "in-progress"
    },
    {
      id: 3,
      title: "Data Model Recreation",
      description: "Recreate your Qlik data model in Power BI",
      path: "/data-modeling",
      status: "not-started"
    },
    {
      id: 4,
      title: "Visualization Recreation",
      description: "Recreate your Qlik visualizations in Power BI",
      path: "/visualization",
      status: "not-started"
    },
    {
      id: 5,
      title: "Testing & Validation",
      description: "Test and validate your migrated Power BI reports",
      path: "/progress",
      status: "not-started"
    }
  ]);

  const getStatusColor = (status: Stage['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-muted" />
      
      <div className="space-y-8">
        {stages.map((stage) => (
          <div key={stage.id} className="relative pl-10">
            {/* Stage indicator */}
            <div className={`absolute left-0 top-1.5 h-8 w-8 rounded-full ${getStatusColor(stage.status)} text-white flex items-center justify-center`}>
              {stage.status === 'completed' ? (
                <Check className="h-5 w-5" />
              ) : (
                <span className="text-sm font-medium">{stage.id}</span>
              )}
            </div>
            
            <div className="space-y-1">
              <h3 className="text-lg font-medium">{stage.title}</h3>
              <p className="text-sm text-muted-foreground">{stage.description}</p>
              <Button variant="link" asChild className="p-0 h-auto">
                <Link to={stage.path}>
                  {stage.status === 'completed' ? 'View' : stage.status === 'in-progress' ? 'Continue' : 'Start'}
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MigrationRoadmap;
