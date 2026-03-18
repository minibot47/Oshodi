import Link from "next/link";
import Banner from "./components/banner";
import Nav from "./components/nav";
import Footer from "./components/footer";
import GridSystem from "./components/gridsystem";
import Testimonials from "./components/testimonials";
import FlashSaleTimer from "./components/flashsale";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-3 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
      <Nav/>
      <div className="w-full bg-red-500 h-[55vh] sm:h-[60vh] lg:h-[75vh] rounded-[16px] flex flex-col items-center justify-center gap-8">
        <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl w-full lg:w-[750px] text-center px-2">
          Explore the Best in Fashion at Oshodi.
        </h2>
        <div className="bg-white py-4 px-8 rounded-full">Explore now</div>
      </div>

      {/* BRANDS */}
      <div className="mt-10 mb-10">
        <h2 className="text-2xl mb-5 text-gray-500">Brands</h2>
        <div className="w-[95%] m-auto flex flex-wrap items-center justify-center gap-6">
          <img src="/brandicons/brand1.webp" alt="brand1" className="w-[90px] h-[75px] sm:w-[120px] sm:h-[100px]" />
          <img src="/brandicons/brand2.webp" alt="brand2" className="w-[90px] h-[75px] sm:w-[120px] sm:h-[100px]"/>
          <img src="/brandicons/brand3.webp" alt="brand3" className="w-[90px] h-[75px] sm:w-[120px] sm:h-[100px]"/>
          <img src="/brandicons/brand4.webp" alt="brand4" className="w-[90px] h-[75px] sm:w-[120px] sm:h-[100px]"/>
          <img src="/brandicons/brand5.webp" alt="brand5" className="w-[90px] h-[75px] sm:w-[120px] sm:h-[100px]"/>
          <img src="/brandicons/brand6.webp" alt="brand6" className="w-[90px] h-[75px] sm:w-[120px] sm:h-[100px]"/>
          <img src="/brandicons/brand7.webp" alt="brand7" className="w-[90px] h-[75px] sm:w-[120px] sm:h-[100px]"/>
          <img src="/brandicons/brand8.webp" alt="brand8" className="w-[90px] h-[75px] sm:w-[120px] sm:h-[100px]"/>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="mb-20">
        <h1 className="mb-5 text-2xl text-gray-500">Our Philosophy</h1>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[60%]">
            Embrace discovery , ignite passion, redefine your online journey
          </div>
          <Link href="/" className="py-3 px-8 border-[0.1px] border-black rounded-full flex gap-2 items-center ">See the Collection <img src="/icons/arrow.png" alt="Arrow" className="w-8 h-8"/></Link>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-0 h-auto lg:h-[70vh] mt-16">
          <div className="w-full lg:w-[40%] h-[45vh] lg:h-full">
            <div className="w-full h-[50%]"></div>
            <div className="w-[90%] h-[50%] flex items- justify-end  p-3">
              <h2 className="w-full h-full text-left flex items-end">
              Welcome to our online fashion haven, where style meets innovation. Discover a curated collection of trend-setting pieces that cater to your unique taste. From timeless classics to cutting-edge designs, we’re here to inspire and empower your personal fashion journey.Explore our website and unveil the ultimate fusion of contemporary fashion, guiding you to discover and confidently embrace your perfect, modern style through our curated collection
              </h2>
            </div>
          </div>
          <div className="w-full lg:w-[60%] h-[35vh] lg:h-full bg-blue-500 rounded-[16px]"></div>
        </div>
      </div>

      {/* OUR COLLECTION */}
      <div className="mb-20">
        <h1 className="text-2xl mb-5 text-gray-500">Our Collection</h1>
        <div className="w-full  mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">A Collection of Cool<br/> Clothes Available Here</h2>
        </div>
        <div className="h-auto lg:h-[60vh] w-full rounded-[16px] gap-3 flex flex-col lg:flex-row">
          <div className="w-full lg:w-[38%] bg-green-500 rounded-[16px] flex flex-col items-start justify-end p-5 text-white">
              <h2 className="text-3xl text-white">Summer Wear</h2>
              <h3>Men & Women summer collection.</h3>
              <h2 className="flex gap-3 items-center bg-black text-white px-6 py-2 rounded-full mt-4">See Product <img src="/icons/whitearrow.png" alt="Arrow" className="h-2 w-8"/> </h2>
          </div>
          <div className="w-full lg:w-[24%] rounded-[16px] flex flex-col gap-3">
            <div className="w-full h-[60%] bg-gray-500 rounded-[16px] flex flex-col items-start justify-end p-5 text-white">
              <h2 className="text-3xl text-white">Jackets</h2>
              <h3>Spring to Autumn.</h3>
              <h2 className="flex gap-3 items-center bg-black text-white px-6 py-2 rounded-full mt-4">See Product <img src="/icons/whitearrow.png" alt="Arrow" className="h-2 w-8"/> </h2>
            </div>
            <div className="w-full h-[40%] bg-black rounded-[16px] flex flex-col items-start p-5 text-white justify-between">
              <h2 className="py-2 px-5 border-white border-[1px] text-white rounded-full">Special Offers</h2>
              <h2 className="text-3xl">Get 20% off with the code OSHODI20</h2>
            </div>
          </div>
          <div className="w-full lg:w-[38%] bg-blue-500 rounded-[16px] flex flex-col items-start justify-end p-5 text-white">
              <h2 className="text-3xl text-white">Sweaters</h2>
              <h3>Keeping you warm all day.</h3>
              <h2 className="flex gap-3 items-center bg-black text-white px-6 py-2 rounded-full mt-4">See Product <img src="/icons/whitearrow.png" alt="Arrow" className="h-2 w-8"/> </h2>
          </div>
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <div className="mb-20">
        <h1 className="mb-5 text-2xl text-gray-500">New Arrivals</h1>
        <div className="flex justify-between items-center mb-20">
          <div className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[60%]">New Arrivals this<br/> Spring Season</div>
          <Link href="/" className="py-3 px-8 border-[0.1px] border-black rounded-full flex gap-2 items-center ">View All <img src="/icons/arrow.png" alt="Arrow" className="w-8 h-8"/></Link>
        </div>
        <GridSystem/>
      </div>

      {/* TESTIMONIALS */}
      <div className="mb-20">
        <h2 className="text-2xl mb-5 text-gray-500">Testimonials</h2>
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl">They Are Satisfied With<br/> What They Buy in Vault</h2>
        </div>
        <Testimonials/>
      </div>

      {/* FLASHSALE */}
      <div className="w-full h-[60vh] sm:h-[70vh] lg:h-[85vh] bg-red-500 rounded-[16px] mb-20 p-6 sm:p-10 flex flex-col gap-10 items-start">
        <h2 className="text-4xl sm:text-5xl lg:text-8xl">Check out<br/> today's flashsale</h2>
        <h3 className="text-base sm:text-xl font-thin">Get ready for an electrifying shopping experience! Our Flash Sale<br/> is here, offering unbeatable deals for a limited time.</h3>
        <Link href='/' className="px-8 py-4 bg-white text-black rounded-full">Go to Sale Items</Link>
        <FlashSaleTimer/>
      </div>

      <Footer/>
    </main>
  );
}
