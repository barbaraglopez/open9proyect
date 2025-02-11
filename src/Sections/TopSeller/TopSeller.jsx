import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Simulación de datos que podrías consumir de una API
const data = [
  { id: 1, name: 'Product 1', number: 1235.3, smallCircleColor: '#DDF247' },
  { id: 2, name: 'Product 2', number: 4565.3, smallCircleColor: '#FFFFFF' },
  { id: 3, name: 'Product 3', number: 7894.9, smallCircleColor: '#DDF247' },
  { id: 4, name: 'Product 4', number: 1015.3, smallCircleColor: '#FFFFFF' },
  { id: 5, name: 'Product 5', number: 2024.4, smallCircleColor: '#DDF247' },
  { id: 6, name: 'Product 6', number: 3035.7, smallCircleColor: '#FFFFFF' },
];

const TopSeller = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-10 w-full flex flex-col justify-center items-center bg-[#161616] text-white">
      <div className="w-full flex justify-between items-center mb-8">
        <h1 className="sm:text-3xl md:text-4xl justify-center font-bold text-center flex">
          Top Seller in <span className="text-[#DDF247] ml-2">1 Day</span>
          <IoIosArrowDown className="text-[#DDF247] ml-2" />
        </h1>
      </div>
      <div className="flex w-full items-center justify-between mt-15">
        <div className="flex">
          <button className="w-10 h-10 rounded-full bg-gray-700 flex justify-center items-center text-white">
            <IoIosArrowBack />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 overflow-x-auto">
          {data.map((item) => (
            <div key={item.id} className="relative flex flex-col items-center">
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-[#3e3e3e] rounded-full flex justify-center items-center relative">
                <div
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-full absolute top-0 right-0 flex justify-center items-center"
                  style={{ backgroundColor: item.smallCircleColor }}
                >
                  <span className="text-xs sm:text-sm font-semibold text-black">
                    {item.id}
                  </span>
                </div>
              </div>
              <p className="mt-3 sm:mt-4 text-center font-medium text-sm sm:text-base">
                {item.name}
              </p>
              <p className="text-center text-xs sm:text-sm flex font-light text-gray-500">
                <img src="src\assets\icons\rubiicon.png"/>
                {item.number}
              </p>
            </div>
          ))}
        </div>
        <div className="flex">
          <button className="w-10 h-10 rounded-full bg-gray-700 flex justify-center items-center text-white">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;

