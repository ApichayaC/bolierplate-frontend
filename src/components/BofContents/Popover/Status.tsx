import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IStatus } from "@/interface/bof.interface";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";

interface StatusProps {
  list: IStatus[];
  placeholder: string;
  status: string;
  isError?: boolean | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleStatusChange: (newStatus: string) => void;
  classNameTrigger?: string;
  classNameContent?: string;
}

const Status = ({
  isError,
  placeholder,
  status,
  list,
  isOpen,
  setIsOpen,
  handleStatusChange,
  classNameTrigger,
  classNameContent,
}: StatusProps) => {
  const selectedStatus = list.find((item) => item.value === status);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className={cn("w-full cursor-pointer", classNameTrigger)}>
        <div
          className={cn(
            "w-full flex items-center justify-between h-10 text-sm rounded-md border-2 border-gray-200",
            isError && "!border-destructive"
          )}
        >
          <p
            className={cn(
              "w-full flex items-center px-3 text-muted-foreground",
              status && "text-black"
            )}
          >
            {status ? selectedStatus?.lable : placeholder}
          </p>
          <ChevronDown
            className={cn("h-5 w-5 text-gray-400 mx-2", isOpen && "rotate-180")}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className={cn("p-2 rounded-md border min-w-full", classNameContent)}
      >
        {list.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              handleStatusChange(item.value);
              setIsOpen(false);
            }}
            className={cn(
              "hover:bg-gray-100 rounded-md w-full p-2 cursor-pointer",
              selectedStatus?.value === item.value &&
                "bg-gray-200 flex flex-row justify-between"
            )}
          >
            <p className="text-sm">{item.lable}</p>
            {selectedStatus?.value === item.value && (
              <Check className="w-4 h-4 my-auto" />
            )}
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default Status;
