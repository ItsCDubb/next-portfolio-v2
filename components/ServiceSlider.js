// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { RxPencil2, RxRocket, RxArrowTopRight } from "react-icons/rx";
import { BiSolidServer } from "react-icons/bi";
import { FaCode, FaGamepad, FaMobileAlt } from "react-icons/fa";

// import required modules
import { FreeMode, Pagination } from "swiper";

// service data
export const serviceData = [
  {
    icon: <BiSolidServer />,
    title: "Hosting",
    description:
      "I will host your app or website with an eye on price to make sureyou dont waste your hard earned money.",
  },
  {
    icon: <FaCode />,
    title: "Web Design & Development",
    description:
      "Design & build the website of your dreams using the latest technologies available.",
  },
  {
    icon: <FaGamepad />,
    title: "Game Design & Development",
    description:
      "Design & build the game you have been thinking about using the latest technologies available.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Design the product you've been envisioning, using products like Figma or Adobe XD",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "This is my specialty, I will develop the next greatest app for you using technologies like React Native or Kotlin",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-secondary h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-secondary transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
