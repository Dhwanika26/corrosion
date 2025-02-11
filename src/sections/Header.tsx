"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo1 from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 backdrop-blur-sm">
      {/* Top bar */}
      <div className="flex justify-center items-center py-3 bg-[#1E1E1E] text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Corrosion Rate & Instrument Life Predictor
        </p>
        <div className="inline-flex gap-1 items-center">
          <Link href="/demo">
            <button className="inline-flex gap-1 items-center text-white px-4 py-2 rounded-md transition">
              <span>Watch a Demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="py-5  shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image src={Logo1} alt="SaaS Logo" height={120} width={120} />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <IoClose className="h-7 w-7 text-black" />
              ) : (
                <GiHamburgerMenu className="h-7 w-7 text-black" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 text-black/65 items-center">
              <Link href="/about">About</Link>
              <Link href="/features">Features</Link>
              <Link href="/customers">Customers</Link>
              <Link href="/updates">Updates</Link>
              <Link href="/help">Help</Link>
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-200 left-0 w-full bg-[#DDCBCA] text-black flex flex-col items-center py-4 space-y-4 md:hidden">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/features" onClick={() => setMobileMenuOpen(false)}>Features</Link>
              <Link href="/customers" onClick={() => setMobileMenuOpen(false)}>Customers</Link>
              <Link href="/updates" onClick={() => setMobileMenuOpen(false)}>Updates</Link>
              <Link href="/help" onClick={() => setMobileMenuOpen(false)}>Help</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
