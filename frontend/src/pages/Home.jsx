import React from "react";
import { WorkoutsForm, WorkoutsSection } from "../componentsRoute";

const Home = () => {
  // console.log("rendered");
  return (
    <div className="font-medium text-xl flex items-center max-md:flex-col-reverse md:flex-row md:items-start md:justify-between md: px-[5%] py-[5%]">
      <WorkoutsSection />
      <WorkoutsForm />
    </div>
  );
};

export default Home;
