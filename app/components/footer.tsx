import Link from "next/link"

export default function Footer(){
    return(
        <div className="w-full h-auto sm:h-[40vh] text-black flex flex-col gap-2 mb-10">
            <div className="w-full h-full flex flex-col sm:flex-row">
                <div className="w-full sm:w-[25%] p-5 flex flex-col gap-3">
                    <img src="" alt="LOGO"/>
                    <h2 className="text-3xl font-semibold">OSHODI</h2>
                    <h3 className="font-light">Make your clothing style cooler and more modern, only here.</h3>
                </div>
                <div className="w-full sm:w-[18%] p-5 flex flex-col gap-2">
                    <h2 className="text-2xl mb-2">Get Help</h2>
                    <Link href="">Delivery</Link>
                    <Link href="">Returns</Link>
                    <Link href="">Payment Options</Link>
                    <Link href="">Contact Us</Link>
                </div>
                <div className="w-full sm:w-[18%] p-5 flex flex-col gap-2">
                    <h2 className="text-2xl mb-2">About Vault</h2>
                    <Link href="">News</Link>
                    <Link href="">Careers</Link>
                    <Link href="">Investors</Link>
                    <Link href="">Sustainability</Link>
                </div>
                <div className="w-full sm:w-[20%] p-5 flex flex-col gap-2">
                    <h2 className="text-2xl mb-2">Social Media</h2>
                    <Link href="">Instagram</Link>
                    <Link href="">Facebook</Link>
                    <Link href="">Linkedin</Link>
                    <Link href="">Twitter</Link>
                </div>
                <div className="w-full sm:w-[20%] p-5 flex flex-col gap-2">
                    <h2 className="text-2xl mb-2">Contact</h2>
                    <Link href="">toludairo534@gmail.com</Link>
                    <Link href="">Address of the company</Link>

                </div>
            </div>
            <div className="border-t-[0.1px] border-gray-500 flex items-center justify-between py-3 px-3 ">
                <div className="w-full sm:w-[80%] m-auto flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
                    <div className="w-full">
                        <h1>© 2026 Vault Theme by Oshodi. All rights reserved.</h1>
                    </div>
                    <div className="flex gap-3  font-light">
                        <Link href="/">Customer Service</Link>
                        <Link href="/">Terms & Conditions</Link>
                        <Link href="/">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}