// app/checkout/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Nav from "../components/nav";
import Footer from "../components/footer";
import { useCart } from "../components/cartcontext";

type PaymentOptionProps = {
  id: string;
  label: string;
  selected: string;
  onSelect: (id: string) => void;
  description?: string;
};

function PaymentOption({ id, label, selected, onSelect, description }: PaymentOptionProps) {
  const isSelected = selected === id;
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => onSelect(id)}
        className="flex items-center gap-3 text-sm font-medium text-gray-800"
      >
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? "border-blue-600" : "border-gray-300"}`}>
          {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
        </div>
        {label}
      </button>
      {isSelected && description && (
        <div className="ml-8 bg-[#1a1a1a] text-white text-xs leading-relaxed rounded-lg p-4">
          {description}
        </div>
      )}
    </div>
  );
}

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [couponOpen, setCouponOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [form, setForm] = useState({
    firstName: "", lastName: "", company: "", country: "",
    street1: "", street2: "", town: "", county: "",
    postcode: "", phone: "", email: "", notes: "",
  });

  const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);
  const canPlaceOrder =
    form.firstName.trim().length > 0 && form.lastName.trim().length > 0 &&
    form.country.trim().length > 0 && form.street1.trim().length > 0 &&
    form.town.trim().length > 0 && form.county.trim().length > 0 &&
    form.postcode.trim().length > 0 && form.phone.trim().length > 0 &&
    isEmailValid(form.email);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <Nav />
      </div>

      {/* Hero */}
      <div className="relative w-full h-[280px] flex flex-col items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80" alt="checkout" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center gap-2 text-white">
          <p className="text-sm text-white/70"><Link href="/" className="hover:underline">Home</Link> › Checkout</p>
          <h1 className="text-5xl font-semibold">Checkout</h1>
        </div>
      </div>

      {/* Content */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-8 sm:py-12 flex-1">

        {/* Coupon banner */}
        <div className="border border-gray-200 rounded-lg p-4 mb-8 cursor-pointer flex items-center gap-3" onClick={() => setCouponOpen(!couponOpen)}>
          <div className="w-1 h-8 bg-blue-500 rounded-full flex-shrink-0" />
          <p className="text-sm text-gray-600">Have a coupon? <span className="text-blue-500 hover:underline">Click here to enter your code</span></p>
        </div>

        {couponOpen && (
          <div className="border border-gray-200 rounded-xl p-6 mb-8 flex flex-col sm:flex-row gap-4">
            <input type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Coupon code" className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400" />
            <button className="bg-[#1a1a1a] text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-black transition-colors sm:w-auto w-full">Apply coupon</button>
          </div>
        )}

        {/* ↓ removed bg-red-500, added w-full to left column */}
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left — full width on mobile, flex-1 on desktop */}
          <div className="w-full lg:flex-1 flex flex-col gap-5">
            <h2 className="text-xl font-bold text-gray-900">Billing details</h2>

            <div className="flex flex-col gap-4">
              <div className="w-full flex flex-col gap-1">
                <label className="text-sm text-gray-600">First name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400" value={form.firstName} onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))} />
              </div>
              <div className="w-full flex flex-col gap-1">
                <label className="text-sm text-gray-600">Last name <span className="text-red-500">*</span></label>
                <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400" value={form.lastName} onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))} />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Company name (optional)</label>
              <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400" value={form.company} onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Country / Region <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 bg-white" value={form.country} onChange={(e) => setForm((f) => ({ ...f, country: e.target.value }))}>
                <option value="">Select a country</option>
                <option value="Nigeria">Nigeria</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Ghana">Ghana</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Street address <span className="text-red-500">*</span></label>
              <input type="text" placeholder="House number and street name" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 mb-2" value={form.street1} onChange={(e) => setForm((f) => ({ ...f, street1: e.target.value }))} />
              <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400" value={form.street2} onChange={(e) => setForm((f) => ({ ...f, street2: e.target.value }))} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Town / City <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400" value={form.town} onChange={(e) => setForm((f) => ({ ...f, town: e.target.value }))} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">County <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 bg-white" value={form.county} onChange={(e) => setForm((f) => ({ ...f, county: e.target.value }))}>
                <option value="">Select a county</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Oyo">Oyo</option>
                <option value="Rivers">Rivers</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Postcode / ZIP <span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400" value={form.postcode} onChange={(e) => setForm((f) => ({ ...f, postcode: e.target.value }))} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Phone <span className="text-red-500">*</span></label>
              <input type="tel" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Email address <span className="text-red-500">*</span></label>
              <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Order notes (optional)</label>
              <textarea rows={4} placeholder="Notes about your order, e.g. special delivery instructions." className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 resize-none" value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} />
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-[420px] flex-shrink-0 flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-900">Your order</h2>
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex justify-between text-sm font-semibold text-gray-700 border-b border-gray-200 pb-3">
                <span>Product</span><span>Subtotal</span>
              </div>
              {items.map((item) => {
                const price = parseFloat(item.salePrice.replace(",", ".").replace(" $", ""));
                return (
                  <div key={item.id} className="flex justify-between text-sm text-gray-600 border-b border-gray-100 pb-2">
                    <span>{item.name} <span className="font-semibold text-gray-800">× {item.qty}</span></span>
                    <span>{(price * item.qty).toFixed(2).replace(".", ",")} $</span>
                  </div>
                );
              })}
              <div className="flex justify-between text-sm font-semibold text-gray-700 border-b border-gray-200 pb-3 pt-1">
                <span>Subtotal</span><span>{total.toFixed(2).replace(".", ",")} $</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700 border-b border-gray-200 pb-3">
                <span className="font-semibold">Shipment 1</span><span className="text-gray-400">Free shipping</span>
              </div>
              <div className="flex justify-between font-bold text-gray-900 pt-1">
                <span className="text-base">Total</span>
                <span className="text-xl">{total.toFixed(2).replace(".", ",")} $</span>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-4">
              <PaymentOption id="bank" label="Direct bank transfer" selected={paymentMethod} onSelect={setPaymentMethod} description="Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account." />
              <PaymentOption id="cod" label="Cash on delivery" selected={paymentMethod} onSelect={setPaymentMethod} />
              <button type="button" disabled={!canPlaceOrder} className={`w-full bg-[#1a1a1a] text-white text-sm font-semibold py-4 rounded-xl mt-2 transition-colors ${canPlaceOrder ? "hover:bg-black" : "opacity-50 cursor-not-allowed"}`}>
                Place order
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <Footer />
      </div>
    </div>
  );
}