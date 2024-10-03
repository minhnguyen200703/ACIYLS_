import React from "react";

const PersonalPlanner = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-md mx-auto p-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">9:41</div>
            <div className="flex space-x-2">
              <i className="fas fa-signal text-gray-500" />
              <i className="fas fa-wifi text-gray-500" />
              <i className="fas fa-battery-full text-gray-500" />
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-2xl font-bold">Hi Andrew</h1>
            <p className="text-gray-500">Thursday 3 Oct, 2024</p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold">Planner</h2>
            <p className="mt-4 font-bold">Your Budget for the month</p>
            <input
              type="text"
              defaultValue="300$$"
              className="w-full mt-2 p-2 border-2 shadow-2xl border-blue-500 rounded-lg"
            />
            <p className="mt-2 text-gray-500">
              Your last month budget is 300$$.
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <p className="font-bold">Plan 1</p>
              <p className="text-2xl font-bold">289$$</p>
              <p className="text-gray-200 pt-3 text-sm">
                * The plan will be tailored base on the customer's usage history
              </p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <p className="font-bold">Plan 2</p>
              <p className="text-2xl font-bold">297$$</p>
              <p className="text-gray-200 pt-3 text-sm">
                * The plan will be tailored base on the customer's usage history
              </p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <p className="font-bold">Plan 3</p>
              <p className="text-2xl font-bold">300$$</p>
              <p className="text-gray-200 pt-3 text-sm">
                * The plan will be tailored base on the customer's usage history
              </p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <p className="font-bold">Plan 3</p>
              <p className="text-2xl font-bold">268$$</p>
              <p className="text-gray-200 pt-3 text-sm">
                * The plan will be tailored base on the customer's usage history
              </p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
          <div className="flex justify-around py-2">
            <div className="text-center">
              <i className="fas fa-home text-green-500" />
              <p className="text-xs text-green-500">Home</p>
            </div>
            <div className="text-center">
              <i className="fas fa-chart-bar text-gray-500" />
              <p className="text-xs text-gray-500">Statistics</p>
            </div>
            <div className="text-center">
              <i className="fas fa-bell text-gray-500" />
              <p className="text-xs text-gray-500">Retrofitting</p>
            </div>
            <div className="text-center">
              <i className="fas fa-cog text-gray-500" />
              <p className="text-xs text-gray-500">Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPlanner;
