import "./Footer.css";
const Footer = () => {
  return (
    <section>
      <div className="container relative px-24  mx-auto flex h-56   items-center  justify-between py-5 ">
        {/* left */}
        <div className=" flex flex-col    h-full  justify-between items-start">
          <div className=" space-y-">
            <p className=" font-bold">MNTN</p>
            <p className=" text-sm font-semibold  max-w-xs">
              Get out there & discover your next slope, mountain & destination!
            </p>
          </div>
          <div>
            <p className=" font-semibold opacity-20 text-sm ">
              Copyright 2024 MNTN, inc <span> Terms & Privacy</span>{" "}
            </p>
            <p className=" font-semibold opacity-20 text-sm ">
              Dev by <a href="">ChicoDev</a>{" "}
            </p>
          </div>
        </div>
        {/* right */}
        <div
          className=" flex  h-full gap-40
        "
        >
          {/* right left */}
          <div className=" space-y-3">
            <p className=" text-yellow-400 font-semibold  ">More on The Blog</p>
            <ul className=" text-sm space-y-2">
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

          <div className=" space-y-3">
            <p className=" text-yellow-400 font-semibold "> More on MNTN</p>
            <ul className=" text-sm space-y-2">
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
