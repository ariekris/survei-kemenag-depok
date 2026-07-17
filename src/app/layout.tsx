import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const googleSansFlex = localFont({
  src: "./fonts/GoogleSansFlex-Variable.woff2",
  variable: "--font-google-sans-flex",
  weight: "100 1000",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Survei Kemenag Kota Depok",
  description: "Survei Kepuasan Pelayanan Kementerian Agama Kota Depok",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${googleSansFlex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
