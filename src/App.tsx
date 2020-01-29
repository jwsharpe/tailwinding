import React from "react";

const App: React.FC = () => {
  return (
    <div className="mx-auto max-w-xl md:max-w-full px-8 py-12 ">
      <img
        className="rounded max-h-64 md:w-full md:max-h-cover md:object-cover md:object-center shadow-lg"
        src="./logo.jpeg"
      />
      <h1 className="mt-4 text-2xl md:text-8xl font-medium text-gray-900 ">
        Here's a beautiful logo!
      </h1>
      <p className="text-gray-700 md:text-xl">
        Loren ipsum text. This logo helps you find helpful things that you can
        do anywhere with anyone! Loren ipsum text. This logo helps you find
        helpful things that you can do anywhere with anyone!
      </p>
      <a
        href="#"
        className="text-sm uppercase font-semibold tracking-wider mt-4 inline-block px-5 py-3 bg-blue-600 shadow-lg rounded text-white"
      >
        Press your luck
      </a>
    </div>
  );
};

export default App;
