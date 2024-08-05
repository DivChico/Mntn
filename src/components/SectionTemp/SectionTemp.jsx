import React from "react";
import "./SectionTemp.css";

const SectionTemp = ({
  isImageRight,
  title,
  heading,
  desc,
  imageLink,
  number,
}) => {
  return (
    <section className="sectionTemp md:h-screen flex items-center justify-center   ">
      <div
        className={`container relative max-xl flex-col md:flex-row p-10 md:p-0  flex ${
          isImageRight ? "" : "  md:flex-row-reverse"
        } items-center gap-28 justify-center  mx-auto `}
      >
        <div className=" space-y-5 relative  ">
          <p className=" text-9xl absolute -top-10 -left-10 font-bold opacity-20">
            {number}
          </p>

          <p className=" text-yellow-400  font-semibold headingText uppercase flex items-center tracking-widest">
            <span className=" pl-16 text-yellow-400">{heading}</span>
          </p>
          <p
            className=" font-bold max-w-sm text-3xl"
            style={{ fontFamily: "PlayfairDisplay" }}
          >
            {title}
          </p>
          <p className=" text-sm max-w-xl">{desc}</p>
          <p className=" tracking-widest text-yellow-400 font-semibold text-sm flex gap-3  items-center ">
            read more{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        </div>
        <div>
          <img className="  md:max-w-96" src={imageLink} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default SectionTemp;
