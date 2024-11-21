"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  {
    num: 10,
    text: "Hours of Working",
  },
  {
    num: 15,
    text: "Projects",
  },
  {
    num: 4,
    text: "Years of Experience",
  },
];

export default function About() {
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

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <main className="min-h-screen bg-[url('/background.png')]">
      <h1 className="lg:mt-32 mt-24 md:text-3xl text-2xl text-white text-center font-bold">
        About <span className="text-5xl  text-[#007EBB]">Me</span>
      </h1>
      <div className="flex lg:flex-row flex-col-reverse justify-around items-center mt-4">
        <div className="lg:m-4 m-2 lg:p-2 md:p-8 p-6 flex flex-col items-center">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-xl font-bold m-2 text-white"
          >
            Curious about me? Here you have it:
          </h1>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="flex flex-col gap-4 lg:w-[30rem] w-full text-sm text-gray-500 text-center"
          >
            <p>
              Welcome to my corner of the web! I am a passionate developer
              dedicated to crafting innovative solutions and bringing ideas to
              life through technology. With a strong foundation in computer
              science and a love for learning, I continuously explore new
              technologies and frameworks to enhance my skills.
            </p>
            <p>
              I specialize in building dynamic web applications using React,
              Next.js, and TypeScript, and I thrive on transforming complex
              challenges into elegant solutions. Beyond coding, I believe in the
              power of collaboration and sharing knowledge, which fuels my
              desire to connect with others in the tech community.
            </p>{" "}
            <p>
              {" "}
              Join me on this journey as I share my projects, insights, and
              experiences in the ever-evolving world of tech. I’m always eager
              to connect, collaborate, and learn from fellow developers and
              enthusiasts. Let’s innovate together!
            </p>
          </div>
          <div className="grid w-[12rem] max-w-sm items-center gap-1.5 my-4">
            <a href="/ResumeUroojSadiq.pdf" download="Urooj_Sadiq_CV.pdf">
              <Button
                variant="outline"
                className="relative overflow-hidden group hover:text-[#007ebb] border-2 border-[#007ebb] transition-all duration-300 ease-in-out"
              >
                <span className="absolute inset-0 bg-gray-700 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                <h1 className="relative z-10 font-bold flex items-center gap-2">
                  <Download color="#007ebb" /> Download CV
                </h1>
              </Button>
            </a>
          </div>
        </div>

        <div>
          <div className="container mx-auto">
            <div className="lg:flex lg:flex-wrap grid grid-cols-2 lg:gap-14 gap-8 m-4">
              {stats.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-4 items-center justify-center"
                  >
                    <CountUp
                      end={item.num}
                      duration={5}
                      delay={2}
                      className="text-4xl font-extrabold text-[#007EBB]"
                    />
                    <div className="w-0.5 h-8 bg-gray-500"></div>
                    <p className="leading-snug text-white/80 lg:text-md text-sm">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative mt-10">
              {/* Image Container */}
              <div className="bg-[#007EBB] w-fit rounded-full lg:m-6 m-4">
                <Image
                  priority
                  src="/me.jpg"
                  alt="Urooj Sadiq"
                  height={200}
                  width={200}
                  className="lg:w-[14rem] lg:h-[14rem] w-[10rem] h-[10rem] p-4 pb-0 rounded-full"
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
        </div>
      </div>
    </main>
  );
}
