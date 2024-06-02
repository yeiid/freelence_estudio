// components/CourseCarousel.tsx
import React, { useState } from "react";
import Image from "next/image";
interface CourseCarouselProps {
  images: string[];
}

const CourseCarousel: React.FC<CourseCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full">
            {/* <Image src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" /> */}
          </div>
        ))}
      </div>
      <button onClick={goToPrevious} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
        ‹
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
        ›
      </button>
    </div>
  );
};

export default CourseCarousel;
