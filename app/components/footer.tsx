import Link from "next/link"

export default function Footer(){
    return(
        <div className="w-full h-auto sm:h-[40vh] max-w-[1440px] m-auto text-black flex flex-col gap-2 mb-10 px-4 sm:px-6 lg:px-14">
            <div className="w-full h-full flex flex-col sm:flex-row">
                <div className="w-full sm:w-[25%] p-5 flex flex-col gap-3">
                    <img src="" alt="LOGO"/>
                    <h2 className="text-2xl sm:text-3xl font-semibold">OSHODI</h2>
                    <h3 className="text-sm">Make your clothing style cooler and more modern, only here.</h3>
                </div>
                <div className="w-full sm:w-[18%] p-5 flex flex-col gap-2">
                    <h2 className="text-xl sm:text-2xl mb-2">Get Help</h2>
                    <Link href="" className="text-sm">Delivery</Link>
                    <Link href="" className="text-sm">Returns</Link>
                    <Link href="" className="text-sm">Payment Options</Link>
                    <Link href="" className="text-sm">Contact Us</Link>
                </div>
                <div className="w-full sm:w-[18%] p-5 flex flex-col gap-2">
                    <h2 className="text-xl sm:text-2xl mb-2">About Vault</h2>
                    <Link href="" className="text-sm">News</Link>
                    <Link href="" className="text-sm">Careers</Link>
                    <Link href="" className="text-sm">Investors</Link>
                    <Link href="" className="text-sm">Sustainability</Link>
                </div>
                <div className="w-full sm:w-[20%] p-5 flex flex-col gap-2">
                    <h2 className="text-xl sm:text-2xl mb-2">Social Media</h2>
                    <Link href="" className="text-sm">Instagram</Link>
                    <Link href="" className="text-sm">Facebook</Link>
                    <Link href="" className="text-sm">Linkedin</Link>
                    <Link href="" className="text-sm">Twitter</Link>
                </div>
                <div className="w-full sm:w-[20%] p-5 flex flex-col gap-2">
                    <h2 className="text-xl sm:text-2xl mb-2">Contact</h2>
                    <Link href="" className="text-sm">toludairo534@gmail.com</Link>
                    <Link href="" className="text-sm">Address of the company</Link>

                </div>
            </div>
            <div className="border-t-[0.1px] border-gray-500 flex items-center justify-between py-3 px-3 ">
                <div className="w-full sm:w-[85%]  m-auto flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                    <div className="w-fit">
                        <h1>© 2026 Vault Theme by Oshodi. All rights reserved.</h1>
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