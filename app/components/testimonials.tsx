"use client";
import { useState, useEffect } from "react";

const testimonials = [
  { id: 1, name: "John Caine",  text: "This website is the perfect place to find the latest fashion trends. I always come back here for the latest styles." },
  { id: 2, name: "Danny Cole",  text: "I am blown away by the incredible selection and quality of products offered by this online store." },
  { id: 3, name: "Jamie Jones", text: "The website is user-friendly, the shipping is prompt, and the customer service team is exceptional." },
  { id: 4, name: "Adam Smith",  text: "I am very pleased with the quality I buy from this website. They always exceed expectations!" },
  { id: 5, name: "Sara Mensah", text: "From the browsing experience to checkout, everything just works. Best fashion store I've used online." },
  { id: 6, name: "Tunde Bello", text: "I found my favourite jacket right here. The collection is curated with real taste — I keep coming back." },
];

const TOTAL = testimonials.length;
const DURATION = 800; // ms — change this to make it faster or slower

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const [visualOffset, setVisualOffset] = useState(0); // extra offset during animation (in %)
  const [animating, setAnimating] = useState(false);

  const canPrev = start > 0;
  const canNext = start < TOTAL - 2;

  const slide = (dir: "next" | "prev") => {
    if (animating) return;
    if (dir === "next" && !canNext) return;
    if (dir === "prev" && !canPrev) return;

    setAnimating(true);

    // Step 1: animate the track by one card width in the right direction
    setVisualOffset(dir === "next" ? -50 : 50);

    setTimeout(() => {
      // Step 2: update the real index and instantly snap back (no transition)
      setStart((s) => (dir === "next" ? s + 1 : s - 1));
      setVisualOffset(0); // snap — no transition fires here because we set animating false after
      setAnimating(false);
    }, DURATION);
  };

  useEffect(() => {
    const t = setInterval(() => {
      if (start < TOTAL - 2) slide("next");
      else setStart(0);
    }, 5000);
    return () => clearInterval(t);
  }, [start, animating]);

  // Base position + animated offset
  const translateX = -(start * 50) + visualOffset;

  return (
    <div className="w-full mt-8 flex items-center gap-4">

      {/* Left arrow */}
      <button
        onClick={() => slide("prev")}
        className={`text-4xl flex-shrink-0 transition-colors duration-200 ${
          canPrev ? "text-gray-400 hover:text-black cursor-pointer" : "text-gray-200 cursor-default"
        }`}
      >‹</button>

      {/* Viewport */}
      <div className="flex-1 overflow-hidden">
        <div
          className="flex"
          style={{
            transform: `translateX(${translateX}%)`,
            // Only apply CSS transition while animating — snap is instant
            transition: animating ? `transform ${DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)` : "none",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 px-2 box-border"
              style={{ width: "50%" }}
            >
              <div className="bg-[#1e2330] rounded-2xl p-8 flex flex-col gap-3">
                <span className="text-3xl text-orange-500 leading-none">❝</span>
                <h3 className="text-white font-bold text-lg">{t.name}</h3>
                <p className="text-[#a0a8b8] text-sm leading-relaxed">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex flex-col gap-2 flex-shrink-0">
        {testimonials.slice(0, TOTAL - 1).map((_, i) => (
          <button
            key={i}
            onClick={() => !animating && setStart(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === start ? "bg-orange-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => slide("next")}
        className={`text-4xl flex-shrink-0 transition-colors duration-200 ${
          canNext ? "text-gray-400 hover:text-black cursor-pointer" : "text-gray-200 cursor-default"
        }`}
      >›</button>

    </div>
  );
}