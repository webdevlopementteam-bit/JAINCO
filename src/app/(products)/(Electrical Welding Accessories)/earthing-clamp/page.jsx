import React from "react";
import { earthingClamp } from "@/lib/data.js";
import ProductListingTemplate from "@/components/ProductListingPage";

export default function EarthingClampPage() {
  return (
    <ProductListingTemplate title="earthing clamp" products={earthingClamp} />
  );
}
