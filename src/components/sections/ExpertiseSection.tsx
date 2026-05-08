"use client";

import { motion } from "framer-motion";
import { Dna, Syringe, Sparkles } from "lucide-react";

export const ExpertiseSection = () => {
  return (
    <section className="w-full px-10 py-32 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mb-16"
      >
        <div className="premium-glass inline-block px-5 py-2 rounded-full text-[14px] text-[#3B66F5] font-bold tracking-wide mb-6">
          MEDIZIN DER ZUKUNFT
        </div>
        <h2 className="text-[48px] lg:text-[64px] leading-[1.05] tracking-[-0.03em] text-[#111827]">
          Wissenschaftlich fundierte <br />
          <span className="text-[#3B66F5]">Longevity-Protokolle</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F5F8FF] rounded-[40px] p-10 flex flex-col gap-8 hover:scale-[1.02] transition-transform duration-500"
        >
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#3B66F5]">
            <Sparkles className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-[28px] font-semibold tracking-tight mb-4 text-[#111827]">Stammzellen & Exosomen</h3>
            <p className="text-[16px] leading-relaxed text-[#64748B] font-medium">
              Revolutionäre zelluläre Erneuerung für Gelenke, Haut und systemisches Anti-Aging auf höchstem medizinischem Niveau.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#EAF0FF] rounded-[40px] p-10 flex flex-col gap-8 hover:scale-[1.02] transition-transform duration-500"
        >
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#3B66F5]">
            <Dna className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-[28px] font-semibold tracking-tight mb-4 text-[#111827]">Epi-Genetisches Profiling</h3>
            <p className="text-[16px] leading-relaxed text-[#64748B] font-medium">
              Präzisionsmedizin basierend auf Ihrem individuellen genetischen Code zur präventiven Gesundheitsoptimierung.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#F5F8FF] rounded-[40px] p-10 flex flex-col gap-8 hover:scale-[1.02] transition-transform duration-500"
        >
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#3B66F5]">
            <Syringe className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-[28px] font-semibold tracking-tight mb-4 text-[#111827]">NAD+ & IV-Therapien</h3>
            <p className="text-[16px] leading-relaxed text-[#64748B] font-medium">
              Intravenöse Biohacking-Protokolle für maximale Zellenergie, mentale Klarheit und messbare Leistungssteigerung.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
