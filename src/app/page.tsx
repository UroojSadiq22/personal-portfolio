"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Particles from "@/components/movingparticles";
import Hero from "./hero";
import Section1 from "@/components/herosections/section1";
import Section2 from "@/components/herosections/section2";
import Section3 from "@/components/herosections/section3";
import Section4 from "@/components/herosections/section4";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <Particles />
      <div className="relative z-10 bg-[url('/background.png')] overflow-hidden mx-auto min-h-screen">
        <Hero />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />


      </div>

    </>
  );
}
