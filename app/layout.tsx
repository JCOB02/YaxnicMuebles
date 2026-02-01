
import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import './globals.css'; // Ensure global styles are imported
import { Toaster } from "./components/ui/toaster";
import { Viewport } from "next";
import Script from "next/script";


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#727177",
}

export const metadata: Metadata = {
  title: "Yaxnic Muebles",
  description:
    "Muebles a medida, restauración y trabajos en madera en Mérida. Atención personalizada. Cotiza por WhatsApp.",
  keywords: [
    "carpintería en Mérida",
    "muebles a medida",
    "restauración de muebles",
    "carpintero profesional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={` ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-KE9YZEJHBQ`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KE9YZEJHBQ');
          `}
        </Script>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
