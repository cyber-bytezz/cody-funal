import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full py-6 md:py-8 bg-background/95 border-t border-border/40">
      <div className="container flex flex-row items-center justify-between max-w-7xl mx-auto px-4 md:px-6">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/icons/icon.png"
              alt="cody"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-sm sm:text-base font-semibold text-white">
              cody
            </span>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-muted-foreground">
          &copy; cody {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
