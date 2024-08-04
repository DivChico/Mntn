import "./Footer.css";
const Footer = () => {
  return (
    <section>
      <div className="container relative max-xl mx-auto flex   items-center justify-center ">
        {/* left */}
        <div>
          <div>
            <p className=" font-bold">MNTN</p>
            <p className=" text-sm font-semibold max-w-xs">
              Get out there & discover your next slope, mountain & destination!
            </p>
          </div>

          <p className=" font-semibold opacity-20">
            Copyright 2024 MNTN, inc <span> Terms & Privacy</span>{" "}
          </p>
        </div>
        {/* right */}
        <div>
          {/* right left */}
          <div>
            <p className=" text-yellow-400 font-semibold ">More on The Blog</p>
            <ul>
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

          <div>
            <p className=" text-yellow-400 font-semibold "> More on MNTN</p>
            <ul>
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
