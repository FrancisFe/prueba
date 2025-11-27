"use client";

import { useState } from "react";
interface ButtonProps {
    children: React.ReactNode,
    type: "primary",
    onClick?: () => void;

}

const buttonClasses = {
    primary: "bg-blue-500 text-white p-2 rounded-md cursor-pointer"
}

export default function Button({children}: ButtonProps) {
  
  const [count,setCount] = useState(0);

  
  function handleClick() {
    setCount(count + 1);
  }

  
  return (
    <button className={`p-2 rounded-md cursor-pointer ${buttonClasses.primary}`} onClick={handleClick} >
      {children}
      {count}
    </button>
  );
}
