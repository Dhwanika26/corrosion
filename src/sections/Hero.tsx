"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/robot.png";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="md:flex md:justify-between items-center">
          {/* Text Content */}
          <div className="md:w-[478px] text-center md:text-left">
            <div className="tag text-black font-semibold text-lg">Version</div>
            <h1 className="text-5xl md:text-7xl font-sans tracking-tighter bg-gradient-to-b from-black to-black text-transparent bg-clip-text mt-6">
              Pathway to Productivity
            </h1>
            <p className="text-lg text-black tracking-tight mt-6">
              Extend the life of your metal assets! Our corrosion prediction software provides reliable insights to prevent damage and reduce maintenance costs.
            </p>
            {/* Buttons */}
            <div className="flex gap-4 items-center mt-8">
              <button className="px-6 py-3 bg-[#0A6E4F] text-white rounded-lg font-medium hover:bg-[#085A3D] transition-all">
                Learn More
              </button>
              <Link href="/demo" className="flex items-center gap-2 text-black font-medium hover:underline">
                <span>Try it</span>
                <ArrowIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          {/* Image Section */}
          <div className="mt-20 md:mt-0 md:h-[600px] md:flex-1 relative flex justify-center md:justify-end">
            <img 
              src={cogImage.src} 
              alt="Cog Image" 
              className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
