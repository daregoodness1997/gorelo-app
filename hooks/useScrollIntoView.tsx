"use client";

import { useEffect, RefObject } from "react";
import { usePathname } from "next/navigation";

export const useScrollIntoView = (
  scrollContainerRef: RefObject<HTMLDivElement>
) => {
  const pathname = usePathname(); // Get the current path in Next.js

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    scrollContainerRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    scrollContainerRef.current.style.height = "100%";
    scrollContainerRef.current.style.overflowY = "scroll";
  }, [pathname, scrollContainerRef]);
};
