import React from "react";

export default function About() {
  return (
    <div id="about" className="min-h-screen w-3/4 m-auto justify-between items-center flex flex-col md:flex-row py-20">
      <div className="w-full ">
        <h1 className="text-6xl my-4 text-cyan-800 font-bold capitalize text-center md:text-left">
          a little <br /> about me..
        </h1>
      </div>
      <div className="w-full flex flex-col">
        <p className="shadow-lg my-5 ml-12 p-4">
         היי לי קוראים מזל בלאי בת 25 גרה ברחובות,<br/>
         אני יכולה להעיד על עצמי מעבודתיי הקודמות שיש לי מוסר עבודה גבוהה,<br/>
         אני אחראית ומשתלבת יפה מאוד בעבודת צוות,<br/>
         אך בעלת נסיון גם בעבודות עמצאיות,
        
        </p>
        <p className="shadow-lg my-5  mr-9 p-4">
         את השכלתי בתחום הפיתוח תוכנה רכשתי בטק קרירה (מרכז הכשרה טכנולוגי)<br/>
         שם עשיתי קורס של 8 חודשים מאוד אינטנסיבים,<br/>
         של למידה 5 פעמים בשבוע מינימום 8 שעות יותר,<br/>
         הקורס היה מאתגר מלמד ומעשיר מאוד.
        </p>
        <p className="shadow-lg my-5 ml-9 p-4 ">
         כרגע אני מחפשת עבודה למשרת Full-stack-developer <br/>
        אני אשמח לקבל הזדמנות להכנס לתחום ולתת את מה שאני יודעת,
        ולקבל כדאי להתפתח וללמוד.
        </p>
      </div>
    </div>
  );
}
