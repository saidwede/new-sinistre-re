import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sinistre-RE - Expert en gestion de sinistres d'assurances.",
  description: "Sinistre-RE",
};

import TopBar from "@/components/top-bar";
import { Footer } from "@/components/footer";
import { FloatingChat } from "@/components/floating-chat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-sans antialiased`}
      >
        <TopBar />
        <main>
          <div className="pt-10 md:pt-0">
            {children}
          </div>
        </main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
