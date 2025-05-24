import { AppSidebar } from '@/components/sidebar/app-sidebar';
import Header from '@/components/sidebar/header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

  return (
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <Header />
            { children }
        </SidebarInset>
    </SidebarProvider>
  );
};

export default MainLayout;