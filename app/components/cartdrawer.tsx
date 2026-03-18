// components/CartDrawer.jsx
"use client";
import { useCart } from "../components/cartcontext";
import Link from "next/link";

export default function CartDrawer() {
  const { items, removeFromCart, open, setOpen, total } = useCart();

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[90vw] max-w-[400px] bg-[#111] text-white z-50 flex flex-col transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-white text-xl hover:opacity-60 transition-opacity"
        >
          ✕
        </button>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16" />

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-2">
          {items.length === 0 ? (
            <p className="text-white/40 text-sm mt-10 text-center">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="relative border-b border-white/10 pb-4 pt-2">
                {/* Remove */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-2 right-0 text-white/40 hover:text-white text-sm transition-colors"
                >
                  ✕
                </button>

                <div className="flex items-center gap-4">
                  {/* Thumbnail */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-xs text-white/50 mt-auto">
                      {item.qty} × {item.salePrice}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-white/70">Subtotal:</span>
            <span className="font-semibold text-base">
              {total.toFixed(2).replace(".", ",")} $
            </span>
          </div>
          <div className="flex gap-3">
            <Link
              href="/cart"
              onClick={() => setOpen(false)}
              className="flex-1 text-center bg-[#1e1e1e] border border-white/20 text-white text-sm font-semibold py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              View cart
            </Link>
            <Link
              href="/checkout"
              onClick={() => setOpen(false)}
              className="flex-1 text-center bg-[#2a2a2a] text-white text-sm font-semibold py-3 rounded-full hover:bg-white/20 transition-colors"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}