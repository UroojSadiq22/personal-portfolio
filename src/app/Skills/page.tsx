"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  // Define rows with icons as objects
  const rows = [
    [
      {
        id: 1,
        src: "/html-5 (1).png",
        alt: "HTML5 Icon",
        displayName: "HTML5",
      },
      { id: 2, src: "/css-3_1.png", alt: "CSS3 Icon", displayName: "CSS3" },
      {
        id: 3,
        src: "/js_1.png",
        alt: "JavaScript Icon",
        displayName: "JavaScript",
      },
      {
        id: 4,
        src: "/typescript_1.png",
        alt: "TypeScript Icon",
        displayName: "TypeScript",
      },
    ],
    [
      {
        id: 5,
        src: "/nextjs-icon.png",
        alt: "Next.js Icon",
        displayName: "Next.js",
      },
      { id: 6, src: "/figma-1.png", alt: "Figma Icon", displayName: "Figma" },
      { id: 7, src: "/canva-1.png", alt: "Canva Icon", displayName: "Canva" },
      {
        id: 8,
        src: "/material-ui-1.png",
        alt: "Material UI Icon",
        displayName: "Material UI",
      },
      {
        id: 9,
        src: "/react-js-1.png",
        alt: "React Icon",
        displayName: "React",
      },
    ],
    [
      {
        id: 10,
        src: "/tailwind-css-1.png",
        alt: "Tailwind CSS Icon",
        displayName: "Tailwind CSS",
      },
      {
        id: 11,
        src: "/shadcn-ui-1.png",
        alt: "ShadCN Icon",
        displayName: "ShadCN",
      },
      {
        id: 12,
        src: "/bootstrap-1.png",
        alt: "Bootstrap Icon",
        displayName: "Bootstrap",
      },
      {
        id: 13,
        src: "/framer-motion-1.png",
        alt: "Framer Motion Icon",
        displayName: "Framer Motion",
      },
    ],
  ];
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="min-h-screen bg-[url('/background.png')]">
      <h1 className="mt-10 md:text-3xl text-2xl text-white text-center font-bold">
        Skillset <span className="text-5xl  text-[#007EBB]">Overview</span>
      </h1>
      <div className="flex md:flex-col flex-col-reverse items-center justify-center lg:my-10 my-20 space-y-4">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid lg:gap-10 gap-6 sm:grid-cols-2 md:grid-cols-4 ${
              row.length === 5 ? "md:grid-cols-5" : "md:grid-cols-4"
            }`}
          >
            {row.map((icon, index) => (
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                data-aos-delay={index * 300}
                key={icon.id}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <div className="bg-gray-300 inline-flex items-center justify-center rounded-full md:px-4 px-10 py-2">
                  <Image
                    priority
                    src={icon.src}
                    alt={icon.alt}
                    height={40}
                    width={40}
                    className="object-contain"
                  />
                  <span className="text-sm md:ml-2 ml-6">{icon.displayName}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
        {/* Skills Image */}
        <div className="mt-10 relative animate-pulse md:rotate-0 rotate-180">
  {/* Main Image */}
  <Image
    priority
    src="/skills.png"
    alt="cover"
    height={400}
    width={400}
    className="object-contain"
  />

  {/* Overlay Icon */}
  {/* <div className="backdrop-blur-lg rounded-full p-4 absolute transform translate-x-1/3 translate-y-1/2 shadow-[0_0_50px_rgba(0,126,187,0.7)]">
    <Image
      priority
      src="/skills-icon.png"
      alt="cover icon"
      height={50} // Default height
      width={50}  // Default width
      className="object-contain h-10 w-10 md:h-30 md:w-30 lg:h-50 lg:w-50"
    />
  </div> */}

  {/* Overlay Icon */}
  <div className="backdrop-blur-lg rounded-full p-4 absolute md:top-28 top-24 md:right-32 right-24 transform -translate-x-1/2 shadow-[0_0_50px_rgba(0,126,187,0.7)]">
    <Image
      priority
      src="/skills-icon.png"
      alt="cover icon"
      height={50} // Default height
      width={50}  // Default width
      className="object-contain h-10 w-10 md:h-30 md:w-30 lg:h-50 lg:w-50"
    />
  </div>


</div>

      </div>
    </main>
  );
}
