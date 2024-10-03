import React from "react";

const Search = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-md mx-auto bg-white">
          {/* Header */}
          <div className="flex justify-between items-center p-4">
            <div className="text-lg font-semibold">9:41</div>
            <div className="flex space-x-2">
              <i className="fas fa-signal" />
              <i className="fas fa-wifi" />
              <i className="fas fa-battery-full" />
            </div>
          </div>
          {/* Search Bar */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                className="w-full p-3 pl-10 rounded-full bg-gray-100"
                placeholder="Air Conditioner"
              />
              <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {/* Sort and Filter */}
          <div className="flex justify-between px-4 py-2">
            <button className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2">
              <i className="fas fa-sort" />
              <span>Sort</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2">
              <i className="fas fa-filter" />
              <span>Filter</span>
              <span className="bg-green-500 text-white rounded-full px-2">
                2
              </span>
            </button>
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4 p-4">
            <div className="border-2 border-black rounded-lg overflow-hidden">
              <div className="bg-green-300 h-24 flex items-center justify-center">
                <i className="fas fa-image text-2xl text-white" />
              </div>
              <div className="p-2">
                <div>AC1</div>
                <div className="font-bold">S$ 12.00</div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-300 h-24 flex items-center justify-center">
                <i className="fas fa-image text-2xl text-white" />
              </div>
              <div className="p-2">
                <div>AC2</div>
                <div className="font-bold">S$ 15.00</div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-300 h-24 flex items-center justify-center">
                <i className="fas fa-image text-2xl text-white" />
              </div>
              <div className="p-2">
                <div>AC3</div>
                <div className="font-bold">S$ 15.00</div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-300 h-24 flex items-center justify-center">
                <i className="fas fa-image text-2xl text-white" />
              </div>
              <div className="p-2">
                <div>AC4</div>
                <div className="font-bold">S$ 12.00</div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-300 h-24 flex items-center justify-center">
                <i className="fas fa-image text-2xl text-white" />
              </div>
              <div className="p-2">
                <div>AC5</div>
                <div className="font-bold">S$ 12.00</div>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-green-300 h-24 flex items-center justify-center">
                <i className="fas fa-image text-2xl text-white" />
              </div>
              <div className="p-2">
                <div>AC6</div>
                <div className="font-bold">S$ 15.00</div>
              </div>
            </div>
          </div>
          {/* Bottom Navigation */}
          <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
            <div className="flex justify-around py-2">
              <div className="flex flex-col items-center">
                <i className="fas fa-home text-xl" />
                <span className="text-xs">Home</span>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-chart-bar text-xl" />
                <span className="text-xs">Statistics</span>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-star text-xl text-green-500" />
                <span className="text-xs text-green-500">Retrofitting</span>
              </div>
              <div className="flex flex-col items-center">
                <i className="fas fa-cog text-xl" />
                <span className="text-xs">Settings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
