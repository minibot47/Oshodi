import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full h-[40px] bg-black text-sm text-white flex items-center justify-center">
      <h2><span className="font-semibold">20%</span> off with the promo code OSHODI20 limited time offer. <Link href="/shop" className="font-semibold underline underline-offset-2">Shop now</Link></h2>
    </div>
  );
}