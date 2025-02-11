import { useState, useEffect, useRef } from "react";
import { useProducts } from "../../ProductContext";
import { motion } from "framer-motion";

const SecondaryNavbar = () => {
  const { images } = useProducts();

  const menuItems = [
    { text: "Category", src: images.category },
    { text: "Items", src: images.items },
    { text: "Status", src: images.status },
    { text: "Price Range", src: images.pricerange },
    { text: "Sort By: Recently Added", src: images.sortBy },
  ];

  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="font-azeret flex bg-[#161616] justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 py-6">
      <nav className="w-full max-w-4xl text-white" ref={menuRef}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-center lg:space-x-8 gap-4">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              <button
                className="flex justify-between px-2 w-50 py-4 bg-[#161616] border border-gray-700 text-sm text-white rounded-lg hover:bg-gray-700"
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
              >
                <div className="flex items-center">
                  <img src={item.src} alt={item.text} className="w-5 h-5 mr-2" />
                  <span className="text-sm">{item.text}</span>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-gray-500"
                >
                  ▼
                </motion.div>
              </button>
              {openMenu === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 bg-white text-black p-2 mt-2 rounded shadow-lg w-32 z-50"
                >
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-200">
                    Subopción 1
                  </button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-200">
                    Subopción 2
                  </button>
                  <button className="block w-full text-left px-2 py-1 hover:bg-gray-200">
                    Subopción 3
                  </button>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SecondaryNavbar;
