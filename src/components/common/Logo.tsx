import { motion } from "motion/react";

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      {/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
      <img
        src="/vite.svg"
        alt="Logo"
        className=" h-7 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm"
        width={30}
        height={30}
      />

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" flex flex-col whitespace-pre text-black dark:text-white"
      >
        <span className="font-medium text-lg">Dashboard</span>
      </motion.span>
    </a>
  );
};