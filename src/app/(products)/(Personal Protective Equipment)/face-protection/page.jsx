// src/app/welding-holder/page.jsx (Aapka path apne hisaab se check kar lein)
import React from "react";
import { faceProtection } from "@/lib/data.js";
import ProductListingTemplate from "@/components/ProductListingPage";

export default function WeldingHolderPage() {
  return (
    <ProductListingTemplate
      title="face protection"
      products={faceProtection}
      isGrouped={false}
    />
  );
}
