import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const CustomCard = ({ title, description, number, buttonText }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-[#262626] rounded-lg shadow-lg p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col items-center">
      <div className="relative w-full h-48 bg-[#3e3e3e] rounded-lg flex items-center justify-center">
        {/* Botones en la parte superior derecha */}
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="bg-[#707070] text-white px-3 py-1 rounded-full text-sm shadow-md">
            {buttonText}
          </button>
          <button
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md"
            onClick={() => setLiked(!liked)}
          >
            <FaHeart
              className={`transition duration-300 cursor-pointer ${liked ? "text-red-500" : "text-gray-500"
                }`}
            />
          </button>
        </div>
        {/* Botón centrado dentro del div superior */}
        <button className="absolute bottom-2 bg-white text-black font-semibold px-6 py-2 rounded-lg shadow-md">
          Place a bid
        </button>
      </div>
      <div className="mt-4 px-4 w-full">
        <h2 className="font-semibold text-white text-center text-lg md:text-xl lg:text-2xl">
          {title}
        </h2>
        <p className="mt-2 text-white text-sm text-center">{description}</p>
        <div className="mt-2 text-white text-lg font-bold text-center mb-6 flex items-center aling-center justify-center">
          <img
            src="src\assets\icons\rubiicon.png"
            alt="icon"
            className="w-4 h-auto rounded-lg shadow-lg"
          />
          {number}
        </div>
      </div>
    </div>
  );
};

export default CustomCard;

