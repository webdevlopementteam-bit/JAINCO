"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function OurClients() {
  const [mount, setMount] = useState(false);
  const swiperRef = useRef(null);

  const clients = [
    { id: 1, name: "Indian Railways", image: "/home/c1.png" },
    { id: 2, name: "SAIL", image: "/home/c2.png" },
    { id: 3, name: "BHEL", image: "/home/c3.png" },
    { id: 4, name: "Client 4", image: "/home/c4.png" },
    { id: 5, name: "Indian Railways", image: "/home/c1.png" },
    { id: 6, name: "SAIL", image: "/home/c2.png" },
    { id: 7, name: "BHEL", image: "/home/c3.png" },
    { id: 8, name: "Client 4", image: "/home/c4.png" },
  ];

  useEffect(() => {
    setMount(true);
  }, []);

  const handleMouseEnter = () => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed) return;

    // 1. Autoplay stop karein
    swiper.autoplay.stop();

    // 2. Browser se wrapper ki exact current running position nikalein
    const wrapperEl = swiper.wrapperEl;
    const transformValue = window.getComputedStyle(wrapperEl).transform;

    if (transformValue && transformValue !== "none") {
      const matrix = new DOMMatrixReadOnly(transformValue);
      const currentTranslate = matrix.m41; // Exact X position

      // 3. Usi exact jagah par slider ko freeze karein
      swiper.setTransition(0);
      swiper.setTranslate(currentTranslate);
    }
  };

  const handleMouseLeave = () => {
    const swiper = swiperRef.current;
    if (!swiper || swiper.destroyed) return;

    const currentTranslate = swiper.getTranslate();
    const targetTranslate = -swiper.snapGrid[swiper.activeIndex];
    const distance = Math.abs(targetTranslate - currentTranslate);

    // Slide ki total width calculate karein taaki speed constant rahe
    const slideSize =
      swiper.slidesSizesGrid[swiper.activeIndex] +
      (swiper.params.spaceBetween || 20);

    // Bache hue distance ke hisaab se remaining time nikalein
    const remainingDuration =
      slideSize > 0
        ? Math.max(
            Math.round((distance / slideSize) * swiper.params.speed),
            100,
          )
        : swiper.params.speed;

    // Current target slide tak smooth transition complete karein aur autoplay resume karein
    swiper.slideTo(swiper.activeIndex, remainingDuration, false);
    swiper.autoplay.start();
  };

  if (!mount) return null;

  return (
    <section className="w-full overflow-hidden bg-white py-16 sm:py-20">
      <style jsx global>{`
        .clients-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-12">
        {/* Section heading */}
        <div className="mb-14 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-[#0a1e3f] sm:text-4xl">
            Our Clients
          </h2>

          <div className="mt-3 flex w-full max-w-[200px] items-center justify-center gap-3">
            <div className="h-[1px] flex-1 bg-gray-300" />
            <span className="select-none text-base leading-none text-[#0a1e3f]">
              ✱
            </span>
            <div className="h-[1px] flex-1 bg-gray-300" />
          </div>
        </div>

        {/* Carousel */}
        <div
          className="w-full py-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            loop={true}
            speed={5000}
            allowTouchMove={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 28,
              },
            }}
            className="clients-swiper flex items-center"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={`${client.id}-${index}`}>
                {/* Mobile par p-2 (kam padding) aur desktop par sm:p-5 */}
                <div className="group relative flex aspect-[4/3] w-full items-center justify-center rounded-xl border border-gray-300 bg-white p-2 sm:p-5 shadow-sm transition-all duration-300 hover:border-[#152a55]">
                  <div className="relative flex h-full w-full items-center justify-center">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      /* p-1 ko hata kar sm:p-1 kiya taaki mobile par image poori jagah le, 
             aur logos ke liye object-contain use karein taaki logo kate nahi */
                      className="object-contain sm:p-1 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
