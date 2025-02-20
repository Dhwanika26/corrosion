// page.tsx
import type { Metadata } from 'next';
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Features } from "@/sections/Features";
import { FAQs } from "@/sections/FAQs";

export const metadata: Metadata = {
  title: "My Page",
  description: "This is a page description",
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Features />
      <FAQs />
    </>
  );
}
