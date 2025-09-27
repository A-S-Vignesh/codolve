import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import SmoothScrollWrapper from "../components/SmoothScrollWrapper";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codolve | Code Smart, Solve Big",
  description:
    "Codolve is a modern web development studio crafting scalable websites, SaaS platforms, and digital solutions. Code Smart, Solve Big with Codolve.",
  keywords: [
    "Codolve",
    "web development",
    "SaaS development",
    "Next.js",
    "React",
    "MERN stack",
    "MoneyNest",
    "Blog-GPT",
    "full stack development",
    "glassmorphism UI",
    "modern web apps",
  ],
  authors: [{ name: "Codolve" }],
  creator: "Codolve",
  publisher: "Codolve",
  openGraph: {
    title: "Codolve | Code Smart, Solve Big",
    description:
      "Codolve is a modern web development studio crafting scalable websites, SaaS platforms, and digital solutions.",
    url: "https://codolve.com",
    siteName: "Codolve",
    images: [
      {
        url: "https://codolve.com/og-image.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Codolve - Code Smart, Solve Big",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codolve | Code Smart, Solve Big",
    description:
      "Codolve is a modern web development studio crafting scalable websites, SaaS platforms, and digital solutions.",
    images: ["https://codolve.com/og-image.png"], // replace with your OG image
    creator: "@CodolveOfficial", // update if you have a Twitter handle
  },
  metadataBase: new URL("https://codolve.com"),
  alternates: {
    canonical: "https://codolve.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Codolve" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-950 via-purple-950 to-indigo-950 min-h-screen`}
      >
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M64RHB4Q3F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M64RHB4Q3F');
          `}
        </Script>
        {/* <SmoothScrollWrapper> */}
        {/* <div className="bg-gradient-to-br from-blue-950 via-purple-950 to-indigo-950"> */}
        {children}
        {/* </div> */}
        {/* </SmoothScrollWrapper> */}
      </body>
    </html>
  );
}
