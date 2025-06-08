import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import Status from "../../Popover/Status";
import { Button } from "@/components/ui/button";
import {
  createProjectSchema,
  CreateProjectSchema,
} from "@/constants/schema/create-project.schema";
import { types } from "@/constants/bof.constant";

interface ICreateProjectFormProps {
  onCreate: (data: CreateProjectSchema) => void;
}

const CreateProjectForm = ({ onCreate }: ICreateProjectFormProps) => {
  const [isOpenType, setIsOpenType] = React.useState<boolean>(false);

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateProjectSchema>({
    resolver: zodResolver(createProjectSchema),
    defaultValues: {
      project_name: "",
      key: "",
      type: "",
    },
  });

  const handleTypeChange = (newType: string) => {
    setValue("type", newType);
  };

  const onSubmit = async (data: CreateProjectSchema) => {
    onCreate(data);
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
      <div className="space-y-2">
        <div>
          <p
            className={cn(
              "text-gray-500 text-xs",
              errors.project_name &&
                !watch("project_name") &&
                "text-destructive"
            )}
          >
            * Project Name
          </p>
          <Input
            value={watch("project_name")}
            placeholder="Project Name"
            onChange={(e) => {
              const value = e.target.value.trimStart().replace(/\s+/g, " ");
              setValue("project_name", value);
            }}
            className={cn(
              "text-sm rounded-md focus-visible:ring-0 h-10 px-3 shadow-none border-2 placeholder:text-muted-foreground",
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
              errors.key && !watch("key") && "!text-destructive"
            )}
          >
            * Key
          </p>
          <Input
            value={watch("key")}
            placeholder="Key"
            onChange={(e) => {
              const value = e.target.value.trimStart().replace(/\s+/g, " ");
              setValue("key", value);
            }}
            className={cn(
              "text-sm rounded-md focus-visible:ring-0 h-10 px-3 shadow-none border-2 placeholder:text-muted-foreground",
              errors.key && !watch("key") && "!border-destructive"
            )}
          />
        </div>
        <div>
          <p
            className={cn(
              "text-gray-500 text-xs",
              errors.type && !watch("type") && "!text-destructive"
            )}
          >
            * Type
          </p>
          <Status
            placeholder="Select type"
            isError={errors.type && !watch("type")}
            list={types}
            status={watch("type")}
            isOpen={isOpenType}
            setIsOpen={setIsOpenType}
            handleStatusChange={handleTypeChange}
            classNameContent="!w-[470px]"
          />
        </div>
        <div className="flex flex-row items-center justify-end gap-2 mt-4">
          <Button
            type="submit"
            className="w-1/3 rounded-md font-medium text-sm h-10"
          >
            Create
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CreateProjectForm;
