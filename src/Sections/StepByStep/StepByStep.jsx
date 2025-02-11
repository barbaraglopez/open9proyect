import React from "react";
import arrowImg from "../../assets/img/arrowcurvee.png";
import wallet from "../../assets/img/wallet.png" 
import bill from "../../assets/img/Bill.png"
import market from "../../assets/img/MarketDown.png"
import moneybag from "../../assets/img/MoneyBag.png"

const data = [
  {
    image: wallet,
    text: "Step 1",
    title: "Set Up Your Wallet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
  },
  {
    image: bill,
    text: "Step 2",
    title: "Create your collection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
  },
  {
    image: market,
    text: "Step 3",
    title: "Add your NFTs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
  },
  {
    image: moneybag,
    text: "Step 4",
    title: "Sell your NFTs",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
  },
];

const StepByStep = () => {
  return (
    <div className="py-16 bg-[#161616] text-center">
      <h2 className="text-3xl text-white font-bold mb-8">Step by step Create and Sell Your NFTs</h2>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center p-4 rounded-lg w-52">
              <div className="mb-4 bg-[#262626] p-5 rounded-2xl">
                <img
                  src={item.image}
                  alt={`Imagen ${index + 1}`}
                  className=" object-cover "
                />
              </div>
              <span className="font-medium font-azeret text-gray-700 text-sm">{item.text}</span>
              <h3 className="text-xl text-white font-bold mt-2">{item.title}</h3>
              <p className="mt-2 text-sm text-white  font-azeret">{item.description}</p>
            </div>
            {index < data.length - 1 && (
              <div className="flex items-center">
                <img
                  src={arrowImg} 
                  alt="Flecha"
                  className="h-10 w-15 p-0"
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepByStep;
