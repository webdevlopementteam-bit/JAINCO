import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductImageCard({ src, alt }) {
  return (
    <Link
      href="/contact-us"
      className="group relative mb-5 flex h-72 sm:h-60 w-full items-center justify-center overflow-hidden bg-white block cursor-pointer"
    >
      {/* Diagonal grey band */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 mix-blend-multiply bg-[linear-gradient(225deg,transparent_43%,#ededed_43%,#ededed_57%,transparent_57%)] bg-[length:300%_300%] bg-[position:0%_100%] transition-none group-hover:bg-[position:100%_0%] group-hover:transition-[background-position] group-hover:duration-[900ms] group-hover:ease-in-out"
      />

      <div className="relative h-full w-full p-4">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="relative z-10 object-contain transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    </Link>
  );
}
