import Link from "next/link";
import {
  RiDribbbleLine,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://twitter.com/CDubb2019"
        className="hover:text-accent transition-all duration-300 text-3xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterFill />
      </Link>
      <Link
        href="https://github.com/ItsCdubb"
        className="hover:text-accent transition-all duration-300 text-3xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiGithubFill />
      </Link>
      <Link
        href="https://www.instagram.com/itscwarren/"
        className="hover:text-accent transition-all duration-300 text-3xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiInstagramFill />
      </Link>
      <Link
        href="https://www.linkedin.com/in/itscdubb/"
        className="hover:text-accent transition-all duration-300 text-3xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link
        href="https://dribbble.com/ItsCDubb"
        className="hover:text-accent transition-all duration-300 text-3xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiDribbbleLine />
      </Link>
    </div>
  );
};

export default Socials;
