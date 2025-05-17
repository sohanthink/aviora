import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import WhatWeProvide from "@/components/WhatWeProvide";
import WhyAvoira from "@/components/WhyAvoira";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhatWeProvide />
      <Features />
      <WhyAvoira />
      <Pricing />
      <Footer />
    </>
  );
}
