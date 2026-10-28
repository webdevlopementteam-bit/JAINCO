import React from "react";
import { weldingCables } from "@/lib/data.js";
import ProductListingTemplate from "@/components/ProductListingPage";

export default function WeldingCablePage() {
  return (
    <ProductListingTemplate title="welding cable" products={weldingCables} />
  );
}
