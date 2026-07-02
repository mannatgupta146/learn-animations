import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimateOnX from "./components/AnimateOnX";

const App = () => {
  const boxRef = useRef(null);
  const containerRef = useRef(null);

  const { contextSafe } = useGSAP(() => {
    gsap.to(boxRef.current, {
      x: 500,
      duration: 1,
      delay: 0.5,
      ease: "power1.inOut",
    });
  }, {
    scope: containerRef,
    dependencies: [],
    revertOnUpdate: true,
  });

  return (
    <div ref={containerRef}>
      <div ref={boxRef} className="box"></div>

    <AnimateOnX>
      <div className="box"></div>
    </AnimateOnX>
      {/* <button
        onClick={contextSafe((e) => {
          gsap.fromTo(
            e.currentTarget,
            {
              scale: 1,
              rotate: 0,
            },
            {
              scale: 0.85,
              rotate: 2,
              duration: 0.25,
              yoyo: true,
              repeat: 1,
              ease: "power2.inOut",
            }
          );
        })}
      >
        Click me
      </button> */}
    </div>
  );
};

export default App;