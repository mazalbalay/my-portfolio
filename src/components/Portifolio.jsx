import React from "react";
import productImg from "../assets/product.png";
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
        <div className=" m-3 w-4/4  bg-white  py-9 md:w-1/4 flex flex-col items-center rounded-lg  ">
          <img className="rounded-md " src={productImg} alt="" />
          <h2 className="text-2xl font-bold my-2">product</h2>
          <p className="text-center my-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptas voluptatum necessitatibus? Esse tempora eius libero Lorem
          </p>
          <div className="my-2">
            <button className="bg-white rounded-md font-bold px-6 py-3 m-2">
              Demo
            </button>
            <button className="bg-white rounded-md font-bold px-6 py-3 m-2">
              Code
            </button>
          </div>
        </div>

        <div className=" m-3 w-4/4   bg-white py-9 md:w-1/4 flex flex-col items-center rounded-lg  ">
          <img className="rounded-md " src={productImg} alt="" />
          <h2 className="text-2xl font-bold my-2">product</h2>
          <p className="text-center my-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptas voluptatum necessitatibus? Esse tempora eius libero Lorem
          </p>
          <div className="my-2">
            <button className="bg-white rounded-md font-bold px-6 py-3 m-2">
              Demo
            </button>
            <button className="bg-white rounded-md font-bold px-6 py-3 m-2">
              Code
            </button>
          </div>
        </div>
        <div className=" m-3 w-4/4  bg-white py-9 md:w-1/4 flex flex-col items-center rounded-lg  ">
          <img className="rounded-md " src={productImg} alt="" />
          <h2 className="text-2xl font-bold my-2">product</h2>
          <p className="text-center my-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            voluptas voluptatum necessitatibus? Esse tempora eius libero Lorem
          </p>
          <div className="my-2">
            <button className="bg-white rounded-md font-bold px-6 py-3 m-2">
              Demo
            </button>
            <button className="bg-white rounded-md font-bold px-6 py-3 m-2">
              Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
