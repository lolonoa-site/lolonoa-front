import React from "react";

export type Props = {
  className: string;
};

const MenuCard = ({ className }: Props) => {
  return (
    <div
      className={`${className} bg-white pt-[22px] pr-[23px] pb-[10px] pl-[36px] grid grid-cols-2 auto-rows-auto gap-x-[20px] rounded-[6px] `}
    ></div>
  );
};

export default MenuCard;
