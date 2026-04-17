"use client";

import { useEffect, useRef, useState } from "react";

export function BackgroundGradientAnimation({
  gradientBackgroundStart = "rgb(3, 7, 18)",
  gradientBackgroundEnd = "rgb(8, 12, 28)",
  firstColor = "15, 40, 110",
  secondColor = "20, 55, 130",
  thirdColor = "10, 30, 85",
  fourthColor = "5, 18, 55",
  fifthColor = "12, 45, 95",
  pointerColor = "30, 75, 140",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className = "",
  interactive = true,
  containerClassName = "",
}) {
  const interactiveRef = useRef(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    const s = document.body.style;
    s.setProperty("--gradient-background-start", gradientBackgroundStart);
    s.setProperty("--gradient-background-end", gradientBackgroundEnd);
    s.setProperty("--first-color", firstColor);
    s.setProperty("--second-color", secondColor);
    s.setProperty("--third-color", thirdColor);
    s.setProperty("--fourth-color", fourthColor);
    s.setProperty("--fifth-color", fifthColor);
    s.setProperty("--pointer-color", pointerColor);
    s.setProperty("--size", size);
    s.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) return;
      setCurX((prev) => prev + (tgX - prev) / 20);
      setCurY((prev) => prev + (tgY - prev) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    }
    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const blobBase =
    "absolute [mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]";

  return (
    <div
      className={`h-full w-full relative overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))] ${containerClassName}`}
      onMouseMove={interactive ? handleMouseMove : undefined}
    >
      {/* SVG goo filter */}
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Children (hero content) */}
      <div className={className}>{children}</div>

      {/* Animated gradient blobs */}
      <div
        className={`gradients-container h-full w-full blur-lg ${
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        }`}
      >
        <div
          className={`${blobBase} [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.8)_0,_rgba(var(--first-color),_0)_50%)_no-repeat] [transform-origin:center_center] animate-first opacity-100`}
        />
        <div
          className={`${blobBase} [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [transform-origin:calc(50%-400px)] animate-second opacity-100`}
        />
        <div
          className={`${blobBase} [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [transform-origin:calc(50%+400px)] animate-third opacity-100`}
        />
        <div
          className={`${blobBase} [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat] [transform-origin:calc(50%-200px)] animate-fourth opacity-70`}
        />
        <div
          className={`${blobBase} [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100`}
        />

        {interactive && (
          <div
            ref={interactiveRef}
            className="absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2 opacity-70"
          />
        )}
      </div>
    </div>
  );
}
