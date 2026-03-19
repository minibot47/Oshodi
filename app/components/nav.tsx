"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "../components/cartcontext";

const collections = [
  {
    id: 1,
    name: "Summer Wear",
    desc: "Men & Women summer collection.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    href: "/shop?category=summer",
  },
  {
    id: 2,
    name: "Jackets",
    desc: "Spring to Autumn.",
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    href: "/shop?category=jackets",
  },
  {
    id: 3,
    name: "Sweaters",
    desc: "Keeping you warm all day.",
    img: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80",
    href: "/shop?category=sweaters",
  },
];

export default function Nav() {
  const { items, setOpen } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.qty, 0);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCollectionsOpen, setMobileCollectionsOpen] = useState(false);

  // Scroll hide/show
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Scrolling up → show. Scrolling down → hide.
      if (currentY < lastScrollY.current || currentY < 80) {
        setVisible(true);
      } else {
        setVisible(false);
        // Close dropdowns when hiding
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
      {/* Sticky nav wrapper — slides up/down smoothly */}
      <div
        className="sticky top-0 z-50 w-full bg-white transition-transform duration-500 ease-in-out"
        style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}
      >
        <nav className="w-full h-[85px]  text-black flex justify-between items-center max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-14">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-10 h-10" />
            <h2>OSHODI</h2>
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              <Link href="/" className="text-sm font-light">HOME</Link>
              <Link href="/shop" className="text-sm font-light">SHOP</Link>

              <div
                onMouseEnter={() => setCollectionsOpen(true)}
                onMouseLeave={() => setCollectionsOpen(false)}
                className="h-[85px] flex items-center"
              >
                <span className="flex items-center justify-center gap-2 cursor-pointer text-sm font-light">
                  COLLECTIONS
                  <span className="px-1.5 text-orange-400 bg-orange-200 border-none rounded-[16px] text-[9px]">NEW</span>
                </span>
              </div>
            </div>

            {/* Cart */}
            <button onClick={() => setOpen(true)} className="flex relative">
              <img src="/icons/cart.png" alt="Cart" className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">{cartCount}</div>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm font-medium"
              onClick={() => { setMobileMenuOpen((v) => !v); setMobileCollectionsOpen(false); }}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              Menu
            </button>
          </div>

          {/* Desktop collections dropdown */}
          {collectionsOpen && (
            <div
              className="hidden md:block fixed top-[85px] left-0 w-full z-50 px-14 pb-6 pt-6 bg-white shadow-2xl border-t border-gray-100"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <div className="max-w-[1440px] mx-auto grid grid-cols-3 gap-4 pb-2">
                {collections.map((col) => (
                  <Link
                    key={col.id}
                    href={col.href}
                    className="group relative overflow-hidden rounded-xl aspect-[4/3] block"
                    onClick={() => setCollectionsOpen(false)}
                  >
                    <img src={col.img} alt={col.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-lg font-bold">{col.name}</h3>
                      <p className="text-xs opacity-90 mb-3">{col.desc}</p>
                      <div className="flex items-center gap-2 bg-[#1a1a1a] text-white text-xs font-semibold px-4 py-2 rounded-full w-fit">
                        See Products →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden fixed top-[85px] left-0 w-full z-50 bg-white shadow-2xl border-t border-gray-100"
            >
              <div className="px-4 py-4 flex flex-col gap-4">
                <Link href="/" className="text-sm font-light text-gray-900 hover:underline underline-offset-4" onClick={() => setMobileMenuOpen(false)}>HOME</Link>
                <Link href="/shop" className="text-sm font-light text-gray-900 hover:underline underline-offset-4" onClick={() => setMobileMenuOpen(false)}>SHOP</Link>

                <button
                  className="w-full flex items-center justify-between text-left text-sm font-semibold text-gray-900"
                  onClick={() => setMobileCollectionsOpen((v) => !v)}
                  type="button"
                >
                  <span className="flex items-center gap-2 text-sm font-light">
                    COLLECTIONS
                    <span className="px-1.5 text-orange-400 bg-orange-200 border-none rounded-[16px] text-[9px]">NEW</span>
                  </span>
                  <span className="text-gray-500">{mobileCollectionsOpen ? "−" : "+"}</span>
                </button>

                {mobileCollectionsOpen && (
                  <div className="grid grid-cols-1 gap-2 pb-2">
                    {collections.map((col) => (
                      <Link
                        key={col.id}
                        href={col.href}
                        className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors text-sm font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
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