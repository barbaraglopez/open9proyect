import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import CardNFT from "../../components/cards/CardNFT/CardNFT.jsx";
import { FaBell, FaBars } from "react-icons/fa";
import "./Market.css"; // Importa el archivo CSS con la media query

export default function Market() {
  const [activeButton, setActiveButton] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Solo una vez

  const handleButtonClick = (index) => {
    setActiveButton(index); // Cambia el color del botón activo
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Abre o cierra el menú desplegable
  };

  return (
    <div className="flex min-h-screen bg-[#161616]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center p-6 bg-[#161616] text-white flex-col sm:flex-row">
          <input
            type="text"
            placeholder="Search artwork, collection..."
            className="bg-[#232323] text-white px-4 py-2 rounded w-full sm:w-1/2 text-sm"
          />
          <div className="flex items-center space-x-4">
            <FaBell className="text-xl cursor-pointer" />
            <div className="relative">
              <button
                className="bg-gray-800 px-4 py-2 rounded flex items-center text-sm"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="sm:hidden">☰</span>
                <span className="hidden sm:block">Themesflat</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-gray-900 p-4 rounded shadow-md z-10">
                  <button className="block w-full text-left text-sm">
                    Profile
                  </button>
                  <button className="block w-full text-left text-sm">
                    Settings
                  </button>
                  <button className="block w-full text-left text-sm">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-1 p-6 flex-col md:flex-row">
          <div className="flex-1">
            <div className="mb-10 ml-10 lg:ml-0">
              <img src="src\assets\img\background.png" className="w-full h-auto max-w-full" />
            </div>
            <h3 className="text-4xl text-white font-bold mb-4 ml-10">Trending NFTs</h3>
            <div className="flex items-center justify-between text-white m-10">
              <div className="flex space-x-2">
                {["Category", "Items", "Status", "Price Range"].map((button, index) => (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    className={`py-4 px-6 rounded-2xl text-sm ${activeButton === index ? "bg-[#DDF247] text-black font-bold cursor-pointer" : "bg-[#161616] cursor-pointer border-1 border-gray-600"
                      }`}
                  >
                    {button}
                  </button>
                ))}
              </div>
              <div className="flex-1"></div>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center py-2 px-4 bg-[#161616] rounded-full text-sm"
                >
                  <FaBars className="mr-2" />
                  Sort by Recently Added
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#161616] text-white rounded shadow-lg z-10">
                    <ul>
                      <li className="px-4 py-2 hover:bg-[#DDF247] text-sm hover:text-black">
                        Option 1
                      </li>
                      <li className="px-4 py-2 hover:bg-[#DDF247] text-sm hover:text-black">
                        Option 2
                      </li>
                      <li className="px-4 py-2 hover:bg-[#DDF247] hover:text-black text-sm">
                        Option 3
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 xl:grid-cols-4 2xl:grid-cols-4">
              <CardNFT />
              <CardNFT />
              <CardNFT />
              <CardNFT />
            </div>
          </div>
          <div className="w-full sm:w-48 md:w-64 p-4 bg-[#232323] text-white mt-6 md:mt-0 md:ml-6 rounded-lg flex flex-col space-y-4 h-90 m-2">
            <h3 className="text-lg font-bold mb-4">Top Creators</h3>
            <ul>
              {[
                { name: "Brooklyn Simmons", username: "@themes" },
                { name: "Marvin McKinney", username: "@themes" },
                { name: "Williamson", username: "@themes" },
                { name: "Leslie Alexander", username: "@themes" },
                { name: "Floyd Miles", username: "@themes" },
              ].map((creator, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between text-sm mb-3"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-bold">{creator.name}</p>
                      <p className="text-gray-400">{creator.username}</p>
                    </div>
                  </div>
                  <button className="bg-[#DEE8E8] text-black px-2 py-1 rounded text-sm hover:bg-[#DDF247]">
                    Follow
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
