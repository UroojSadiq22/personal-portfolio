"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/tempskills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const pathname = usePathname(); // Get current path

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

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-around items-center space-x-6">
        {navLinks.map((link) => (
          <ul key={link.name}>
            <li>
              <Link
                href={link.path}
                className="p-4 px-6 rounded-lg transition duration-300 ease-in-out relative group"
                aria-current={pathname === link.path ? "page" : undefined}
              >
                <span
                  className={`${
                    pathname === link.path
                      ? "font-bold text-blue-500"
                      : "hover:font-bold"
                  }`}
                >
                  {link.name}
                </span>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] transition-all duration-300 ease-in-out ${
                    pathname === link.path
                      ? "w-full bg-blue-500"
                      : "w-0 bg-transparent group-hover:w-full group-hover:bg-blue-500"
                  }`}
                ></span>
              </Link>
            </li>
          </ul>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden mr-4">
        <Sheet>
          <SheetTrigger asChild>
            <AlignJustify color="#007ebb" />
          </SheetTrigger>

          <SheetContent className="p-8 pt-10 bg-gradient-to-br from-[#007ebb] via-[#33a1ff] to-[#005f8a] h-full flex flex-col">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.name}>
                <Link
                  href={link.path}
                  className={`text-xl font-bold ${
                    pathname === link.path
                      ? "text-blue-400"
                      : "hover:text-blue-400"
                  } transition-all duration-300`}
                  aria-current={pathname === link.path ? "page" : undefined}
                >
                  <h1>{link.name}</h1>
                  <hr className="my-2" />
                </Link>
              </SheetClose>
            ))}
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
