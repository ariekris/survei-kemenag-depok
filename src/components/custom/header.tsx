"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 flex h-16 w-full items-center px-4 py-3 select-none transition-all duration-300 ${isScrolled
        ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
        : "bg-transparent shadow-none"
        }`}
    >
      {/* Left Section: Ministry Logo & Text */}
      <div className="flex items-center gap-2 shrink-0">
        <Image
          src="/images/logo-kemenag.png"
          alt="Logo Kementerian Agama"
          width={30}
          height={28}
          className="h-7 w-auto object-contain shrink-0"
          priority
        />
        <div className="flex flex-col">
          <span className="text-[12px] font-semibold text-[#333333] leading-[1.2] whitespace-nowrap">
            Kementerian Agama
          </span>
          <span className="text-[10px] font-normal text-[#555555] leading-[1.2] whitespace-nowrap">
            Kota Depok
          </span>
        </div>
      </div>

      {/* Flexible Spacer */}
      <div className="flex-1" />

      {/* Right Logos Section: Kemenag Berdampak and Pusaka */}
      <div className="flex items-center gap-4 shrink min-w-0 ml-3">
        {/* Kemenag Berdampak (Center) */}
        <Image
          src="/images/kemenag-berdampak-logo.png"
          alt="Logo Kemenag Berdampak"
          width={83}
          height={24}
          className="h-6 w-auto max-w-full object-contain shrink min-w-0"
          priority
        />
        {/* Pusaka (Right) */}
        <Image
          src="/images/pusaka-logo.png"
          alt="Logo Pusaka"
          width={21}
          height={24}
          className="h-8 w-auto object-contain shrink-0"
          priority
        />
      </div>
    </header>
  );
}


