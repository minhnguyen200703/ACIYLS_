import React, { useState } from "react";

const Performencev2 = () => {
  const [state, checkState] = useState(false);

  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          {state && (
            <div className="absolute top-28">
              <div className="bg-pink-200 p-4 rounded-lg max-w-sm shadow-md">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="font-bold text-lg">Light Bulb 1</h1>
                    <p className="text-gray-700">Low efficiency.</p>
                    <p className="text-gray-700">
                      You can save up to S$ 5 if you bought this LED
                      <span className="font-bold">
                        Feit Electric Enhance 60W!
                      </span>
                    </p>
                  </div>
                  <button className="text-gray-700">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500">9:41</span>
              <div className="flex space-x-1">
                <i className="fas fa-signal text-gray-500" />
                <i className="fas fa-wifi text-gray-500" />
                <i className="fas fa-battery-full text-gray-500" />
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <div className="flex space-x-4 bg-gray-100 rounded-full p-1">
                <button className="px-4 py-2 bg-white rounded-full">
                  3D Model
                </button>
                <button
                  onClick={() => checkState(!state)}
                  className="px-4 py-2 text-gray-500"
                >
                  Dashboard
                </button>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="flex justify-center items-center space-x-2">
                <i className="fas fa-tv text-2xl" />
                <div className="text-lg font-semibold">AC_1 - Living Room</div>
              </div>

              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <div className="mt-2 text-4xl font-bold">
                    24<span className="text-xl">Kwh</span>
                  </div>
                  <div className="text-sm text-gray-500">+ 2.6%</div>
                </div>
                <div className="mt-2 text-2xl font-semibold">S$ 3.8</div>
              </div>
              <div className="mt-2 w-full">
                <div className="h-2 bg-gray-300 rounded-full">
                  <div
                    className="h-2 bg-blue-900 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-lg font-semibold">Statistic</div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-lightbulb text-2xl" />
                    <div className="text-lg font-semibold">24 hours</div>
                  </div>
                  <div className="mt-2 text-2xl font-bold">
                    24<span className="text-xl">Kwh</span>
                  </div>
                  <div className="text-sm text-gray-500">+ 2.6%</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-sync-alt text-2xl" />
                    <div className="text-lg font-semibold">Wasted</div>
                    <i className="fas fa-exclamation-circle text-red-500" />
                  </div>
                  <div className="mt-2 text-2xl font-bold">
                    2.4<span className="text-xl">Kwh</span>
                  </div>
                  <div className="text-sm text-red-500">+ 48%</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-dollar-sign text-2xl" />
                    <div className="text-lg font-semibold">Cost</div>
                  </div>
                  <div className="mt-2 text-2xl font-bold">
                    6.98<span className="text-xl">S$</span>
                  </div>
                  <div className="text-sm text-gray-500">+ 12%</div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-leaf text-2xl" />
                    <div className="text-lg font-semibold">CO2 Created</div>
                  </div>
                  <div className="mt-2 text-2xl font-bold">
                    249<span className="text-xl">g</span>
                  </div>
                  <div className="text-sm text-green-500">- 24%</div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-lg font-semibold">History</div>
              <div className="mt-2 flex justify-center">
                <div className="flex space-x-4 bg-gray-100 rounded-full p-1">
                  <button className="px-4 py-2 bg-white rounded-full">
                    Daily
                  </button>
                  <button className="px-4 py-2 text-gray-500">Weekly</button>
                  <button className="px-4 py-2 text-gray-500">Monthly</button>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-lg font-semibold">Electricity Used</div>
                <div className="mt-2 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    <div className="w-2 h-2 bg-gray-300 rounded-full" />
                  </div>
                  <i className="fas fa-info-circle text-green-500" />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">00:00</div>
                    <div className="text-sm text-gray-500">12:00</div>
                    <div className="text-sm text-gray-500">24:00</div>
                  </div>
                  <div className="mt-2 flex justify-between items-end">
                    <div className="w-4 h-16 bg-green-500 rounded-full" />
                    <div className="w-4 h-20 bg-green-500 rounded-full" />
                    <div className="w-4 h-24 bg-green-500 rounded-full" />
                    <div className="w-4 h-16 bg-green-500 rounded-full" />
                    <div className="w-4 h-20 bg-green-500 rounded-full" />
                    <div className="w-4 h-24 bg-green-500 rounded-full" />
                    <div className="w-4 h-16 bg-green-500 rounded-full" />
                    <div className="w-4 h-20 bg-green-500 rounded-full" />
                    <div className="w-4 h-24 bg-green-500 rounded-full" />
                    <div className="w-4 h-16 bg-green-500 rounded-full" />
                    <div className="w-4 h-20 bg-green-500 rounded-full" />
                    <div className="w-4 h-24 bg-green-500 rounded-full" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-lg font-semibold">Cost</div>
                  <div className="mt-2 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                      <div className="w-2 h-2 bg-gray-300 rounded-full" />
                    </div>
                    <i className="fas fa-info-circle text-green-500" />
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">00:00</div>
                      <div className="text-sm text-gray-500">12:00</div>
                      <div className="text-sm text-gray-500">24:00</div>
                    </div>
                    <div className="mt-2 flex justify-between items-end">
                      <div className="w-4 h-16 bg-green-500 rounded-full" />
                      <div className="w-4 h-20 bg-green-500 rounded-full" />
                      <div className="w-4 h-24 bg-green-500 rounded-full" />
                      <div className="w-4 h-16 bg-green-500 rounded-full" />
                      <div className="w-4 h-20 bg-green-500 rounded-full" />
                      <div className="w-4 h-24 bg-green-500 rounded-full" />
                      <div className="w-4 h-16 bg-green-500 rounded-full" />
                      <div className="w-4 h-20 bg-green-500 rounded-full" />
                      <div className="w-4 h-24 bg-green-500 rounded-full" />
                      <div className="w-4 h-16 bg-green-500 rounded-full" />
                      <div className="w-4 h-20 bg-green-500 rounded-full" />
                      <div className="w-4 h-24 bg-green-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-md">
              <div className="flex flex-col items-center">
                <i className="fas fa-home text-2xl text-gray-500" />
                <div className="text-sm text-gray-500">Home</div>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-chart-bar text-2xl text-green-500" />
                <div className="text-sm text-green-500">Statistics</div>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-star text-2xl text-gray-500" />
                <div className="text-sm text-gray-500">Retrofitting</div>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-cog text-2xl text-gray-500" />
                <div className="text-sm text-gray-500">Settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performencev2;
