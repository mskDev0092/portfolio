import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "mskDev0092 | Digital Odyssey - Full Stack Developer Portfolio",
  description: "Welcome to my digital sector. I build scalable web applications, immersive UI/UX, and solve complex logic problems. Explore my missions and certifications in this interactive gaming-inspired portfolio.",
  keywords: ["Full Stack Developer", "Web Development", "React", "Next.js", "Node.js", "TypeScript", "Portfolio", "mskDev0092", "Software Engineer"],
  authors: [{ name: "mskDev0092" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎮</text></svg>",
  },
  openGraph: {
    title: "mskDev0092 | Digital Odyssey",
    description: "Full Stack Developer Portfolio with Interactive Gaming Experience",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mskDev0092 | Digital Odyssey",
    description: "Full Stack Developer Portfolio with Interactive Gaming Experience",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${rajdhani.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-body`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
