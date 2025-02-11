import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import SecondaryNavbar from "../../components/SecondaryNavbar/SecondaryNavbar";
import TopSeller from "../../Sections/TopSeller/TopSeller"
import DiscoverItem from "../../Sections/DiscoverItem/DiscoverItem";
import TopCollectors from "../../Sections/TopCollectors/TopCollectors";
import StepByStep from "../../Sections/StepByStep/StepByStep";
import { GoArrowUpRight } from "react-icons/go";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(null); // Mantener el 
  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="w-full p-20 flex flex-col justify-center items-center bg-[#161616]">
        <h1 className="text-4xl text-white font-bold text-center mb-4">World Of Top Works</h1>
        <p className="text-center text-white mb-6 font-azeret text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 flex items-center py-3 bg-[#DDF247] text-black rounded-lg shadow-lg hover:white transition duration-300 font-semibold">
            Discover More
            <GoArrowUpRight />
          </button>
          <button className="px-6 py-3 items-center flex bg-white text-black rounded-lg shadow-lg hover:bg-[#DDF247] transition duration-300 font-semibold">
            All Collections
            <GoArrowUpRight />
          </button>
        </div>
      </div>
      <Carousel />
      <TopSeller />
      <div className="flex justify-center  text-white p-10 bg-[#161616] pt-14">
        <div className="w-full max-w-3xl p-8 menu-container">
          <div className="flex justify-between items-center mt-5">
            <h1 className="text-4xl font-bold">
              Discover item
            </h1>
            <p className="text-lg font-medium text-white flex-grow mx-2 text-right">
              Discover more
            </p>
            <IoArrowForwardCircleOutline className="text-2xl"/>
          </div>
        </div>
      </div>
      <SecondaryNavbar />
      <DiscoverItem />
      <TopCollectors />
      <StepByStep />
      <Footer />
    </>
  );
}
