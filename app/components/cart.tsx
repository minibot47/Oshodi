// app/cart/page.jsx
"use client";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useCart } from "../components/cartcontext";

const parseNaira = (price: string) =>
  parseFloat(price.replace("₦", "").replace(/,/g, "").trim()) || 0;

const formatNaira = (amount: number) =>
  `₦${amount.toLocaleString("en-NG")}`;

export default function CartPage() {
  const { items, removeFromCart, total } = useCart();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <div className="relative w-full h-[280px] flex flex-col items-center justify-center overflow-hidden">
        <img
          src="/images/defaultstore.webp"
          alt="cart"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center gap-2 text-white">
          <p className="text-sm text-white/70">
            <Link href="/" className="hover:underline">Home</Link> › Cart
          </p>
          <h1 className="text-5xl font-semibold">Cart</h1>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-10 sm:py-16 flex-1">
        {items.length === 0 ? (
          <div className="flex items-center justify-between border border-gray-200 rounded-lg p-5">
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 bg-blue-500 rounded-full" />
              <p className="text-gray-600 text-sm">Your cart is currently empty.</p>
            </div>
            <Link
              href="/shop"
              className="bg-[#1a1a1a] text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-black transition-colors"
            >
              Return to shop
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {/* Desktop table */}
            <div className="hidden sm:block">
              <div className="grid mb-3 grid-cols-[2fr_1fr_1fr_1fr] gap-4 border-b border-gray-200 pb-3 text-sm font-semibold text-gray-700 uppercase tracking-wide">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>

              {items.map((item) => {
                const price = parseNaira(item.salePrice);
                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center border-b border-gray-100 pb-5"
                  >
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-300 hover:text-black transition-colors text-lg"
                        aria-label={`Remove ${item.name}`}
                      >
                        ✕
                      </button>
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <span className="text-sm font-medium text-gray-800">{item.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{item.salePrice}</span>
                    <span className="text-sm text-gray-600">{item.qty}</span>
                    <span className="text-sm font-semibold text-gray-800">
                      {formatNaira(price * item.qty)}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Mobile stacked cards */}
            <div className="sm:hidden flex flex-col gap-4">
              {items.map((item) => {
                const price = parseNaira(item.salePrice);
                const subtotal = price * item.qty;
                return (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-2xl p-4 flex gap-4"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-sm font-medium text-gray-800">{item.name}</span>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-black transition-colors text-lg"
                          aria-label={`Remove ${item.name}`}
                        >
                          ✕
                        </button>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Price</span>
                        <span className="text-gray-800">{item.salePrice}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Quantity</span>
                        <span className="text-gray-800">{item.qty}</span>
                      </div>
                      <div className="flex justify-between text-sm font-semibold text-gray-900 border-t border-gray-100 pt-2">
                        <span>Subtotal</span>
                        <span>{formatNaira(subtotal)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Totals + checkout */}
            <div className="flex justify-center sm:justify-end mt-2 sm:mt-4">
              <div className="w-full sm:w-[340px] border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
                <h3 className="text-base font-bold text-gray-900">Cart totals</h3>
                <div className="flex justify-between text-sm text-gray-600 border-b border-gray-100 pb-3">
                  <span>Subtotal</span>
                  <span>{formatNaira(total)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-gray-900">
                  <span>Total</span>
                  <span>{formatNaira(total)}</span>
                </div>
                <Link
                  href="/checkout"
                  className="w-full text-center bg-[#1a1a1a] text-white text-sm font-semibold py-3 rounded-full hover:bg-black transition-colors mt-2"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}