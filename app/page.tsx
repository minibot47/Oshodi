"use client";

import Link from "next/link";
import Banner from "./components/banner";
import Nav from "./components/nav";
import Footer from "./components/footer";
import GridSystem from "./components/gridsystem";
import Testimonials from "./components/testimonials";
import FlashSaleTimer from "./components/flashsale";

export default function Home() {
  const philosophyBg =
    "/images/flashsale.webp";
  const collectionSummerBg =
    "/images/collection1.webp";
  const collectionSweatersBg =
    "/images/collection3.webp";
  const flashSaleBg =
    "/images/flashsale.webp";

  return (
    <>
    <main className="min-h-screen flex flex-col gap-3 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
      <div className="relative w-full mt-[10] h-[60vh] sm:h-[60vh] lg:h-[580px] rounded-[16px] overflow-hidden flex flex-col items-center justify-center gap-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
        />

        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        <h2 className="relative z-10 text-white font-medium text-4xl sm:text-5xl lg:text-8xl w-full lg:w-[850px] text-center px-2">
          Explore the Best in Fashion at Vault.
        </h2>
        <Link href='/shop' className="relative z-10 bg-white py-4 px-7 rounded-full">Explore now</Link>
      </div>

      {/* BRANDS */}
      <div className="mt-10 mb-32  ">
        <h2 className="text-lg sm:text-xl mb-5 text-gray-500 font-light">Brands</h2>
        <div className="w-[90%] m-auto flex flex-wrap items-center justify-evenly gap-3 sm:gap-8">
          <img src="/brandicons/brand1.webp" alt="brand1" className="w-[40px] h-[35px] sm:w-[100px] sm:h-[80px]" />
          <img src="/brandicons/brand2.webp" alt="brand2" className="w-[40px] h-[35px] sm:w-[100px] sm:h-[80px]"/>
          <img src="/brandicons/brand3.webp" alt="brand3" className="w-[40px] h-[35px] sm:w-[100px] sm:h-[80px]"/>
          <img src="/brandicons/brand4.webp" alt="brand4" className="w-[40px] h-[35px] sm:w-[100px] sm:h-[80px]"/>
          <img src="/brandicons/brand5.webp" alt="brand5" className="w-[40px] h-[35px] sm:w-[100px] sm:h-[80px]"/>
          <img src="/brandicons/brand6.webp" alt="brand6" className="w-[40px] h-[35px] sm:w-[100px] sm:h-[80px]"/>
          <img src="/brandicons/brand7.webp" alt="brand7" className="w-[40px] h-[35px] hidden sm:flex sm:w-[100px] sm:h-[80px]"/>
          <img src="/brandicons/brand8.webp" alt="brand8" className="w-[40px] h-[35px] hidden sm:flex sm:w-[100px] sm:h-[80px]"/>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="mb-5 sm:mb-32">
        <h1 className="lg sm:text-xl mb-5 text-gray-500 font-light">Our Philosophy</h1>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="text-3xl font-medium sm:text-4xl lg:text-5xl w-full lg:w-[65%]">
            Embrace discovery , ignite passion, redefine your online journey
          </div>
          <Link href="/shop" className="py-3 px-8 border-[0.1px] border-black rounded-full flex gap-2 items-center ">See the Collection <img src="/icons/arrow.png" alt="Arrow" className="w-8 h-8"/></Link>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:items-stretch gap-4 lg:gap-0 h-auto lg:h-[67vh] mt-1 sm:mt-16">
          <div className="w-full lg:w-[38%] h-[45vh] lg:h-full">
            <div className="w-full h-[50%]"></div>
            <div className="w-full sm:w-[90%] h-[50%] flex flex-col gap-2 justify-end p-0  sm:p-3 ">
              <h2 className="w-full h-full text-left flex items-end leading-7 font-light">
              Welcome to our online fashion haven, where style meets innovation. Discover a curated collection of trend-setting pieces that cater to your unique taste. From timeless classics to cutting-edge designs, we’re here to inspire and empower your personal fashion journey.
              </h2>
              <h2 className="w-full h-full text-left flex items-end leading-7 font-light">Explore our website and unveil the ultimate fusion of contemporary fashion, guiding you to discover and confidently embrace your perfect, modern style through our curated collection</h2>
            </div>
          </div>
          <div className="w-full lg:w-[62%] h-[35vh] lg:h-full rounded-[16px] overflow-hidden relative group">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${philosophyBg})` }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

            {/* Watch Video button — centered */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={() => {
                  const modal = document.getElementById("video-modal");
                  if (modal) modal.classList.remove("hidden");
                }}
                className="flex items-center gap-3 bg-white/30 backdrop-blur-md border border-white/40 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/40 transition-all duration-300"
              >
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-black text-xs ml-0.5">▶</span>
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* Video modal */}
          <div
            id="video-modal"
            className="hidden fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                e.currentTarget.classList.add("hidden");
                const video = document.getElementById("modal-video") as HTMLVideoElement;
                if (video) video.pause();
              }
            }}
          >
            <div className="relative w-full max-w-[1440px] rounded-2xl overflow-hidden">
              <button
                className="absolute top-3 right-3 z-10 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black transition-colors"
                onClick={() => {
                  document.getElementById("video-modal")?.classList.add("hidden");
                  const video = document.getElementById("modal-video") as HTMLVideoElement;
                  if (video) video.pause();
                }}
              >
                ✕
              </button>
              <video
                id="modal-video"
                className="w-full rounded-2xl"
                controls
                src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* OUR COLLECTION */}
      <div className="mb-36">
        <h1 className="lg sm:text-xl mb-5 text-gray-500 font-medium">Our Collection</h1>
        <div className="w-full  mb-16">
          <h2 className="text-3xl font-medium sm:text-4xl lg:text-5xl">A Collection of Cool<br/> Clothes Available Here</h2>
        </div>
        <div className="h-auto lg:h-[58vh] w-full rounded-[16px] gap-3 flex flex-col lg:flex-row">
          <div className="w-full lg:w-[37%] rounded-[16px] overflow-hidden relative flex flex-col items-start justify-end p-7 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${collectionSummerBg})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
              <h2 className="relative z-10 text-3xl text-white">Summer Wear</h2>
              <h3 className="relative z-10">Men & Women summer collection.</h3>
              <h2 className="relative z-10 flex gap-3 items-center bg-black text-white px-7 py-3 rounded-full mt-4">
                See Product →
              </h2>
          </div>
          <div className="w-full lg:w-[26%] rounded-[16px] flex flex-col gap-3">
            <div className="w-full h-[60%] rounded-[16px] overflow-hidden relative flex flex-col items-start justify-end p-7 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("/images/collection2.webp")',
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
              <h2 className="relative z-10 text-3xl text-white">Jackets</h2>
              <h3 className="relative z-10">Spring to Autumn.</h3>
              <h2 className="relative z-10 flex gap-3 items-center bg-black text-white px-7 py-3 rounded-full mt-4">
                See Product →
              </h2>
            </div>
            <div className="w-full h-[40%] bg-[#0f0f2b] rounded-[16px] flex flex-col items-start p-7 text-white justify-between gap-3 lg:gap-0">
              <h2 className="py-2 px-5 border-white border-[1px] text-white rounded-full">Special Offers</h2>
              <h2 className="text-2xl">Get 20% off with the code OSHODI20</h2>
            </div>
          </div>
          <div className="w-full lg:w-[37%] rounded-[16px] overflow-hidden relative flex flex-col items-start justify-end p-7 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${collectionSweatersBg})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
              <h2 className="relative z-10 text-3xl text-white">Sweaters</h2>
              <h3 className="relative z-10">Keeping you warm all day.</h3>
              <h2 className="relative z-10 flex gap-3 items-center bg-black text-white px-7 py-3 rounded-full mt-4">
                See Product →
              </h2>
          </div>
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <div className="mb-40">
        <h1 className="text-lg sm:text-xl mb-5 text-gray-500 ">New Arrivals</h1>
        <div className="flex lg:flex-row flex-col justify-between items-start lg:items-center gap-5  mb-20">
          <div className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[60%]">New Arrivals this<br/> Spring Season</div>
          <Link href="/shop" className="py-3 px-8 border-[0.1px] border-black rounded-full flex gap-2 items-center ">View All <img src="/icons/arrow.png" alt="Arrow" className="w-8 h-8"/></Link>
        </div>
        <GridSystem/>
      </div>

      {/* TESTIMONIALS */}
      <div className="mb-36">
        <h2 className="text-lg sm:text-xl mb-5 text-gray-500 ">Testimonials</h2>
        <div className="mb-16">
          <h2 className="text-3xl font-medium sm:text-4xl lg:text-5xl">They Are Satisfied With<br/> What They Buy in Vault</h2>
        </div>
        <Testimonials/>
      </div>

      {/* FLASHSALE */}
      <div className="relative w-full h-fit sm:h-[70vh] lg:h-[85vh] rounded-[16px] mb-20 p-6 sm:p-14 overflow-hidden flex flex-col gap-10 items-start text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${flashSaleBg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        <h2 className="relative z-10 text-4xl sm:text-5xl lg:text-8xl">Check out<br/> today's flashsale</h2>
        <h3 className="relative z-10 text-base sm:text-xl font-thin">
          Get ready for an electrifying shopping experience! Our Flash Sale<br/> is here, offering unbeatable deals for a limited time.
        </h3>
        <Link href='/shop' className="px-8 py-4 bg-white text-black rounded-full z-10">Go to Sale Items</Link>
        <FlashSaleTimer/>
      </div>
    </main></>

  );
}
