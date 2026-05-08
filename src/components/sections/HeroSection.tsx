"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CutoutCorner } from "@/components/ui/CutoutCorner";

export const HeroSection = () => {
  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-6 px-10 pb-10 min-h-0">
      
      {/* Main Large Card (Left) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-3 relative bg-[#EAF0FF] rounded-[40px] overflow-hidden flex flex-col"
      >
        
        {/* White Cutout for Title (Stair-step shape) */}
        <div className="absolute top-0 left-0 z-20 flex flex-col items-start">
          
          {/* Top Block: "Genetic research" */}
          <div className="relative bg-white rounded-br-[40px] pt-6 pl-8 pr-12 pb-0 w-max">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-[64px] lg:text-[72px] leading-[1.05]  tracking-[-0.03em] text-[#111827]"
            >
              Zelluläre Medizin
            </motion.h1>
            {/* Arrow 1: Top Right of entire cutout */}
            <CutoutCorner size={40} className="top-0 -right-[40px]" />
          </div>

          {/* Bottom Block: "journey" */}
          <div className="relative bg-white rounded-br-[40px] pl-8 pr-14 pb-8 pt-0 w-max">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-[64px] lg:text-[72px] leading-[1.05]  tracking-[-0.03em] text-[#111827]"
            >
              entdecken
            </motion.h1>
            {/* Arrow 2: Inner stair-step corner */}
            <CutoutCorner size={40} className="top-0 -right-[40px]" />
            {/* Arrow 3: Bottom Left of entire cutout */}
            <CutoutCorner size={40} className="-bottom-[40px] left-0" />
          </div>

        </div>

        {/* Central 3D Cell Video */}
        <div className="absolute inset-0 z-0 flex items-center justify-center lg:mt-12 mt-20 pointer-events-none">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 2.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
             className="relative w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] flex items-center justify-center"
           >
              <video 
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3D0GaOMZ6lifG6lcldMl0lrItLx/hf_20260508_000247_bb9e6308-df18-49eb-860f-e8ad5639c1f5.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover mix-blend-multiply opacity-[0.85] filter contrast-110 saturate-125 scale-[1.2] lg:scale-100"
              />
           </motion.div>
        </div>

        {/* Floating Elements (Bottom Left) */}
        <div className="absolute bottom-8 left-8 flex flex-col gap-3 z-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="premium-glass px-5 py-3 rounded-full text-[14px] text-[#334155] font-medium flex items-center gap-3 w-max"
          >
            Vitaldaten Analyse
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="premium-glass pl-5 pr-2 py-2 rounded-full text-[14px] text-[#334155] font-medium flex items-center gap-4 w-max"
          >
            Zelluläre Verjüngung...
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <Image src="https://i.pravatar.cc/150?img=11" alt="User" width={32} height={32} />
            </div>
          </motion.div>
        </div>

        {/* Get Started Button (Bottom Right) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-8 right-8 z-20"
        >
          <button className="premium-glass text-[#3B66F5] px-8 py-4 rounded-full font-semibold  flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            Behandlungen
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>
      </motion.div>

      {/* Right Column (Two Cards) */}
      <div className="flex flex-col gap-6">
        
        {/* Top Right Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 bg-[#F5F8FF] rounded-[40px] p-8 pb-0 relative overflow-hidden flex flex-col justify-between group"
        >
          <div className="relative z-20 w-[70%] pt-27">
            <h2 className="text-[32px] lg:text-[35px] leading-[1.1]  tracking-[-0.02em] text-[#111827]">
              Prävention <br />
              <span className="text-[#3B66F5]">& Longevity</span>
            </h2>
          </div>
          {/* Doctor Image Placeholder */}
          <div className="absolute -bottom-4 -right-4 w-[280px] h-[280px] z-10 transition-transform duration-700 group-hover:scale-105">
             <Image 
               src="https://d8j0ntlcm91z4.cloudfront.net/user_3D0GaOMZ6lifG6lcldMl0lrItLx/hf_20260508_002229_204b793c-cd83-4300-80bc-da728ff7c314.png" 
               alt="Doctor" 
               fill
               className="object-cover object-top mix-blend-darken scale-110"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#F5F8FF] via-transparent to-transparent h-full w-full"></div>
          </div>
        </motion.div>

        {/* Bottom Right Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 bg-[#F5F8FF] rounded-[40px] p-8 relative overflow-hidden flex flex-col justify-end group"
        >
           {/* DNA Video */}
           <div className="absolute inset-0 left-10 z-0 opacity-80 transition-transform duration-700 group-hover:scale-105">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover object-center mix-blend-multiply opacity-[0.95]"
              >
                <source src="/hero/biomarker.mp4" type="video/mp4" />
              </video>
             <div className="absolute inset-0 bg-gradient-to-r from-[#F5F8FF] via-transparent to-transparent"></div>
           </div>
           
           <div className="relative z-20 flex flex-col gap-1">
             <p className="text-[#64748B] font-medium text-[20px]">Biomarker</p>
             <h2 className="text-[30px] lg:text-[45px] leading-none tracking-[-0.03em] text-[#111827]">150+</h2>
           </div>
        </motion.div>

      </div>
    </div>
  );
};
