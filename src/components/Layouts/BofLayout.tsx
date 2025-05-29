import React from "react";
import Navbar from "./components/Navbar";
import { AppSidebar } from "./components/Sidebar";
import { SidebarProvider } from "../ui/sidebar";

const BofLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <div className="w-full min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1">
          <AppSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default BofLayout;
