import { InputHTMLAttributes } from "react";
import "./slider.css";

const Slider = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="range"
      className="slider h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
      {...props}
    />
  );
};

export default Slider;
