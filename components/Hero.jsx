import { HiMail } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Avatar from "@/components/Avatar";
const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-wrap px-3 justify-around bg-gradient-to-b from-color3 to-color4 dark:from-color2 dark:to-color1 text-color1 dark:text-color4 items-center py-10"
    >
      <div className="py-20 flex flex-col items-center gap-3">
        <h1 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-color1 to-red-700 dark:from-color4 dark:to-red-300">
          Md. Nur E Alam Siddiquee
        </h1>
        <em className="text-sm sm:text-2xl">
          Undergrad student at{" "}
          <a href="https://www.ru.ac.bd/" className=" " target="_blank">
            University of Rajshahi
          </a>
        </em>
        <p className="text-sm sm:text-xl">
          Pronouns: <span>He/Him/His</span>
        </p>
        <a
          href="mailto:md.nurealamsiddiquee2004@gmail.com"
          className="flex gap-3 items-center text-sm sm:text-xl"
        >
          <HiMail
            className="-mr-1 h-6 w-6 text-color2 dark:text-color4"
            aria-hidden="true"
          />
          <span>Email: </span>
          <span className=" ">md.nurealamsiddiquee2004@gmail.com</span>
        </a>

        <a
          href="cv.pdf"
          className="p-3 w-36 rounded-full text-center  bg-color2 dark:bg-color3 text-color4 dark:text-color1 hover:bg-color1 dark:hover:bg-color4 transition duration-300 ease-in-out"
          download
        >
          Download CV
        </a>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/Md.Nur9211" target="_blank">
            <FaFacebook className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
          </a>
          <a href="https://twitter.com/MdNur9211" target="_blank">
            <FaTwitter className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
          </a>
          <a href="https://linkedin.com/in/mdnur9211/" target="_blank">
            <FaLinkedin className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
          </a>
          <a href="https://www.youtube.com/@TheDeenShorts" target="_blank">
            <FaYoutube className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
          </a>
          <a href="https://github.com/Md-Nur" target="_blank">
            <FaGithub className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
          </a>
        </div>
      </div>
      <div className="">
        <Avatar width={350} height={350} shadowSize="shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;
