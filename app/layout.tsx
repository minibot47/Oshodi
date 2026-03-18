import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OSHODI",
  description: "OSHODI-ECOMMERCE WEBSITE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
