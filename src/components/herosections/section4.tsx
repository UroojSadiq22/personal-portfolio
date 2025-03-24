import { Mail, PhoneCall, Locate, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import AOS from "aos";
import { useEffect } from "react";

export default function Section4() {
    useEffect(() => {
        AOS.init({});
    }, []);
    return (
        <section className="my-16 flex flex-col items-center justify-center text-center">

            <h1 data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800" className="lg:mt-32 mt-24 md:text-3xl text-xl text-white text-center font-bold">
                <span className="md:text-5xl text-3xl text-[#007EBB]">Contact Me</span> Anytime
            </h1>
            <p data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800" className="text-gray-400 mb-6 text-sm md:text-base">
                Have a project or just want to say hi? Let&apos;s connect!
            </p>
            <div className="backdrop-blur-xl text-gray-300 flex flex-col items-center p-8 rounded-lg shadow-xl">
                <div className="flex justify-center gap-8 flex-wrap">
                    <div className="flex items-center gap-3">
                        <Locate color="#007ebb" />
                        <p>Karachi, Pakistan</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <PhoneCall color="#007ebb" />
                        <p>+923022472086</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Mail color="#007ebb" />
                        <p>uroojsadiq1998@gmail.com</p>
                    </div>
                </div>
                <div className="mt-6">
                    <Link href="/contact">
                        <Button
                            variant="outline"
                            className="relative md:w-[20rem] w-full overflow-hidden group text-black hover:text-[#007ebb] border-2 border-[#007ebb] transition-all duration-300 ease-in-out"
                        >
                            <span className="absolute inset-0 bg-gray-700 transition-transform duration-300 ease-in-out transform scale-x-0 origin-left group-hover:scale-x-100"></span>
                            <h1 className="relative z-10 font-bold flex items-center gap-2">
                                Contact Me <ArrowRight color="#007ebb" />
                            </h1>
                        </Button>
                    </Link>
                </div>
            </div>

            =

        </section>
    );
}
