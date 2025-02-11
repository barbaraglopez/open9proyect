import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useProducts } from "../../ProductContext";

function Navbar() {
  const menuItems = [
    { name: "Home", path: "/home", hasSubmenu: false },
    { name: "Market", path: "/market", hasSubmenu: false },
    { name: "Explore", path: "#", hasSubmenu: true },
    { name: "Pages", path: "#", hasSubmenu: true },
    { name: "Blog", path: "#", hasSubmenu: true },
    { name: "Cart", path: "/cart", hasSubmenu: false },
  ];

  const { images } = useProducts();  
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="flex items-center justify-between px-6 sm:px-10 md:px-16 py-4 bg-black text-white relative"
      ref={menuRef}
    >
      <div className="flex items-center">
        <img src={images.logo}/>
      </div>

      <div className="hidden lg:flex space-x-6 relative">
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            {item.hasSubmenu ? (
              <button
                className="hover:text-[#DDF247] cursor-pointer flex justify-center items-center"
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
              >
                {item.name}<IoIosArrowDown /> 
              </button>
            ) : (
                <Link to={item.path} className="hover:text-[#DDF247]">
                {item.name}
              </Link>
            )}
            {item.hasSubmenu && openMenu === index && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0  text-white p-2 mt-2 rounded shadow-lg w-40"
              >
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-200 hover:text-black">
                  Suboption 1
                </button>
                <button className="block w-full text-left px-2 py-1 hover:bg-gray-200 hover:text-black">
                  Suboption 2
                </button>
              </motion.div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <button className="hidden lg:block bg-[#DDF247] text-black px-4 py-2 rounded-lg font-bold hover:bg-gray-600">
          <p className="flex justify-between">
            Wallet Connect
            <img src={images.wallet} alt="wallet" className="ml-2" />
          </p>
        </button>
        <img src={images.burguerMenu} className="ml-5 hidden lg:block" />

      </div>
      <button
        className="lg:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="lg:hidden fixed top-0 right-0 w-64 h-full bg-black text-white flex flex-col p-6 space-y-4"
        >
          <button
            className="self-end mb-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FaTimes size={24} />
          </button>
          {menuItems.map((item, index) => (
            <div key={index} className="w-full">
              {item.hasSubmenu ? (
                <button
                  className="text-lg w-full text-left flex justify-between items-center hover:text-[#DDF247]"
                  onClick={() => setOpenMenu(openMenu === index ? null : index)}
                >
                  {item.name}
                  <span>{openMenu === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </button>
              ) : (
                <Link
                  to={item.path}
                    className="text-lg w-full text-left hover:text-[#DDF247]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
              {item.hasSubmenu && openMenu === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-gray-700 mt-2 rounded"
                >
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-600">
                    Suboption 1
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-600">
                    Suboption 2
                  </button>
                </motion.div>
              )}
            </div>
          ))}
          <button className="mt-6 w-full h-12 bg-[#DDF247] text-black rounded-lg font-bold hover:bg-gray-600">
            Wallet Connect
          </button>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
