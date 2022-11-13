import React from "react";

export default function About() {
  return (
    <div className="bg-blue-50">
      <div
        id="about"
        className="bg-blue-50 min-h-screen w-3/4 m-auto justify-between items-center flex flex-col md:flex-row py-20"
      >
        <div className="w-full ">
          <h1 className=" text-6xl my-4 text-cyan-800 font-bold capitalize text-center md:text-left">
            a little <br /> about me..
          </h1>
        </div>
        <div className="w-full flex flex-col ">
          <p className="shadow-lg my-5 ml-12 p-4 text-2xl bg-white">
            Hi, my name is Mazal Balay,I'm 25 years old and live in Rehovot,
            <br />
            Has experience in a multi-task computerized work environment, under
            pressure,
            <br />
            Combining verbal and written communication, personal responsibility
            and meeting goals
          </p>
          <p className="shadow-lg my-5  mr-9 p-4 text-2xl bg-white">
            Software development course in a bootcamp format at the Tech Career
            technological training center.
            <br />
            An intensive course with 800 academic study hours, of which 50% is
            practical and entails presenting projects.
          </p>
          <p className="shadow-lg my-5 ml-9 p-4 text-2xl bg-white">
          Enjoys learning and overcoming challenges, has the ability to learn independently and work in a team.<br/>
          Comes with a lot of motivation to take up the position of Full Stack Developer.
          </p>
        </div>
      </div>
    </div>
  );
}
