"use client";

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

export default function Breadcrumb({ title = "About Us" }) {
  return (
    <section className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image without heavy gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('/breadcrumb/b1.png')` }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex flex-col justify-center">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wider uppercase mb-3 drop-shadow-md"
        >
          {title}
        </motion.h1>

        {/* Animated Navigation Trail */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex items-center gap-2.5 text-sm sm:text-base text-gray-200 font-medium drop-shadow"
        >
          <Link
            href="/"
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-white transition-all duration-200 shadow-sm"
          >
            <Home className="w-4 h-4 text-white" />
            <span>Home</span>
          </Link>

          <span className="text-white/80 select-none font-bold">»</span>

          <span className="text-white capitalize font-semibold tracking-wide">
            {title}
          </span>
        </motion.nav>
      </div>
    </section>
  );
}
