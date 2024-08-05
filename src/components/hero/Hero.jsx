import "./Hero.css";
import "../../assets/fonts/PlayfairDisplay-VariableFont_wght.ttf";
import "../../assets/fonts/CormorantGaramond-Regular.ttf";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen  hero py-4 shadow-inner  ">
      <div className="container relative max-xl: mx-auto flex flex-col  items-center justify-center h-full">
        <header className=" top-0  w-full absolute   flex items-center  justify-center md:justify-between">
          <p
            className=" text-3xl font-bold capitalize "
            style={{ fontFamily: "PlayfairDisplay" }}
          >
            MNTN
          </p>
          <nav className="  hidden md:block">
            <ul className="flex items-center gap-10 text-lg font-semibold">
              <li>
                <a href="#Eq" className="outline-4">
                  Equipmet
                </a>
              </li>
              <li>
                <a href="#Eq">About us</a>
              </li>
              <li>
                <a href="#Eq" className="">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <a href="https://github.com/DivChico" target="_blank">
            <div className=" hidden md:flex items-center justify-center capitalize gap-2 text-lg font-semibold cursor-pointer">
              <GitHubIcon />
              DivChico
            </div>
          </a>
        </header>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-2  justify-center items-center md:justify-normal md:items-start "
        >
          <p className=" text-yellow-400 font-semibold uppercase tracking-widest headingText">
            <span className=" pl-16 text-yellow-400">A hiking guide</span>
          </p>
          <p
            className=" text-3xl md:text-4xl font-bold capitalize max-w-sm  tracking-widest text-center md:text-left "
            style={{ fontFamily: "PlayfairDisplay" }}
          >
            Be prepared for the <br /> Mountains and <br /> beyond!
          </p>
          <p className="tracking-widest flex gap-3 text-sm  items-center font-semibold">
            scroll down
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p className=" absolute gap-x-2 rotate-90  left-0 md:top-1/2 top-2/3  flex  items-center  rightText capitalize font-semibold">
            <p> Follow us</p>
            <div className="  -rotate-90">
              <InstagramIcon />
            </div>
            <div className="  -rotate-90">
              {" "}
              <TwitterIcon />
            </div>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
