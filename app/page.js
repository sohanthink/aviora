import Banner from "@/components/Banner";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import WhatWeProvide from "@/components/WhatWeProvide";
import WhyAvoira from "@/components/WhyAvoira";
import AttendanceSystem from "@/components/AttendanceSystem";
import MobileApp from "@/components/MobileApp";
import Benefits from "@/components/Benefits";
import Customization from "@/components/Customization";
import FAQ from "@/components/FAQ";
import AppointmentLocationTracking from "@/components/AppointmentLocationTracking";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhatWeProvide />
      <Features />
      <AttendanceSystem />
      <AppointmentLocationTracking />
      <MobileApp />
      <Benefits />
      <Customization />
      <WhyAvoira />
      <FAQ />
      <Pricing />
      <Footer />
    </>
  );
}
