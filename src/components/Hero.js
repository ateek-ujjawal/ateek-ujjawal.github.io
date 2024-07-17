import React from "react";
import ProfileImg from "../assets/Ateek_profile.jpg"

import {
  AiOutlineGithub,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-20">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">A</span>teek <span className="text-accent">U</span>jjawal<br />
            Software Engineer
          </h1>

          <p className="py-5">
            I like to dabble in low-level concepts like Operating Systems, Networks etc.
          </p>
          <p className="py-1">
          Professionally, I have worked with technologies like C#, .NET and SQL Server.
          </p>

          <div className="flex py-5 ">
            <a
              href="https://github.com/ateek-ujjawal"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
          </div>

          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#5ec4dd] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img items-center md:h-auto md:w-full">
          <img
            src={ProfileImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;