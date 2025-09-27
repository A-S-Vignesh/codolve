"use client";
import { useState, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function SmoothScrollWrapper({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // Wait until component is mounted to render smoother
  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!wrapperRef.current || !contentRef.current) return;
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 1.2,
      effects: true,
    });
    return () => smoother.kill();
  }, [mounted]);

  if (!mounted) return <>{children}</>; // Render normally until mounted

  return (
    <div ref={wrapperRef} id="wrapper">
      <div ref={contentRef} id="content">
        {children}
      </div>
    </div>
  );
}
