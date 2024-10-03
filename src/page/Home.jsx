import React, { useState } from "react";

const Home = () => {
  const [stateHome, setStateHome] = useState(false);
  return (
    <div className="bg-white p-4 h-screen">
      {stateHome && (
        <div className="absolute top-[17%] left-[40%]">
          <div className="flex items-center justify-center  bg-gray-100">
            <div className="flex items-center bg-pink-100 p-4 rounded-lg shadow-md">
              <div className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                <i className="fas fa-exclamation text-white"></i>
              </div>
              <div className="ml-4">
                <div className="font-bold text-black">10:40 Oct 3</div>
                <div className="text-gray-700">
                  You are running out of electricity!
                </div>
              </div>
              <button className="ml-auto text-gray-500 hover:text-gray-700">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm text-gray-500">Hi Andrew</p>
              <p className="text-xs text-gray-400">Thursday 3 Oct, 2024</p>
            </div>
            <div className="flex space-x-2">
              <i className="fas fa-signal text-gray-500" />
              <i className="fas fa-wifi text-gray-500" />
              <i className="fas fa-battery-full text-gray-500" />
            </div>
          </div>
          <div
            onClick={() => setStateHome(!stateHome)}
            className="bg-white p-4 rounded-lg shadow-2xl mb-4"
          >
            <div className="flex items-center mb-2">
              {!stateHome ? (
                <img src="/grProcess.png" alt="" />
              ) : (
                <img src="/redProcess.png" alt="" />
              )}
              <p className="text-2xl font-semibold ml-2">
                {!stateHome ? "92.276KWh" : "2592.276KWh"}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm  text-gray-500">
                {!stateHome
                  ? "Total Power Usage this Month"
                  : "Electricity Usage"}
              </p>
              <p className="text-sm text-orange-500 mt-2">
                {!stateHome ? " 13%" : "80%"}
              </p>
            </div>
            <div>
              {!stateHome ? (
                <img src="/green.png" alt="" />
              ) : (
                <img src="/reds.png" alt="" />
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-2xl">
              <div className="flex items-center mb-2">
                <i className="fas fa-lightbulb text-gray-500" />
                <p className="text-lg font-semibold ml-2">24 Kwh</p>
              </div>
              <p className="text-sm text-gray-500">24 hours</p>
              <p className="text-sm text-orange-500 mt-2">2.6%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-2xl">
              <div className="flex items-center mb-2">
                <i className="fas fa-exclamation-circle text-red-500" />
                <p className="text-lg font-semibold ml-2">2.4 Kwh</p>
              </div>
              <p className="text-sm text-gray-500">Wasted</p>
              <p className="text-sm text-red-500 mt-2">48%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-2xl">
              <div className="flex items-center mb-2">
                <i className="fas fa-dollar-sign text-gray-500" />
                <p className="text-lg font-semibold ml-2">6.98$</p>
              </div>
              <p className="text-sm text-gray-500">Cost</p>
              <p className="text-sm text-orange-500 mt-2">12%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-2xl">
              <div className="flex items-center mb-2">
                <i className="fas fa-leaf text-gray-500" />
                <p className="text-lg font-semibold ml-2">249g</p>
              </div>
              <p className="text-sm text-gray-500">CO2 Created</p>
              <p className="text-sm text-green-500 mt-2">24%</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-2xl mb-4 h-[500px]">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-500">Electricity used</p>
              <p className="text-sm text-green-500">Live</p>
            </div>
            <p className="text-2xl font-semibold mb-2">24.21KWh</p>
            <div className="h-32 flex justify-center items-center mt-20">
              <img
                alt="Graph showing electricity usage over time"
                height={100}
                src="Frame.png"
                className="block"
                width={300}
              />
            </div>
          </div>
          <div className="flex justify-around bg-white p-4 rounded-lg shadow-2xl fixed bottom-0 left-0 right-0">
            <div className="flex flex-col items-center">
              <i className="fas fa-home text-green-500" />
              <p className="text-xs text-green-500">Home</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-chart-bar text-gray-500" />
              <p className="text-xs text-gray-500">Statistics</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-tools text-gray-500" />
              <p className="text-xs text-gray-500">Retrofitting</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-cog text-gray-500" />
              <p className="text-xs text-gray-500">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
