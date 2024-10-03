import React from "react";

const ApartmentResults = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-md mx-auto bg-white">
          <div className="flex justify-between items-center mb-6 mx-6">
            <span className="text-gray-500">9:41</span>
            <div className="flex space-x-1">
              <i className="fas fa-signal text-gray-500" />
              <i className="fas fa-wifi text-gray-500" />
              <i className="fas fa-battery-full text-gray-500" />
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center bg-gray-200 rounded-full px-4 py-2">
              <i className="fas fa-search text-gray-500"></i>
              <input
                className="bg-gray-200 ml-2 outline-none w-full"
                placeholder="Air Conditioner"
                type="text"
              />
            </div>
          </div>
          <div className="flex justify-between px-4 py-2">
            <button className="flex items-center bg-gray-200 rounded-full px-4 py-2">
              <i className="fas fa-sort text-gray-500"></i>
              <span className="ml-2">Sort</span>
            </button>
            <button className="flex items-center bg-gray-200 rounded-full px-4 py-2">
              <i className="fas fa-filter text-gray-500"></i>
              <span className="ml-2">Filter</span>
              <span className="ml-2 bg-green-500 text-white rounded-full px-2">
                4
              </span>
            </button>
          </div>
          <div className="px-4 py-2">
            <img
              alt="Map showing various locations with price tags"
              className="w-full rounded-lg"
              height={200}
              src="/image.png"
              width={400}
            />
          </div>
          <div className="px-4 py-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                alt="Image of the rental property"
                className="w-full h-40 object-cover"
                height={200}
                src="/Imagev2.png"
                width={400}
              />
              <div className="p-4">
                <h3 className="text-gray-800 font-semibold">
                  Rentals in Singapore - Jasmine Suite @ Garden by the Bay
                </h3>
                <p className="text-gray-600">S$ 80.00/night</p>
                <p className="text-gray-400 text-sm">*Certified by MyPower</p>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div className="flex justify-around py-2">
              <a className="flex flex-col items-center text-gray-600" href="#">
                <i className="fas fa-home text-xl"></i>
                <span className="text-xs">Home</span>
              </a>
              <a className="flex flex-col items-center text-gray-600" href="#">
                <i className="fas fa-chart-bar text-xl"></i>
                <span className="text-xs">Statistics</span>
              </a>
              <a className="flex flex-col items-center text-green-500" href="#">
                <i className="fas fa-tools text-xl"></i>
                <span className="text-xs">Retrofitting</span>
              </a>
              <a className="flex flex-col items-center text-gray-600" href="#">
                <i className="fas fa-cog text-xl"></i>
                <span className="text-xs">Settings</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentResults;
