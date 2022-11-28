import React,{useState} from "react";
import style from "../style";

const Time = () =>{
    const date = new Date().toLocaleTimeString();
    const [timer,setTime] = useState(date);
    const timeUp = ()=>{
        const time = new Date().toLocaleTimeString();
        setTime(time);
    };
    setInterval(timeUp,1000);
    return (<>
      <div className="z-40 fixed bottom-5 right-5 rounded-sm px-2 py-1 font-ubantu bg-black/30 font-semibold hover:bg-black cursor-pointer" >
      <span className="clock text-white/80 hover:text-sky-200">{timer}</span>
      </div>
    </>);
  }


export default Time;