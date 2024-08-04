import "./Hero.css";

const Hero = () => {
  return (
    <section className="h-screen  hero py-4 shadow-inner  ">
      <div className="container relative max-xl: mx-auto flex flex-col  items-center justify-center h-full">
        <header className=" top-0  w-full absolute   flex items-center justify-between">
          <p className=" text-xl font-bold capitalize">MNTN</p>
          <nav>
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
          <div className="flex items-center justify-center gap-2 text-lg font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            Account
          </div>
        </header>
        <div className="flex flex-col gap-2">
          <p className=" text-yellow-400 font-semibold uppercase">
            A hiking guide
          </p>
          <p className=" text-4xl font-bold ">
            Be prepared for the <br /> Mountains and <br /> beyond!
          </p>
          <p className=" flex gap-3 text-sm font-semibold">
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
        </div>
        <p className=" absolute left-0 rightText">instegram</p>
      </div>
    </section>
  );
};

export default Hero;
