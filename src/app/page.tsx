import type { Metadata } from "next";
import { LayoutContainer } from "@/components/custom/layout-container";
import { Header } from "@/components/custom/header";
import { SurveyDashboard } from "@/components/custom/survey-dashboard";

export const metadata: Metadata = {
  title: "Survei Kepuasan Pelayanan Kemenag Kota Depok",
  description: "Formulir Survei Persepsi Anti Korupsi dan Kualitas Pelayanan Kementerian Agama Kota Depok. Umpan balik Anda sangat berharga.",
  openGraph: {
    title: "Survei Kepuasan Pelayanan Kemenag Kota Depok",
    description: "Evaluasi Integritas & Kualitas Pelayanan Kementerian Agama Kota Depok.",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Survei Kepuasan Pelayanan Kemenag Kota Depok",
    description: "Evaluasi Integritas & Kualitas Pelayanan Kementerian Agama Kota Depok.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <LayoutContainer>
      <Header />
      <SurveyDashboard />
    </LayoutContainer>
  );
}
