// app/layout.tsx
import Banner from "./components/banner";
import CartDrawer from "./components/cartdrawer";
import { CartProvider } from "./components/cartcontext";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { DM_Sans } from "next/font/google";



const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Oshodi",
  description: "Shop the latest fashion trends at Oshodi. Free shipping on all orders. Discover curated collections of clothing, jackets, sweaters and more.",
  icons: "/icons/icon.png",
  openGraph: {
    title: "Oshodi | Style Finds You Here",
    description: "Shop the latest fashion trends at Oshodi. Free shipping on all orders.",
    url: "https://oshodimvp.vercel.app/",
    siteName: "Oshodi",
    images: [
      {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} bg-white text-black`}>
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