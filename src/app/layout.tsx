import { BackgroundEffects } from "@/components/layout/background-effects";
import { GsapScrollTrigger } from "@/components/providers/gsap-scroll-trigger";
import { Navbar } from "@/components/layout/navbar";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import type { Metadata } from "next";
import { Inter, Lobster, Plus_Jakarta_Sans, Roboto, Sora } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const lobster = Lobster({
  variable: "--font-lobster",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MillFlow AI — AI-Powered Rice Mill Management Software",
  description:
    "Automate inventory, production, analytics, billing, and operations with a modern AI-driven ERP platform built for rice mills.",
  keywords: [
    "rice mill software",
    "rice mill ERP",
    "AI mill management",
    "inventory management",
    "GST billing",
  ],
  openGraph: {
    title: "MillFlow AI — AI-Powered Rice Mill Management",
    description:
      "Modern AI-driven ERP for rice mills. Inventory, production, analytics, and billing in one platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${sora.variable} ${roboto.variable} ${lobster.variable} h-full scroll-smooth antialiased`}
    >
      <body className="relative min-h-full font-sans text-text-primary">
        <div id="top" />
        <SmoothScroll>
          <BackgroundEffects />
          <GsapScrollTrigger />
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
