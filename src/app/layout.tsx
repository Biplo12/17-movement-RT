import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "sonner";
import ReduxProvider from "@/providers/redux-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "17 Movement Development tools",
  description: "17 Movement Development tools",
  icons: {
    icon: "/svg/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div
            className="flex flex-col items-start justify-center h-screen bg-cover bg-center p-8"
            style={{ backgroundImage: "url('/images/BG.png')" }}
          >
            <Toaster />
            {children}
          </div>
        </body>
      </ReduxProvider>
    </html>
  );
}
