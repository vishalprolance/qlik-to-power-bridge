
import { Outlet } from 'react-router-dom';
import AppSidebar from '@/components/AppSidebar';
import Header from '@/components/Header';
import { SidebarTrigger } from '@/components/ui/sidebar';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="container max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
        <footer className="border-t py-4 text-center text-sm text-muted-foreground">
          <div className="container max-w-7xl mx-auto">
            Qlik to Power BI Migration Assistant &copy; {new Date().getFullYear()}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
