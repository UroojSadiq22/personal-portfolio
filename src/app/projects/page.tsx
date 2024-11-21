"use client";
import Image from "next/image";
import { Londrina_Outline } from "next/font/google";
import Link from "next/link";
import { Github, Linkedin, Send } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";

const londrinaOutline = Londrina_Outline({
  weight: "400",
  subsets: ["latin"],
});

const projects = [
  {
    id: "01",
    title: "Github Finder App",
    image: "/githubproject.JPG",
    live: "https://wondrous-granita-041d9f.netlify.app/",
    linkedin:
      "https://www.linkedin.com/posts/urooj-sadiq-a91031212_reactjs-webdevelopment-githubapi-activity-7228856880603832320-1_vq?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/UroojSadiq22/GithubFinderApp",
    description:
      " The GitHub Finder App is a powerful tool designed to help users explore GitHub profiles with ease. The app starts with a simple home page, where users can search for any developer by entering a name or username. ",
  },
  {
    id: "02",
    title: "Calculator App",
    image: "/calculatorproject.JPG",
    live: "https://bright-bombolone-50a1ef.netlify.app/",
    linkedin:
      "https://www.linkedin.com/posts/urooj-sadiq-a91031212_reactjs-webapp-calculator-activity-7236022844764110850-DyuQ?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/UroojSadiq22/React.jsCalculatorApp",
    description:
      "The Calculator App is a versatile tool designed for both basic and scientific calculations. Built with the power of React and responsive interface, users can easily switch between simple arithmetic functions or advanced scientific calculations and Light mode or Dark mode.",
  },
  {
    id: "03",
    title: "Resume Builder",
    image: "/resumeproject.JPG",
    live: "https://static-resume-navy.vercel.app/",
    linkedin:
      "https://www.linkedin.com/posts/urooj-sadiq-a91031212_nextjs-webdevelopment-typescript-activity-7243265228774264832-yy8J?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/UroojSadiq22/StaticResume",
    description:
      "The Resume Builder App simplifies the resume creation process by an easy-to-use interface. Users can input their details and instantly preview their resume. With features like downloadable PDFs, the app provides a complete solution for job seekers to create polished, professional resumes.",
  },
  {
    id: "04",
    title: "E-commerce Website",
    image: "/watchecommerceproject.JPG",
    live: "https://king-watch-store-kvj8.vercel.app/",
    linkedin:
      "https://www.linkedin.com/posts/urooj-sadiq-a91031212_nextjs-ecommerce-watchstore-activity-7255186280060256256-gQav?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/UroojSadiq22/King-WatchStore",
    description:
      "The Watch Store App is a stylish e-commerce platform dedicated to luxury and designer watches. Featuring with functionalities like search, user login, and a simple checkout process and a visually appealing design, users can browse a curated selection of watches and explore high-quality images.",
  },
  {
    id: "05",
    title: "Expense Tracker",
    image: "/etaproject.JPG",
    live: "https://ubiquitous-sherbet-39e242.netlify.app/",
    linkedin:
      "https://www.linkedin.com/posts/urooj-sadiq-a91031212_webdevelopment-reactjs-expensetracker-activity-7226138083530838017-se5k?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/UroojSadiq22/ExpenseTrackerApp",
    description:
      "The Expense Tracker App is a user-friendly tool designed to help users manage their finances effortlessly. Ideal for both personal budgeting and small business expense tracking, this app features a clean, intuitive interface where users can quickly input expenses and view a real-time summary of their spending.",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <main className="bg-[url('/background.png')] overflow-hidden">
      <h1 className="lg:mt-32 mt-24 md:text-3xl text-2xl text-white text-center font-bold">
        Recent{" "}
        <span className="md:text-5xl text-4xl text-[#007EBB]">Projects</span>
      </h1>
      <div className="lg:grid lg:grid-cols-2 flex flex-col items-start lg:mt-12 mt-40 lg:px-10 md:px-6 px-4">
        {projects.map((item, index) => (
          <div
            key={index}
            className="relative flex lg:flex-row flex-col items-center lg:mx-6 mx-2 lg:mt-10 mt-28"
          >
            <div>
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
    </main>
  );
}
