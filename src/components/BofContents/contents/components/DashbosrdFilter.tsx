import React from "react";
import Search from "../../Input/Search";
import { useDashboardStore } from "@/stores/dashboard/dashboard.model";
import Status from "../../Popover/Status";

const DashbosrdFilter = () => {
  const [isOpenOwner, setIsOpenOwner] = React.useState<boolean>(false);
  const [isOpenProject, setIsOpenProject] = React.useState<boolean>(false);
  const [isOpenGroup, setIsOpenGroup] = React.useState<boolean>(false);
  const {
    dashboard,
    owner,
    group,
    project,
    setGroup,
    setProject,
    setOwner,
    setDashboard,
  } = useDashboardStore();
  return (
    <div className="flex flex-row items-center gap-4">
      <Search
        placeholder="Search dashboard"
        value={dashboard}
        setValue={setDashboard}
      />
      <Status
        list={[]}
        placeholder={"Owner"}
        status={owner}
        isOpen={isOpenOwner}
        setIsOpen={setIsOpenOwner}
        handleStatusChange={setOwner}
        classNameTrigger="w-[200px]"
      />
      <Status
        list={[]}
        placeholder={"Project"}
        status={project}
        isOpen={isOpenProject}
        setIsOpen={setIsOpenProject}
        handleStatusChange={setProject}
        classNameTrigger="w-[200px]"
      />
      <Status
        list={[]}
        placeholder={"Group"}
        status={group}
        isOpen={isOpenGroup}
        setIsOpen={setIsOpenGroup}
        handleStatusChange={setGroup}
        classNameTrigger="w-[200px]"
      />
    </div>
  );
};

export default DashbosrdFilter;
