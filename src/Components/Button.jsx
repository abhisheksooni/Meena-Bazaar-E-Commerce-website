import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";



function Button({addCalss,addCalss2}) {
  const [hovers, SetHover] = useState(false);

  return (
 
    <>
      <button
        onMouseEnter={() => SetHover(true)}
        onMouseLeave={() => SetHover(false)}
        className={`flex pl-3 fixelMedium gap-7 p-1 border border-c2 bg-transparent items-center rounded-full hover:text-c1 hover:bg-c5 ${addCalss}`}
      >
        <p>{"More"}</p>
        <div
          className={`   rounded-full p-[2px] bg-c5 text-c1  transform ease-linear duration-[250ms] ${addCalss2}
          ${ hovers ? 'rotate-45' : 'rotate-0' } `}
        >
          <ArrowUpRight />
        </div>
      </button>
    </>
  );
}

export default Button;
