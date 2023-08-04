import cwtechnologies from "../public/images/projects/React/cwtechnologies.webp";
import Netflix from "../public/images/projects/React/netflix-look-a-like.webp";
import Twitter from "../public/images/projects/React/twitter-look-a-like.webp";
import Amazon from "../public/images/projects/React/amazon-look-a-like.webp";
import Slack from "../public/images/projects/React/slack-look-a-like.webp";
import This from "../public/images/projects/Next/this-website.webp";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col 
  lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
           dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
          xs:rounded-[1.5rem] "
      />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-xl lg:w-full"
      >
        <Image
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Amazon (Look-alike) github link"
          >
            <FaGithub />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
               bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
               sm:px-4 sm:text-base
              "
            aria-label="Amazon (Look-alike)"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
        border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
        xs:p-4
        "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
           dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
          xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
              font-medium underline md:text-base
              "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <main
      className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light overflow-y-auto`}
    >
      <div className="grid grid-cols-12 gap-12 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
        <div className="col-span-12">
          <FeaturedProject
            type="Featured Project"
            title="Amazon (Look-alike)"
            summary="Front-end of an ecommerce platform that looks like Amazon.com."
            img={Amazon}
            link="https://clone-ce73b.web.app/"
            github="https://github.com/ItsCDubb/amazon-look-a-like-front-end"
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            type="React"
            title="Netflix (Look-alike)"
            img={Netflix}
            link="https://netflix-clone-fe7b3.web.app/"
            github="https://github.com/ItsCDubb/Netflix"
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            type="React"
            title="CW Technologies"
            img={cwtechnologies}
            link="https://cwtechnologies.co/"
            github="https://github.com/ItsCdubb"
          />
        </div>
        <div className="col-span-12">
          <FeaturedProject
            type="Next"
            title="My Personal Portfolio"
            summary="My portfolio website using Next, Tailwind CSS, &Framer-motion. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
            img={This}
            link="https://www.chriswarren.dev/"
            github="https://github.com/ItsCDubb/next-portfolio"
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            type="React"
            img={Twitter}
            title="Twitter (Look-alike)"
            link="https://twitter-look-a-like.web.app/"
            github="https://github.com/ItsCDubb/twitter-look-a-like"
          />
        </div>
        <div className="col-span-6 sm:col-span-12">
          <Project
            type="React"
            img={Slack}
            title="Slack (Look-alike)"
            link="https://slack-look-a-like.web.app/"
            github="https://github.com/ItsCDubb/slack-look-a-like-front-end"
          />
        </div>
      </div>
    </main>
  );
}
