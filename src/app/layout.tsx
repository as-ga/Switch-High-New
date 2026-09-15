import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/context/ModalContext";
import MainLayout from "@/components/MainLayout";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in India | Doors Studio",
  description:
    "Partner with the best digital marketing agency in India to scale your brand through strategic creativity, performance marketing, and measurable growth.",
  icons: {
    icon: "https://www.doorsstudio.com/assets/front/img/favicon.png",
  },
  openGraph: {
    title: "Best Branding & Digital Marketing Agency in India | Doors Studio",
    description:
      "Elevate your brand with Doors Studio, the best branding agency in India. We craft impactful brand strategies to help your business stand out and succeed.",
    url: "https://www.doorsstudio.com/",
    siteName: "Doors Studio",
    images: [
      {
        url: "https://www.doorsstudio.com/assets/front/img/og/doors-studio.jpg",
        width: 1200,
        height: 630,
        alt: "Doors Studio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#f2f2f2] text-black selection:bg-pink-500 selection:text-white">
        <ModalProvider>
          <MainLayout>{children}</MainLayout>
        </ModalProvider>
      </body>
    </html>
  );
}
