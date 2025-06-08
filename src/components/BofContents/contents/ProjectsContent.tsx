/* eslint-disable react-hooks/exhaustive-deps */
" use client";
import React, { useEffect, useMemo } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectsFilter from "./components/ProjectsFilter";
import ProjectsTable from "../Table/ProjectsTable";
import CreateProjectDialog from "../Dialog/CreateProjectDialog";
import { useProjectStore } from "@/stores/projects/projects.model";
import { CreateProjectSchema } from "@/constants/schema/create-project.schema";

const ProjectsContent = () => {
  const {
    isOpenDialog,
    projects,
    project,
    type,
    setIsOpenDialog,
    setProject,
    addProject,
    setType,
  } = useProjectStore();

  const handleCreateProject = (newProject: CreateProjectSchema) => {
    addProject({
      name: newProject.project_name,
      key: newProject.key,
      type: newProject.type,
      lead: "Unassigned",
      projectUrl: null,
    });
    setIsOpenDialog(false);
  };

  const projectsList = useMemo(() => {
    return projects.filter((item) => {
      const matchesType = type ? item.type === type : true;
      const matchesProject = project
        ? item.name.toLowerCase().includes(project.toLowerCase()) ||
          item.key.toLowerCase().includes(project.toLowerCase())
        : true;
      return matchesType && matchesProject;
    });
  }, [project, type]);

  useEffect(() => {
    setProject("");
    setType("");
  }, []);
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <p className="text-2xl font-bold text-primary leading-10">Projects</p>
        <Button
          className="bg-primary hover:bg-primary/80 rounded-md cursor-pointer h-10 text-sm font-normal text-white flex flex-row items-center gap-2 px-3"
          onClick={() => setIsOpenDialog(true)}
        >
          <Plus className="p-0 h-4 w-4 text-white" />
          Create Project
        </Button>
      </div>
      <div className="mt-6 space-y-3">
        <ProjectsFilter />
        <ProjectsTable data={projectsList} />
      </div>
      <CreateProjectDialog
        isOpen={isOpenDialog}
        setIsOpen={setIsOpenDialog}
        handleCreate={handleCreateProject}
      />
    </div>
  );
};

export default ProjectsContent;
