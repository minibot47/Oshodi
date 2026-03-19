// app/layout.tsx
import Banner from "./components/banner";
import CartDrawer from "./components/cartdrawer";
import { CartProvider } from "./components/cartcontext";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

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
      <body className={`${barlow.className} bg-white text-black`}>
        <CartProvider>
          <Banner />
          <Nav/>
          {children}
          <Footer/>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}