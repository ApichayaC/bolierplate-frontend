import React from "react";
import Search from "../../Input/Search";
import { useDashboardStore } from "@/stores/dashboard/dashboard.model";

const DashbosrdFilter = () => {
  const { dashboard, setDashboard } = useDashboardStore();
  return (
    <div>
      <Search
        placeholder="Search dashboard"
        value={dashboard}
        setValue={setDashboard}
      />
    </div>
  );
};

export default DashbosrdFilter;
