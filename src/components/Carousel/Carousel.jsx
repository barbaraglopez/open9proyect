import { useState } from "react";
import CustomCard from "../cards/Cards-Carrusel";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsData = [
    {
      title: "Welcome!",
      description: "Discover amazing features in our app.",
      number: 12,
      buttonText: "Learn More",
    },
    {
      title: "Fast & Secure",
      description: "Our platform ensures your data is safe.",
      number: 23,
      buttonText: "Get Started",
    },
    {
      title: "Easy to Use",
      description: "A user-friendly experience for everyone.",
      number: 355,
      buttonText: "Try Now",
    },
    {
      title: "24/7 Support",
      description: "We're here to help, anytime.",
      number: 45,
      buttonText: "Contact Us",
    },
    {
      title: "Powerful Tools",
      description: "Enhance your productivity with our tools.",
      number: 15,
      buttonText: "Explore",
    },
    {
      title: "Flexible Plans",
      description: "Choose a plan that fits your needs.",
      number: 26,
      buttonText: "View Plans",
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length
    );
  };

  return (
    <div className="flex flex-col p-16 items-center bg-[#161616]">
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
        <div className="flex justify-center items-center space-x-6 relative">
          <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-0 p-3 sm:p-4 text-white bg-[#3e3e3e] rounded-full shadow-lg transition duration-300 hover:bg-gray-500 z-20"
          >
            &lt;
          </button>

          <div className="flex justify-center items-center relative w-full h-72 sm:h-96">
            {cardsData.map((card, index) => {
              const isActive = index === currentIndex;
              const isPrev1 =
                index ===
                (currentIndex - 1 + cardsData.length) % cardsData.length;
              const isPrev2 =
                index ===
                (currentIndex - 2 + cardsData.length) % cardsData.length;
              const isPrev3 =
                index ===
                (currentIndex - 3 + cardsData.length) % cardsData.length;

              const isNext1 = index === (currentIndex + 1) % cardsData.length;
              const isNext2 = index === (currentIndex + 2) % cardsData.length;
              const isNext3 = index === (currentIndex + 3) % cardsData.length;

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-500 ease-in-out transform ${isActive
                      ? "scale-110 z-10 opacity-100"
                      : isPrev1 || isNext1
                        ? "scale-100 z-0 border-1 border-black-10 bg-[#3e3e3e]"
                        : isPrev2 || isNext2
                          ? "scale-95 z-0 border-1 border-black-10 bg-[#3e3e3e]"
                          : isPrev3 || isNext3
                            ? "scale-90 z-0 border-1 border-black-10 bg-[#3e3e3e]"
                            : "hidden sm:block opacity-0"
                    } flex justify-center items-center w-64 h-40 sm:w-80 sm:h-48 rounded-lg`}
                  style={{
                    left: isActive
                      ? "50%" // La tarjeta activa está centrada
                      : isPrev1
                        ? "30%" // 30% a la izquierda (mostrando un 20% de la tarjeta activa)
                        : isPrev2
                          ? "20%" // 20% a la izquierda
                          : isPrev3
                            ? "10%" // 10% a la izquierda
                            : isNext1
                              ? "70%" // 30% a la derecha (mostrando un 20% de la tarjeta activa)
                              : isNext2
                                ? "80%" // 20% a la derecha
                                : isNext3
                                  ? "90%" // 10% a la derecha
                                  : "auto",
                    transform: "translateX(-50%)",
                  }}
                >
                  {isActive ? (
                    <CustomCard
                      title={card.title}
                      description={card.description}
                      number={card.number}
                      buttonText={card.buttonText}
                    />
                  ) : (
                    <div className="w-full h-full rounded-lg"></div>
                  )}
                </div>
              );
            })}
          </div>
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-0 p-3 sm:p-4 text-gray-700 bg-white rounded-full shadow-lg transition duration-300 hover:bg-gray-100 z-20"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
