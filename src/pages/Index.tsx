
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, LineChart, Database, PieChart, BarChart3 } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-qlik via-transition to-powerbi py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Qlik to Power BI Migration Assistant
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Streamline your migration from Qlik Sense or QlikView to Microsoft Power BI
              with our comprehensive migration toolkit
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-transition hover:bg-gray-100">
                <Link to="/dashboard">
                  Start Migration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link to="/resources">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Migration Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform provides all the tools you need to successfully migrate your analytics
              from Qlik to Power BI with minimal disruption
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="feature-card">
              <PieChart className="h-10 w-10 mb-4 text-qlik" />
              <h3 className="text-xl font-semibold mb-2">Qlik Application Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Upload or connect to your Qlik applications and get detailed insights into their structure and complexity
              </p>
              <Link to="/analysis" className="text-primary hover:underline inline-flex items-center">
                Analyze Your Apps <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="feature-card">
              <Database className="h-10 w-10 mb-4 text-transition" />
              <h3 className="text-xl font-semibold mb-2">Data Modeling Assistance</h3>
              <p className="text-muted-foreground mb-4">
                Get guidance on recreating your Qlik data models in Power BI, with best practices for optimal performance
              </p>
              <Link to="/data-modeling" className="text-primary hover:underline inline-flex items-center">
                Model Your Data <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="feature-card">
              <BarChart3 className="h-10 w-10 mb-4 text-powerbi" />
              <h3 className="text-xl font-semibold mb-2">Visualization Recreation</h3>
              <p className="text-muted-foreground mb-4">
                Learn how to recreate your Qlik visualizations in Power BI with our detailed comparison guides
              </p>
              <Link to="/visualization" className="text-primary hover:underline inline-flex items-center">
                Build Visuals <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Structured Migration Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow our proven step-by-step process to ensure a successful migration
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-lg border bg-card">
              <div className="h-8 w-8 rounded-full bg-qlik text-white flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Assessment & Planning</h3>
                <p className="text-muted-foreground">
                  Analyze your Qlik applications and develop a comprehensive migration strategy
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border bg-card">
              <div className="h-8 w-8 rounded-full bg-transition text-white flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Source & Model Migration</h3>
                <p className="text-muted-foreground">
                  Connect to your data sources and recreate your data models in Power BI
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border bg-card">
              <div className="h-8 w-8 rounded-full bg-transition text-white flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expression & Calculation Translation</h3>
                <p className="text-muted-foreground">
                  Convert Qlik expressions to DAX with our translation guidance
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg border bg-card">
              <div className="h-8 w-8 rounded-full bg-powerbi text-white flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Dashboard Recreation & Deployment</h3>
                <p className="text-muted-foreground">
                  Recreate your dashboards in Power BI and deploy them to your organization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Migration?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Begin your journey from Qlik to Power BI today with our comprehensive migration assistant
          </p>
          <Button asChild size="lg">
            <Link to="/dashboard">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground">
            Qlik to Power BI Migration Assistant &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
