"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Section1() {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 px-6">
            <h1
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800" className="lg:mt-32 mt-24 md:text-3xl text-xl text-white text-center font-bold">
                Want to Know More <span className="md:text-5xl text-3xl text-[#007EBB]">About Me?</span>
            </h1>
            <p
                className="text-gray-400 md:text-base text-sm max-w-2xl my-6"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
            >
                I’m passionate about web development, innovation, and creating impactful
                digital experiences. From frontend to backend, I love solving challenges
                and building efficient solutions.
                Let’s dive deeper into my journey and skills!
            </p>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <Link href="/about">
                    <Button
                        variant="outline"
                        className="relative md:w-[20rem] w-full overflow-hidden group hover:text-[#007ebb] border-2 border-[#007ebb] transition-all duration-300 ease-in-out"
                    >
                        <span className="absolute inset-0 bg-gray-700 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                        <h1 className="relative z-10 font-bold flex items-center gap-2">
                            Explore more <ArrowRight color="#007ebb" />
                        </h1>
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
}
