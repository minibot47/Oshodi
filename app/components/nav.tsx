"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "../components/cartcontext";

const collections = [
  { id: 1, name: "Laptops",          desc: "MacBooks, Dell, HP & more.",      img: "/images/macbook1.jpg",   href: "/shop?category=Laptops" },
  { id: 2, name: "Smartphones",      desc: "iPhone, Samsung & top Android.",  img: "/images/iphone16.jpg",   href: "/shop?category=Smartphones" },
  { id: 3, name: "Home Appliances",  desc: "Smart devices for every room.",   img: "/images/appliances.jpg", href: "/shop?category=Home Appliances" },
  { id: 4, name: "TVs",              desc: "4K, OLED & Smart TVs.",           img: "/images/tv.jpg",         href: "/shop?category=TVs" },
  { id: 5, name: "Audio",            desc: "Headphones, speakers & more.",    img: "/images/jblspeaker.jpg", href: "/shop?category=Audio" },
  { id: 6, name: "Cameras",          desc: "Capture every moment in HD.",     img: "/images/sonycamera.jpg", href: "/shop?category=Cameras" },
];

export default function Nav() {
  const { items, setOpen } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);

  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const atBottom = window.innerHeight + currentY >= document.body.scrollHeight - 10;

      setScrolled(currentY > 10);

      if (currentY < 10 || atBottom) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
        setCollectionsOpen(false);
        setMobileMenuOpen(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`sticky top-0 z-50 w-full bg-white transition-all duration-500 ease-in-out m-auto ${
          scrolled ? "border-b border-black/10" : "border-b border-transparent"
        }`}
        style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
      >
        <nav className="w-full h-[80px] text-black flex justify-between items-center max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-10">
          <Link href="/" className="flex items-end gap-1">
            <img src="/icons/oshodi.png" alt="LOGO" className="w-[140px] h-[28px]" />
          </Link>

          <div className="flex items-center gap-12">
            <div className="hidden md:flex items-center gap-10">
              <Link href="/" className="text-sm">HOME</Link>
              <Link href="/shop" className="text-sm">SHOP</Link>
              <div
                onMouseEnter={() => setCollectionsOpen(true)}
                onMouseLeave={() => setCollectionsOpen(false)}
                className="h-[85px] flex items-center"
              >
                <span className="flex items-center justify-center gap-2 cursor-pointer text-sm">
                  COLLECTIONS
                  <span className="px-1.5 text-orange-400 bg-orange-100 border-none rounded-[5px] text-[9px]">NEW</span>
                  <img src="/icons/downarrow.png" alt="Arrow" className="w-2 h-1" />
                </span>
              </div>
            </div>

            <button onClick={() => setOpen(true)} className="flex relative -mr-6 sm:mr-3">
              <img src="/icons/cart.png" alt="Cart" className="w-4 h-4" />
              <div className="absolute -top-1 -right-3 text-black text-[11px] w-3 h-3 rounded-full flex items-center justify-center">{cartCount}</div>
            </button>

            <button
              className="md:hidden px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium"
              onClick={() => { setMobileMenuOpen((v) => !v); setMobileCollectionsOpen(false); }}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              Menu
            </button>
          </div>

          {collectionsOpen && (
            <div
              className="hidden md:block fixed top-[85px] left-0 w-full z-50 px-14 pb-6 pt-6 bg-white shadow-2xl border-t border-gray-100"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-4 pb-2">
                {collections.map((col) => (
                  <Link key={col.id} href={col.href} className="group relative overflow-hidden rounded-xl w-full h-[280px] block" onClick={() => setCollectionsOpen(false)}>
                    <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute flex flex-col bottom-0 left-0 p-4 text-white">
                      <h3 className="text-2xl font-medium">{col.name}</h3>
                      <p className="text-lg font-extralight opacity-90 mb-4">{col.desc}</p>
                      <div className="flex items-center gap-2 bg-[#1a1a1a] text-white text-lg font-semibold px-5 py-3 rounded-full w-fit">See Products →</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {mobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden fixed top-[85px] left-0 w-full z-50 bg-white shadow-2xl border-t border-gray-100">
              <div className="px-4 py-4 flex flex-col gap-4">
                <Link href="/" className="text-sm font-light text-gray-900 hover:underline underline-offset-4" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
                <Link href="/shop" className="text-sm font-light text-gray-900 hover:underline underline-offset-4" onClick={() => setMobileMenuOpen(false)}>SHOP</Link>
                <button className="w-full flex items-center justify-between text-left" onClick={() => setMobileCollectionsOpen((v) => !v)} type="button">
                  <span className="flex items-center gap-2 text-sm font-light">
                    COLLECTIONS
                    <span className="px-1.5 text-orange-400 bg-orange-200 border-none rounded-[16px] text-[9px]">NEW</span>
                  </span>
                  <span className="text-gray-500">{mobileCollectionsOpen ? "−" : "+"}</span>
                </button>
                {mobileCollectionsOpen && (
                  <div className="grid grid-cols-1 gap-2 pb-2">
                    {collections.map((col) => (
                      <Link key={col.id} href={col.href} className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                        {col.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}