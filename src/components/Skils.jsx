import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import bootstrap from "../assets/bootstrap.png";
import DBeaver from "../assets/DBeaver.png";
import js from "../assets/js.png";
import mongodb from "../assets/mongodb.png";
import MySQL from "../assets/MySQL.png";
import nodejs from "../assets/nodejs.png";
import Python from "../assets/Python.png";
import Reactimg from "../assets/React.png";
import scss from "../assets/scss.png";
import tailwind from "../assets/tailwind.png";

export default function Skils() {
  const skilsFront = [
    { skil: "css", img: css },
    { skil: "html", img: html },
    { skil: "js", img: js },
    { skil: "Reactimg", img: Reactimg },
    { skil: "scss", img: scss },
    { skil: "bootstrap", img: bootstrap },
    { skil: "tailwind", img: tailwind },
  ];
  const skilsBack = [
    { skil: "mongodb", img: mongodb },
    { skil: "MySQL", img: MySQL },
    { skil: "DBeaver", img: DBeaver },
    { skil: "Python", img: Python },
    { skil: "nodejs", img: nodejs },
  ];
  return (
    <div id="skils" className="min-h-screen py-10 flex flex-col justify-center items-center bg-blue-50">
      <div>
        <h1 className="flex flex-col justify-center items-center text-6xl text-cyan-800 font-bold my-10">
          SKILS
        </h1>
      </div>
      <div className=" w-full flex flex-col md:flex-row justify-evenly items-start ">
        <div className="w-full  md:w-2/6 flex flex-col justify-center items-center shadow-md">
          <div>
            <h1 className="text-4xl font-bold text-cyan-800 my-12">FRONT</h1>
          </div>
          <div className="flex flex-wrap w-full justify-between  items-center ">
            {skilsFront.map(({ skil, img }) => {
              return (
                <img
                  key={skil}
                  className="w-1/4 md:w-1/6 m-8 hover:scale-110 duration-100"
                  src={img}
                  alt=""
                />
              );
            })}
          </div>
        </div>

        <div className="w-full  md:w-2/6 flex flex-col justify-center items-center shadow-md ">
          <div>
            <h1 className="text-4xl font-bold text-cyan-800 my-12">BACK</h1>
          </div>
          <div className="flex flex-wrap w-full justify-between  items-center">
            {skilsBack.map(({ skil, img }) => {
              return (
                <img
                  key={skil}
                  className="w-1/4 md:w-1/6 m-8 hover:scale-110 duration-100"
                  src={img}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
