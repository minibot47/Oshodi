"use client";
import { useState, useEffect } from "react";

const testimonials = [
  { id: 1, name: "Chukwuemeka Obi",  text: "Oshodi is my go-to for all things tech. The prices are fair and my laptop arrived faster than expected — properly packaged too." },
  { id: 2, name: "Funmilayo Adeyemi",  text: "I bought a Samsung TV and the quality is exactly as described. Delivery was smooth and the team was so helpful throughout." },
  { id: 3, name: "Tunde Fashola", text: "The website is easy to navigate, checkout was stress-free, and my order came on time. Oshodi has earned my trust." },
  { id: 4, name: "Ngozi Okonkwo",  text: "I was skeptical about buying appliances online but Oshodi changed that. Everything was genuine and well worth the price." },
  { id: 5, name: "Babatunde Lawal", text: "Best tech store I've used in Nigeria. Wide selection, real warranties, and customer service that actually picks up the phone." },
  { id: 6, name: "Amaka Eze", text: "Got my iPhone and a Xiaomi air purifier in one order. Both arrived in perfect condition. I keep recommending Oshodi to everyone." },
];

const TOTAL = testimonials.length;
const DURATION = 800;

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const [visualOffset, setVisualOffset] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardWidth = isMobile ? 100 : 50;
  const maxStart = isMobile ? TOTAL - 1 : TOTAL - 2;

  const canPrev = start > 0;
  const canNext = start < maxStart;

  const slide = (dir: "next" | "prev") => {
    if (animating) return;
    if (dir === "next" && !canNext) return;
    if (dir === "prev" && !canPrev) return;

    setAnimating(true);
    setVisualOffset(dir === "next" ? -cardWidth : cardWidth);

    setTimeout(() => {
      setStart((s) => (dir === "next" ? s + 1 : s - 1));
      setVisualOffset(0);
      setAnimating(false);
    }, DURATION);
  };

  useEffect(() => {
    const t = setInterval(() => {
      if (start < maxStart) slide("next");
      else setStart(0);
    }, 5000);
    return () => clearInterval(t);
  }, [start, animating, isMobile]);

  const translateX = -(start * cardWidth) + visualOffset;

  return (
    <div className="w-full mt-8 flex items-center gap-4 ">

      <button
        onClick={() => slide("prev")}
        className={`text-4xl flex-shrink-0 transition-colors duration-200 ${
          canPrev ? "text-gray-400 hover:text-black cursor-pointer" : "text-gray-200 cursor-default"
        }`}
      >‹</button>

      <div className="flex-1 overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(${translateX}%)`,
            transition: animating ? `transform ${DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)` : "none",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 px-2 box-border h-full"
              style={{ width: `${cardWidth}%` }}
            >
              <div className="bg-[#1e2330] rounded-2xl p-9 flex flex-col gap-3 h-[280px]">
                <img src="/icons/apostrophe.webp" alt="Apostrophe " className="w-10 h-10"/>
                <h3 className="text-white font-bold text-xl">{t.name}</h3>
                <p className="text-[#a0a8b8] text-lg leading-relaxed">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => slide("next")}
        className={`text-4xl flex-shrink-0 transition-colors duration-200 ${
          canNext ? "text-gray-400 hover:text-black cursor-pointer" : "text-gray-200 cursor-default"
        }`}
      >›</button>

    </div>
  );
}