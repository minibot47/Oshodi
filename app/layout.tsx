// app/layout.tsx
import Banner from "./components/banner";
import CartDrawer from "./components/cartdrawer";
import { CartProvider } from "./components/cartcontext";
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
      <body className="bg-white text-gray-900">
        <CartProvider>
          <Banner />
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}