import { Button } from "@/components/ui/button";
import { FolderKanban } from "lucide-react";
import React from "react";

const CreatePlans = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <FolderKanban className="w-24 h-24 text-primary" strokeWidth={2} />
      <p className="text-xl font-bold">No plans yet</p>
      <p className="text-sm text-muted-foreground">
        Get started by making your first plan.
      </p>
      <Button className="rounded-md mt-2 cursor-pointer text-sm font-normal h-10">
        Create Plan
      </Button>
    </div>
  );
};

export default CreatePlans;
