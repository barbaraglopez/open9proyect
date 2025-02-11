import React from "react";

const collectors = new Array(16).fill(null);

const TopCollectors = () => {
  return (
    <div className="bg-cover bg-center py-16 text-center text-white bg-[#161616]">
      <h2 className="text-3xl font-bold mb-20">Top Collector Buys Today</h2>

      <div className="max-w-5xl mx-auto space-y-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:hidden">
          {collectors.map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#262626] rounded-full px-5 py-2"
            >
              <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
              <span className="mt-2 text-sm font-medium">
                Collector {index + 1}
              </span>
            </div>
          ))}
        </div>
        <div className="hidden lg:flex flex-col gap-6">
          <div className="flex justify-center gap-6 sm:gap-12 flex-wrap lg:flex-nowrap">
            {collectors.slice(0, 8).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#262626] rounded-full px-5 py-2 lg:flex-row"
              >
                <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
                <span className="mt-2 sm:mt-0 sm:ml-3 text-sm font-medium">
                  Collector {index + 1}
                </span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-6 sm:gap-12 flex-wrap lg:flex-nowrap lg:ml-12">
            {collectors.slice(8, 16).map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#262626] rounded-full px-5 py-2 lg:flex-row"
              >
                <div className="w-10 h-10 bg-gray-500 rounded-full"></div>
                <span className="mt-2 sm:mt-0 sm:ml-3 text-sm font-medium">
                  Collector {index + 9}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCollectors;

