"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TopCategories() {
  const categories = [
    {
      id: 1,
      name: "WELDING HOLDER",
      image: "/home/t1.png",
      slug: "welding-holder",
    },
    {
      id: 2,
      name: "EYE PROTECTION",
      image: "/home/t2.png",
      slug: "eye-protection",
    },
    {
      id: 3,
      name: "WELDING HELMET",
      image: "/home/t3.png",
      slug: "welding-helmet",
    },
    {
      id: 4,
      name: "GAS CUTTING TORCH",
      image: "/home/t4.png",
      slug: "gas-cutting-torch",
    },
    {
      id: 5,
      name: "GAS CUTTING NOZZLE",
      image: "/home/t5.png",
      slug: "gas-cutting-nozzle",
    },
  ];

  const features = [
    {
      id: 1,
      title: "INNOVATIVE\nTECHNOLOGY",
      desc: "Advanced solutions for all welding needs.",
      image: "/home/w1.png",
    },
    {
      id: 2,
      title: "INDUSTRY\nEXPERTISE",
      desc: "Years of experience in manufacturing excellence.",
      image: "/home/w2.png",
    },
    {
      id: 3,
      title: "HIGH-QUALITY\nPRODUCTS",
      desc: "Engineered for durability and precision.",
      image: "/home/w5.png",
    },
    {
      id: 4,
      title: "CUSTOMER CENTRIC\nAPPROACH",
      desc: "Focused on reliability and satisfaction.",
      image: "/home/w4.png",
    },
  ];

  return (
    <>
      <section className="w-full bg-[#FAFBFC] py-12 overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1e3f] tracking-wide uppercase">
              TOP CATEGORIES WE HAVE
            </h2>
            <div className="flex items-center justify-center gap-3 mt-3 w-full max-w-[200px]">
              <div className="h-[2px] bg-gray-300 flex-1" />
              <span className="text-[#0a1e3f] text-lg leading-none select-none">
                ✱
              </span>
              <div className="h-[2px] bg-gray-300 flex-1" />
            </div>
          </motion.div>

          {/* 5 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group flex flex-col justify-between border border-[#1b3168]/70 rounded-md p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square flex items-center justify-center p-3 mb-4 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>

                {/* Redirect Link / Button with #D1A60D hover */}
                <Link
                  href={`/${cat.slug}`}
                  className="w-full block text-center bg-[#152a55] text-white font-semibold text-xs sm:text-sm py-3 px-2 rounded uppercase tracking-wider transition-colors duration-200 hover:bg-[#D1A60D] hover:text-black"
                >
                  {cat.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#FFFFFF] py-16 sm:py-20 overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e3f] tracking-wide uppercase">
              Why Choose Us?
            </h2>
            <div className="flex items-center justify-center gap-3 mt-3 w-full max-w-[200px]">
              <div className="h-[1px] bg-gray-300 flex-1" />
              <span className="text-[#0a1e3f] text-base leading-none select-none">
                ✱
              </span>
              <div className="h-[1px] bg-gray-300 flex-1" />
            </div>
          </motion.div>

          {/* 4 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {features.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group custom-card-cut relative aspect-[4/5] w-full cursor-pointer transition-transform duration-300 ease-out hover:translate-y-2 overflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title.replace("\n", " ")}
                  fill
                  priority
                  className="object-cover transition-transform"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Hover Shadow / Dark Overlay in front of image */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                {/* Text Area */}
                <div className="absolute inset-x-0 bottom-7 sm:bottom-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none select-none z-20">
                  <h3 className="text-white text-xl sm:text-[23px] font-black uppercase tracking-wider leading-[1.18] whitespace-pre-line drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-white text-xs sm:text-[13px] font-medium leading-snug whitespace-pre-line drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
