import { FaHeart } from "react-icons/fa";

function CardNFT() {
  return (
    <div className="
bg-[#232323] p-4 rounded-2xl shadow-lg w-64 text-white relative">
      <div className="flex items-center mb-3"> {/* Agregado flex y items-center */}
        <div className="w-6 h-6 bg-gray-500 rounded-full profile-circule mr-3"></div> {/* Añadido mr-3 para separación */}
        <div className="autor-profile">
          <p className="text-sm text-gray-400">
            Created by:{" "}
            <span className="text-white font-bold">Marvin McKinney</span>
          </p>
        </div>
      </div>
      <div className="w-full h-40 bg-[#404040] rounded-lg mt-2 relative flex items-center justify-center">
        <span className="text-gray-500">Image</span>
        <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gray-200 text-gray-500 hover:text-red-500 flex items-center justify-center">
          <FaHeart />
        </button>
      </div>
      <h3 className="text-lg font-bold mt-3">Dayco serpentine belt</h3>
      <p className="text-gray-400">Current Bid:</p>
      <div className="flex">
        <img src="src\assets\icons\rubiicon.png" />
        <p>15.5</p>
      </div>
      <button className="mt-3 w-full bg-[#DEE8E8] text-black font-semibold py-2 rounded-lg">
        Place Bid
      </button>
    </div>
  );
}

export default CardNFT;

