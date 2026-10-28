// src/app/welding-holder/page.jsx (Aapka path apne hisaab se check kar lein)
import React from "react";
import { argonCo2FlowMeters } from "@/lib/data.js";
import ProductListingTemplate from "@/components/ProductListingPage";

export default function WeldingHolderPage() {
  return (
    <ProductListingTemplate
      title="argon co₂ flow meter"
      products={argonCo2FlowMeters}
      isGrouped={false}
    />
  );
}
