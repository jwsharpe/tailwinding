import React, { ReactElement } from "react";

interface Props {}

export default function Card({}: Props): ReactElement {
  return (
    <div className="bg-white md:flex rounded-lg overflow-hidden shadow-lg max-w-sm md:max-w-2xl ">
      <img
        className="md:max-w-sm"
        alt="Beautiful House"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn1.blog-media.zillowstatic.com%2F1%2Fpool-c22cf2.jpg&f=1&nofb=1"
      />
      <div className=" p-4">
        <div className="text-gray-500">
          <span className="text-blue-600 font-semibold">Beautiful House</span> -
          $5000
        </div>
        <p className="text-gray-800">
          Cute description of the beautiful house. The cute house is a beautiful
          house that is cute. Cute description of the beautiful house. The cute
          house is a beautiful house that is cute.
        </p>
      </div>
    </div>
  );
}
