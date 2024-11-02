import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "./_components/theme-provider";

export const metadata: Metadata = {
  title: "Random Quotes | Daily Inspiration",
  description:
    "Get inspired with randomly generated quotes from famous authors, leaders, and thinkers.",
  openGraph: {
    title: "Random Quotes | Daily Inspiration",
    description:
      "Get inspired with randomly generated quotes from famous authors, leaders, and thinkers.",
    type: "website",
    locale: "en_US",
    url: "https://rndmquote.vercel.app",
    siteName: "Random Quotes",
    images: [
      {
        url: "https://rndmquote.vercel.app/logo.jpg",
        width: 400,
        height: 400,
        alt: "RNDMQuote Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Random Quotes | Daily Inspiration",
    description:
      "Get inspired with randomly generated quotes from famous authors, leaders, and thinkers.",
    siteId: "1845395983754285056",
    creator: "@_anrius",
    creatorId: "1845395983754285056",
    images: ["https://rndmquote.vercel.app/logo.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
