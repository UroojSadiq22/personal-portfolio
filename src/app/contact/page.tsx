"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowUpRight,
  Facebook,
  Github,
  Linkedin,
  Locate,
  Mail,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <main className="min-h-screen bg-[url('/background.png')]">
      <div className="lg:mt-24 mt-16 flex md:flex-row flex-col justify-center items-center lg:gap-32 ">
        <div className="lg:w-[30rem] p-6">
          <div className="flex flex-col gap-4 m-6 mb-14">
            <h1 className="md:text-3xl text-2xl text-white text-center font-bold">
              Reach Out <span className="text-5xl  text-[#007EBB]">Me</span>
            </h1>
            <p
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="text-sm text-gray-500 text-center"
            >
              Feel free to reach out and start a conversation! Whether you&apos;re
              here to collaborate, seek advice, or share your vision, I&apos;m
              thrilled to connect. Let&apos;s get in touch and turn thoughts into
              action.
            </p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex gap-4 m-4 text-gray-500"
          >
            <Locate color="#007ebb" />
            <p>5C 16/9 Nazimabad no.5, Karachi</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex gap-4 m-4 text-gray-500"
          >
            <PhoneCall color="#007ebb" />
            <h1>+923022472086</h1>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex gap-4 m-4 text-gray-500"
          >
            <Mail color="#007ebb" />
            <h1>uroojsadiq1998@gmail.com</h1>
          </div>

          <div className="flex gap-6 p-4 border border-transparent m-6">
            <Link
              href="/facebook"
              className="p-1 backdrop-blur-lg hover:bg-white hover:text-black rounded-full border border-white hover:border-[#007ebb] transition-colors duration-300 ease-in-out"
            >
              <Facebook color="#007ebb" />
            </Link>

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

        <div
          data-aos="zoom-in"
          className="lg:w-[27rem] w-full bg-gradient-to-bl from-gray-700 to-[#007EBB] lg:px-10 px-5 py-5 lg:m-6 m-2"
        >
          <h1 className="text-3xl font-bold lg:m-4 m-2">Any Project?</h1>
          <form>
            <div className="grid lg:w-[20rem] max-w-sm items-center gap-1.5 m-4">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Your good name" />
            </div>

            <div className="grid lg:w-[20rem] max-w-sm items-center gap-1.5 m-4">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>

            <div className="grid lg:w-[20rem] max-w-sm items-center gap-1.5 m-4">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>

            <div className="grid lg:w-[20rem] max-w-sm items-center gap-1.5 m-4">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Write your message here" />
            </div>

            <div className="grid lg:w-[20rem] max-w-sm items-center gap-1.5 m-4">
              <Button
                variant="outline"
                className="relative overflow-hidden group hover:text-[#007ebb] border-2 border-black transition-all duration-300 ease-in-out"
              >
                <span className="absolute inset-0 bg-gray-700 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                <h1 className="relative z-10 font-bold flex items-center gap-2">
                  Submit Now <ArrowUpRight color="#007ebb" />
                </h1>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
