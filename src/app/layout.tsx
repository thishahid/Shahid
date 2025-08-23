import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./CardNav.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shahid | UI/UX Designer & Data Analyst",
  description: "Personal portfolio of Shahid, a self-taught UI/UX designer and data analyst showcasing projects, skills, and professional journey.",
  keywords: ["Shahid", "UI/UX Designer", "Data Analyst", "Portfolio", "Figma", "Python", "Design", "Analytics"],
  authors: [{ name: "Shahid" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicons/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicons/favicon-128x128.png', sizes: '128x128', type: 'image/png' },
      { url: '/favicons/favicon-256x256.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: "Shahid | UI/UX Designer & Data Analyst",
    description: "Personal portfolio showcasing UI/UX design and data analysis projects",
    siteName: "Shahid's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahid | UI/UX Designer & Data Analyst",
    description: "Personal portfolio showcasing UI/UX design and data analysis projects",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
