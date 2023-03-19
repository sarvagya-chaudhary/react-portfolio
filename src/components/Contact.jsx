import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Conatct Me
          </p>
          <p className="py-6">Please fill out to have a conversation with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/6e8e84f2-bc32-40ed-9a85-4bb18fba8175"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Start the conversation!!!!"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-nome"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
