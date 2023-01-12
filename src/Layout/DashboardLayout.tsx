import React from "react";
import { SideBar } from "@/components/layout";

type MainLayoutProps = {
  children: React.ReactNode;
};
const Dashboard = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative h-screen flex gap-x-8 flex-row px-4 py-8">
      <SideBar />
      <>{children}</>
    </div>
  );
};

export default Dashboard;
