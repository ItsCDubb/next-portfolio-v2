import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { TbBrandAndroid, TbBrandReactNative } from "react-icons/tb";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiInkscape,
  SiTypescript,
  SiGimp,
} from "react-icons/si";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Development",
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <SiTypescript key={4} />,
          <FaReact key={5} />,
          <TbBrandReactNative key={6} />,
          <SiNextdotjs key={7} />,
          <SiFramer key={8} />,
          <TbBrandAndroid key={9} />,
        ],
      },
      {
        title: "Design",
        icons: [
          <FaFigma key={1} />,
          <SiAdobexd key={2} />,
          <SiGimp key={3} />,
          <SiInkscape key={4} />,
        ],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Computer Science - Master of Science",
        date: "2006",
      },
      {
        title: "Computer Science - Bachelor of Science",
        date: "2003",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "React Native Developer - SwagCheck, Inc.",
        date: "Dec 2021 - Jan 2022",
      },
      {
        title: "Full-Stack Developer - Avaaz Media, Inc",
        date: "Dec 2020 - Feb 2021",
      },
      {
        title: "Software Engineer - State Street HOA",
        date: "May 2015 - Jul 2015",
      },
      {
        title: "Software Engineer - Donald & Wife Books",
        date: "Mar 2015 - Apr 2015",
      },
      {
        title: "Software Engineer - Ward Consignment",
        date: "Aug 2014 - Jan 2015",
      },
      {
        title: "Software Engineer - McBride & Sons Auto",
        date: "Jan 2014 - Jun 2014",
      },
      {
        title: "Director of Technology - The Five Star",
        date: "Apr 2013 - Dec 2013",
      },
      {
        title: "PC Repair Technician - The Five Star",
        date: "Mar 2013 - Apr 2013",
      },
      {
        title: "Software Engineer - St. Matthew's Churches",
        date: "Jul 2010 - Nov 2012",
      },
      {
        title: "IT2 - US Navy",
        date: "Jul 2000 - Dec 2006",
      },
    ],
  },
  {
    title: "certificates",
    info: [
      {
        title: "Responsive Web Design - freeCodeCamp",
        date: "September 2019",
      },
      {
        title: "JS Algorithms & Data Structures - freeCodeCamp",
        date: "October 2019",
      },
      {
        title: "Front End Development Libraries - freeCodeCamp",
        date: "February 2020",
      },
      {
        title: "Front End Web Design - Kenzie Academy",
        date: "April 2020",
      },
      {
        title: "Data Visualization - freeCodeCamp",
        date: "June 2020",
      },
      {
        title: "Scientific Computing with Python - freeCodeCamp",
        date: "July 2020",
      },
      {
        title: "Full-Stack Web Design - Kenzie Academy",
        date: "October 2020",
      },
      {
        title: "Foundations of User Experience (UX) Design - Coursera",
        date: "April 2023",
      },
      {
        title: "Start The UX Design Process - Coursera",
        date: "May 2023",
      },
      {
        title: "Build Wireframes & Low-Fi Prototypes - Coursera",
        date: "May 2023",
      },
      {
        title: "Conduct UX Research & Test Early Concepts - Coursera",
        date: "June 2023",
      },
      {
        title: "Create Hi-Fi Designs & Prototypes in Figma - Coursera",
        date: "June 2023",
      },
      {
        title: "Responsive Web Design in Adobe XD - Coursera",
        date: "July 2023",
      },
    ],
  },
];
