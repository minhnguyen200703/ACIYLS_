import React from "react";

const ProductPagev2 = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-500">9:41</span>
            <div className="flex space-x-1">
              <i className="fas fa-signal text-gray-500" />
              <i className="fas fa-wifi text-gray-500" />
              <i className="fas fa-battery-full text-gray-500" />
            </div>
          </div>
          <div className="relative">
            <img
              alt="Image of a Daikin air conditioner"
              className="w-full"
              height={300}
              src="/dieuhoa.png"
              width={600}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold">DaiKin AC</h2>
            <div className="flex items-center justify-between space-x-2">
              <div className="flex items-center">
                <i className="fas fa-star text-green-500" />
                <i className="fas fa-star text-green-500" />
                <i className="fas fa-star text-green-500" />
                <i className="fas fa-star text-green-500" />
                <i className="fas fa-star text-gray-300" />
              </div>
              <div>
                <i className="fas fa-leaf text-green-500" />
              </div>
            </div>
            <p className="text-lg font-semibold mt-2">€ 120.00</p>
            <p className="mt-4 font-semibold">Base on the reviews:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>
                Easily track real-time energy usage and daily costs for your
                Daikin air conditioner.
              </li>
              <li>
                Receive personalized energy-saving tips and alerts to help
                reduce your energy costs.
              </li>
              <li>
                Compare your air conditioner's performance over time to see
                improvements with energy-efficient modes.
              </li>
            </ul>
            <h3 className="mt-6 font-semibold">Review</h3>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <strong>Yolanda, 2024 - Rented in Jan 2024</strong>
              </p>
              <p className="text-sm text-gray-600">
                “ I recently had the pleasure of staying at Home in Singapore
                and I must say that the experience is phenomenon, especially the
                sustainability aspects!
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">
                <strong>Kasha, 2024 - Rented in June 2024</strong>
              </p>
              <p className="text-sm text-gray-600">
                “ I recently had the pleasure of staying at Home in Singapore
                and I must say that the experience is phenomenon, especially the
                sustainability aspects!
              </p>
            </div>
          </div>
          <div className="p-4 bg-green-200 flex justify-center">
            <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
              +<span>Add to bag</span>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default ProductPagev2;
