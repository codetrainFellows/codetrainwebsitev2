import type { Metadata } from "next";
import localFont from "next/font/local";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap } from "lucide-react";
import Script from "next/script";

// Load Helvetica local font mapped to the sans-serif variable
const helvetica = localFont({
  src: "../../public/fonts/helvetica.ttf",
  variable: "--font-sans",
  display: "swap",
});

// Keep Outfit Google Font for display headings to maintain the modern redesigned look
const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Codetrain Africa | AI-Native Software Engineering & Product Design",
  description:
    "Learn fullstack web and mobile apps development from the most holistic coding bootcamp. We have live interactive virtual and in-person options available.",
  keywords: [
    "web development",
    "software development",
    "software engineer",
    "ui/ux",
    "ui/ux designing",
    "designing",
    "coding bootcamp",
    "codetrain",
    "codetrainafrica",
    "codetrain africa",
  ],
  openGraph: {
    title: "Codetrain Africa | AI-Native Software Engineering & Product Design",
    description:
      "Learn fullstack web and mobile apps development from the most holistic coding bootcamp. We have live interactive virtual and in-person options available.",
    url: "https://www.codetrainafrica.com/",
    siteName: "Codetrain Africa",
    images: [
      {
        url: "https://www.codetrainafrica.com/people/new1.jpg",
        width: 1200,
        height: 630,
        alt: "Codetrain Africa",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codetrain Africa | AI-Native Software Engineering & Product Design",
    description:
      "Learn fullstack web and mobile apps development from the most holistic coding bootcamp.",
    images: ["https://www.codetrainafrica.com/people/new1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${helvetica.variable} ${outfit.variable}`}>
      <head>
        <link rel="canonical" href="https://www.codetrainafrica.com/" />
        
        {/* Google Analytics (G-CKDJJBC8DC) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CKDJJBC8DC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CKDJJBC8DC');
          `}
        </Script>

        {/* Google Ads (AW-714696786) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-714696786"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-714696786');
          `}
        </Script>
      </head>
      <body>
        <div className="announce" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", flexWrap: "wrap" }}>
          <GraduationCap size={16} style={{ color: "var(--yellow)" }} />
          <span>
            Admissions in progress — July cohort for our 18-month programmes · AI programmes start October.{" "}
            <a href="https://tally.so/r/wodqVO" target="_blank" rel="noopener noreferrer">
              Join our free info session
            </a>
          </span>
        </div>
        <Navbar />
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


