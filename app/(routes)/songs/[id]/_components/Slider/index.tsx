import { InputHTMLAttributes } from "react";

const Slider = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="range"
      className="slider h-[2px] w-full cursor-pointer appearance-none rounded-lg bg-white"
      {...props}
    />
  );
};

export default Slider;
