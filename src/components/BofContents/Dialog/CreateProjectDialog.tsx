import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import CreateProjectForm from "../contents/components/CreateProjectForm";
import { CreateProjectSchema } from "@/constants/schema/create-project.schema";

interface ICreateProjectDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleCreate: (data: CreateProjectSchema) => void;
}

const CreateProjectDialog = ({
  isOpen,
  setIsOpen,
  handleCreate,
}: ICreateProjectDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent showCloseButton={false} className="p-5">
        <DialogHeader>
          <X
            onClick={() => setIsOpen(false)}
            className="w-5 h-5 hover:text-gray-500 absolute top-5 right-4"
          />
          <DialogTitle>Create project</DialogTitle>
          <div className="w-full h-[1px] bg-gray-200 my-2" />
          <CreateProjectForm onCreate={handleCreate} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectDialog;
