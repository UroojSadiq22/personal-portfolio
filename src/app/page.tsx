"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook } from "lucide-react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 10, bounce: 0 },
        opacity: { duration: 1 },
      },
    },
  };
  return (
    <main className="bg-[url('/background.png')] overflow-hidden container mx-auto min-h-screen flex flex-col sm:flex-row justify-around items-center">
      <div className="lg:pt-0 pt-10 flex lg:flex-row flex-col-reverse justify-start lg:gap-1 gap-8">
        <div className="md:px-10 pt-4">
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Image Container */}
              <div className="bg-[#007EBB] w-fit rounded-full lg:m-6 m-4">
                <Image
                  priority
                  src="/me.jpg"
                  alt="Urooj Sadiq"
                  height={250}
                  width={250}
                  className="lg:w-[18rem] lg:h-[18rem] w-[14rem] h-[14rem] p-4 pb-0 rounded-full"
                />
              </div>

              {/* Motion SVG */}
              <motion.svg
                className="absolute inset-0"
                viewBox="0 0 320 320"
                initial="hidden"
                animate="visible"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                width="100%"
                height="100%"
              >
                <motion.circle
                  cx="160"
                  cy="160"
                  r="155"
                  stroke="#6b7280"
                  strokeWidth="5"
                  fill="transparent"
                  variants={draw}
                  custom={1}
                />
              </motion.svg>
            </div>
          </div>

          <div className="p-6">
            <h1 className="md:text-xl text-lg text-white">
              A{" "}
              <span className="font-bold text-[#007EBB] md:text-3xl text-2xl">
                {" "}
                Designer{" "}
              </span>
              who Judges a book by its
              <span className="text-[#007EBB]"> cover</span>...
            </h1>
            <p className="text-sm text-gray-500">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>

        <div>
          {/* White Arrow SVG */}

          <motion.svg
            width="150"
            height="200"
            viewBox="0 0 500 500"
            initial="hidden"
            animate="visible"
            className="absolute lg:rotate-12 md:rotate-[-35deg] xs:rotate-[-40deg] rotate-[-30deg] lg:top-20 md:top-32 xs:top-28 top-24 lg:left-[34%] md:left-6 xs:left-5 left-0 z-1 pointer-events-none"
          >
            <motion.path
              d="M 2800 1500 C -500 -1200 -100 1200 100 1000"
              strokeLinecap="round"
              stroke="rgb(121, 112, 163)"
              strokeWidth="5"
              fill="transparent"
              variants={draw}
              custom={2}
            />
          </motion.svg>

          <p className="text-gray-500 text-xl ml-2 flex justify-center gap-1">
            It&apos;s{" "}
            <span className="font-bold text-[#007EBB] text-2xl">
              {" "}
              Urooj Sadiq
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center lg:flex-1">
        <div className="w-1 h-48 bg-gray-500 lg:mr-4"></div>
        <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000" className="flex flex-col lg:gap-10 gap-5 lg:p-0 p-6">
          <h1 className="lg:text-2xl text-xl text-gray-500">
            I&apos;m a{" "}
            <span className="lg:text-3xl text-2xl text-[#007EBB] font-bold">
              Frontend Web Developer
            </span>
          </h1>

          <div>
            <p className="text-gray-300 lg:text-md text-sm">
              A self-taught UI/UX designer, functioning in the industry for 3+
              years now.
              <br />I make meaningful and delightful digital products that
              create an equilibrium between user needs and business goals.
            </p>

            <div className="flex gap-6 p-4 border border-transparent">
              <Link
                href="/facebook"
                className="p-1 backdrop-blur-lg hover:bg-white hover:text-black rounded-full border border-white hover:border-[#007ebb] transition-colors duration-300 ease-in-out"
              >
                <Facebook color="#007ebb" />
              </Link>
              {/* <motion.svg
      className="absolute inset-0"
      viewBox="0 0 320 320"
      initial="hidden"
      animate="visible"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      width="100%"
      height="100%"
    >
      <motion.circle
        cx="236"
        cy="234"
        r="8"
        stroke="#ff0055"
        strokeWidth="1"
        fill="transparent"
        variants={draw}
        custom={1}
      />
    </motion.svg> */}

              <Link
                href="https://www.linkedin.com/in/urooj-sadiq-a91031212/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 backdrop-blur-lg hover:bg-white hover:text-black rounded-full border border-white hover:border-[#007ebb] transition-colors duration-300 ease-in-out"
              >
                <Linkedin color="#007ebb" />
              </Link>

              <Link
                href="https://github.com/UroojSadiq22"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 backdrop-blur-lg hover:bg-white hover:text-black rounded-full border border-white hover:border-[#007ebb] transition-colors duration-300 ease-in-out"
              >
                <Github color="#007ebb" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
