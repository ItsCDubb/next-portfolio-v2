import Socials from "../components/Socials";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute w-full flex items-center px-16 xl:px-0 xl:h-[90px] mb-10 z-30">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <div className="text-3xl">
              <span className="text-accent">C</span>hris{" "}
              <span className="text-accent">W</span>arren
            </div>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
