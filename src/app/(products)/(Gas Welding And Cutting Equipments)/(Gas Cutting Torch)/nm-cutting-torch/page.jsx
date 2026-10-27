import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import ProductImageCard from "@/components/ProductImageCard";
import { nmCuttingTorches } from "@/lib/data.js";
import Image from "next/image";

// Helper function to format camelCase keys into readable headings
const formatHeading = (key) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

function Page() {
  return (
    <>
      <Breadcrumb title="NM Cutting Torch" />

      <div className="mx-auto w-full bg-[#FAFBFC] px-4 py-8 lg:px-15">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
          {nmCuttingTorches.map((holder, index) => (
            <div
              key={index}
              className="flex h-full flex-col justify-between overflow-hidden rounded-sm border border-gray-200 bg-white p-5 shadow-sm transition-all duration-1000 ease-out hover:-translate-y-2 hover:border-gray-300 hover:shadow-[0_20px_55px_8px_rgba(107,114,128,0.35)]"
            >
              <div>
                {/* Reusable Image Component */}
                <ProductImageCard src={holder.image} alt={holder.name} />

                {/* Product name */}
                <div className="relative z-10 mb-4 rounded-sm bg-[#0b132b] py-3 text-center text-base font-bold tracking-wide text-white">
                  {holder.name}
                </div>

                {/* Certification Icon / ISI Logo Section (Jaise image mein dikh raha hai) */}
                {holder.certificationIcon && (
                  <div className="my-4 flex flex-col items-center justify-center border-y border-gray-100 py-3">
                    <div className="relative h-32 w-38">
                      <Image
                        src={holder.certificationIcon}
                        alt="ISI Certification"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Product specifications (Dynamic mapping - certificationIcon filtered out) */}
                <div className="relative z-10 space-y-2 text-[16px] lg:text-[15px] leading-relaxed text-gray-700">
                  {Object.entries(holder)
                    .filter(
                      ([key]) =>
                        key !== "image" &&
                        key !== "name" &&
                        key !== "categoryTitle" &&
                        key !== "category" &&
                        key !== "certificationIcon",
                    )
                    .map(([key, value]) => (
                      <p key={key}>
                        <span className="font-bold text-black uppercase">
                          {formatHeading(key)}
                        </span>{" "}
                        – {value}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
