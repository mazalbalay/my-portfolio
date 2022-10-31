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
          <p className="shadow-lg my-5 ml-12 p-4 bg-white">
            {/* היי לי קוראים מזל בלאי בת 25 גרה ברחובות,<br/>
         אני יכולה להעיד על עצמי מעבודתיי הקודמות שיש לי מוסר עבודה גבוהה,<br/>
         אני אחראית ומשתלבת יפה מאוד בעבודת צוות,<br/>
         אך בעלת נסיון גם בעבודות עצמאית, */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id
            voluptas corporis harum, autem recusandae libero laborum excepturi
            sit mollitia. Iure, similique tempore. Unde nihil labore blanditiis
            sapiente dolores sunt!
          </p>
          <p className="shadow-lg my-5  mr-9 p-4 bg-white">
            {/* את השכלתי בתחום הפיתוח תוכנה רכשתי בטק קרירה (מרכז הכשרה טכנולוגי)<br/>
         שם עשיתי קורס של 8 חודשים מאוד אינטנסיבים,<br/>
         של למידה 5 פעמים בשבוע מינימום 8 שעות יותר,<br/>
         הקורס היה מאתגר מלמד ומעשיר מאוד. */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, at
            quia! Magni eaque quibusdam, earum nobis provident voluptas aliquid
            animi dolor! Illum consectetur perspiciatis non inventore
            voluptatibus. Voluptatem, hic at?
          </p>
          <p className="shadow-lg my-5 ml-9 p-4 bg-white">
            {/* כרגע אני מחפשת עבודה למשרת Full-stack-developer <br/>
        אני אשמח לקבל הזדמנות להכנס לתחום ולתת את מה שאני יודעת,
        ולקבל כדאי להתפתח וללמוד. */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Dignissimos dicta, praesentium ut odio voluptates atque rem
            consectetur voluptas provident, modi corrupti tempora, voluptatum
            quos dolorem. Rerum voluptate quis eum consequatur.
          </p>
        </div>
      </div>
    </div>
  );
}
