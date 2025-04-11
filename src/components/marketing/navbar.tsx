"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
            <Wrapper className="h-full">
                <div className="relative flex items-center justify-between h-full">
                    {/* Left: Logo */}
                    <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2">
              <Image
                src="/icons/icon-dark.png"
                alt="codesimple logo"
                width={68}
                height={68}
              />
              <span className="text-xl font-semibold hidden lg:block">cody</span>
            </Link>
                    </div>

                    {/* Center: Nav Links */}
                    <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-8">
                        {NAV_LINKS.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-sm font-medium link"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right: Auth Buttons */}
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden lg:block">
                            <Button
                                variant="ghost"
                                className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link href="#" className="hidden lg:block">
                            <Button variant="blue">Register</Button>
                        </Link>
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};

export default Navbar;
