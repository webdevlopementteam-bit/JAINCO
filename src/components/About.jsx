"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center mb-8 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1e3f] tracking-wide uppercase">
            About Us
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2 w-full max-w-[200px]">
            <div className="h-[2px] bg-gray-300 flex-1" />
            <span className="text-[#0a1e3f] text-lg leading-none select-none">
              ✱
            </span>
            <div className="h-[2px] bg-gray-300 flex-1" />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-center">
          {/* Left Side: Combined Collage Image (Slides from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 w-full flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[720px] aspect-[4/5] lg:aspect-[1.15/1]">
              <Image
                src="/about/a1.png"
                alt="Jainco Welding Industry Experience"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
              />
            </div>
          </motion.div>

          {/* Right Side: Text & Info (Slides from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Animated Floating Heading */}
            <h1 className="animate-up-down text-3xl sm:text-4xl lg:text-[40px] font-black uppercase text-[#0c2340] leading-[1.18] tracking-tight">
              Welcome to Jainco – Your Trusted Welding Solutions Partner
            </h1>

            {/* Paragraph 1 */}
            <p className="mt-6 text-gray-700 text-sm sm:text-base lg:text-xl leading-relaxed text-justify">
              At <strong className="font-bold text-gray-900">JAINCO</strong>, we
              specialize in manufacturing high-quality welding equipment
              designed for precision, durability, and efficiency. As a leading
              name in the industry, we are committed to providing innovative
              welding solutions that meet the evolving needs of industrial and
              commercial sectors.
            </p>

            {/* WHO WE ARE Section */}
            <div className="mt-8">
              <div className="inline-block border-b-2 border-gray-300 pb-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#0c2340] tracking-wide">
                  Who We Are?
                </h3>
              </div>

              {/* Paragraph 2 */}
              <p className="mt-4 text-gray-700 text-sm sm:text-base lg:text-xl leading-relaxed text-justify">
                Founded in 1978 with a vision to deliver excellence, JAINCO
                operates as a{" "}
                <strong className="font-bold text-gray-900">
                  manufacturer
                </strong>{" "}
                with a{" "}
                <strong className="font-bold text-gray-900">
                  state-of-the-art factory
                </strong>{" "}
                in{" "}
                <strong className="font-bold text-gray-900">
                  Bawana Industrial Area, New Delhi
                </strong>
                . Our expertise lies in producing a wide range of{" "}
                <strong className="font-bold text-gray-900">
                  gas regulators, Hose pipe, and welding hand shield and goggles
                  etc
                </strong>
                , ensuring top-notch quality and performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
