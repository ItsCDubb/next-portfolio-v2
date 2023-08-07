"use client";
import { ToastContainer, toast } from "react-toastify";
import { BsArrowRight } from "react-icons/bs";
import Circles from "/components/Circles";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8cmeu8m",
        "template_9fuzqst",
        form.current,
        "user_7jtxsEF7xkCIm0SGpWUG0"
      )
      .then(
        () => {
          toast.success("Message Sent");
        },
        () => {
          toast.error("Somethnging went wrong");
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Head>
        <title>Chris Warren | Contact</title>
        <meta
          name="description"
          content="My contact page, feel free to contact me so I can build a solution for you."
        />
      </Head>
      <div className="bg-primary/30 mt-[120px] h-full">
        <Circles />
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
          <div className="flex flex-col w-full max-w-[700px] h-[100vh]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              Let&apos;s <span className="text-accent">connect</span>
            </motion.h2>
            <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col h3 text-center mb-12 -mt-3 justify-between"
            >
              Email:{" "}
              <a href="mailto:chris.warren.2019@gmail.com">
                <span className="text-accent">chris.warren.2019@gmail.com</span>
              </a>{" "}
              Phone:{" "}
              <a href="tel:4693644015">
                <span className="text-accent">(469) 364-4015</span>
              </a>
            </motion.div>
            <motion.form
              ref={form}
              onSubmit={sendMail}
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name..."
                  className="input"
                />
                <input
                  type="text"
                  name="user_email"
                  placeholder="Email..."
                  className="input"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject..."
                className="input"
              />
              <textarea
                name="message"
                placeholder="Your Message..."
                className="textarea"
              ></textarea>
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:bg-accent group">
                <span
                  type="submit"
                  value="send"
                  className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500"
                >
                  Send
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
            <ToastContainer
              position="top-center"
              hideProgressBar={true}
              theme="light"
              autoClose={2000}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
