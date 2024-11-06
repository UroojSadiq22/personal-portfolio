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
    linkedin: "https://www.linkedin.com/posts/urooj-sadiq-a91031212_reactjs-webdevelopment-githubapi-activity-7228856880603832320-1_vq?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/UroojSadiq22/GithubFinderApp",
    description:
      " The GitHub Finder App is a powerful tool designed to help users explore GitHub profiles with ease. The app starts with a simple home page, where users can search for any developer by entering a name or username. ",
  },
  {
    id: "02",
    title: "Calculator App",
    image: "/calculatorproject.JPG",
    live: "/facebook",
    linkedin: "https://www.linkedin.com/posts/urooj-sadiq-a91031212_reactjs-webapp-calculator-activity-7236022844764110850-DyuQ?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/UroojSadiq22/React.jsCalculatorApp",
    description:
      "The Calculator App is a versatile tool designed for both basic and scientific calculations. With a sleek and responsive interface, users can easily switch between simple arithmetic functions or advanced scientific calculations and Light mode or Dark mode. The app’s interactive design allows for smooth input handling, real-time results, and a well-organized layout.  Built with React, it demonstrates the power of dynamic rendering and efficient state management.",
  },
  {
    id: "03",
    title: "Resume Builder",
    image: "/resumeproject.JPG",
    live: "https://static-resume-navy.vercel.app/",
    linkedin: "https://www.linkedin.com/posts/urooj-sadiq-a91031212_nextjs-webdevelopment-typescript-activity-7243265228774264832-yy8J?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/UroojSadiq22/StaticResume",
    description:
      "The Resume Builder App simplifies the resume creation process by an easy-to-use interface. Users can input their details and instantly preview their resume. With features like downloadable PDFs and shareable links, the app provides a complete, streamlined solution for job seekers to create polished, professional resumes. Built with a responsive design, this app empowers users to showcase their skills and experience with confidence.",
  },
  {
    id: "04",
    title: "E-commerce Website",
    image: "/watchecommerceproject.JPG",
    live: "https://king-watch-store-kvj8.vercel.app/",
    linkedin: "https://www.linkedin.com/posts/urooj-sadiq-a91031212_nextjs-ecommerce-watchstore-activity-7255186280060256256-gQav?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/UroojSadiq22/King-WatchStore",
    description:
      "The Watch Store App is a stylish e-commerce platform dedicated to luxury and designer watches. Featuring a visually appealing design and smooth navigation, users can browse a curated selection of watches and explore high-quality images. The app offers a secure and user-friendly shopping experience, with functionalities like search, user login, and a simple checkout process. Developed to enhance user engagement, the Watch Store App is a showcase of modern e-commerce capabilities.",
  },
  {
    id: "05",
    title: "Expense Tracker",
    image: "/etaproject.JPG",
    live: "https://ubiquitous-sherbet-39e242.netlify.app/",
    linkedin: "https://www.linkedin.com/posts/urooj-sadiq-a91031212_webdevelopment-reactjs-expensetracker-activity-7226138083530838017-se5k?utm_source=share&utm_medium=member_desktop",
    github: "https://github.com/UroojSadiq22/ExpenseTrackerApp",
    description:
      "The Expense Tracker App is a user-friendly tool designed to help users manage their finances effortlessly. The app features a clean, intuitive interface where users can quickly input expenses and view a real-time summary of their spending. Ideal for both personal budgeting and small business expense tracking, this app is built with efficiency in mind, making financial management straightforward and accessible. ",
  },
];

export default function Projects() {
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
    <main className="bg-[url('/background.png')]">
      <h1 className="lg:mt-20 mt-14 md:text-3xl text-2xl text-white text-center font-bold">Recent <span className="md:text-5xl text-4xl text-[#007EBB]">Projects</span></h1>
      <div className="lg:grid lg:grid-cols-2 flex flex-col items-start lg:mt-12 mt-40 lg:px-10 md:px-6 px-4">
        {projects.map((item) => (
          <div className="relative flex lg:flex-row flex-col items-center lg:mx-6 mx-2 lg:mt-10 mt-28">
            <div>
              {/* Image Positioned to Overlap */}
              <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000" className="pt-3 pl-2 bg-[#007EBB] rounded-lg">
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
  <h1 className={`${londrinaOutline.className} text-7xl text-blue-500`}>
    {item.id}
  </h1>
  <h1 className="mb-2 text-xl font-bold text-white">{item.title}</h1>
  <div className="backdrop-blur-xl h-[15rem] md:w-[25rem] w-[16rem] px-8 py-6 rounded-xl shadow-lg relative">
    <p className="text-sm text-center text-gray-500">
      {item.description}
    </p>

    {/* Moving line SVG */}
    <motion.svg
      className="absolute top-0 left-0 z-[-1]"
      width="100%"
      height="100%"
      viewBox="0 0 250 150" // Adjust viewBox to match div size
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
