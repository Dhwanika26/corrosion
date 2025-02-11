"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/robot.png";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[white] overflow_clip ">
      <div className="container">
        <div className="md:flex md:justify-between items-center">
          <div className="md:w-[478px]">
            <div className="tag text-black/100">Version</div>
            <h1 className="text-5xl md:text-7xl font-sans tracking-tighter bg-gradient-to-b from-black to-[black] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-[20px] text-black/100 tracking-tight mt-6">
              Extend the life of your metal assets! Our corrosion prediction software provides reliable insights to prevent damage and reduce maintenance costs.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary bg-[#0A6E4F]">Learn More</button>
              <Link href="/demo">
                <button className="btn btn-text gap-1">
                  <span className="text-black/100">Try it</span>
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
          {/* Updated div with only the cog image */}
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <img 
              src={cogImage.src} 
              alt="Cog Image" 
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};
