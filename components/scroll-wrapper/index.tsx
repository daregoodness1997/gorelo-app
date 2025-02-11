"use client";
import { FC, ReactNode, useRef } from "react";
import { useScrollIntoView } from "@/hooks/useScrollIntoView";

type Props = {
  children: ReactNode;
};

const ScrollWrapper: FC<Props> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useScrollIntoView(containerRef);

  return (
    <div ref={containerRef} className="min-h-screen overflow-y-auto">
      {children}
    </div>
  );
};

export default ScrollWrapper;
