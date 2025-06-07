/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import DashbosrdFilter from "./components/DashbosrdFilter";
import DashboardTable from "@/components/BofContents/Table/DashboardTable";
import { useDashboardStore } from "@/stores/dashboard/dashboard.model";
import { DASHBOARDS } from "@/constants/bof.constant";

const DashboardsContent = () => {
  const { reset } = useDashboardStore();

  useEffect(() => {
    reset();
  }, []);
  return (
    <div>
      <p className="text-2xl font-bold text-primary leading-10">Dashboard</p>
      <div className="mt-6 space-y-3">
        <DashbosrdFilter />
        <DashboardTable data={DASHBOARDS} />
      </div>
    </div>
  );
};

export default DashboardsContent;
