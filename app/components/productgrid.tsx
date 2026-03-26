// components/ProductGrid.jsx
"use client";
import Link from "next/link";
import { useCart } from "../components/cartcontext";

import { products } from "./products";

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
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
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