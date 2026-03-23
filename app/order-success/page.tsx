import Link from "next/link";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
      <div className="text-6xl">🎉</div>
      <h1 className="text-4xl font-bold text-gray-900">Order Placed!</h1>
      <p className="text-gray-500 max-w-md">
        Thank you for your purchase. Your order has been received and is being processed.
      </p>
      <Link
        href="/shop"
        className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-black transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}