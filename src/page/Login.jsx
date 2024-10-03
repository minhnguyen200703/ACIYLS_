import React from "react";

const Login = () => {
  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-between items-center mb-6 px-6">
            <span className="text-gray-500">9:41</span>
            <div className="flex space-x-1">
              <i className="fas fa-signal text-gray-500" />
              <i className="fas fa-wifi text-gray-500" />
              <i className="fas fa-battery-full text-gray-500" />
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-t-lg">
            <img
              alt="Illustration of a sustainable house with solar panels, wind turbines, and an electric car"
              className="w-full h-auto"
              height={200}
              src="/Maskgroup.png"
              width={400}
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Log In</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="phone-number"
                >
                  <i className="fas fa-phone-alt" />
                  <span className="ml-2">+65</span>
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  id="phone-number"
                  placeholder="Phone Number"
                  type="text"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="password"
                >
                  <i className="fas fa-lock" />
                  <span className="ml-2">Password</span>
                </label>
                <input
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  id="password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <a className="text-sm text-gray-500" href="#">
                  Forgot Password?
                </a>
              </div>
              <button className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-200">
                Log In
              </button>
            </form>
            <div className="flex justify-center items-center mt-6">
              <button className="bg-white border rounded-full p-2 mx-1">
                <img
                  alt="Google logo"
                  height={24}
                  src="https://storage.googleapis.com/a1aa/image/1YGzfsd8Ck2aUqqQBOh3QpU6hzVXwJ6hes6B2fuDbO5k3QGnA.jpg"
                  width={24}
                />
              </button>
              <button className="bg-white border rounded-full p-2 mx-1">
                <img
                  alt="Twitter logo"
                  height={24}
                  src="https://storage.googleapis.com/a1aa/image/z5ifYYdBCETPHyuo3y6Ng6wTsx5myDfWKLrIL9d0XW02bIjTA.jpg"
                  width={24}
                />
              </button>
              <button className="bg-white border rounded-full p-2 mx-1">
                <img
                  alt="Facebook logo"
                  height={24}
                  src="https://storage.googleapis.com/a1aa/image/f5cQovGsJpy2aCK9HVxC4mD5JupRpC9s7CshXMy7dea1bIjTA.jpg"
                  width={24}
                />
              </button>
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Don’t have an account?
                <a className="text-black font-semibold" href="#">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
