import React from "react";
import NortheasternImg from "../assets/northeastern.png";
import MujImg from "../assets/muj.png";
import DellImg from "../assets/dell.jpg";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-10" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-teal-500 pb-2">
            Education
          </h2>

          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover rounded-t-lg h-auto w-full md:h-28 md:w-auto md:rounded-none md:rounded-s-lg" src={NortheasternImg} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Northeastern University</h5>
                <p class="mb-3 font-normal text-gray-300 dark:text-gray-300">MS in Computer Science with Specialization in Systems</p>
            </div>
          </div>
        <br />
          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-auto md:h-28 md:w-auto md:rounded-none md:rounded-s-lg bg-white" src={MujImg} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Manipal University Jaipur</h5>
                <p class="mb-3 font-normal text-gray-300 dark:text-gray-300">B.Tech in Computer Science and Engineering</p>
            </div>
          </div>

        </div>

        <div className="experience">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-teal-500 pb-2">
                Experience
            </h2>

          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:h-44 md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover rounded-t-lg h-auto w-full md:h-44 md:w-auto md:rounded-none md:rounded-s-lg" src={DellImg} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dell Technologies</h5>
                <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">Software Engineer 2</p>
                <p class="mb-1 font-normal text-white">Worked as a backend developer, handling customer data in SQL Server. Developed REST APIs in .NET using C#.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;