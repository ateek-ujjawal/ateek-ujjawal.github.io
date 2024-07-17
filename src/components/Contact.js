import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-10" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-teal-500 pb-2">
          Contact Me
        </h2>

        <p className="py-2">
          <span className="font-bold">Email:</span> ateekujjawal@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +1 602-328-7464 / +91 9879-368-551
        </p>
      </div>
    </section>
  );
};

export default Contact;