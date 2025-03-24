"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Particles() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
        setIsClient(true);
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);


  return (
    <div className="min-h-screen flex flex-col items-center justify-center absolute inset-0 -z-10"
    style={{ width: windowWidth, height: windowHeight }}>
      <div
        className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(88, 28, 135, 0.15) 0%, rgba(15, 23, 42, 0.05) 40%, transparent 60%)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {isClient && // Ensure client-side rendering
          [...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[3px] h-[3px] sm:w-1 sm:h-1 bg-blue-900 rounded-full"
              initial={{
                x: Math.random() * windowWidth, // Use state instead of direct window reference
                y: Math.random() * windowHeight, // Use state instead of direct window reference
                opacity: 0.3,
              }}
              animate={{
                y: ["-10vw", "100vw"],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
      </div>
    </div>
  );
}

// "use client";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Particles() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });

//       const handleMouseMove = (e: MouseEvent) => {
//         setMousePosition({ x: e.clientX, y: e.clientY });
//       };

//       const handleResize = () => {
//         setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//       };

//       window.addEventListener("mousemove", handleMouseMove);
//       window.addEventListener("resize", handleResize);

//       return () => {
//         window.removeEventListener("mousemove", handleMouseMove);
//         window.removeEventListener("resize", handleResize);
//       };
//     }
//   }, []);
  

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center absolute inset-0 -z-10">
//       {/* Dynamic Gradient Background */}
//       <div
//         className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black"
//         style={{
//           backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(88, 28, 135, 0.15) 0%, rgba(15, 23, 42, 0.05) 40%, transparent 60%)`,
//         }}
//       />

//       {/* Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(100)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-[2px] h-[2px] sm:w-1.5 sm:h-1.5 bg-blue-900 rounded-full"
//             initial={{
//               x: Math.random() * windowSize.width,
//               y: Math.random() * windowSize.height,
//               opacity: 0.3,
//             }}
//             animate={{
//               y: [Math.random() * -50, windowSize.height + 50], // Particles start randomly above screen & move down
//               opacity: [0.2, 0.5, 0.2],
//             }}
//             transition={{
//               duration: Math.random() * 10 + 5, // Vary duration for realism
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
