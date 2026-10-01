import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hapinayan | Web Developer",
  description:
    "Professional web developer building modern, responsive and user-focused websites and web applications.",
  keywords: [
    "Hapinayan",
    "Web Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Angular",
    "Tailwind CSS",
    "Portfolio",
    "C#",
    ".NET",
  ],
  authors: [{ name: "Hapinayan" }],
  creator: "Hapinayan",
  openGraph: {
    title: "Hapinayan | Web Developer",
    description:
      "Building modern, responsive and user-focused web experiences with clean code and high performance.",
    url: "https://hapinayan.dev",
    siteName: "Hapinayan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hapinayan | Web Developer",
    description:
      "Building modern, responsive and user-focused web experiences with clean code and high performance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#050913" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-slate-50 dark:bg-[#050913] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-sky-500 selection:text-white`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
