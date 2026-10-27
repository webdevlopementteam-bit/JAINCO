"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export default function ThankYouPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const submitted = sessionStorage.getItem("contactFormSubmitted");

    if (submitted !== "true") {
      router.replace("/contact-us");
      return;
    }

    sessionStorage.removeItem("contactFormSubmitted");
    setIsAuthorized(true);
  }, [router]);

  if (!isAuthorized) {
    return null;
  }

  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-[#030d2b] py-16 text-white">
      {/* Background Radial Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md sm:p-12"
        >
          {/* Success Check Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f6c206] text-black shadow-lg"
          >
            <svg
              className="h-10 w-10 stroke-[3]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          {/* Heading */}
          <h1
            className={`${oswald.className} mb-3 text-3xl font-bold uppercase tracking-normal text-white sm:text-4xl`}
          >
            Thank You For <span className="text-[#f6c206]">Reaching Out!</span>
          </h1>

          {/* Thank You Message */}
          <p className="mb-8 text-sm leading-relaxed text-gray-300 sm:text-base">
            We have received your message successfully. Our team at{" "}
            <strong className="text-white">Jainco</strong> will review your
            inquiry and get back to you as soon as possible.
          </p>

          {/* Action Button */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded bg-[#f6c206] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black shadow-md transition-colors hover:bg-yellow-400"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
