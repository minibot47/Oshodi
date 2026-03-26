// app/shop/page.jsx
"use client";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { products } from "../components/productgrid";
import ProductGrid from "../components/productgrid";
import { useCart } from "../components/cartcontext";

// Map URL param → display name + hero image
const categoryMeta = {
  Laptops:           { label: "Laptops",          img: "/images/macbook1.jpg" },
  Smartphones:       { label: "Smartphones",       img: "/images/iphone16.jpg" },
  "Home Appliances": { label: "Home Appliances",   img: "/images/appliances.jpg" },
  TVs:               { label: "TVs",               img: "/images/tv.jpg" },
  Audio:             { label: "Audio",             img: "/images/jblspeaker.jpg" },
  Cameras:           { label: "Cameras",           img: "/images/sonycamera.jpg" },
  "Office Equipment":{ label: "Office Equipment",  img: "/images/lexus.jpg" },
};

type CategoryKey = keyof typeof categoryMeta;

export default function ShopPage() {
  const searchParams = useSearchParams();
  const { addToCart } = useCart();
  const cat = searchParams.get("category") as CategoryKey | null;
  const meta = cat ? categoryMeta[cat] : null;

  // If a category is active, filter — otherwise show all
  const filtered = cat
    ? products.filter((p) => p.category === cat)
    : products;

  type SortKey = "default" | "price-asc" | "price-desc" | "name-asc" | "sale-first";
  const [sortKey, setSortKey] = useState<SortKey>("default");

  const displayed = useMemo(() => {
    const list = [...filtered];

    const parseSalePrice = (p: (typeof products)[number]) => {
      // Handles naira prices like "₦849,000"
      const raw = String(p.salePrice ?? "")
        .replace("₦", "")
        .replace(/,/g, "")
        .trim();
      const n = parseFloat(raw);
      return Number.isFinite(n) ? n : 0;
    };

    switch (sortKey) {
      case "price-asc":
        list.sort((a, b) => parseSalePrice(a) - parseSalePrice(b));
        break;
      case "price-desc":
        list.sort((a, b) => parseSalePrice(b) - parseSalePrice(a));
        break;
      case "name-asc":
        list.sort((a, b) => String(a.name ?? "").localeCompare(String(b.name ?? "")));
        break;
      case "sale-first":
        list.sort((a, b) => {
          const sa = a.onSale ? 1 : 0;
          const sb = b.onSale ? 1 : 0;
          if (sb !== sa) return sb - sa;
          return parseSalePrice(a) - parseSalePrice(b);
        });
        break;
      case "default":
      default:
        break;
    }

    return list;
  }, [filtered, sortKey]);

  return (
    <div className="min-h-screen flex flex-col items-center gap-3 pb-32 m-auto">
      {/* Hero */}
      <div className="relative w-full h-[30vh] flex flex-col gap-3 items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${meta ? meta.img : "/images/dell.jpg"}")` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center gap-5 text-white">
          <div className="flex gap-2 text-lg font-extralight text-white/80">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/shop" className="hover:underline">Shop</Link>
            {meta && (
              <>
                <span>›</span>
                <span>{meta.label}</span>
              </>
            )}
          </div>
          <h2 className="text-5xl font-light">{meta ? meta.label : "Shop"}</h2>
        </div>
      </div>

      {/* Product grid */}
      <div className="min-h-screen mt-20 flex flex-col items-center px-4 sm:px-6 lg:px-12 gap-10 sm:gap-20 m-auto max-w-[1440px] w-full">
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-center justify-between mt-8 gap-3 mb-10">
          <p className="text-sm text-black">Showing all {displayed.length} results</p>

          <div className="w-full sm:w-auto">
            <label className="sr-only" htmlFor="sort">Sort products</label>
            <select
              id="sort"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="w-full sm:w-auto flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none text-gray-500 cursor-pointer hover:border-gray-400 transition-colors bg-white"
            >
              <option value="default">Default Sorting</option>
              <option value="sale-first">Sale first</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-7 gap-y-10 w-full -mt-14 mb-20">
          {displayed.map((product) => (
            <Link key={product.id} href={`/shop/${product.id}`} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 h-[450px] w-full">
                {product.onSale && (
                  <div className="absolute top-3 left-3 z-10 bg-[#1a1a1a] text-white text-xs font-semibold px-3 py-1 rounded-sm tracking-wider">
                    SALE!
                  </div>
                )}
                {product.tag === "NEW" && !product.onSale && (
                  <div className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-sm tracking-wider">
                    NEW
                  </div>
                )}
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="mt-3 px-1">
                <h3 className="text-xl font-medium text-gray-900 mb-1">{product.name}</h3>

                {/* Mobile */}
                <div className="sm:hidden">
                  <div className="flex items-center gap-2">
                    {product.onSale && (
                      <span className="text-sm text-gray-400 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                    <span className="text-sm font-semibold text-gray-800">{product.salePrice}</span>
                  </div>
                  <div className="mt-2">
                    <button
                      type="button"
                      className="block text-sm font-semibold text-red-500 hover:text-red-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(product, 1);
                      }}
                    >
                      + Add to cart
                    </button>
                  </div>
                </div>

                {/* Desktop */}
                <div className="hidden sm:block relative h-7 overflow-hidden">
                  <div className="absolute inset-0 flex items-center gap-2 transition-all duration-500 ease-in-out sm:group-hover:-translate-y-full sm:group-hover:opacity-0">
                    {product.onSale && (
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    )}
                    <span className="text-sm font-semibold text-gray-800">{product.salePrice}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center transition-all duration-500 ease-in-out translate-y-0 opacity-100 sm:translate-y-full sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    <button
                      type="button"
                      className="text-sm font-semibold text-red-500 hover:text-red-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart(product, 1);
                      }}
                    >
                      + Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}