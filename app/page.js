import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import WhatWeProvide from "@/components/WhatWeProvide";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhatWeProvide />
      <Pricing />
      <Footer />
    </>
  );
}
