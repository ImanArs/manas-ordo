import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg",
  "/images/gallery/gallery8.jpg",
  "/images/gallery/gallery9.jpg",
  "/images/gallery/gallery10.jpg",
  "/images/gallery/gallery11.jpg",
  "/images/gallery/gallery12.jpg",
  "/images/gallery/gallery13.jpg",
  "/images/gallery/gallery14.jpg",
  "/images/gallery/gallery15.jpg",
  "/images/gallery/gallery16.jpg",
  "/images/gallery/gallery17.jpg",
  "/images/gallery/gallery18.jpg",
  "/images/gallery/gallery19.jpg",
  "/images/gallery/gallery20.jpg",
  "/images/gallery/gallery21.jpg",
];

export const Gallery = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  };

  return (
    <div className="flex flex-col gap-10">
      <h2>{t("Gallery")}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`archive-${index}`}
            className="cursor-pointer object-cover w-full h-40 rounded shadow-sm"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-4xl w-full p-4 flex flex-col">
              <button
                onClick={() => setCurrentIndex(null)}
                className="absolute -top-5 right-8 text-white"
              >
                <X size={32} />
              </button>

              <div className="flex flex-col gap-10 items-center justify-between">
                <img
                  src={images[currentIndex]}
                  alt={`fullscreen-${currentIndex}`}
                  className="max-h-[80vh] md:max-h-[70vh] max-w-full mx-4 rounded shadow-md"
                />
                <div className="flex gap-20">
                  <button onClick={handlePrev} className="text-white">
                    <ArrowLeft size={32} />
                  </button>
                  <button onClick={handleNext} className="text-white">
                    <ArrowRight size={32} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
