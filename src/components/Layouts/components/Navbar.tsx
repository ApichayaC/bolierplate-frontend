"use client";
import React, { useState } from "react";
import { ArrowUp, Menu, Plus } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CreateContent from "@/components/BofContents/Popover/CreateContent";
import Account from "@/components/BofContents/Popover/Account";
import Search from "@/components/BofContents/Input/Search";
import { useSidebar } from "@/components/ui/sidebar";

const Navbar = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const { setOpenMobile } = useSidebar();
  return (
    <div className="h-16 border-b-1 shadow-lg border-gray-200 px-8 sm:px-10 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <div className="h-6 w-6 bg-primary rounded-sm flex items-center justify-center">
          <ArrowUp className="h-5 w-5 text-white" strokeWidth={2.75} />
        </div>
        <p className="text-primary font-semibold text-xl">Back Office</p>
      </div>
      <div className="flex flex-row items-center gap-3 sm:gap-4">
        <Search
          value={searchValue}
          placeholder="Search"
          setValue={setSearchValue}
        />
        <Popover open={openCreate} onOpenChange={setOpenCreate}>
          <PopoverTrigger className="hidden sm:flex">
            <div className="bg-primary hover:bg-primary/80 rounded-md cursor-pointer h-10 text-sm font-normal text-white flex flex-row items-center gap-2 px-3">
              <Plus className="p-0 h-4 w-4 text-white" />
              Create
            </div>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-80 p-0 rounded-md">
            <CreateContent handleClose={() => setOpenCreate(false)} />
          </PopoverContent>
        </Popover>
        <Menu
          className="sm:hidden w-7 h-7 text-gray-500 cursor-pointer"
          onClick={() => setOpenMobile(true)}
        />
        <Popover>
          <PopoverTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-64 rounded-md p-0">
            <Account />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
