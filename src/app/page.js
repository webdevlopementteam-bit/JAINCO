import AboutUs from "@/components/About";
import HeroBanner from "@/sections/Hero";
import OurClients from "@/sections/OurClients";
import TopCategories from "@/sections/TopCategories";
import React from "react";

function page() {
  return (
    <>
      <HeroBanner />
      <AboutUs />
      <TopCategories />
      <OurClients />
    </>
  );
}

export default page;
