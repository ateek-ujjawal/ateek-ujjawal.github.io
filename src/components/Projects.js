import React from "react";
import './Global.css';

const Projects = () => {
    const projects = [
        {
          title: "Peer-to-peer blockchain in C++",
          desc: "Wrote a blockchain consensus algorithm over a distributed peer-to-peer network from scratch. Clients can contact peers to send transactions and read the status of the blockchain. Took inspiration from the Bitcoin whitepaper. Built using C++ with C sockets.",
          code: "https://github.com/ateek-ujjawal/P2P-Blockchain",
          skills: "C++, Networks, Distributed Systems, gdb"
        },
        {
          title: "ext2 based file system",
          desc: "Built a simple ext2 based file system that runs on FUSE. Supports operations such as read, write, create, truncate, mkdir, rmdir, chmod etc. Blocks are sized 1KB each. It is based on ext2 with allocation bitmaps and inodes being grouped at the start of the disk.",
          code: "https://github.com/ateek-ujjawal/unix-fs",
          skills: "C, gdb, System Calls"
        },
        {
          title: "Image Processing Application",
          desc: "Made an image processing application using Java and Swing. The application supports features such as extracting color components, putting filters such as greyscale, sepia etc. Compress, blur, sharpen, color correct and dither images. Used Haar-Wavelet transforms for compression.",
          code: "",
          skills: "Java, Swing"
        },
        {
          title: "Wash your hands",
          desc: "Developed an application to help curb the Covid-19 pandemic. The app reminds you to wash your hands as soon as you come back home. The app also has a reminder feature that reminds you to wash your hands periodically. Featured in Times of India: https://timesofindia.indiatimes.com/city/jaipur/students-of-manipal-university-jaipur-create-app-that-gives-hand-washing-reminders/articleshow/75165595.cms",
          code: "",
          skills: "Flutter"
        }
    ];

  return (
    <section className="bg-primary text-white px-5 py-10" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[150px] border-teal-500 pb-2">
            Projects
          </h2>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-5">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>  
                <div class="max-w-md p-6 mb-8 bg-white border border-gray-200 rounded-lg shadow bg-secondery dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {project.desc}
                      <br /><br />
                      <b class="text-white">Skills used:</b> {project.skills}
                    </p>
                    {project.code !== '' && <a href={project.code} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-800 dark:bg-primary dark:hover:bg-teal-500 dark:focus:ring-teal-800">
                        Github repo
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>}
                </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;