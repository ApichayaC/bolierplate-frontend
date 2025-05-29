import React from "react";
import { SearchIcon, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}

const Search = ({ value, placeholder, setValue }: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trimStart().replace(/\s+/g, " ");
    setValue(value);
  };
  return (
    <div className="hidden sm:flex flex-row items-center border-2 border-gray-200 rounded-md h-10 w-[250px] focus-within:border-gray-400 relative">
      <SearchIcon className="h-5 w-5 text-gray-400 mx-2" />
      <Input
        placeholder={placeholder}
        className="border-none shadow-none focus-visible:ring-0 text-sm p-0 pr-8 w-full"
        value={value}
        onChange={handleChange}
      />
      {value && (
        <X
          className="h-5 w-5 text-gray-400 cursor-pointer absolute top-1/2 right-2 transform -translate-y-1/2"
          onClick={() => setValue("")}
        />
      )}
    </div>
  );
};

export default Search;
