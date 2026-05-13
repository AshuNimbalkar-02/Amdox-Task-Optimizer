import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amdox AI | Task Optimizer",
  description: "Leverage AI to optimize your workflow based on your mood and well-being.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
