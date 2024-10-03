import React from "react";

const QrCode = () => {
  return (
    <div>
      <div className="bg-gray-100 h-screen flex items-center justify-center">
        {/* Overlay */}
        <div className="w-[350px] h-[700px] bg-black bg-opacity-80 shadow-lg rounded-lg relative">
          {/* Content Wrapper */}
          <div className="relative w-full h-full">
            {/* Status bar */}
            <div className="flex justify-between  items-center h-[50px] px-5">
              <span className="text-white font-bold">9:41</span>
              <div className="flex space-x-1">
                <i className="fas fa-signal text-white font-bold" />
                <i className="fas fa-wifi text-white font-bold" />
                <i className="fas fa-battery-full text-white font-bold" />
              </div>
            </div>
            {/* QR Code Section */}
            <div className="flex flex-col items-center justify-center mt-8">
              <p className="text-lg font-semibold text-white mb-4">
                Scan the QR barcode on the sensor
              </p>
              <div className="relative">
                <div className="  w-[200px] h-[200px] flex items-center justify-center">
                  {/* Placeholder for QR Code */}
                  <img
                    src="Group4.png"
                    alt="QR Code"
                    className="w-full h-full"
                  />
                </div>
                {/* QR Code Borders */}
              </div>
            </div>
            {/* Info Section */}
            <div className="mt-8 px-6 text-center">
              <div className="mb-2">
                <p className="text-gray-300 flex items-center justify-center">
                  <i className="fas fa-phone-alt mr-2" /> Solar Monitor
                </p>
              </div>
              <div className="mb-2">
                <p className="text-gray-300 flex items-center justify-center">
                  <i className="fas fa-map-marker-alt mr-2" /> Address
                </p>
              </div>
              <div>
                <p className="text-gray-300 flex items-center justify-center">
                  <i className="fas fa-wifi mr-2" /> Wi-fi Connection
                </p>
              </div>
            </div>
            {/* Verify Details Button */}
            <div className="flex flex-col items-center mt-8 px-6">
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold">
                Verify Details
              </button>
              <p className="mt-4 text-sm text-gray-300">
                Or{" "}
                <a href="#" className="text-green-600 font-semibold">
                  click here
                </a>{" "}
                to scan barcode to connect (available on inverter)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
