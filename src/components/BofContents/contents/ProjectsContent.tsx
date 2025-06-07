/* eslint-disable react-hooks/exhaustive-deps */
" use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProjectsFilter from "./components/ProjectsFilter";
import { useProjectStore } from "@/stores/projects/projects.model";
import ProjectsTable from "../Table/ProjectsTable";
import { PROJECTS } from "@/constants/bof.constant";

const ProjectsContent = () => {
  const { reset } = useProjectStore();

  useEffect(() => {
    reset();
  }, []);
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-bold text-primary leading-10">Projects</p>
        <Button className="bg-primary hover:bg-primary/80 rounded-md cursor-pointer h-10 text-sm font-normal text-white flex flex-row items-center gap-2 px-3">
          <Plus className="p-0 h-4 w-4 text-white" />
          Create Project
        </Button>
      </div>
      <div className="mt-6 space-y-3">
        <ProjectsFilter />
        <ProjectsTable data={PROJECTS} />
      </div>
    </div>
  );
};

export default ProjectsContent;
