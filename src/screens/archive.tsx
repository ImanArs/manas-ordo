import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "/images/archive/archive1.png",
  "/images/archive/archive2.png",
  "/images/archive/archive3.png",
  "/images/archive/archive4.png",
  "/images/archive/archive5.png",
  "/images/archive/archive6.png",
  "/images/archive/archive7.png",
  "/images/archive/archive8.png",
  "/images/archive/archive9.png",
  "/images/archive/archive10.png",
  "/images/archive/archive11.png",
  "/images/archive/archive12.png",
  "/images/archive/archive13.png",
  "/images/archive/archive14.png",
  "/images/archive/archive15.png",
  "/images/archive/archive16.png",
  "/images/archive/archive17.png",
  "/images/archive/archive18.png",
  "/images/archive/archive19.png",
  "/images/archive/archive20.png",
  "/images/archive/archive21.png",
  "/images/archive/archive22.png",
  "/images/archive/archive23.png",
  "/images/archive/archive24.png",
  "/images/archive/archive25.png",
];

export const Archive = () => {
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
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold">{t("Archive")}</h2>
      <p className="text-gray-600">{t("Archive-text")}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
                  className="max-h-[80vh] lg:max-h-[70vh] max-w-full mx-4 rounded shadow-md"
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
