import { useState } from 'react';
import ImageAtom from '../atoms/ImageAtom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: { image: string }[];
  priorityIndex?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, priorityIndex = 0 }) => {
  const validImages = images.filter((img) => img.image);
  const [current, setCurrent] = useState(0);

  if (validImages.length === 0) return null;

  if (validImages.length === 1) {
    return (
      <ImageAtom
        src={validImages[0].image}
        alt="Imagen única"
        className="w-full h-auto md:w-[90%] md:max-w-[900px]"
        priority={true}
      />
    );
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % validImages.length);
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <ImageAtom
        src={validImages[current].image}
        alt={`Imagen ${current + 1}`}
        className="w-full h-auto transition-opacity duration-700 ease-in-out md:w-[90%] md:max-w-[900px]"
        priority={current === priorityIndex}
      />
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 flex space-x-2">
        {validImages.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
