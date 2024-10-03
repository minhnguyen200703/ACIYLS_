import React from "react";

const Filter = () => {
  return (
    <div>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white w-full max-w-md p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-500">9:41</span>
            <div className="flex space-x-1">
              <i className="fas fa-signal text-gray-500" />
              <i className="fas fa-wifi text-gray-500" />
              <i className="fas fa-battery-full text-gray-500" />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <button className="text-green-600">Cancel</button>
            <h1 className="text-black font-semibold">Filter</h1>
            <button className="text-green-600">Clear All</button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-black">Category</span>
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                1
              </span>
            </div>
            <div className="border-t border-gray-300" />
            <div className="flex justify-between items-center">
              <span className="text-black">Price Range</span>
              <i className="fas fa-chevron-down text-gray-500" />
            </div>
            <div className="border-t border-gray-300" />
            <div className="flex justify-between items-center">
              <span className="text-black">Target</span>
              <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center">
                1
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
                ENERGY
              </span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
                CHEAP
              </span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
                BIG ROOM
              </span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
                SMALL ROOM
              </span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
                DURABLE
              </span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
                EFFICIENCY
              </span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
                SILENT
              </span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
                HEALTHY
              </span>
              <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">
                COST-SAVING
              </span>
            </div>
            <div className="border-t border-gray-300" />
            <div className="flex justify-between items-center">
              <span className="text-black">Size</span>
              <i className="fas fa-chevron-down text-gray-500" />
            </div>
            <div className="border-t border-gray-300" />
            <div className="flex justify-between items-center">
              <span className="text-black">Customer Review</span>
              <i className="fas fa-chevron-down text-gray-500" />
            </div>
          </div>
          <div className="mt-6">
            <button className="w-full bg-green-600 text-white py-2 rounded-lg">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
