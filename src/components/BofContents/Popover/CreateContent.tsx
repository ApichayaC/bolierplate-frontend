"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Status from "./Status";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { statuses } from "@/constants/bof.constant";
import {
  createTasksSchema,
  CreateTasksSchema,
} from "@/constants/schema/create-task.schema";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface CreateContentProps {
  handleClose: () => void;
}

const CreateContent = ({ handleClose }: CreateContentProps) => {
  const [isOpenStatus, setIsOpenStatus] = React.useState<boolean>(false);

  const {
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<CreateTasksSchema>({
    resolver: zodResolver(createTasksSchema),
    defaultValues: {
      project_name: "",
      description: "",
      status: "",
    },
  });

  const handleStatusChange = (newStatus: string) => {
    setValue("status", newStatus);
  };

  const onSubmit = async (data: CreateTasksSchema) => {
    console.log("data", data);
    handleClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
        }
      }}
    >
      <div className="flex flex-row items-center justify-between border-b p-3">
        <p className="text-lg font-semibold">Create</p>
        <X
          className="w-6 h-6 text-gray-400 cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <div className="px-3 py-4 space-y-2">
        <div>
          <p
            className={cn(
              "text-gray-500 text-xs",
              errors.project_name &&
                !watch("project_name") &&
                "text-destructive"
            )}
          >
            * Project
          </p>
          <Input
            value={watch("project_name")}
            placeholder="Project Name"
            onChange={(e) => {
              const value = e.target.value.trimStart().replace(/\s+/g, " ");
              setValue("project_name", value);
            }}
            className={cn(
              "text-sm rounded-md focus-visible:ring-0 h-10 px-3 shadow-none placeholder:text-muted-foreground",
              errors.project_name &&
                !watch("project_name") &&
                "!border-destructive"
            )}
          />
        </div>
        <div>
          <p
            className={cn(
              "text-gray-500 text-xs",
              errors.status && !watch("status") && "!text-destructive"
            )}
          >
            * Status
          </p>
          <Status
            isError={errors.status && !watch("status")}
            list={statuses}
            status={watch("status")}
            isOpen={isOpenStatus}
            setIsOpen={setIsOpenStatus}
            handleStatusChange={handleStatusChange}
          />
        </div>
        <div>
          <p className="text-gray-500 text-xs">Description</p>
          <Textarea
            placeholder="Description"
            value={watch("description")}
            className="text-sm rounded-md focus-visible:ring-0 px-3 shadow-xs placeholder:text-muted-foreground"
            onChange={(e) => setValue("description", e.target.value)}
          />
        </div>
        <div className="flex flex-row items-center justify-end gap-2">
          <Button
            variant={"ghost"}
            className="rounded-md font-normal text-sm"
            onClick={() =>
              reset({
                project_name: "",
                description: "",
                status: "",
              })
            }
          >
            Reset
          </Button>
          <Button
            type="submit"
            className="w-1/3 rounded-md font-normal text-sm"
          >
            Create
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateContent;
