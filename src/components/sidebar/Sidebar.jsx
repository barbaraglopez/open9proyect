import {
  FaWallet,
  FaHeart,
  FaHistory,
  FaCog,
  FaSignOutAlt,
  FaGavel,
  FaThLarge,
  FaStore,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-[#161616] text-white p-5 flex flex-col justify-between hidden lg:flex">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-xl font-bold">
        <img src="src\assets\icons\OpenLogo.png" className="p-5"/>
      </div>
      <button className="mt-5 w-full bg-gray-100 py-2 rounded-lg text-black flex items-center justify-center cursor-pointer">
        Create <img src="src\assets\icons\createicon.png" alt="icon" className="ml-2" />
      </button>

      {/* Menú */}
      <nav className="mt-10 flex-1">
        <p className="text-gray-500 text-sm mb-2">Marketplace</p>
        <ul>
          <li>
            <Link
              to="/market"
              className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800"
            >
              <FaStore className="text-[#DDF247]" />
              <span className="hidden sm:inline text-[#DDF247]">Market</span>{" "}
            </Link>
          </li>
          <li>
            <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 w-full text-left">
              <FaGavel />
              <span className="hidden sm:inline">Active Bid</span>{" "}
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 w-full text-left">
              <FaThLarge />
              <span className="hidden sm:inline">Explore</span>{" "}
            </button>
          </li>
        </ul>

        <p className="text-gray-500 text-sm mt-5 mb-2">Account</p>
        <ul>
          <li>
            <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 w-full text-left">
              <FaWallet />
              <span className="hidden sm:inline">My collection</span>{" "}
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 w-full text-left">
              <FaHeart />
              <span className="hidden sm:inline">My favorite</span>{" "}
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 w-full text-left">
              <FaWallet />
              <span className="hidden sm:inline">Wallet</span>{" "}
              {/* Ocultar en pantallas pequeñas */}
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 w-full text-left">
              <FaHistory />
              <span className="hidden sm:inline">History</span>{" "}
              {/* Ocultar en pantallas pequeñas */}
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 w-full text-left">
              <FaCog />
              <span className="hidden sm:inline">Settings</span>{" "}
              {/* Ocultar en pantallas pequeñas */}
            </button>
          </li>
          <li>
            <button className="flex items-center space-x-2 p-2 rounded hover:bg-gray-800 w-full text-left">
              <FaSignOutAlt />
              <span className="hidden sm:inline">Logout</span>{" "}
              {/* Ocultar en pantallas pequeñas */}
            </button>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="text-gray-500 text-sm">
        <p>&copy; 2023 OpeN9</p>
        <p>Made by Themesflat</p>
      </div>
    </aside>
  );
};

export default Sidebar;
