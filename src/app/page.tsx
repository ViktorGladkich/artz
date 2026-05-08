"use client";

import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";

export default function Home() {
  return (
    <main className="w-full bg-white text-[#111827] font-sans">
      {/* Hero Container */}
      <section className="w-full h-screen flex flex-col overflow-hidden">
        <Navbar />
        <HeroSection />
      </section>

      {/* Subsequent Sections */}
      <ExpertiseSection />
    </main>
  );
}
