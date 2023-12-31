import WorkSlider from "../../components/WorkSlider";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import Head from "next/head";
export default function Work() {
  return (
    <>
      <Head>
        <title>Chris Warren | Portfolio</title>
        <meta name="description" content="My Portfolio" />
      </Head>
      <div className="h-full bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12"
              >
                <span className="text-accent">M</span>y work
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-w-[400px] mx-auto lg:mx-0"
              >
                If you can imagine it, I can build it!
              </motion.p>
            </div>
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
}
