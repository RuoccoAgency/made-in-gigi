import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageLightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    // Prevent scrolling when lightbox is open
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10 select-none"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 z-[110] p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-4 md:left-10 z-[110] p-4 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all duration-300 transform -translate-y-1/2 top-1/2"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              className="absolute right-4 md:right-10 z-[110] p-4 text-white/50 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all duration-300 transform -translate-y-1/2 top-1/2"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </>
        )}

        {/* Image Container */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative max-w-full max-h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
          />
          
          {/* Caption / Page Indicator */}
          <div className="absolute -bottom-10 left-0 right-0 text-center text-white/60 text-sm font-medium tracking-widest uppercase">
            {currentIndex + 1} / {images.length}
          </div>
        </motion.div>

        {/* Mobile Swipe / Drag Hint (Optional overlay or just smooth drag logic) */}
      </motion.div>
    </AnimatePresence>
  );
}
