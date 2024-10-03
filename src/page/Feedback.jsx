import React from "react";

const Feedback = () => {
  return (
    <div>
      <div className="bg-gray-100 flex justify-center items-center h-screen">
        <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-500">9:41</span>
            <div className="flex space-x-1">
              <i className="fas fa-signal text-gray-500" />
              <i className="fas fa-wifi text-gray-500" />
              <i className="fas fa-battery-full text-gray-500" />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <i className="fas fa-chevron-left text-green-600" />
            <h1 className="text-center text-lg font-semibold">Feedback</h1>
            <div className="w-4" />
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold">
              How would you rate this product?
            </h2>
            <p className="text-gray-500">What is your overall experience?</p>
            <div className="flex items-center mt-2">
              <i className="fas fa-star text-green-600 text-xl" />
              <i className="fas fa-star text-green-600 text-xl" />
              <i className="fas fa-star text-green-600 text-xl" />
              <i className="fas fa-star text-green-600 text-xl" />
              <i className="fas fa-star text-gray-300 text-xl" />
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">
              What did you like about it?
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                EASY TO USE
              </span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                COMPLETE
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                HELPFUL
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                CONVENIENT
              </span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                LOOKS GOOD
              </span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">What are the keywords?</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                NOT INTERACTIVE
              </span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                ONLY IN ENGLISH
              </span>
              <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                COMPLEX
              </span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Anything else?</h3>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 mt-2"
              rows={4}
              placeholder="Tell us everything."
              defaultValue={""}
            />
          </div>
          <button className="w-full bg-green-600 text-white py-3 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
