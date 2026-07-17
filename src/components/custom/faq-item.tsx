"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, LucideIcon } from "lucide-react";
import React from "react";

interface FaqItemProps {
  question: string;
  answer: string;
  icon: LucideIcon;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ question, answer, icon: Icon, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="w-full border border-neutral-100 bg-white rounded-xl shadow-sm overflow-hidden mb-2.5 transition-colors">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between p-4 text-left outline-none hover:bg-neutral-50/50 active:bg-neutral-50 transition-all focus-visible:bg-neutral-50/70"
      >
        <div className="flex items-center gap-3 pr-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <Icon className="h-4.5 w-4.5 stroke-[2]" />
          </div>
          <span className="text-[13.5px] font-semibold text-neutral-800 leading-snug">
            {question}
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-neutral-400 stroke-[2] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { height: { duration: 0.25, ease: "easeOut" }, opacity: { duration: 0.15 } },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { height: { duration: 0.25, ease: "easeIn" }, opacity: { duration: 0.1 } },
            }}
            className="overflow-hidden"
          >
            <div className="border-t border-neutral-50 px-4 pb-4.5 pt-3.5 text-xs leading-relaxed text-neutral-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
