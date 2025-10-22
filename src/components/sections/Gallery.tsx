import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import img1 from '@/assets/Hospital1.jpg';
import img2 from '@/assets/Hospital2.jpg';
import img3 from '@/assets/Hospital3.jpg';
import img4 from '@/assets/Hospital4.jpg';
import img5 from '@/assets/Hospital5.jpg';
import img6 from '@/assets/Hospital6.jpg';

const Gallery = () => {
  const images = useMemo(() => [img1, img2, img3, img4, img5, img6], []);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="gallery" className="py-10 md:py-12 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 md:mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our <span className="text-gradient-medical">Facilities</span>
          </h2>
          <p className="text-muted-foreground">
            A peek into our modern, patient-friendly eye care center.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {images.map((src, index) => (
            <motion.button
              key={index}
              type="button"
              className="group relative aspect-[4/3] overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => openAt(index)}
            >
              <img
                src={src}
                alt={`Clinic facility view ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="pointer-events-none absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-md bg-background/70 px-2 py-1 text-xs text-foreground backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                <Images className="h-3.5 w-3.5 text-primary" />
                <span>View</span>
              </div>
            </motion.button>
          ))}
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-5xl w-[92vw] p-0 overflow-hidden bg-black/90 border-border">
            <div className="relative">
              <img
                src={images[currentIndex]}
                alt={`Clinic facility large view ${currentIndex + 1}`}
                className="w-full h-[70vh] md:h-[75vh] object-contain bg-black"
                loading="eager"
                decoding="async"
                sizes="90vw"
              />

              <button
                type="button"
                aria-label="Previous image"
                onClick={showPrev}
                className="absolute top-1/2 left-3 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground shadow hover:bg-background/90"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={showNext}
                className="absolute top-1/2 right-3 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/70 text-foreground shadow hover:bg-background/90"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;


