"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const ProcessIcon = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-9 w-9 text-[#0b193d]"
  >
    <path
      d="M14 5H27C28.6569 5 30 6.34315 30 8V28C30 29.6569 28.6569 31 27 31H14"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 12H21M21 12L17 8M21 12L17 16"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 18H9M9 18L13 14M9 18L13 22"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 24H21M21 24L17 20M21 24L17 28"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GlobeIcon = () => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-9 w-9 text-[#0b193d]"
  >
    <circle cx="18" cy="18" r="13.5" stroke="currentColor" strokeWidth="2.2" />
    <ellipse
      cx="18"
      cy="18"
      rx="6.5"
      ry="13.5"
      stroke="currentColor"
      strokeWidth="2.2"
    />
    <path
      d="M5 14H31"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5 22H31"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M18 4.5V31.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function HeroBanner() {
  const slides = [
    {
      id: 1,
      image: "/banner/m1.png",
      titleTop: "BUILDING SUPERIOR WELDING",
      titleBottom: "EQUIPMENTS FOR MODERN INDUSTRIES",
      description:
        "is a trusted name in welding solutions, offering high-quality welding equipment for industrial and commercial needs. With a commitment to innovation and durability, Jainco provides a wide range of welding machines, accessories, and safety gear. Serving industries globally, we ensure precision, efficiency, and reliability in every weld.",
      features: [
        {
          title: ["Efficient", "Processes"],
          desc: "Advanced systems ensuring smooth industrial operations.",
          icon: <ProcessIcon />,
        },
        {
          title: ["Global", "Standards"],
          desc: "Meeting international benchmarks in quality assurance.",
          icon: <GlobeIcon />,
        },
      ],
    },
    {
      id: 2,
      image: "/banner/m2.png",
      titleTop: "BUILDING SUPERIOR WELDING",
      titleBottom: "EQUIPMENTS FOR MODERN INDUSTRIES",
      description:
        "is a trusted name in welding solutions, offering high-quality welding equipment for industrial and commercial needs. With a commitment to innovation and durability, Jainco provides a wide range of welding machines, accessories, and safety gear. Serving industries globally, we ensure precision, efficiency, and reliability in every weld.",
      features: [
        {
          title: ["Efficient", "Processes"],
          desc: "Advanced systems ensuring smooth industrial operations.",
          icon: <ProcessIcon />,
        },
        {
          title: ["Global", "Standards"],
          desc: "Meeting international benchmarks in quality assurance.",
          icon: <GlobeIcon />,
        },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const pointerStartX = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((previous) => (previous + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (previous) => (previous - 1 + slides.length) % slides.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePointerDown = (e) => {
    pointerStartX.current = e.clientX;
  };

  const handlePointerUp = (e) => {
    if (pointerStartX.current === null) return;
    const diff = e.clientX - pointerStartX.current;
    const swipeThreshold = 50;

    if (diff < -swipeThreshold) {
      nextSlide();
    } else if (diff > swipeThreshold) {
      prevSlide();
    }
    pointerStartX.current = null;
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative overflow-hidden bg-[#030d2b] py-12 text-white lg:py-16"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    >
      <div className="relative z-10 mx-auto max-w-8xl px-4 sm:px-6 lg:px-12">
        <div className="select-none space-y-8">
          {/* Top Title Animation with whileInView for mobile scrolling */}
          <motion.div
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-1.5"
          >
            <h1
              className={`${oswald.className} text-3xl font-bold uppercase leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-[3.6rem]`}
            >
              {currentSlide.titleTop}
            </h1>

            <h2
              className={`${oswald.className} text-3xl font-bold uppercase leading-[1.08] tracking-normal text-white sm:text-5xl lg:text-[3.6rem]`}
            >
              {currentSlide.titleBottom}
            </h2>
          </motion.div>

          {/* Main content */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-7">
            {/* Image Container with touchAction pan-y for smooth mobile scrolling */}
            <div
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              style={{ touchAction: "pan-y" }}
              className="relative h-[320px] w-full cursor-grab overflow-hidden bg-[#030d2b] active:cursor-grabbing sm:h-[380px] lg:col-span-6 lg:h-full lg:min-h-[420px]"
            >
              <AnimatePresence>
                <motion.div
                  key={currentIndex}
                  style={{ transformOrigin: "center center" }}
                  initial={{ opacity: 0, scale: 1, x: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1.2,
                    x: 24,
                    transition: {
                      opacity: { duration: 1.4, ease: "easeInOut" },
                      scale: { duration: 8, ease: "linear" },
                      x: { duration: 8, ease: "linear" },
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.24,
                    x: 30,
                    transition: {
                      opacity: { duration: 1.6, ease: "easeInOut" },
                      scale: { duration: 1.6, ease: "linear" },
                      x: { duration: 1.6, ease: "linear" },
                    },
                  }}
                  className="absolute inset-0 h-full w-full will-change-transform"
                >
                  <Image
                    src={currentSlide.image}
                    alt={`Jainco Banner ${currentSlide.id}`}
                    fill
                    priority
                    draggable={false}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="pointer-events-none h-full w-full object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side content with whileInView for mobile scrolling */}
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="flex flex-col justify-between space-y-6 lg:col-span-6"
            >
              <div className="space-y-6">
                <p className="text-lg font-normal leading-[1.7] text-white/90 sm:text-xl">
                  <span className="mr-1.5 font-semibold tracking-wide text-white">
                    JAINCO
                  </span>
                  {currentSlide.description}
                </p>

                <div>
                  <Link
                    href="/about-us"
                    className="inline-flex items-center justify-center bg-[#f6c206] px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-black transition-colors hover:bg-yellow-400"
                  >
                    EXPLORE MORE
                  </Link>
                </div>
              </div>

              {/* Feature cards */}
              <div className="grid grid-cols-1 gap-5 pt-2 sm:grid-cols-2">
                <div
                  className="flex min-h-[235px] flex-col justify-between bg-white px-7 py-8 text-gray-900 shadow-lg"
                  style={{
                    clipPath:
                      "polygon(36px 0, 100% 0, 100% 100%, 0 100%, 0 36px)",
                  }}
                >
                  <div className="space-y-3.5">
                    <div>{currentSlide.features[0].icon}</div>

                    <h3 className="text-[21px] font-semibold leading-[1.25] tracking-tight text-gray-950">
                      {currentSlide.features[0].title[0]} <br />
                      {currentSlide.features[0].title[1]}
                    </h3>

                    <p className="pt-0.5 text-lg font-normal leading-relaxed text-gray-600">
                      {currentSlide.features[0].desc}
                    </p>
                  </div>
                </div>

                <div
                  className="flex min-h-[235px] flex-col justify-between bg-white px-7 py-8 text-gray-900 shadow-lg"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
                  }}
                >
                  <div className="space-y-3.5">
                    <div>{currentSlide.features[1].icon}</div>

                    <h3 className="text-[21px] font-semibold leading-[1.25] tracking-tight text-gray-950">
                      {currentSlide.features[1].title[0]} <br />
                      {currentSlide.features[1].title[1]}
                    </h3>

                    <p className="pt-0.5 text-lg font-normal leading-relaxed text-gray-600">
                      {currentSlide.features[1].desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
