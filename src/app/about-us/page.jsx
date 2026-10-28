import AboutUs from "@/components/About";
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

function page() {
  return (
    <>
      <Breadcrumb title="about us" />
      <AboutUs />
    </>
  );
}

export default page;
