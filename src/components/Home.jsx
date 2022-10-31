import React from "react";
import myImg from "../assets/mazal_pic.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-scroll';

export default function home() {
  return (
    <div
       id="home"
      className="h-screen w-full bg-gradient-to-b text-cyan-800 pt-10"
    >
      <div className="md:flex-row flex flex-col max-w-screen-lg mx-auto w-4/5 justify-center items-center h-screen ">

        <div className="flex flex-col justify-center items-center w-full text-center md:text-left md:items-start pr-3">

          <h1 className=" text-2xl sm:text-4xl font-bold my-5">
            Hey My Name Is MAZAL
          </h1>
          <h1 className=" text-2xl sm:text-4xl font-bold">
            And I'm Full Stack Developer
          </h1>
          
          <div>
            <Link to="portfolio" activeClass="active" spy={true} smooth={true} className="group flex justify-center cursor-pointer items-center bg-blue-50 text-cyan-800 border-color: rgb(212 212 212); p-2 rounded-md text-2xl my-10 font-bold">
            Portfolio 
              <span className="group-hover:rotate-90 duration-200">
                <IoIosArrowForward size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full ml-0 md:ml-10">
          <img
            src={myImg}
            alt="my pic"
            className="rounded-2xl mx-auto w-3/4 md:w-full mt-6 "
          />
        </div>
      </div>
    </div>
  );
}
