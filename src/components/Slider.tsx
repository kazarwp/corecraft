import { useState } from "react";
import openPhoto2 from "../images/news_open_2.png";

const images = [
  openPhoto2,
  openPhoto2,
];

export const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mt-[40px] pad:mt-[10px] relative w-full max-w-[739px]">
      {/* Images */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto max-h-[656px] object-cover transition duration-500 ease-in-out"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-800 focus:outline-none"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-400" : "bg-gray-800"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
