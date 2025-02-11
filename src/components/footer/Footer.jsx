import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";

import { useProducts } from "../../ProductContext";

const Footer = () => {
  const { images } = useProducts();

  return (
    <div className="w-full bg-[#161616] text-white py-10 font-azeret text-lg">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Columna 1 */}
          <div>
            <img src={images.logo}/>
          </div>

          {/* Columna 2 */}
          <div>
            <h2 className="font-semibold text-lg">Marketplace</h2>
            <p className="text-gray-400">Discover and collect amazing NFTs.</p>
          </div>

          {/* Columna 3 */}
          <div>
            <h2 className="font-semibold text-lg">Resource</h2>
            <p className="text-gray-400">Find helpful guides and tutorials.</p>
          </div>

          {/* Columna 4 */}
          <div>
            <h2 className="font-semibold text-lg">Account</h2>
            <p className="text-gray-400">Manage your profile and settings.</p>
          </div>

          {/* Columna 5 */}
          <div>
            <h2 className="font-semibold text-lg">Company</h2>
            <p className="text-gray-400">
              Learn more about our team and mission.
            </p>
            <h2 className="font-semibold text-lg mt-4">Join the community</h2>
            <div className="flex space-x-3 mt-2">
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer">
                <FaFacebook />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer">
                <FaTwitter />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer">
                <FaDiscord />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer">
                <FaTiktok />
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full cursor-pointer">
                <FaYoutube/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-700 mt-6 py-4 flex flex-col md:flex-row justify-between items-center px-6 text-gray-400 text-sm">
        <div className="ml-20 lg-m-0">&copy; 2023 OpeN9 - Made by ThemesFiat</div>
        <div className="flex space-x-6">
          <span className="cursor-pointer hover:text-white">
            Privacy Policy
          </span>
          <span className="cursor-pointer mr-20 hover:text-white lg-m-0">
            Terms of Service
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
