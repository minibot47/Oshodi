"use client";
import { useState, useEffect } from "react";

// Set your flash sale end time here — change this to whenever the sale ends
const SALE_END = new Date(Date.now() + 2 * 60 * 60 * 1000); // 24 hours from now

function getTimeLeft() {
  const diff = SALE_END.getTime() - Date.now();
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0 };
  return {
    hours:   Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function FlashSaleTimer() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const blocks = [
    { label: "Hours",   value: time.hours   },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="w-fit flex gap-5 h-fit text-white z-10">
      {blocks.map(({ label, value }) => (
        <div
          key={label}
          className="w-[70px] h-[70px] lg:w-[120px] lg:h-[120px] bg-white/20 backdrop-blur-md border border-white/10 rounded-[16px] flex flex-col items-center justify-center gap-1 text-white"
        >
          <h2 className="text-2xl lg:text-6xl font-semibold tabular-nums text-white">{pad(value)}</h2>
          <h2 className="text-sm lg:text-sm">{label}</h2>
        </div>
      ))}
    </div>
  );
}