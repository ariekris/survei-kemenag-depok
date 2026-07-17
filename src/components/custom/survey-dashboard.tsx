"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

export function SurveyDashboard() {
  const handleSurveyClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col flex-1 bg-gradient-to-b from-[#f4f9f6] via-[#ffffff] to-[#f4f9f6] select-none pb-8 mt-[-64px]">
      {/* Content Container (no horizontal padding on the container itself to allow edge-to-edge illustration) */}
      <div className="flex flex-col items-center w-full pt-[96px]">

        {/* Title, Subtitle, and Period Badge padded container */}
        <div className="flex flex-col items-center text-center w-full px-4 relative z-10">
          {/* Title & Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center max-w-[320px]"
          >
            <h1 className="text-[28px] font-semibold text-[#333333] leading-[1.2] tracking-normal">
              Bantu kami meningkatkan <br />
              <span className="text-[#155821]">kualitas pelayanan</span>
            </h1>
            <p className="text-[14px] font-normal text-neutral-500 mt-2.5">
              melalui survei persepsi masyarakat
            </p>
          </motion.div>

          {/* Period Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2.5 rounded-full border border-[#d1e2d4] bg-[#eff5f0] px-5 py-2 mt-5"
          >
            <Calendar className="h-4 w-4 text-[#155821] stroke-[2] shrink-0" />
            <span className="text-[11.5px] text-[#155821] leading-none whitespace-nowrap">
              <span className="font-normal">Periode </span>
              <span className="font-medium">1 Juli - 30 September 2026</span>
            </span>
          </motion.div>
        </div>

        {/* Illustration & Badge Area - 100% of mobile layout width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[512/559] mt-[-110px] flex justify-center"
        >
          {/* Background Illustration (starts at y = 0) */}
          <div className="absolute top-[-220px] left-0 w-full h-[680px] z-0 pointer-events-none">
            <Image
              src="/images/hero-bg.png"
              alt="Gedung Kemenag"
              fill
              className="object-cover object-top pointer-events-none select-none"
              priority
            />
          </div>

          {/* Subject Illustration overlay (Centered within mobile container) */}
          <div className="absolute bottom-[8%] w-[90%] aspect-[512/341] z-10">
            <Image
              src="/images/hero-subject.png"
              alt="Petugas Kemenag Depok"
              fill
              className="object-contain pointer-events-none select-none"
              priority
            />
          </div>

          {/* Clock Pill overlapping at the bottom */}
          <button
            type="button"
            className="absolute bottom-[1.5%] z-20 flex items-center gap-2.5 rounded-full border border-[#d1e2d4] bg-white px-14 py-2.5 shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:scale-[1.02] active:scale-[0.98] hover:bg-neutral-50/80 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#155821]/20 outline-none"
            aria-label="Estimasi waktu pengisian"
          >
            <Clock className="h-4 w-4 text-[#155821] stroke-[2.5]" />
            <span className="text-[12.5px] font-medium text-[#333333] tracking-wide">
              Hanya butuh waktu 3-5 menit
            </span>
          </button>
        </motion.div>

        {/* Steps Section: Hanya 3 langkah mudah */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.0,
            duration: 0.5,
            ease: "easeOut"
          }}
          className="w-full flex flex-col items-center mt-16 px-4 pb-12 select-none"
        >
          {/* Section Title */}
          <h2 className="text-[20px] font-semibold text-[#333333] leading-[1.2] text-center">
            Hanya 3 langkah mudah
          </h2>

          {/* Timeline Container */}
          <div className="relative w-full flex justify-between px-6 mt-12">
            {/* Connecting Line (starts at center of circle 1 and ends at center of circle 3) */}
            <div className="absolute left-[calc(24px+36px)] right-[calc(24px+36px)] top-[36px] h-[2px] bg-[#0B6B38] z-0" />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center flex-1 max-w-[110px]">
              {/* Circle */}
              <div className="relative w-[72px] h-[72px] rounded-full border border-[#D6EBDD] bg-[#F4FBF7] flex items-center justify-center shadow-sm">
                {/* Number Badge */}
                <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0B6B38] text-white flex items-center justify-center text-[14px] font-semibold shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
                  1
                </div>
                {/* Icon */}
                <Image
                  src="/images/step-1-icon.png"
                  alt="Langkah 1"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-[14px] font-semibold text-[#333333] mt-5 text-center leading-[1.4]">
                Pilih survei
              </h3>
              {/* Description */}
              <p className="text-[14px] font-normal text-[#666666] mt-2.5 text-center leading-[1.5]">
                Silakan pilih tombol survei dibawah
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center flex-1 max-w-[110px]">
              {/* Circle */}
              <div className="relative w-[72px] h-[72px] rounded-full border border-[#D6EBDD] bg-[#F4FBF7] flex items-center justify-center shadow-sm">
                {/* Number Badge */}
                <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0B6B38] text-white flex items-center justify-center text-[14px] font-semibold shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
                  2
                </div>
                {/* Icon */}
                <Image
                  src="/images/step-2-icon.png"
                  alt="Langkah 2"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-[14px] font-semibold text-[#333333] mt-5 text-center leading-[1.4]">
                Isi Data Responden & Penilaian
              </h3>
              {/* Description */}
              <p className="text-[14px] font-normal text-[#666666] mt-2.5 text-center leading-[1.5]">
                Identitas beserta rating 1-6 bintang
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center flex-1 max-w-[110px]">
              {/* Circle */}
              <div className="relative w-[72px] h-[72px] rounded-full border border-[#D6EBDD] bg-[#F4FBF7] flex items-center justify-center shadow-sm">
                {/* Number Badge */}
                <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0B6B38] text-white flex items-center justify-center text-[14px] font-semibold shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
                  3
                </div>
                {/* Icon */}
                <Image
                  src="/images/step-3-icon.png"
                  alt="Langkah 3"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              {/* Title */}
              <h3 className="text-[14px] font-semibold text-[#333333] mt-5 text-center leading-[1.4]">
                Selesai & Kirim
              </h3>
              {/* Description */}
              <p className="text-[14px] font-normal text-[#666666] mt-2.5 text-center leading-[1.5]">
                Terkirim otomatis
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer Section */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 0.45,
            ease: "easeOut"
          }}
          className="w-full flex flex-col items-center bg-white pt-[32px] pb-[48px] px-6 select-none"
        >
          {/* Organization Name */}
          <h3 className="text-[12px] font-semibold text-[#333333] leading-[0] text-center max-w-[320px]">
            Kantor Kementerian Agama Kota Depok
          </h3>

          {/* Address */}
          <p className="text-[12px] font-normal text-[#666666] leading-[1.5] text-center max-w-[320px] mt-6">
            Jalan Boulevard Raya - Kota Kembang Tirtajaya, Sukmajaya, Kota Depok, Jawa Barat 16412
          </p>

          {/* Copyright */}
          <p className="text-[12px] font-normal text-[#999999] text-center mt-[32px] pb-[160px]">
            © 2026 Kementerian Agama Kota Depok
          </p>
        </motion.footer>

      </div>

      {/* Floating Sticky Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.98, x: "-50%" }}
        animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
        transition={{
          delay: 2.0,
          duration: 0.45,
          ease: "easeOut"
        }}
        className="fixed bottom-[calc(12px+env(safe-area-inset-bottom))] left-1/2 w-[calc(100%-24px)] max-w-[420px] bg-white rounded-[28px] p-4 shadow-[0_10px_40px_rgba(0,0,0,0.12)] z-50 flex flex-col"
      >
        {/* CTA Title */}
        <h2 className="text-[16px] font-medium text-[#333333] leading-[1.25] text-center mb-4">
          Silakan isi kedua survei berikut
        </h2>

        {/* Cards Wrapper */}
        <div className="flex items-center gap-3 w-full pr-[14px] overflow-visible">
          {/* Card 1: Anti Korupsi */}
          <button
            type="button"
            onClick={() => handleSurveyClick("http://pmpzi.kemenag.go.id/survei/instrumen.php?id=4728")}
            className="relative flex-1 h-[120px] flex flex-col justify-center items-start pl-4 pr-10 rounded-[20px] bg-[#0B6B38] text-left transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer group outline-none"
            aria-label="Isi survei persepsi anti korupsi"
          >
            {/* Decorative Background Icon */}
            <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none z-0">
              <div className="absolute top-2 right-2 w-14 h-14 opacity-[0.25]">
                <Image
                  src="/images/star-shield-icon.png"
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Typography Content */}
            <div className="relative z-10 flex flex-col pointer-events-none">
              <span className="text-[14px] font-normal text-white/90 leading-tight">
                Survei Persepsi
              </span>
              <span className="text-[20px] font-semibold text-white leading-tight mt-0.5">
                Anti Korupsi
              </span>
            </div>

            {/* Overlapping Circular Button */}
            <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-200 z-20 pointer-events-none">
              <Image
                src="/images/arrow-right.svg"
                alt="Panah Kanan"
                width={20}
                height={20}
                className="object-contain text-neutral-800"
              />
            </div>
          </button>

          {/* Card 2: Kualitas Pelayanan */}
          <button
            type="button"
            onClick={() => handleSurveyClick("http://pmpzi.kemenag.go.id/survei/instrumen.php?id=4641")}
            className="relative flex-1 h-[120px] flex flex-col justify-center items-start pl-4 pr-10 rounded-[20px] bg-[#D8A124] text-left transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] cursor-pointer group outline-none"
            aria-label="Isi survei kualitas pelayanan"
          >
            {/* Decorative Background Icon */}
            <div className="absolute inset-0 rounded-[20px] overflow-hidden pointer-events-none z-0">
              <div className="absolute top-2 right-2 w-14 h-14 opacity-[0.12]">
                <Image
                  src="/images/heart-hands-icon.png"
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Typography Content */}
            <div className="relative z-10 flex flex-col pointer-events-none">
              <span className="text-[14px] font-normal text-white/90 leading-tight">
                Survei Persepsi
              </span>
              <span className="text-[20px] font-semibold text-white leading-tight mt-0.5">
                Kualitas Pelayanan
              </span>
            </div>

            {/* Overlapping Circular Button */}
            <div className="absolute right-[-14px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.15)] group-hover:scale-105 transition-transform duration-200 z-20 pointer-events-none">
              <Image
                src="/images/arrow-right.svg"
                alt="Panah Kanan"
                width={20}
                height={20}
                className="object-contain text-neutral-800"
              />
            </div>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
