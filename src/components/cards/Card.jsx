import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useProducts } from "../../ProductContext";

const Card = ({ name, description, onClick }) => {
  const { images } = useProducts();
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="bg-[#2E2E2E] rounded-2xl shadow-lg p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xs cursor-pointer text-white"
      onClick={onClick}
    >
      <div className="relative w-full h-52 bg-[#707070] rounded-xl flex items-center justify-center">
        <button
          className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition duration-300 hover:bg-red-100"
          onClick={(e) => {
            e.stopPropagation(); 
            setLiked(!liked);
          }}
          onMouseEnter={(e) => e.currentTarget.classList.add("bg-red-200")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("bg-red-200")}
        >
          <FaHeart
            className={`transition duration-300 ${liked ? "text-red-500" : "text-gray-500"
              } hover:text-red-400`}
          />
        </button>
      </div>
      <h2 className="mt-2 text-lg font-semibold text-white">{name}</h2>
      <div className="mt-2 w-96 flex">
        <div className="flex justify-center items-center">
          <div className="w-7 h-7 bg-gray-400 rounded-full mr-2"></div>
        </div>
        <div className="flex flex-col font-azeret mb-2">
          <p className="text-gray-500">Created by</p>
          <p className="text-white text-sm">Marvin McKinney</p>
        </div>
      </div>
      <div className="font-azeret border-t-1 border-gray-600 flex justify-between text-white text-sm font-medium">
        <span className="mt-2">Current Bid</span>
        <div className="flex mt-2">
          <img src={images.rubi} />
          <span>12,3</span>
        </div>
      </div>
    </div>
  );
};

export default Card;


