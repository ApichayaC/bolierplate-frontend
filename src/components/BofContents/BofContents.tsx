"use client";
import React from "react";
import HomeContent from "./contents/HomeContent";
import DashboardsContent from "./contents/DashboardsContent";
import ProjectsContent from "./contents/ProjectsContent";
import PlansContents from "./contents/PlansContents";
import SettingsContents from "./contents/SettingsContents";
import { useContentStore } from "@/stores/contents/content.model";

const BofContents = () => {
  const { content } = useContentStore();
  switch (content) {
    case "home":
      return <HomeContent />;
    case "dashboards":
      return <DashboardsContent />;
    case "projects":
      return <ProjectsContent />;
    case "plans":
      return <PlansContents />;
    case "settings":
      return <SettingsContents />;
    default:
      return <HomeContent />;
  }
};

export default BofContents;
