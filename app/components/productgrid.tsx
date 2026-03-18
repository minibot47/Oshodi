// components/ProductGrid.jsx
"use client";
import Link from "next/link";
import { useCart } from "../components/cartcontext";

const products = [
  { id: 1, name: "Denim Jacket",      originalPrice: "65.00 $", salePrice: "55.00 $", onSale: true,  category: "Jackets", tag: "SALE", sku: "WOO-001", desc: "Effortlessly cool and endlessly versatile, our Denim Jacket is a wardrobe staple that never goes out of style. Crafted from premium denim, this jacket combines comfort with a touch of rugged charm.", img: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?w=800&q=80" },
  { id: 2, name: "Dotted Dress",       originalPrice: null,       salePrice: "20.00 $", onSale: false, category: "Dresses", tag: null,    sku: "WOO-002", desc: "A playful dotted dress that brings elegance to every occasion. Light, breathable fabric with a flattering silhouette you'll love.", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80" },
  { id: 3, name: "Furry Jacket",       originalPrice: null,       salePrice: "15.00 $", onSale: false, category: "Jackets", tag: null,    sku: "WOO-003", desc: "Stay cozy and stylish with our plush furry jacket. Perfect for cooler days when you want warmth without sacrificing style.", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80" },
  { id: 4, name: "Pink Blazer",        originalPrice: "80.00 $", salePrice: "60.00 $", onSale: true,  category: "Blazers", tag: "SALE", sku: "WOO-004", desc: "Make a statement with this bold pink blazer. Tailored to perfection, it pairs beautifully with both casual and formal outfits.", img: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=800&q=80" },
  { id: 5, name: "Long Jacket",        originalPrice: "50.00 $", salePrice: "38.00 $", onSale: true,  category: "Jackets", tag: "SALE", sku: "WOO-005", desc: "A long-line jacket that adds instant polish to any look. Versatile enough to dress up or down, season after season.", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80" },
  { id: 6, name: "White Turtleneck",   originalPrice: null,       salePrice: "25.00 $", onSale: false, category: "Tops",    tag: null,    sku: "WOO-006", desc: "A clean white turtleneck that's a wardrobe essential. Soft, stretchy fabric that keeps you comfortable all day long.", img: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&q=80" },
  { id: 7, name: "Summer Dress",       originalPrice: null,       salePrice: "30.00 $", onSale: false, category: "Dresses", tag: null,    sku: "WOO-007", desc: "Breezy and bright, this summer dress is made for warm days and good vibes. Lightweight fabric with a flattering cut.", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80" },
  { id: 8, name: "Casual Blouse",      originalPrice: null,       salePrice: "22.00 $", onSale: false, category: "Tops",    tag: null,    sku: "WOO-008", desc: "An everyday casual blouse that goes with everything. Soft fabric, relaxed fit — effortlessly chic.", img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80" },
  { id: 9, name: "Trench Coat",        originalPrice: "95.00 $", salePrice: "75.00 $", onSale: true,  category: "Coats",   tag: "SALE", sku: "WOO-009", desc: "A timeless trench coat that never goes out of fashion. Structured, sophisticated, and built to last through every season.", img: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80" },
];

// Export products so the detail page can use the same data
export { products };

export default function ProductGrid() {
  const { addToCart } = useCart();
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-400">Showing all {products.length} results</p>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-500 cursor-pointer hover:border-gray-400 transition-colors">
          Default sorting <span className="text-xs">▾</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
        {products.map((product) => (
          // Wrap entire card in a Link to the detail page
          <Link key={product.id} href={`/shop/${product.id}`} className="group cursor-pointer">

            <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-[4/5]">
              {product.onSale && (
                <div className="absolute top-3 left-3 z-10 bg-[#1a1a1a] text-white text-xs font-semibold px-3 py-1 rounded-sm tracking-wider">
                  SALE!
                </div>
              )}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>

            <div className="mt-3 px-1">
              <h3 className="text-base font-medium text-gray-900 mb-1">{product.name}</h3>
              {/* Mobile: stacked price + button (no hover overlay) */}
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

              {/* Desktop/tablet: keep hover slide-in behavior */}
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
  );
}