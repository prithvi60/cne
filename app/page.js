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

export default function Home() {
  return (
    <main>
      <Navbar_Component/>
      <Hero />
      <Legacy />
      <Our_Brands />
      <Global />
      {/* <Evolution /> */}
      <Legacy_Products />
      <Ayurveda />
      <AyurvedaBanner />
      {/* <Newsletter /> */}
      {/* <Articles /> */}
      <Footer/>
    </main>
  );
}
