import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Why are NFTs becoming popular?",
    answer:
      "NFTs are gaining popularity due to their ability to provide unique digital ownership, scarcity, and potential for high-value appreciation.",
  },
  {
    question: "How do I keep my NFTs safe?",
    answer:
      "Ensure the safety of your NFTs by using secure wallets, enabling two-factor authentication, and avoiding suspicious links.",
  },
  {
    question: "What is blockchain?",
    answer:
      "Blockchain is a decentralized and immutable ledger that records transactions and tracks assets in a business network, ensuring transparency and security.",
  },
  {
    question: "What is an NFT?",
    answer:
      "NFTs (Non-Fungible Tokens) are unique digital assets that represent ownership of a specific item or piece of content on the blockchain.",
  },
  {
    question:
      "Where can I learn more about cryptocurrencies, NFTs, and blockchain?",
    answer:
      "You can explore online courses, whitepapers, and industry blogs dedicated to blockchain technology and NFTs.",
  },
  {
    question: "What is polygon?",
    answer:
      "Polygon is a layer-2 scaling solution for Ethereum, enhancing transaction speed and reducing costs while maintaining security.",
  },
  {
    question: "What is the Ledger Nano X?",
    answer:
      "The Ledger Nano X is a hardware wallet that securely stores cryptocurrencies and NFTs offline, protecting them from hacks.",
  },
  {
    question: "How do I set up my Ledger?",
    answer:
      "To set up your Ledger, follow the official guide provided by Ledger, including initializing the device, setting a PIN, and securing your recovery phrase.",
  },
];

export default function FQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center p-6">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-500 mb-6 text-center">
          Quick answers to questions you may have. Can’t find what you're
          looking for? Check out our{" "}
          <span className="font-bold">full documentation</span>
        </p>
        <div className="w-full max-w-2xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-2 border border-gray-700 rounded overflow-hidden"
            >
              <button
                className="w-full text-left flex justify-between items-center p-4 bg-gray-800 text-white"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-900 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          <button className="p-5 bg-gray-700 text-white rounded flex items-center gap-2 cursor-pointer rounded-2xl">
            Document 📄
          </button>
          <button className="p-5 bg-yellow-500 text-black rounded flex items-center gap-2 cursor-pointer rounded-2xl">
            Get In Touch ↗
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
