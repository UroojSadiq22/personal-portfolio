// Import necessary dependencies
"use client";
import Image from "next/image";
import Link from "next/link";
import { Londrina_Outline } from "next/font/google";
import { Send, Github, Linkedin, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import projects from "@/data";
import { Button } from "@/components/ui/button";
import AOS from "aos";

const londrinaOutline = Londrina_Outline({
    weight: "400",
    subsets: ["latin"],
});

export default function Section3() {
    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <>

            <section className="md:p-6 py-8">
                <h1 data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="800" className="lg:mt-32 mt-24 md:text-3xl text-2xl text-white text-center font-bold">
                    Featured <span className="md:text-5xl text-4xl text-[#007EBB]">Projects</span>
                </h1>


                <div className="lg:grid lg:grid-cols-2 flex flex-col items-start lg:mt-12 mt-40 lg:px-10 md:px-6 px-4">
                    {projects.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className="relative flex lg:flex-row flex-col items-center lg:mx-6 mx-2 lg:mt-10 mt-28"
                        >
                            <div className="relative 2xl:left-20">
                                {/* Image Positioned to Overlap */}
                                <div
                                    data-aos="fade-right"
                                    data-aos-offset="300"
                                    data-aos-easing="ease-in-sine"
                                    data-aos-duration="1000"
                                    className="pt-3 pl-2 bg-[rgb(0,126,187)] rounded-lg"
                                >
                                    <Image
                                        src={item.image}
                                        alt="p1"
                                        width={364}
                                        height={364}
                                        className="md:w-[20rem] w-[25rem] h-[10rem] object-cover shadow-[0_0_50px_rgba(255,255,255,0.5)]"
                                    />
                                </div>

                                {/* Icons below the image */}
                                <div className="flex gap-4 mt-2 mb-44">
                                    <Link
                                        href={item.live}
                                        data-aos="zoom-in"
                                        data-aos-duration="2000"
                                        className="p-1 w-8 h-8 backdrop-blur-lg hover:bg-white hover:text-black rounded-full border border-white hover:border-[#007ebb] transition-colors duration-300 ease-in-out"
                                    >
                                        <Send color="#007ebb" className="w-5 h-5" />
                                    </Link>

                                    <Link
                                        href={item.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-aos="zoom-in"
                                        data-aos-duration="2000"
                                        className="p-1 w-8 h-8 backdrop-blur-lg hover:bg-white hover:text-black rounded-full border border-white hover:border-[#007ebb] transition-colors duration-300 ease-in-out"
                                    >
                                        <Linkedin color="#007ebb" className="w-5 h-5" />
                                    </Link>

                                    <Link
                                        href={item.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-aos="zoom-in"
                                        data-aos-duration="2000"
                                        className="p-1 w-8 h-8 backdrop-blur-lg hover:bg-white hover:text-black rounded-full border border-white hover:border-[#007ebb] transition-colors duration-300 ease-in-out"
                                    >
                                        <Github color="#007ebb" className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Content Div */}
                            <div
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500"
                                className="flex flex-col md:items-end absolute lg:right-[2rem] md:right-[-18rem] right-[-2rem] md:top-[-2rem] top-[-15rem]"
                            >
                                <h1
                                    className={`${londrinaOutline.className} text-7xl text-blue-500`}
                                >
                                    {item.id}
                                </h1>
                                <h1 className="mb-2 text-xl font-bold text-white">
                                    {item.title}
                                </h1>
                                <div className="inline-flex backdrop-blur-xl md:w-[25rem] w-[16rem] px-8 py-6 rounded-xl shadow-lg relative">
                                    <p className="text-sm text-center text-gray-500">
                                        {item.description}
                                    </p>

                                    {/* Moving line SVG */}
                                    <motion.svg
                                        className="absolute top-0 left-0 z-[-1] hidden lg:block"
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 400 150" // Adjust viewBox to match div size
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        <motion.rect
                                            x="0"
                                            y="0"
                                            width="100%"
                                            height="100%"
                                            rx="15" // Match div border radius
                                            stroke="gray"
                                            strokeWidth="2"
                                            fill="none"
                                            variants={{
                                                hidden: { pathLength: 0 },
                                                visible: {
                                                    pathLength: 1,
                                                    transition: {
                                                        duration: 2,
                                                        ease: "easeInOut",
                                                    },
                                                },
                                            }}
                                        />
                                    </motion.svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="flex justify-center">
                    <Link href="/projects">
                        <Button
                            variant="outline"
                            className="relative md:w-[20rem] w-full overflow-hidden group hover:text-[#007ebb] border-2 border-[#007ebb] transition-all duration-300 ease-in-out"
                        >
                            <span className="absolute inset-0 bg-gray-700 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                            <h1 className="relative z-10 font-bold flex items-center gap-2">
                                View All <ArrowRight color="#007ebb" />
                            </h1>
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
