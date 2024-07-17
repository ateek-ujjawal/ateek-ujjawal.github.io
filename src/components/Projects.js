import React from "react";
import './Global.css';

const Projects = () => {
    const projects = [
        {
          title: "Peer-to-peer blockchain in C++",
          desc: "",
          code: "",
        },
        {
          title: "",
          desc: "",
          code: "",
        },
        {
          title: "Wash your hands",
          desc: "Developed an application to help curb the Covid-19 pandemic. Built using Flutter",
          code: "",
        },
        {
          title: "Image Processing Application",
          desc: "Developed an application to help curb the Covid-19 pandemic. Built using Flutter",
          code: "",
        }
    ];

  return (
    <section className="bg-primary text-white px-5 py-10" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-teal-500 pb-2">
            Projects
          </h2>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-5" class="relative"> 
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-secondery dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Peer-to-peer blockchain in C++</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Wrote a blockchain consensus algorithm over a distributed peer-to-peer network from scratch.
                      Clients can contact peers to send transactions and read the status of the blockchain.
                      Took inspiration from the Bitcoin whitepaper.
                      <br /> <br />
                      <b class="text-white">Skills used:</b> C++, Networks, Distributed Systems, gdb
                    </p>
                    <a href="https://github.com/ateek-ujjawal/P2P-Blockchain" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-800 dark:bg-primary dark:hover:bg-teal-500 dark:focus:ring-teal-800">
                        Project link
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-secondery dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ext2 based file system</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Built a simple ext2 based file system that runs on FUSE.
                      Supports operations such as read, write, create, truncate, mkdir, rmdir, chmod etc.
                      Blocks are sized 1KB each. It is based on ext2 with allocation bitmaps and inodes being grouped at the start of the disk.
                      Inodes have 6 direct pointers, an indirect pointer and a double indirect pointer.
                      <br /> <br />
                      <b class="text-white">Skills used:</b> C, gdb, File Systems
                    </p>
                    <a href="https://github.com/ateek-ujjawal/unix-fs" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-teal-800 dark:bg-primary dark:hover:bg-teal-500 dark:focus:ring-teal-800">
                        Project link
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>

                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-secondery dark:border-gray-700">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Image Processing Application</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Made an image processing application using Java and Swing. 
                      The application supports features such as extracting color components, putting filters such as greyscale, sepia etc.
                      Compress, blur, sharpen, color correct and dither images. Used Haar-Wavelet transforms for compression.
                      Designed a tab-based GUI in Swing which supports saving and loading images.
                      <br /> <br />
                      <b class="text-white">Skills used:</b> Java, Swing
                    </p>
                </div>
      </div>
    </section>
  );
};

export default Projects;