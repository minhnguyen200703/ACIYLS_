import React from "react";

const ProductPage = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden ">
          <div className="flex justify-between items-center mb-6 mx-6">
            <span className="text-gray-500">9:41</span>
            <div className="flex space-x-1">
              <i className="fas fa-signal text-gray-500" />
              <i className="fas fa-wifi text-gray-500" />
              <i className="fas fa-battery-full text-gray-500" />
            </div>
          </div>
          <div className="relative">
            <img
              alt="A modern house with a green landscape and city skyline in the background"
              className="w-full h-[350px] "
              height={400}
              src="/product.png"
              width={600}
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold">Rentals in Singapore</h2>
            <div className="flex items-center text-green-600">
              <span className="text-lg font-semibold">S$ 80.00</span>
              <i className="fas fa-leaf ml-2" />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Certified by
              <span className="text-green-600 font-semibold">MyPower</span>
              since 2022
            </p>
            <p className="text-sm text-gray-500 mt-2">Based on the reviews:</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              <li>Lorem ipsum</li>
              <li>It is implemented with high-end and sustainable devices</li>
              <li>
                Tourists can easily track the CO2 emissions and electricity
                usage of the devices in the house
              </li>
            </ul>
            <h3 className="text-lg font-bold mt-4">Facilities</h3>
            <div className="grid grid-cols-4 gap-4 text-center text-sm text-gray-700 mt-2">
              <div>
                <i className="fas fa-swimming-pool text-2xl" />
                <p>Infinity Pool</p>
              </div>
              <div>
                <i className="fas fa-sun text-2xl" />
                <p>Sunset view</p>
              </div>
              <div>
                <i className="fas fa-dumbbell text-2xl" />
                <p>Gym center</p>
              </div>
              <div>
                <i className="fas fa-laptop text-2xl" />
                <p>Work station</p>
              </div>
              <div>
                <i className="fas fa-bicycle text-2xl" />
                <p>Free Bike</p>
              </div>
              <div>
                <i className="fas fa-shuttle-van text-2xl" />
                <p>Airport shuttle</p>
              </div>
              <div>
                <i className="fas fa-baby text-2xl" />
                <p>Baby ground</p>
              </div>
              <div>
                <i className="fas fa-door-open text-2xl" />
                <p>Meeting room</p>
              </div>
            </div>
            <h3 className="text-lg font-bold mt-4">Review</h3>
            <div className="mt-2">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">
                  Yolanda, 2024 - Rented in Jan 2024
                </span>
                <br />
                "I recently had the pleasure of staying at Home in Singapore and
                I must say that the experience is phenomenal, especially the
                sustainability aspects!"
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">
                  Kasha, 2024 - Rented in June 2024
                </span>
                <br />
                "I recently had the pleasure of staying at Home in Singapore and
                I must say that the experience is phenomenal, especially the
                sustainability aspects!"
              </p>
            </div>
            <button className="w-full bg-green-600 text-white text-lg font-semibold py-2 rounded-lg mt-4">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
