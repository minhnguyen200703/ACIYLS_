import React from "react";

const Homev2 = () => {
  return (
    <div>
      <div className="bg-gray-100 font-roboto flex items-center justify-center h-screen">
        <div className="bg-white w-80 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xs text-gray-500">9:41</span>
            <div className="flex space-x-1">
              <i className="fas fa-signal text-xs text-gray-500" />
              <i className="fas fa-wifi text-xs text-gray-500" />
              <i className="fas fa-battery-full text-xs text-gray-500" />
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-xl font-bold">Hi Andrew</h1>
            <p className="text-gray-400">Thursday 3 Oct, 2024</p>
          </div>
          <div className="flex flex-col items-center mb-6">
            <i className="fas fa-map-marker-alt text-6xl text-green-600 mb-2" />
            <p className="text-lg font-bold">You are at...</p>
          </div>
          <div className="mb-6">
            <input
              className="w-full border-2 border-blue-500 rounded-lg p-2 text-center text-gray-700"
              readOnly
              type="text"
              defaultValue="BCA Academy, 200 Braddell Rd, Singapore"
            />
          </div>
          <div className="mb-6">
            <img
              alt="Map showing the location of BCA Academy, 200 Braddell Rd, Singapore"
              className="w-full rounded-lg"
              height={200}
              src="https://storage.googleapis.com/a1aa/image/hs0VZNkjnNYUAZRJl1XijfD528ciUH13cDdI5Fqh0GfUaHjTA.jpg"
              width={300}
            />
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homev2;
