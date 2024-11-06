import { Facebook, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <main className="bg-gray-300 flex flex-col justify-center items-center p-6">
      <div className="flex lg:flex-row flex-col-reverse justify-around items-center gap-44">
        <div className="flex gap-6 p-4 border border-transparent">
          <Link
            href="/facebook"
            className="p-1 hover:bg-white hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out"
          >
            <Facebook color="#007ebb" />
          </Link>

          <Link
            href="/twitter"
            className="p-1 hover:bg-white hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out"
          >
            <Linkedin color="#007ebb" />
          </Link>

          <Link
            href="/github"
            className="p-1 hover:bg-white hover:text-black rounded-full border border-black transition-colors duration-300 ease-in-out"
          >
            <Github color="#007ebb" />
          </Link>
        </div>

        <div className="relative lg:w-[248px] lg:h-[148px] w-[168px]">
          <Image
            src="/logobg.png"
            alt="logo"
            width={248}
            height={248}
            className="absolute inset-0"
          />

          <Image
            src="/pnglogo1.png"
            alt="logo"
            width={118}
            height={128}
            className="absolute lg:left-20 left-10 lg:w-[118px] w-[92px]"
          />
        </div>
      </div>

      <div className="text-center m-6 text-sm">
        <p>
          © {new Date().getFullYear()} by{" "}
          <span className="font-bold sm:text-lg">Urooj Sadiq</span>. All rights
          reserved.
        </p>
      </div>
    </main>
  );
}
