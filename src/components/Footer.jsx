"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#071328] text-white pt-12 pb-6 px-4 sm:px-6 lg:px-12 font-sans">
      <div className="mx-auto max-w-[90rem]">
        {/* Top Banner Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-gray-700/60 pb-10 mb-12 gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-xl lg:text-4xl font-extrabold uppercase tracking-wider text-white">
              We Are The Future
            </h3>
            <h2 className="text-2xl md:text-xl lg:text-4xl font-extrabold uppercase tracking-wide text-white mt-1">
              Exporter & Industrial Manufacturing
            </h2>
          </div>
          <div>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors shadow-md text-lg md:text-xl"
            >
              Get In Touch
              <span className="text-lg leading-none">→</span>
            </Link>
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative w-48 h-18 sm:w-56 sm:h-20">
            <Image
              src="/logo/logo.png"
              alt="JAINCO Logo"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-y-10 pb-12 border-b border-gray-700/60">
          {/* Column 1: Address & Contact */}
          <div className="space-y-6 lg:w-[28%]">
            <div>
              <h4 className="text-lg md:text-xl font-bold tracking-wider uppercase text-white mb-3">
                ADDRESS :
              </h4>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-400 shrink-0" />
                <span>
                  Plot -55, Pocket I-1, Sector-5, Bawana Industrial Area New
                  Delhi - 110039, Delhi, India
                </span>
              </p>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-bold tracking-wider uppercase text-white mb-3">
                CONTACT :
              </h4>
              <ul className="space-y-2 text-lg md:text-xl text-gray-300">
                <li>
                  <a
                    href="tel:+919811021632"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 text-gray-400 shrink-0" />
                    +91 98110-21632
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:weldingaxepert@gmail.com"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                    weldingaxepert@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-bold tracking-wider uppercase text-white mb-3">
                GET IN TOUCH
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/people/Jainco-Welding-Safety-Products/61573620396525/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-white text-gray-900 rounded flex items-center justify-center hover:bg-gray-200 transition-colors shadow"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:w-[18%]">
            <h4 className="text-lg md:text-xl font-bold tracking-wider uppercase text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-lg md:text-xl text-gray-300">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-xs font-bold shrink-0 shadow">
                    →
                  </span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-xs font-bold shrink-0 shadow">
                    →
                  </span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-xs font-bold shrink-0 shadow">
                    →
                  </span>
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-xs font-bold shrink-0 shadow">
                    →
                  </span>
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:w-[22%]">
            <h4 className="text-lg md:text-xl font-bold tracking-wider uppercase text-white mb-4">
              Products
            </h4>
            <ul className="space-y-3 text-lg md:text-xl text-gray-300">
              <li>
                <Link
                  href="/welding-holder"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-xs font-bold shrink-0 shadow">
                    →
                  </span>
                  <span>Welding Holder</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/manual-cutting-blow-pipe"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-xs font-bold shrink-0 shadow">
                    →
                  </span>
                  <span>Manual Cutting Blow Pipe</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/gas-cutting-nozzle"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-xs font-bold shrink-0 shadow">
                    →
                  </span>
                  <span>Gas Cutting Nozzle</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tig-torches"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-xs font-bold shrink-0 shadow">
                    →
                  </span>
                  <span>TIG</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/mig-torches"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-xs font-bold shrink-0 shadow">
                    →
                  </span>
                  <span>MIG/MAG</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cable-connector"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-white text-gray-900 flex items-center justify-center text-xs font-bold shrink-0 shadow">
                    →
                  </span>
                  <span>Cable Connector</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About Us & Map Preview Card */}
          <div className="space-y-4 lg:w-[26%]">
            <h4 className="text-lg md:text-xl font-bold tracking-wider uppercase text-white mb-2">
              About Us
            </h4>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              JAINCO is a trusted name in welding solutions, offering
              high-quality welding equipment for industrial and commercial
              needs. With a commitment to innovation and durability, Jainco
              provides a wide range of welding machines, accessories, and safety
              gear.
            </p>

            {/* Map Mockup / iframe container */}
            <div className="relative w-full h-40 rounded border border-gray-700 bg-gray-800 overflow-hidden shadow-inner">
              <iframe
                title="Jainco Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.893198086937!2d77.0812!3d28.8182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQ5JzA1LjUiTiA3N8KwMDQnNTIuMyJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center text-lg md:text-xl text-gray-400 text-center gap-2">
          <p>
            Copyright © 2025 JAINCO All Right Reserved | Powered by{" "}
            <a
              href="https://www.cybertricksmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-blue-400 hover:text-[#FBC50A]"
            >
              CYBERTRICKS Media Pvt Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
