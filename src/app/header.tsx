import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from "lucide-react";

export default function Header() {
  return (
    <nav className="flex md:justify-around justify-between text-white h-[64px] mt-4">


      <div className="relative lg:w-[228px] lg:h-[128px] w-[148px]">
      
      <Image
          src="/logobg.png"
          alt="logo"
          width={228}
          height={228}
          className="absolute inset-0"
        />

        <Image
          src="/pnglogo1.png"
          alt="logo"
          width={108}
          height={108}
          className="absolute lg:left-20 left-10 lg:w-[108px] w-[72px]"
        />
      </div>

      <div className="hidden md:flex justify-around items-center">
          <ul>
            <li>
              <Link
                href="/"
                className="p-4 px-6 rounded-lg hover:bg-blue-700 hover:text-black transition duration-300 ease-in-out"
              >
                Home
                {/* <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span> */}
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                href="/about"
                className="p-4 px-6 rounded-lg hover:bg-blue-700 hover:text-black transition duration-300 ease-in-out"
              >
                About
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                href="/skills"
                className="p-4 px-6 rounded-lg hover:bg-blue-700 hover:text-black transition duration-300 ease-in-out"
              >
                Skills
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                href="/projects"
                className="p-4 px-6 rounded-lg hover:bg-blue-700 hover:text-black transition duration-300 ease-in-out"
              >
                Projects
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link
                href="/contact"
                className="p-4 px-6 rounded-lg hover:bg-blue-700 hover:text-black transition duration-300 ease-in-out"
              >
                Contact
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
        
        <Sheet>
  <SheetTrigger className="md:hidden mr-4"><AlignJustify color="#007ebb" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
    </nav>
  );
}
