import { Articles } from "@/components/Articles";
import { Ayurveda } from "@/components/Ayurveda";
import { AyurvedaBanner } from "@/components/AyurvedaBanner";
import { Evolution } from "@/components/Evolution";
import { Global } from "@/components/Global";
import { Hero } from "@/components/Hero";
import Legacy from "@/components/Legacy";
import { Legacy_Products } from "@/components/Legacy_Products";
import Newsletter from "@/components/Newsletter";
import { Our_Brands } from "@/components/Our_Brands";

export default function Home() {
  return (
    <main>
      <Hero />
      <Legacy />
      <Our_Brands />
      <Global />
      <Evolution />
      <Legacy_Products />
      <Ayurveda />
      <AyurvedaBanner />
      <Newsletter />
      <Articles />
    </main>
  );
}
