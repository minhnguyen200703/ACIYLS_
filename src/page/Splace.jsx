import React from "react";

const Splace = () => {
  return (
    <div className="w-[500px]  flex justify-center mx-auto">
      {" "}
      <div
        style={{
          backgroundImage: "linear-gradient(to bottom, #AADE9C, #49B02D)",
        }}
        className="w-full"
      >
        <div className="flex justify-between  items-center h-[50px] px-5">
          <span className="text-gray-500">9:41</span>
          <div className="flex space-x-1">
            <i className="fas fa-signal text-gray-500" />
            <i className="fas fa-wifi text-gray-500" />
            <i className="fas fa-battery-full text-gray-500" />
          </div>
        </div>
        <div className=" flex items-center  justify-center h-screen">
          <div className="text-center">
            <h1 className="text-white text-5xl font-bold mb-4">
              POWER
              <span className="font-light">Monitor</span>
            </h1>
            <p className="text-white text-lg mb-4">by THE GREEN PRINT</p>
            <img
              alt="The Green Print logo"
              className="mx-auto"
              height={100}
              src="/The_Gr.png"
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splace;
