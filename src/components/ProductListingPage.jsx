// src/components/ProductListingTemplate.jsx
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import ProductImageCard from "@/components/ProductImageCard";

// Helper function to format camelCase keys into readable headings
const formatHeading = (key) => {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

export default function ProductListingTemplate({
  title,
  products,
  isGrouped = false,
}) {
  // Agar products ko category ke hisaab se group karna hai
  const groupedEquipment = isGrouped
    ? products.reduce((acc, item) => {
        const cat = item.categoryTitle || "OTHER PRODUCTS";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        return acc;
      }, {})
    : { [title]: products }; // Normal single grid ke liye

  return (
    <>
      <Breadcrumb title={title} />

      <div className="mx-auto w-full bg-[#FAFBFC] px-4 py-8 lg:px-15 space-y-12">
        {Object.entries(groupedEquipment).map(([category, items], catIndex) => (
          <div key={catIndex} className="space-y-6">
            {/* Category Heading (Agar grouped hai toh dikhega) */}
            {isGrouped && (
              <h2 className="text-center text-2xl font-bold tracking-wider text-[#0b132b] lg:text-3xl">
                {category}
              </h2>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch">
              {items.map((holder, index) => (
                <div
                  key={index}
                  className="flex h-full flex-col justify-between overflow-hidden rounded-sm border border-gray-200 bg-white p-5 shadow-sm transition-all duration-1000 ease-out hover:-translate-y-2 hover:border-gray-300 hover:shadow-[0_20px_55px_8px_rgba(107,114,128,0.35)]"
                >
                  <div> 
                    {/* Reusable Image Component */}
                    <ProductImageCard src={holder.image} alt={holder.name} />

                    {/* Product name */}
                    <div className="relative z-10 my-4 rounded-sm bg-[#0b132b] py-3 text-center text-base font-bold tracking-wide text-white">
                      {holder.name}
                    </div>

                    {/* Dynamic Specifications */}
                    <div className="relative z-10 space-y-2 text-[16px] lg:text-[15px] leading-relaxed text-gray-700">
                      {Object.entries(holder)
                        .filter(
                          ([key]) =>
                            key !== "image" &&
                            key !== "name" &&
                            key !== "categoryTitle" &&
                            key !== "category",
                        )
                        .map(([key, value]) => (
                          <p key={key}>
                            <span className="font-bold text-black">
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
        ))}
      </div>
    </>
  );
}
