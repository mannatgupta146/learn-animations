import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimateOnX = ({ children }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      x: 500,
      duration: 1,
      delay: 0.5,
      ease: "power1.inOut",
    });
  });

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default AnimateOnX;