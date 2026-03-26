// app/shop/[id]/page.jsx
"use client";
import { use, useState } from "react";
import { useCart } from "../../components/cartcontext";
import Link from "next/link";
import { products } from "../../components/productgrid";
import Nav from "../../components/nav";
import Footer from "../../components/footer";

type ProductDetailProps = {
  params: Promise<{ id: string }>;
};

export default function ProductDetail({ params }: ProductDetailProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  // Related products = same category, exclude current
  const related = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400">Product not found.</p>
      </main>
    );
  }

  const gallery = [product.img];

  const tabs = ["Description", "Additional information", "Reviews (0)"];

  return (
    <main className="min-h-screen flex flex-col gap-3 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 pb-32">
      {/* Hero banner */}
      <div className="relative w-full h-[280px] overflow-hidden flex flex-col items-center justify-center">
        <img src="/images/defaultstore.webp" alt={product.name} className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center gap-2">
          <p className="text-white/80 text-sm">
            <Link href="/" className="hover:underline">Home</Link>{" / "}
            <Link href={`/shop?category=${product.category}`} className="hover:underline">{product.category}</Link>{" / "}
            <span>{product.name}</span>
          </p>
          <h1 className="text-white text-5xl font-semibold text-center px-4">{product.name}</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-16 mt-10 mb-10">

        {/* Left — image gallery */}
        <div className="w-full lg:w-[60%] flex flex-col gap-4">
          <div className="relative rounded-2xl overflow-hidden bg-gray-100">
            {product.onSale && (
              <div className="absolute top-4 left-4 z-10 bg-[#1a1a1a] text-white text-xs font-semibold px-3 py-1 rounded-sm tracking-wider">
                SALE!
              </div>
            )}
            {product.tag === "NEW" && !product.onSale && (
              <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-sm tracking-wider">
                NEW
              </div>
            )}
            <img
              src={gallery[activeImg]}
              alt={product.name}
              className="w-full h-[320px] sm:h-[420px] lg:h-[820px] object-cover transition-all duration-500"
            />
          </div>
        </div>

        {/* Right — product info */}
        <div className="w-full lg:w-[40%] flex flex-col gap-5 pt-2">
          <p className="text-sm text-gray-400">
            Home / {product.category} / {product.name}
          </p>

          <div className="flex items-center gap-4">
            {product.onSale && (
              <span className="text-xl text-gray-400 line-through">{product.originalPrice}</span>
            )}
            <span className="text-2xl font-bold text-gray-900 underline underline-offset-4">{product.salePrice}</span>
          </div>

          <p className="text-gray-600 leading-relaxed text-[15px]">{product.desc}</p>

          {/* Qty + Add to cart */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 gap-4">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-lg text-gray-500 hover:text-black transition-colors">−</button>
              <span className="text-base w-4 text-center">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="text-lg text-gray-500 hover:text-black transition-colors">+</button>
            </div>
            <button
              className="flex-1 bg-[#1a1a1a] text-white rounded-full py-3 text-sm font-semibold hover:bg-black transition-colors"
              onClick={() => addToCart(product, qty)}
            >
              Add to cart
            </button>
          </div>

          {/* Meta */}
          <div className="border-t border-gray-100 pt-5 flex flex-col gap-2 text-sm text-gray-500">
            <p><span className="font-semibold text-gray-700">SKU:</span> {product.sku}</p>
            <p><span className="font-semibold text-gray-700">CATEGORY:</span> {product.category.toUpperCase()}</p>
            {product.tag && <p><span className="font-semibold text-gray-700">TAG:</span> {product.tag}</p>}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16 mb-28">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-10 gap-4 border-b border-gray-200 mb-8">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`pb-3 text-sm font-medium transition-colors ${
                activeTab === i
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Description tab */}
        {activeTab === 0 && (
          <p className="text-gray-600 leading-relaxed max-w-3xl text-[15px]">{product.desc}</p>
        )}

        {/* Additional information tab */}
        {activeTab === 1 && (
          <div className="max-w-3xl">
            {product.additionalInfo ? (
              <div className="flex flex-col gap-3">
                {product.additionalInfo.split("|").map((item, i) => {
                  const [label, value] = item.split(":").map((s) => s.trim());
                  return (
                    <div key={i} className="flex gap-4 py-3 border-b border-gray-100 text-sm">
                      <span className="w-[180px] font-semibold text-gray-700 flex-shrink-0">{label}</span>
                      <span className="text-gray-500">{value}</span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No additional information available.</p>
            )}
          </div>
        )}

        {/* Reviews tab */}
        {activeTab === 2 && (
          <p className="text-gray-400 text-sm">No reviews yet. Be the first to review this product.</p>
        )}
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-8">Related products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map((p) => (
              <Link key={p.id} href={`/shop/${p.id}`} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-gray-100 h-[390px] w-full">
                  {p.onSale && (
                    <div className="absolute top-3 left-3 z-10 bg-[#1a1a1a] text-white text-xs font-semibold px-3 py-1 rounded-sm tracking-wider">
                      SALE!
                    </div>
                  )}
                  {p.tag === "NEW" && !p.onSale && (
                    <div className="absolute top-3 left-3 z-10 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-sm tracking-wider">
                      NEW
                    </div>
                  )}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="text-base font-medium text-gray-900">{p.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {p.onSale && <span className="text-sm text-gray-400 line-through">{p.originalPrice}</span>}
                    <span className="text-sm font-semibold text-gray-800">{p.salePrice}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Fixed bottom bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 shadow-lg z-50 px-4 sm:px-14 py-4 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <img src={product.img} alt={product.name} className="w-12 h-12 rounded-lg object-cover" />
          <span className="text-base font-semibold text-gray-900">{product.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 gap-4">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-lg text-gray-500 hover:text-black">−</button>
            <span className="text-base w-4 text-center">{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} className="text-lg text-gray-500 hover:text-black">+</button>
          </div>
          <button
            onClick={() => addToCart(product, qty)}
            className="bg-[#1a1a1a] text-white rounded-full px-6 sm:px-10 py-3 text-sm font-semibold hover:bg-black transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>
    </main>
  );
}