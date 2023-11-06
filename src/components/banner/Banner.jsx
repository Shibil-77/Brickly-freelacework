import React from "react";

const Banner = () => {
  return (
    <div className="lg:flex w-full h-[500px]">
      <div className="lg:w-6/12 w-full h-2/4 bg-primary ">
        <div className="flex  justify-center items-center">
          <h1 className="text-secondary ">Hello world</h1>
        </div>
      </div>
      <div className="lg:w-6/12 w-full h-2/4  bg-secondary"></div>
    </div>
  );
};

export default Banner;
