// src/app/welding-holder/page.jsx (Aapka path apne hisaab se check kar lein)
import React from "react";
import { eyeProtectionEquipment } from "@/lib/data.js";
import ProductListingTemplate from "@/components/ProductListingPage";

export default function WeldingHolderPage() {
  return (
    <ProductListingTemplate
      title="eyes protection"
      products={eyeProtectionEquipment}
      isGrouped={false}
    />
  );
}
