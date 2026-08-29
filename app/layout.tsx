import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Time Surfers",
  description: "AI-curated tours through movies, music, games, art, commercials and the archived web.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
