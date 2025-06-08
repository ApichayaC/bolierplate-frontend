import { ArrowUp } from "lucide-react";
import React from "react";

const HomeContent = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-40 space-y-4">
      <p className="text-6xl font-bold text-primary">Welcome to</p>
      <p className="text-6xl font-extrabold text-primary/60 uppercase tracking-widest">
        Back Office
      </p>
      <div className="h-44 w-44 bg-primary rounded-2xl flex items-center justify-center mt-4">
        <ArrowUp className="h-40 w-40 text-white" strokeWidth={2.75} />
      </div>
    </div>
  );
};

export default HomeContent;
