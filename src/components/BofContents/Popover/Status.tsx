import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IStatus } from "@/interface/bof.interface";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface StatusProps {
  list: IStatus[];
  status: string;
  isError: boolean | undefined;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleStatusChange: (newStatus: string) => void;
}

const Status = ({
  isError,
  status,
  list,
  isOpen,
  setIsOpen,
  handleStatusChange,
}: StatusProps) => {
  const selectedStatus = list.find((item) => item.value === status);
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="w-full cursor-pointer">
        <div
          className={cn(
            "w-full flex items-center justify-between h-10 text-sm rounded-md border border-input",
            isError && "!border-destructive"
          )}
        >
          <p
            className={cn(
              "w-full flex items-center px-3 text-muted-foreground",
              status && "text-black"
            )}
          >
            {status ? selectedStatus?.lable : "Select Status"}
          </p>
          <ChevronDown
            className={cn("h-5 w-5 text-gray-400 mx-2", isOpen && "rotate-180")}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="min-w-full p-2 rounded-md">
        {list.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              handleStatusChange(item.value);
              setIsOpen(false);
            }}
            className={cn(
              "hover:bg-gray-100 rounded-md w-full p-2 cursor-pointer",
              selectedStatus?.value === item.value && "bg-gray-200"
            )}
          >
            <p className="text-sm">{item.lable}</p>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default Status;
