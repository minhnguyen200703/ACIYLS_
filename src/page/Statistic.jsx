import React from "react";

const Statistic = () => {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-10">
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">9:41</div>
            <div className="flex space-x-2">
              <i className="fas fa-signal text-gray-500" />
              <i className="fas fa-wifi text-gray-500" />
              <i className="fas fa-battery-full text-gray-500" />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-lg font-bold text-start">Statistics</p>
            <div className="flex justify-around bg-gray-100 rounded-full p-1">
              <div className="bg-white text-green-500 font-semibold rounded-full px-4 py-1">
                Energy Consumed
              </div>
              <div className="text-gray-500 font-semibold px-4 py-1">
                Energy Wasted
              </div>
              <div className="text-gray-500 font-semibold px-4 py-1">
                Total Cost
              </div>
            </div>
            <div className="text-center mt-4">
              <div className="text-2xl font-semibold">30.276KWh</div>
              <div className="text-green-500 text-sm">▲ 2 131Wh (14%)</div>
            </div>
            <div className="flex justify-around mt-4 text-gray-500">
              <div>Day</div>
              <div>Week</div>
              <div className="text-green-500 border-b-2 border-green-500">
                Month
              </div>
              <div>All time</div>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <img
                alt="Graph showing energy consumption over months"
                height={150}
                src="/analitic.png"
                className="block"
                width={300}
              />
            </div>
            <div className="flex items-center gap-2 justify-center mt-4">
              {/* <input className="mr-2" id="solar-power" type="checkbox" /> */}
              <img src="/checkbox.png" alt="" />
              <label className="text-gray-500" htmlFor="solar-power">
                Solar power
              </label>
            </div>
            <div className="flex justify-around mt-4">
              <div className="text-center rounded-lg border border-[#ccc] p-3">
                <div className="text-lg font-semibold">150KWh</div>
                <div className="text-gray-500 text-sm">Today</div>
              </div>
              <div className="text-center rounded-lg border border-[#ccc] p-3">
                <div className="text-lg font-semibold">165KWh</div>
                <div className="text-gray-500 text-sm">This month</div>
              </div>
              <div className="text-center rounded-lg border border-[#ccc] p-3">
                <div className="text-lg font-semibold">398KWh</div>
                <div className="text-gray-500 text-sm">All time</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around bg-white p-4 border-t">
          <div className="text-center">
            <i className="fas fa-home text-gray-500" />
            <div className="text-xs text-gray-500">Home</div>
          </div>
          <div className="text-center">
            <i className="fas fa-chart-bar text-green-500" />
            <div className="text-xs text-green-500">Statistics</div>
          </div>
          <div className="text-center">
            <i className="fas fa-star text-gray-500" />
            <div className="text-xs text-gray-500">Retrofitting</div>
          </div>
          <div className="text-center">
            <i className="fas fa-cog text-gray-500" />
            <div className="text-xs text-gray-500">Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
