import { motion } from "framer-motion";
import { ArrowRight, Bot, Brush, Code, Globe, } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const skills = [
    { icon: <Code size={50} />, title: "Web Development", description: "Building responsive and dynamic web applications." },
    { icon: <Bot size={50} />, title: "AI-Powered Applications", description: "Developing intelligent and automated solutions." },
    { icon: <Globe size={50} />, title: "SEO & Optimization", description: "Enhancing website visibility and performance." },
    { icon: <Brush size={50} />, title: "UI/UX Design", description: "Crafting intuitive and user-friendly interfaces." },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }, // Stagger animation for child divs
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Section2() {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <section className="md:p-6 py-8 flex flex-col items-center justify-center">

            <h1 data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800" className="lg:mt-32 mt-24 md:text-3xl text-xl text-white text-center font-bold">
                <span className="md:text-5xl text-3xl text-[#007EBB]">Skills</span> That Define Me
            </h1>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="my-14 flex lg:flex-row flex-col justify-center gap-10 hover:cursor-pointer"
            >
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1 }} // Framer Motion hover effect
                        transition={{ duration: 0.3 }} // Smooth transition
                        className="relative group"
                    >
                        <div className="bg-[#007EBB] w-14 h-14 rounded-lg absolute bottom-[-12px] left-[-14px] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="shadow-2xl backdrop-blur-xl p-4 lg:w-[16rem] w-[18rem] rounded-xl flex flex-col items-center justify-center relative z-10">
                            <div className="text-[#007EBB]">{skill.icon}</div>
                            <h1 className="text-[#007EBB] text-xl mt-6">{skill.title}</h1>
                            <p className="text-sm text-center mt-2 text-gray-500">{skill.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <Link href="/skills">
                <Button
                    variant="outline"
                    className="relative md:w-[20rem] w-full overflow-hidden group hover:text-[#007ebb] border-2 border-[#007ebb] transition-all duration-300 ease-in-out"
                >
                    <span className="absolute inset-0 bg-gray-700 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                    <h1 className="relative z-10 font-bold flex items-center gap-2">
                        See The Magic <ArrowRight color="#007ebb" />
                    </h1>
                </Button>
            </Link>
        </section>
    );
}
