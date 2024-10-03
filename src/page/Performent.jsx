import React, { useState } from "react";

const Performent = () => {
  const [state, setState] = useState(false);
  const [tab, checkTab] = useState(false);
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-md mx-auto  bg-white h-screen rounded-xl shadow-md overflow-hidden ">
          <div className="p-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500">9:41</span>
              <div className="flex space-x-1">
                <i className="fas fa-signal text-gray-500" />
                <i className="fas fa-wifi text-gray-500" />
                <i className="fas fa-battery-full text-gray-500" />
              </div>
            </div>
            <p onClick={() => setState(!state)} className="font-bold text-lg">
              Performance
            </p>
            <div className="mt-4">
              <div className="flex items-center justify-center ">
                <div className="flex items-center bg-gray-50 rounded-full p-1 shadow-md">
                  <div className="flex items-center justify-center w-48 h-12 bg-white rounded-full text-green-600 font-semibold">
                    3D Model
                  </div>
                  <div className="flex items-center justify-center w-48 h-12 text-gray-600 font-semibold">
                    Dashboard
                  </div>
                </div>
              </div>

              <div className="relative mt-4">
                {state && (
                  <div className="absolute top-0 left-0 right-0 bg-red-100 text-red-500 p-2 rounded-lg flex items-center space-x-2">
                    <i className="fas fa-exclamation-circle" />
                    <div>
                      <p className="font-semibold">Light Bulb 1</p>
                      <p className="text-sm">
                        Low efficiency. Click for more details
                      </p>
                    </div>
                    <i className="fas fa-times ml-auto" />
                  </div>
                )}{" "}
                <img
                  alt="3D model of a room with various indicators"
                  className="w-full mt-12"
                  height={200}
                  src="/before.png"
                  width={300}
                />
              </div>
            </div>
            {state && (
              <div className="mt-4 text-center">
                <div className="flex justify-center items-center space-x-2">
                  <i className="fas fa-lightbulb text-2xl" />
                  <p className="font-semibold">Light Bulb 1</p>
                </div>
                <div className="mt-2">
                  <p className="text-4xl font-semibold">
                    40
                    <span className="text-lg">Kwh</span>
                  </p>
                  <p className="text-sm text-orange-500">+ 2.6%</p>
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-semibold">S$ 3.8</p>
                </div>
                <div className="mt-2">
                  <div className="h-2 bg-gray-300 rounded-full">
                    <div
                      className="h-2 bg-red-500 rounded-full"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md">
          <div className="flex justify-around py-2">
            <button className="flex flex-col items-center text-gray-500">
              <i className="fas fa-home text-xl" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center text-green-500">
              <i className="fas fa-chart-bar text-xl" />
              <span className="text-xs">Statistics</span>
            </button>
            <button className="flex flex-col items-center text-gray-500">
              <i className="fas fa-star text-xl" />
              <span className="text-xs">Retrofitting</span>
            </button>
            <button className="flex flex-col items-center text-gray-500">
              <i className="fas fa-cog text-xl" />
              <span className="text-xs">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performent;

{
  /* <body class="bg-gray-100 flex justify-center items-center min-h-screen">
  <div class="bg-white rounded-lg shadow-lg p-6 w-96">
    <div class="flex justify-between items-center mb-6">
      <button class="text-gray-500 font-semibold">3D Model</button>
      <button class="text-green-500 font-semibold">Dashboard</button>
    </div>
    <div class="flex justify-center mb-6">
      <img
        alt="Pie chart showing energy consumption"
        class="w-48 h-48"
        height="200"
        src="https://storage.googleapis.com/a1aa/image/xKrt7hT4QAI1O9reKBeyCkNC8MChFKiQD0rWyoFM0tkcqIjTA.jpg"
        width="200"
      />
    </div>
    <div class="space-y-4">
      <div class="bg-white rounded-lg shadow p-4 flex items-center justify-between">
        <div class="flex items-center">
          <i class="fas fa-wind text-2xl"></i>
          <div class="ml-4">
            <div class="text-gray-500">AC_1 - Living Room</div>
            <div class="text-2xl font-bold">
              24
              <span class="text-sm">Kwh</span>
            </div>
            <div class="text-sm text-green-500">+ 2.6%</div>
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-700">S$ 3.8</div>
      </div>
      <div class="bg-white rounded-lg shadow p-4 flex items-center justify-between">
        <div class="flex items-center">
          <i class="fas fa-wind text-2xl"></i>
          <div class="ml-4">
            <div class="text-gray-500">AC_2 - Bedroom</div>
            <div class="text-2xl font-bold">
              43
              <span class="text-sm">Kwh</span>
            </div>
            <div class="text-sm text-red-500">+ 7.2%</div>
          </div>
        </div>
        <div class="flex items-center">
          <div class="text-2xl font-bold text-gray-700">S$ 4.7</div>
          <i class="fas fa-exclamation-circle text-red-500 ml-2"></i>
        </div>
      </div>
      <div class="bg-white rounded-lg shadow p-4 flex items-center justify-between">
        <div class="flex items-center">
          <i class="fas fa-wind text-2xl"></i>
          <div class="ml-4">
            <div class="text-gray-500">Refrigerator</div>
            <div class="text-2xl font-bold">
              40
              <span class="text-sm">Kwh</span>
            </div>
            <div class="text-sm text-green-500">+ 2.6%</div>
          </div>
        </div>
        <div class="text-2xl font-bold text-gray-700">S$ 3.8</div>
      </div>
    </div>
  </div>
</body>; */
}
