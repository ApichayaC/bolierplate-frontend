"use client";
import React from "react";
import Search from "../../Input/Search";
import { useProjectStore } from "@/stores/projects/projects.model";
import Status from "../../Popover/Status";
import { product_types } from "@/constants/bof.constant";

const ProjectsFilter = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const { project, type, setProject, setType } = useProjectStore();
  return (
    <div className="flex flex-row items-center gap-4">
      <Search
        placeholder={"Search project"}
        value={project}
        setValue={setProject}
      />
      <div className="w-[200px]">
        <Status
          list={product_types}
          placeholder={"Filter by product"}
          status={type}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleStatusChange={setType}
        />
      </div>
    </div>
  );
};

export default ProjectsFilter;
