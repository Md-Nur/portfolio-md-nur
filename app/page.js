import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex justify-around bg-color3 dark:bg-color2 text-color1 dark:text-color4 items-center pt-20"
      >
        <div className="pb-20 flex flex-col items-center gap-3">
          <h1 className="text-5xl font-bold">Kaiser Hamid</h1>
          <em className="text-2xl">
            Final year undergrad student at{" "}
            <a
              href="https://www.buet.ac.bd/web/"
              className="text-orange-600"
              target="_blank"
            >
              BUET
            </a>
          </em>
          <p className="text-xl">
            Pronouns: <span>He/Him/His</span>
          </p>
          <a
            href="mailto:kaiserhamid715@gmail.com"
            className="flex gap-3 items-center text-xl"
          >
            <EnvelopeIcon
              className="-mr-1 h-6 w-6 text-color2 dark:text-color4"
              aria-hidden="true"
            />
            <span>Email: </span>
            <span className="text-orange-600">kaiserhamid715@gmail.com</span>
          </a>

          <a
            href="cv.pdf"
            className="p-3 w-36 rounded-full text-center  bg-color2 dark:bg-color3 text-color4 dark:text-color1 hover:bg-color1 dark:hover:bg-color4 transition duration-300 ease-in-out"
            download
          >
            Download CV
          </a>
          <div className="flex gap-3">
            <a href="https://facbook.com" target="_blank">
              <FaFacebook className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
            </a>
            <a href="https://youtube.com" target="_blank">
              <FaYoutube className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
            </a>
            <a href="https://github.com" target="_blank">
              <FaGithub className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
            </a>
          </div>
        </div>
        <div>
          <Image
            src="/hero.png"
            alt="Picture of the author"
            width={510}
            height={745}
          />
        </div>
      </section>
<main className="p-3 m-3">
<section id="about-me" className="p-10 m-10">
        <h2 className="text-4xl font-bold text-center p-3 m-3">About Me</h2>
        <p className="text-justify px-20 mx-20">
          I am an incoming Ph.D. student at Arizona State Univeristy where I
          will work in the Embedded Machine Intelligence Lab (EMIL). Previously
          I worked as a Software Engineer in IQVIA (North Carolina-based
          Clinical Research Industry). Before that, I worked as an Adjunct
          Lecturer in East Delta University. I received my Bachelors (B.Sc.) in
          Computer Science and Engineering (CSE) from Bangladesh University of
          Engineering & Technology (BUET) in May 2022. My research focus is
          situated in the interdisciplinary field of Human-Computer Interaction,
          m-Health and Machine Learning and curious to develop systems that can
          interact with humans to solve daily life complications. I did my
          undergraduate thesis in the area of Data mining and Information
          Systems under the supervision of Dr. Abu Syed Md. Latiful Haque. I
          have also collaborated with Dr. Md Shohrab Hossain, Dr. A.K.M Ashikur
          Rahman and Dr. A B M Alim Al Islam to explore different domains of CS.
          Apart from my academic activities, I enjoy most of my time outdoors.
          and it's on my bucket list to travel to 10 countries before I turn 40.
          I like to hangout with my friends and family in my off-time and love
          to taste new foods whenever I can.
        </p>
      </section>

      <section className="p-10 m-10">
        <h2 className="text-4xl font-bold text-center p-3 m-3">
          Latest News!!
        </h2>
        <ul className="text-justify px-20 mx-20">
          <li>
          October, 2022: Submitted my first research paper in ICCIT, 2022
          </li>
          <li>
          September, 2022: Nominated for “Research Fellowship” from SPARRSO for my research proposal [my undergrad thesis].

          </li>
          <li>
            Our paper titled "A Deep Learning Approach to Detecting COVID-19
            from Chest X-ray Images" has been accepted in the 2021 IEEE
            International Conference on Bioinformatics and Biomedicine (BIBM
            2021){" "}
          </li>
          <li>
            Our paper titled "A Deep Learning Approach to Detecting COVID-19
            from Chest X-ray Images" has been accepted in the 2021 IEEE
            International Conference on Bioinformatics and Biomedicine (BIBM
            2021){" "}
          </li>
          <li>
            Our paper titled "A Deep Learning Approach to Detecting COVID-19
            from Chest X-ray Images" has been accepted in the 2021 IEEE
            International Conference on Bioinformatics and Biomedicine (BIBM
            2021){" "}
          </li>
        </ul>
      </section>
</main>
    </>
  );
}
