import React from "react";
import { anime1, anime2 } from "../../assets";
export default function Card(props) {
  return (
    <div className="m-4 flex flex-col justify-center shadow-lg shadow-indigo-500/40 p-5 bg-slate-800 rounded-lg">
      <img src={props.image} className="mb-4" />
      <p className="text-slate-300 font-medium text-2xl lg:text-xl overflow-hidden text-left">
        {props.title}
      </p>
      <p className="text-slate-300 font-thin text-xs lg:text-sm overflow-hidden text-left mt-4 mb-4">
        {props.desc}
      </p>
      <div className="flex align-items items-center justify-between pt-3 pb-3">
        <div className="flex justify-between align-items items-center ">
          <img
            src={props.avatar}
            alt=""
            className="w-[40px] h-[40px] rounded-full mr-2"
          />
          <h1 className="text-xl text-gray-300">{props.author}</h1>
        </div>
        <div>
          <p className="text-normal text-gray-300">{props.date}</p>
        </div>
      </div>
    </div>
  );
}
