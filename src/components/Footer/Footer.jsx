import "./Footer.css";
const Footer = () => {
  return (
    <section>
      <div className="container relative px-24 w-screen gap-5  mx-auto flex md:h-56 md:flex-row flex-col-reverse  items-center  justify-between py-5 ">
        {/* left */}
        <div className=" flex flex-col px-6   w-80 md:w-fit  gap-4   md:h-full  justify-between items-start ">
          <div className=" space-y-2 ">
            <p className=" font-bold" style={{ fontFamily: "PlayfairDisplay" }}>
              MNTN
            </p>
            <p className=" text-sm font-semibold  max-w-xs">
              Get out there & discover your next slope, mountain & destination!
            </p>
          </div>
          <div>
            <p className=" font-semibold opacity-20 text-sm ">
              Copyright 2024 MNTN, inc <span> Terms & Privacy</span>{" "}
            </p>
            <p className=" font-semibold opacity-20 text-sm ">
              Dev by{" "}
              <a href="https://github.com/DivChico" target="_blank">
                DivChico
              </a>{" "}
            </p>
          </div>
        </div>
        {/* right */}
        <div
          className=" flex   w-80 md:w-fit   flex-col md:flex-row md:h-full gap-10 md:gap-40 
        "
        >
          {/* right left */}
          <div className=" space-y-3 flex md:block flex-col items-center justify-between">
            <p className=" text-yellow-400 font-semibold  ">More on The Blog</p>
            <ul className=" text-sm space-y-2 md:block flex flex-wrap justify-center  gap-6 items-center">
              <li>
                <a href="link">About MNTN</a>
              </li>{" "}
              <li>
                <a href="link"> Contributors & Writers</a>
              </li>{" "}
              <li>
                <a href="link"> Write For Us</a>
              </li>{" "}
              <li>
                <a href="link"> Contact Us</a>
              </li>
              <li>
                <a href="link"> Privacy Policy</a>
              </li>
            </ul>
          </div>
          {/* right right */}

          <div className=" space-y-3 flex md:block flex-col items-center justify-between">
            <p className=" text-yellow-400 font-semibold "> More on MNTN</p>
            <ul className=" text-sm space-y-2 md:block flex  gap-6 items-center">
              <li>
                <a href="link">The Team</a>
              </li>
              <li>
                <a href="link"> Jobs</a>
              </li>
              <li>
                <a href="link"> Press</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
