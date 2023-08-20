import React from "react";

interface Props {
  className: string;
  children: any;
}

const Bar = ({ className, children }: Props) => {
  return (
    <div
      className={`${className} h-auto flex justify-center bg-white font-thin p-[13px] text-[12px] text-navy rounded-[8px]`}
    >
      {children}
    </div>
  );
};

export default Bar;
