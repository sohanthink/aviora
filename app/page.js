import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import WhatWeProvide from "@/components/WhatWeProvide";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhatWeProvide />
    </>
  );
}
