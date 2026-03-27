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
    title: "Oshodi | Tech at Your Fingertips",
    description: "Discover the best deals on phones, laptops, gadgets and accessories. Fast delivery. Shop now at Oshodi.",
    url: "oshodilive.com",
    siteName: "Oshodi",
    images: [
      {
        url: "/images/Meta.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oshodi | Tech at Your Fingertips",
    description: "Discover the best deals on phones, laptops, gadgets and accessories. Fast delivery. Shop now at Oshodi.",
    images: ["https://oshodimvp.vercel.app/images/Meta.jpg"],
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