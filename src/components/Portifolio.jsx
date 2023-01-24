import React from "react";
import yad2 from "../assets/yad2.png";
import recpice from "../assets/recipe.png";
// import {FaCss3Alt} from 'react-icons/ai'
// import {DiJavascript} from 'react-icons/di'
// import {BsFillBootstrapFill} from 'react-icons/bs'

export default function Portifolio() {
  return (
    <div
      id="portfolio"
      className="min-h-screen bg-blue-50 flex flex-col justify-evenly items-center"
    >
      <div>
        <h1 className="text-6xl font-bold text-cyan-800 my-20">Portipolio</h1>
      </div>

      <div className="flex flex-wrap w-full justify-center">
        <div className=" m-3 w-4/4  bg-white  pb-9 md:w-1/4 flex flex-col items-center rounded-lg  ">
          <img className="rounded-md" src={recpice} alt="" />
          <h2 className="text-2xl font-bold my-2 capitalize">Full Stack Project - Recipes App</h2>
          <p className="text-center text-2xl my-2">
          server: express nodeJS files<br/>
          front: react tailwind
          </p>
          <div className="my-2">
            <button className="bg-blue-50 rounded-md font-bold px-6 py-3 m-2">
              Demo
            </button>
            <button className="bg-blue-50 rounded-md font-bold px-6 py-3 m-2">
             <a href="https://github.com/mazalbalay/recipe_site">Code</a> 
            </button>
          </div>
        </div>

        <div className=" m-3 w-4/4   bg-white pb-9 md:w-1/4 flex flex-col items-center rounded-lg  ">
          <img className="rounded-md " src={yad2} alt="" />
          <h2 className="text-2xl font-bold my-2">Full Stack Project - yad2 App</h2>
          <p className="text-center text-2xl my-2">
          server: express nodeJS mongooDB<br/>
          front: react tailwind
          </p>
          <div className="my-2">
            <button className="bg-blue-50 rounded-md font-bold px-6 py-3 m-2">
              Demo
            </button>
            <button className="bg-blue-50 rounded-md font-bold px-6 py-3 m-2">
              Code
            </button>
          </div>
        </div>
        <div className=" m-3 w-4/4  bg-white py-9 md:w-1/4 flex flex-col items-center rounded-lg  ">
          <img className="rounded-md " src={""} alt="" />
          <h2 className="text-2xl font-bold my-2">...</h2>
          <p className="text-center my-2">
           ...
          </p>
          <div className="my-2">
            <button className="bg-blue-50 rounded-md font-bold px-6 py-3 m-2">
              Demo
            </button>
            <button className="bg-blue-50 rounded-md font-bold px-6 py-3 m-2">
              Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
