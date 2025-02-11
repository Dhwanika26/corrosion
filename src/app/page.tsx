import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Features } from "@/sections/Features";
import { FAQs } from "@/sections/FAQs";

export default function Home() {
  return (
  <>
    <Hero/>
    <ProductShowcase/>
    <Features/> 
    <FAQs/>
  </>
  );
}
