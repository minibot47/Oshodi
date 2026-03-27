import Link from "next/link"

export default function Footer(){
    return(
        <div className="w-full h-auto sm:h-[40vh] max-w-[1440px] m-auto text-black flex flex-col gap-1 mb-5 px-4 sm:px-6 lg:px-14">
            <div className="w-full h-full flex flex-col  sm:flex-row">
                <div className="w-full sm:w-[25%] py-3 flex flex-col gap-3 ">
                <Link href="/" className="flex items-end gap-1">
                    <img src="/icons/oshodi.png" alt="LOGO" className="w-[150px] h-[30px]" />
                </Link>
                    <h3 className="text-sm w-[90%]">Your trusted destination for tech and home appliances, delivered to your door.</h3>
                </div>
                <div className="w-full sm:w-[18%] p-5 flex flex-col gap-2">
                    <h2 className="text-xl sm:text-xl mb-3 font-medium">Get Help</h2>
                    <Link href="" className="text-sm">Delivery</Link>
                    <Link href="" className="text-sm">Returns</Link>
                    <Link href="" className="text-sm">Payment Options</Link>
                    <Link href="" className="text-sm">Contact Us</Link>
                </div>
                <div className="w-full sm:w-[18%] p-5 flex flex-col gap-2">
                    <h2 className="text-xl sm:text-xl mb-3 font-medium">About Oshodi</h2>
                    <Link href="" className="text-sm">News</Link>
                    <Link href="" className="text-sm">Careers</Link>
                    <Link href="" className="text-sm">Investors</Link>
                    <Link href="" className="text-sm">Sustainability</Link>
                </div>
                <div className="w-full sm:w-[20%] p-5 flex flex-col gap-2">
                    <h2 className="text-xl sm:text-xl mb-3 font-medium">Social Media</h2>
                    <Link href="" className="text-sm">Instagram</Link>
                    <Link href="" className="text-sm">Facebook</Link>
                    <Link href="" className="text-sm">Linkedin</Link>
                    <Link href="" className="text-sm">Twitter</Link>
                </div>
                <div className="w-full sm:w-[20%] p-5 flex flex-col gap-2">
                    <h2 className="text-xl sm:text-xl mb-3 font-medium">Contact</h2>
                    <Link href="" className="text-sm">oshodilive.com</Link>
                    <Link href="" className="text-sm">Lagos, Nigeria</Link>
                </div>
            </div>
            <div className="border-t-[0.1px] border-gray-100 flex items-center justify-between py-3 ">
                <div className="w-full   m-auto flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                    <div className="w-fit">
                        <h1>© 2026 Oshodi. All rights reserved.</h1>
                    </div>
                    <div className="flex gap-3  font-light">
                        <Link href="/" className="text-sm">Customer Service</Link>
                        <Link href="/" className="text-sm">Terms & Conditions</Link>
                        <Link href="/" className="text-sm">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}