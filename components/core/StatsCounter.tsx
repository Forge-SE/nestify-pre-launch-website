"use client";
import { useEffect, useState } from "react";

function StatCounter({ end, format, suffix }: { end: number, format?: (v:number)=>string, suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(end / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, duration / (end/step));
    return () => clearInterval(interval);
  }, [end]);
  let display = format ? format(count) : count;
  if (count === end && format) display = format(end);
  return <span>{display}{suffix}</span>;
}
export default StatCounter;
