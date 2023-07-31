// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute w-full flex items-center px-16 xl:px-0 xl:h-[90px] z-30">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={"/"}>
            <div className="text-4xl sm:text-sm">
              <span className="text-accent">C</span>hris{" "}
              <span className="text-accent">W</span>arren
            </div>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
