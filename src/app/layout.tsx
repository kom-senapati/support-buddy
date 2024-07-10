import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Support Buddy 🤖💬",
  description: "Support Buddy is an AI chatbot that seamlessly integrates with your business to provide personalized and intelligent customer support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
