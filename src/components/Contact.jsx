import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="w-full h-screen p-10  flex flex-col justify-between">
      <div className="flex flex-col p-4 justify-center items-center max-w-screen-lg mx-auto text-center  text-cyan-800">
        <h1 className="text-4xl font-bold">contact with me!</h1>
        You can leave a message and I will get back to you
      </div>

      <form action="https://getform.io/f/67597346-bb7a-4f2a-9a8d-bc36586010e1" method="POST" className="h-2/3 flex flex-col w-full md:w-1/3 justify-evenly m-auto">
        <input
          type="text"
          placeholder="enter your name"
          name="name"
          className="p-2 bg-transparent border-2 my-2 border-cyan-800 placeholder:text-cyan-800  rounded-md focus:outline-none"
        />
        <input
          type="text"
          placeholder="enter your email"
          name="email"
          className="p-2 bg-transparent border-2 my-2 border-cyan-800 placeholder:text-cyan-800 rounded-md focus:outline-none"
        />
        <textarea
        placeholder="enter your message"
          name="message"
          rows="10"
          className="p-2 border-cyan-800 my-2 placeholder:text-cyan-800 bg-transparent rounded-md  focus:outline-none border-2"
        ></textarea>
        <button className="px-6 py-3 flex items-center rounded-md hover:scale-110 duration-300 bg-blue-50 mt-4 text-cyan-800 font-bold mx-auto ">
          Let's tolk
        </button>
      </form>
    </div>
  );
}
