import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Sur Al-Tariaq Pharmaceutical Company - Transforming Healthcare",
  description: "Sur Al-Tariaq Pharmaceutical Company is dedicated to innovation and excellence in pharmaceuticals, delivering high-quality healthcare solutions to improve lives worldwide.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <Testimonial />
      <Pricing />
      <Contact />
    </main>
  );
}
