// src/app/welding-holder/page.jsx (Aapka path apne hisaab se check kar lein)
import React from "react";
import { plasmaSparesAndHeads } from "@/lib/data.js";
import ProductListingTemplate from "@/components/ProductListingPage";

export default function WeldingHolderPage() {
  return (
    <ProductListingTemplate
      title="plasma consumable"
      products={plasmaSparesAndHeads}
      isGrouped={false}
    />
  );
}
