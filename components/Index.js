"use client";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Articles } from "@/components/Articles";
import { Ayurveda } from "@/components/Ayurveda";
import { AyurvedaBanner } from "@/components/AyurvedaBanner";
import { Evolution } from "@/components/Evolution";
import Footer from "@/components/Footer";
import { Global } from "@/components/Global";
import { Hero } from "@/components/Hero";
import Legacy from "@/components/Legacy";
import { Legacy_Products } from "@/components/Legacy_Products";
import Navbar_Component from "@/components/Navbar_Component";
import Newsletter from "@/components/Newsletter";
import { Our_Brands } from "@/components/Our_Brands";
import LegacyComponent from "./LegacyComponent";

const Index = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleIntersection = (sectionId, inView) => {
    if (inView) {
      setActiveSection(sectionId);
    } else {
      setActiveSection((prev) => prev);
    }
  };

  return (
    <main>
      <Navbar_Component activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero handleIntersection={handleIntersection} />
      {/* <Legacy handleIntersection={handleIntersection} /> */}
      <LegacyComponent handleIntersection={handleIntersection}/>
      <Our_Brands handleIntersection={handleIntersection} />
      <Global handleIntersection={handleIntersection} />
      {/* <Evolution /> */}
      <Legacy_Products />
      <Ayurveda handleIntersection={handleIntersection} />
      <AyurvedaBanner />
      {/* <Newsletter /> */}
      {/* <Articles /> */}
      <Footer />
    </main>
  );
};

export default Index;
