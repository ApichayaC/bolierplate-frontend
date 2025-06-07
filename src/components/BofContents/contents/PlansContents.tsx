import React from "react";
import CreatePlans from "./components/CreatePlans";

const PlansContents = () => {
  return (
    <div>
      <p className="text-2xl font-bold text-primary leading-10">Plans</p>
      <div className="w-full flex flex-col items-center justify-center mt-40">
        <CreatePlans />
      </div>
    </div>
  );
};

export default PlansContents;
