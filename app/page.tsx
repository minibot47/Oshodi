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
    "/images/elitebook.jpg";
  const collectionSummerBg =
    "/images/iphone16.jpg";
  const collectionSweatersBg =
    "/images/homeappliances.jpg";
  const flashSaleBg =
    "/images/sonycamera.jpg";

  return (
    <>
    <main className="min-h-screen flex flex-col gap-3 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 " >
      <div className="relative w-full mt-[6] h-[60vh] sm:h-[60vh] lg:h-[555px] rounded-[16px] overflow-hidden flex flex-col items-center justify-center gap-8">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.pexels.com/download/video/7680440/"
        />

        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        <h2 className="relative z-10 text-white  text-4xl sm:text-5xl lg:text-7xl w-full lg:w-[850px] text-center px-2">
        The tech you deserve, the price you'll love
        </h2>
        <h2 className="relative z-10 text-white  text-4xl sm:text-5xl lg:text-6xl w-full lg:w-[700px] text-left px-2 ">.....Oshodi</h2>
        <Link href='/shop' className="relative z-10 bg-white py-4 px-9 rounded-full">Explore now</Link>
      </div>

      {/* BRANDS */}
      <div className="mt-10 mb-28  ">
        <h2 className="text-lg sm:text-xl mb-5 text-[#6b778a] ">Brands</h2>
        <div className="w-full px-2 m-auto flex flex-wrap items-center justify-evenly gap-6">
          {["brand1","brand3","brand4","brand5","brand6","brand7","brand8"].map((brand, i) => (
            <img
              key={brand}
              src={`/brandicons/${brand}.png`}
              alt={brand}
              className={`object-contain w-[60px] h-[40px] sm:w-[100px] sm:h-[80px] lg:w-[130px] lg:h-[90px] ${
                i >= 6 ? "hidden lg:block" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="mb-5 sm:mb-32">
        <h1 className="lg sm:text-xl mb-5 text-[#556174]">Our Philosophy</h1>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="text-3xl  sm:text-4xl lg:text-5xl w-full lg:w-[70%]">
            Discover tech that fits your life, your budget, and your future
          </div>
          <Link href="/shop" className="py-3 px-7 border-[0.1px] border-black rounded-full flex gap-2 items-center ">See the Collection <img src="/icons/arrow.png" alt="Arrow" className="w-8 h-8"/></Link>
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:items-stretch gap-5 lg:gap-0 h-auto lg:h-[556px] mt-1 sm:mt-10">
          <div className="w-full lg:w-[38%] h-[45vh] lg:h-full">
            <div className="w-full h-[50%]"></div>
            <div className="w-full sm:w-[92%] h-[50%] flex flex-col gap-2 justify-end items-end  p-0  sm:p-3 ">
              <div className="flex flex-col gap-5">
                <h2 className="w-full text-[#556174] leading-6 text-left flex font-thin">
                Welcome to Oshodi, Your go-to destination for tech and home appliances. We bring together the best smartphones, laptops, TVs, and smart devices so you can find exactly what you need, all in one place.
                </h2>
                <h2 className="w-full text-[#556174] leading-6 text-left flex  font-light">Browse our store and find the perfect device for your home, your work, or your everyday life, backed by genuine warranties and delivered straight to your door.</h2>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[62%] h-[30vh] lg:h-full rounded-[16px] overflow-hidden relative group">
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
                  if (modal) {
                    modal.classList.remove("hidden");
                    modal.classList.add("flex");
                  }
                }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm  text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/40 transition-all duration-300"
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
            className="hidden items-center justify-center fixed inset-0 z-[100] bg-black/80 m-auto p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                e.currentTarget.classList.add("hidden");
                e.currentTarget.classList.remove("flex");
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
                  document.getElementById("video-modal")?.classList.remove("flex");
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
                autoPlay
                src="https://www.pexels.com/download/video/7680440/"
              />
            </div>
          </div>
        </div>
      </div>

      {/* OUR COLLECTION */}
      <div className="mb-36">
        <h1 className="lg sm:text-xl mb-5 text-[#556174]">Our Collection</h1>
        <div className="w-full  mb-16">
          <h2 className="text-3xl  sm:text-4xl lg:text-5xl">A Collection of Quality<br/> Tech & Appliances Available Here</h2>
        </div>
        <div className="h-auto lg:h-[56vh] w-full rounded-[16px] gap-3 flex flex-col lg:flex-row">
          <div className="w-full lg:w-[37%] rounded-[16px] overflow-hidden relative flex flex-col items-start justify-end p-7 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${collectionSummerBg})` }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
              <h2 className="relative z-10 text-3xl text-white">Smartphones</h2>
              <h3 className="relative z-10">Latest Android & iPhone models.</h3>
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
                    'url("/images/macbook1.jpg")',
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
              <h2 className="relative z-10 text-3xl text-white">Laptops</h2>
              <h3 className="relative z-10">Work, school & gaming.</h3>
              <h2 className="relative z-10 flex gap-3 items-center bg-black text-white px-7 py-3 rounded-full mt-4">
                See Product →
              </h2>
            </div>
            <div className="w-full h-[40%] bg-[#222935] rounded-[16px] flex flex-col items-start p-7 text-white justify-between gap-3 lg:gap-0">
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
              <h2 className="relative z-10 text-3xl text-white">Home Appliances</h2>
              <h3 className="relative z-10">Smart devices for every room.</h3>
              <h2 className="relative z-10 flex gap-3 items-center bg-black text-white px-7 py-3 rounded-full mt-4">
                See Product →
              </h2>
          </div>
        </div>
      </div>

      {/* NEW ARRIVALS */}
      <div className="mb-36">
        <h1 className="text-lg sm:text-xl mb-5 text-[#556174] ">New Arrivals</h1>
        <div className="flex lg:flex-row flex-col justify-between items-start lg:items-center gap-5  mb-16">
          <div className="text-3xl sm:text-4xl lg:text-5xl w-full lg:w-[60%]">New Arrivals this<br/> Season at Oshodi</div>
          <Link href="/shop" className="py-3 px-8 border-[0.1px] border-black rounded-full flex gap-2 items-center ">View All <img src="/icons/arrow.png" alt="Arrow" className="w-8 h-8"/></Link>
        </div>
        <GridSystem/>
      </div>
    </main>
    {/* TESTIMONIALS */}
        <div className="mb-36 max-w-[1440px] m-auto">
          <h2 className="text-lg sm:text-xl mb-5 text-[#556174] mx-auto px-4 sm:px-6 lg:px-12 ">Testimonials</h2>
          <div className="mb-16">
            <h2 className="text-3xl font-medium sm:text-4xl lg:text-5xl mx-auto px-4 sm:px-6 lg:px-12">They Are Satisfied With<br/> What They Buy at Oshodi</h2>
          </div>
          <Testimonials/>
        </div>

    {/* FLASHSALE */}
    <div className="min-h-screen flex flex-col gap-3 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 ">
      <div className="relative w-full  m-auto max-w-[1440px]  h-fit sm:h-[70vh] lg:h-[688px] rounded-[16px] overflow-hidden mb-24 p-6 sm:p-14  flex flex-col gap-10 items-start text-white  ">
        <div
          className="absolute inset-0 bg-fill bg-center"
          style={{ backgroundImage: `url(${flashSaleBg})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        <h2 className="relative z-10 text-4xl sm:text-5xl lg:text-8xl">Check out<br/> today's flash sale</h2>
        <h3 className="relative z-10 text-base sm:text-sm font-thin">
          Massive discounts on top smartphones, laptops, and home appliances.<br/> Limited stock, Grab the best deals before time runs out.
        </h3>
        <Link href='/shop' className="px-8 py-4 bg-white text-black rounded-full z-10">Go to Sale Items</Link>
        <FlashSaleTimer/>
      </div></div> 
    </>
  );
}