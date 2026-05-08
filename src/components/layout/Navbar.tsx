"use client";

import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 pt-8 pb-4">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="premium-glass text-[#3B66F5] px-6 py-2.5 rounded-full font-bold text-[15px] tracking-wide"
      >
        CELLVITA
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-10 font-medium text-[15px] text-[#334155]"
      >
        <a href="#" className="hover:text-[#3B66F5] transition-colors">Über uns</a>
        <a href="#" className="hover:text-[#3B66F5] transition-colors">Preise</a>
        <a href="#" className="hover:text-[#3B66F5] transition-colors">FAQ</a>
        <button className="premium-glass ml-2 px-6 py-2.5 rounded-full font-bold text-[13px] tracking-wider text-[#3B66F5] hover:scale-105 transition-transform duration-300">
          TERMIN BUCHUNG
        </button>
      </motion.div>
    </nav>
  );
};
