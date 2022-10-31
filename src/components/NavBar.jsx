import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';


export default function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skils" },
    { id: 4, link: "portfolio" },
    { id: 5, link: "contact" },
  ];

  return (
    <div className=" bg-blue-50  w-full h-20 fixed bg-opacity-80 hover:bg-opacity-100 duration-300 ">
      <div className="flex justify-between items-center px-2  w-full h-20 fixed md:w-4/5 md:left-40 md:m-0 ">
        <div>
          <h1 className="font-siganatrue text-5xl ml-2 text-cyan-800 font-bold ">
            mazal
          </h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize mr-2 px-4 cursor-pointer hover:scale-110 duration-200 text-cyan-800"
            >
             <Link to={link}  activeClass="active" spy={true} smooth={true}>{link}</Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="md:hidden z-10 cursor-pointer text-cyan-800 text-2xl"
        >
          {nav ? <FaTimes /> : <FaBars />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-100 to-white">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="capitalize text-4xl cursor-pointer hover:scale-110 duration-200 text-cyan-900 my-3"
              >
                <Link onClick={()=>setNav(!nav)} to={link}  activeClass="active" spy={true} smooth={true}>{link}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>{" "}
    </div>
  );
}
