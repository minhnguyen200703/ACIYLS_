import React from "react";

const Homev3 = () => {
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[420px]">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-500">9:41</span>
            <div className="flex space-x-1">
              <i className="fas fa-signal text-gray-500" />
              <i className="fas fa-wifi text-gray-500" />
              <i className="fas fa-battery-full text-gray-500" />
            </div>
          </div>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Hi Andrew</h1>
            <p className="text-gray-500">Thursday 3 Oct, 2024</p>
          </div>
          <div className="flex justify-center mb-6">
            <img
              alt="Green key with a tag that says 'RENT'"
              className="h-24"
              height={100}
              src="https://storage.googleapis.com/a1aa/image/3GSS2HLiZtL1GVsfjt0l3Qvpfy8qz4bGvQJzmOBfDmy98OGnA.jpg"
              width={100}
            />
          </div>
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold">You are looking for...</h2>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span>Type of rentals</span>
              <i className="fas fa-chevron-down text-gray-500" />
            </div>
            <p className="text-gray-500 text-sm">Rental duration</p>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span>Price Range</span>
              <i className="fas fa-chevron-down text-gray-500" />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span>How many</span>
              <i className="fas fa-chevron-down text-gray-500" />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span>Target</span>
              <span className="bg-green-500 text-white rounded-full px-2">
                1
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-500 text-white rounded-full px-2">
                1
              </span>
              <span className="bg-green-200 text-green-700 rounded-full px-2">
                ENERGY
              </span>
              <span className="bg-green-200 text-green-700 rounded-full px-2">
                CHEAP
              </span>
              <span className="bg-green-200 text-green-700 rounded-full px-2">
                BIG ROOM
              </span>
              <span className="bg-green-200 text-green-700 rounded-full px-2">
                SMALL ROOM
              </span>
              <span className="bg-green-200 text-green-700 rounded-full px-2">
                DURABLE
              </span>
              <span className="bg-green-500 text-white rounded-full px-2">
                EFFICIENCY
              </span>
              <span className="bg-green-200 text-green-700 rounded-full px-2">
                SILENT
              </span>
              <span className="bg-green-200 text-green-700 rounded-full px-2">
                HEALTHY
              </span>
              <span className="bg-green-200 text-green-700 rounded-full px-2">
                COST-SAVING
              </span>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span>From</span>
              <i className="fas fa-chevron-down text-gray-500" />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span>To</span>
              <i className="fas fa-chevron-down text-gray-500" />
            </div>
          </div>
          <div className="text-center">
            <button className="bg-green-500 text-white py-2 px-4 rounded-full w-full">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homev3;
