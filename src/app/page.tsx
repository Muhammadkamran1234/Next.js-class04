// pages/index.js
import React from "react";
import { Cards } from "./hello/card";

const img1 = "/1.jpg";  
const img2 = "/2.jpg";
const img3 = "/3.jpg";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-wrap gap-7 justify-center">
        <Cards image={img1} name={"Kamran"} age={18} id={12345} class={7} />
        <Cards image={img2} name={"Mugheera"} age={17} id={56728} class={6} />
        <Cards image={img3} name={"Rizwan"} age={20} id={91011} class={8} />
      </div>
    </div>
  );
}
