import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full hidden sm:flex h-[38px] bg-[#181f2c] text-sm text-white  items-center justify-center">
      <h2 className="text-[12px] font-light p-3 text-center lg:p-0"><span className="font-semibold">20%</span> off with the promo code VAULT20. Limited time offer. <Link href="/shop" className="font-semibold underline underline-offset-2">Shop now</Link></h2>
    </div>
  );
}