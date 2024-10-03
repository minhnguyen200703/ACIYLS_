import React, { useState } from "react";

const PersonalPlannerV2 = () => {
  const [state, checkState] = useState(false);
  return (
    <div>
      <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white w-80 rounded-2xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">9:41</div>
            <div className="flex space-x-2">
              <i className="fas fa-signal text-gray-500" />
              <i className="fas fa-wifi text-gray-500" />
              <i className="fas fa-battery-full text-gray-500" />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div onClick={() => checkState(!state)}>
              <p className="text-lg font-semibold">Hi Andrew</p>
              <p className="text-sm text-gray-500">Thursday 3 Oct, 2024</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold">Plan {!state ? "A" : "B"} </p>
            <p className="text-2xl font-semibold">
              {!state ? "289" : "297"} S$
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <img
              alt="Pie chart showing energy consumption"
              className="w-24 h-24"
              height={100}
              src="/chart-graphic.png"
              width={100}
            />
          </div>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">Refrigerator</p>
                <p className="text-sm text-gray-500">24 hours / day</p>
              </div>
              <input
                style={{ accentColor: "green" }}
                className="w-full"
                max={24}
                min={0}
                type="range"
                defaultValue={24}
              />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">AC_1</p>
                <p className="text-sm text-gray-500">7 hours / day</p>
              </div>
              <input
                style={{ accentColor: "green" }}
                className="w-full"
                max={24}
                min={0}
                type="range"
                defaultValue={7}
              />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">AC_2</p>
                <p className="text-sm text-gray-500">5 hours / day</p>
              </div>
              <input
                className="w-full"
                max={24}
                style={{ accentColor: "green" }}
                min={0}
                type="range"
                defaultValue={5}
              />
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold">Washing Machine</p>
                <p className="text-sm text-gray-500">0.5 hours / day</p>
              </div>
              <input
                className="w-full"
                max={24}
                min={0}
                style={{ accentColor: "green" }}
                type="range"
                defaultValue="0.5"
              />
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full bg-green-500 text-white py-3 rounded-full font-semibold">
              Confirm Plan
            </button>
          </div>
        </div>
        <div className="fixed bottom-0 w-full bg-white shadow-lg">
          <div className="flex justify-around py-2">
            <div className="flex flex-col items-center text-green-500">
              <i className="fas fa-home text-xl" />
              <p className="text-xs">Home</p>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <i className="fas fa-chart-bar text-xl" />
              <p className="text-xs">Statistics</p>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <i className="fas fa-tools text-xl" />
              <p className="text-xs">Retrofitting</p>
            </div>
            <div className="flex flex-col items-center text-gray-400">
              <i className="fas fa-cog text-xl" />
              <p className="text-xs">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPlannerV2;
