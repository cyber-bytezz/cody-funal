"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full sm:w-[300px] pt-12">
                <SheetHeader className="mb-6">
                    <SheetTitle className="text-left text-lg font-semibold">
                        Menu
                    </SheetTitle>
                </SheetHeader>

                {/* Nav Links */}
                <nav className="flex flex-col gap-4">
                    {NAV_LINKS.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-base font-medium transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Divider */}
                <div className="mt-6 border-t border-border" />

                {/* Auth buttons */}
                {/* Auth buttons */}
                <div className="flex flex-col gap-3 pt-4">
                    <Link href="/login">
                        <Button
                            variant="ghost"
                            className="w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            Login
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button className="w-full" variant="blue">
                            Register
                        </Button>
                    </Link>
                </div>


            </SheetContent>
        </Sheet>
    );
};

export default MobileMenu;
