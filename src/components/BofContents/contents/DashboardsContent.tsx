import React from "react";
import DashbosrdFilter from "./components/DashbosrdFilter";
import DashboardTable from "@/components/BofContents/Table/DashboardTable";

const DashboardsContent = () => {
  return (
    <div>
      <p className="text-2xl font-bold text-primary">Dashboard</p>
      <div className="mt-6 space-y-3">
        <DashbosrdFilter />
        <DashboardTable data={[]} />
      </div>
    </div>
  );
};

export default DashboardsContent;
