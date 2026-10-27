// src/app/welding-protection/page.jsx (Aapka path apne hisaab se dekh lein)
import React from "react";
import { weldingProtectionEquipment } from "@/lib/data.js";
import ProductListingTemplate from "@/components/ProductListingPage";

export default function Page() {
  return (
    <ProductListingTemplate
      title="Welding hand screen/welding helmet"
      products={weldingProtectionEquipment}
      isGrouped={true} // Ye automatic category-wise section bana dega
    />
  );
}
