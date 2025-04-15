import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar } from "./sidebar";
import { AnimatePresence, motion } from "framer-motion";

export const Sheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button className="z-50" onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full bg-black/30 h-screen fixed top-[66px] left-0 !z-[1]"
          onClick={() => setIsOpen(!isOpen)}
        ></motion.div>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.1 }}
            className="fixed top-[66px] left-0 h-full w-[200px] z-[1]"
          >
            <Sidebar type="black" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
