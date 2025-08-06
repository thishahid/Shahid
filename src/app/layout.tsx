import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  openGraph: {
    title: "Shahid | UI/UX Designer & Data Analyst",
    description: "Personal portfolio showcasing UI/UX design and data analysis projects",
    url: "https://shahid-portfolio.vercel.app",
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
