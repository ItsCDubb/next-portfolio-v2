import { HiHome, HiUser, HiRectangleGroup, HiEnvelope } from "react-icons/hi2";
import { FaImages } from "react-icons/fa";

export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "portfolio", path: "/portfolio", icon: <FaImages /> },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
