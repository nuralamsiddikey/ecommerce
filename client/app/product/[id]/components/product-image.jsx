"use client";

import ImageMagnifier from "@/components/image-magnifier/image-magnifier";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductImage = ({ images }) => {
  // Local State
  const [activeImage, setActiveImage] = useState({ src: "", sn: 0 });
  // const [touchStart, setTouchStart] = useState(null);
  // const [touchEnd, setTouchEnd] = useState(null);

  // Constants
  // const minSwipeDistance = 50;

  /**
   * HANDLERS
   */
  // const onTouchStart = (e) => {
  //   setTouchEnd(null);
  //   setTouchStart(e.targetTouches[0].clientX);
  // };

  // const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  // const onTouchEnd = () => {
  //   if (!touchStart || !touchEnd) return;
  //   const distance = touchStart - touchEnd;
  //   const isLeftSwipe = distance > minSwipeDistance;
  //   const isRightSwipe = distance < -minSwipeDistance;
  //   if (isLeftSwipe || isRightSwipe) {
  //     const currentIndex = images.findIndex((img) => img == activeImage.src);
  //     const nextIndex = isLeftSwipe
  //       ? currentIndex + 1
  //       : isRightSwipe
  //       ? currentIndex - 1
  //       : currentIndex;
  //     setActiveImage({
  //       src: images?.[nextIndex] || images?.[0],
  //       sn: nextIndex + 1,
  //     });
  //   }
  // };

  /**
   * EFFECTS
   */
  useEffect(() => {
    setActiveImage({ src: images?.[0], sn: 1 });
  }, [images]);

  return (
    <>
      <div className="sm:px-3 sm:pt-5 sm:pb-2 flex justify-center lg:justify-start">
        <div className="relative w-full sm:w-auto">
          <ImageMagnifier
            src={activeImage?.src}
            height={330}
            width={330}
            magnifierHeight={200}
            magnifierWidth={200}
            className="w-full sm:w-[330px] h-[330px] object-cover"
          />
          <p className="absolute right-3 bottom-3 w-[68px] h-9 flex items-center justify-center rounded-[20px] text-white bg-primary-gray-60">
            {activeImage?.sn || 0}/{images?.length || 0}
          </p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-fifth-gray hidden sm:block"></div>

      <div className="px-3 py-4 sm:py-2 w-[95%] lg:w-[90%] mx-auto flex items-center justify-center">
        <Carousel className="w-full max-w-sm">
          <CarouselContent className="-ml-1 h-[80px]">
            {images?.map((img, index) => (
              <CarouselItem key={img} className="pl-1 basis-1/4">
                <div className="py-1">
                  <Image
                    src={img}
                    height={76}
                    width={76}
                    alt="Product-Image"
                    className={`w-full lg:w-[76px] h-[76px] object-cover rounded-xl cursor-pointer`}
                    style={{
                      border: `3px solid ${
                        img == activeImage?.src ? "#F95506" : "white"
                      }`,
                    }}
                    onClick={() => setActiveImage({ src: img, sn: index + 1 })}
                  ></Image>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <span className="hidden sm:block">
            <CarouselPrevious />
            <CarouselNext />
          </span>
        </Carousel>
      </div>
    </>
  );
};

export default ProductImage;
