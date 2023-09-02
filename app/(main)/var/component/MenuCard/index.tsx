import Image from "next/image";
import React from "react";
import Search from "../../../../../public/search.svg";
import Popular from "../../../../../public/icon/popular.svg";
import Recent from "../../../../../public/icon/recent.svg";
import Top from "../../../../../public/icon/top.svg";
import PositionSelect, { usePositionSelect } from "../PositionSelect";
import TierSelect, { useTierSelect } from "../TierSelect";

export type Props = {
  className: string;
};

const MenuCard = ({ className }: Props) => {
  const {
    value: positionA,
    onChange: onPositionAChange,
    toggle: toggleA,
    onToggle: onToggleA,
  } = usePositionSelect("top");
  const {
    value: positionB,
    onChange: onPositionBChange,
    toggle: toggleB,
    onToggle: onToggleB,
  } = usePositionSelect("top");

  const {
    value: tierStart,
    onChange: onTierStartChange,
    toggle: toggleStart,
    onToggle: onToggleStart,
  } = useTierSelect("gold");

  const {
    value: tierEnd,
    onChange: onTierEndChange,
    toggle: toggleEnd,
    onToggle: onToggleEnd,
  } = useTierSelect("gold");

  return (
    <div
      className={`${className} bg-white pt-[22px] pr-[23px] pb-[10px] pl-[36px] grid grid-cols-2 auto-rows-auto gap-x-[20px] rounded-[6px]`}
    >
      <span className="row-start-1 col-start-1 col-span-1 text-[17px] text-black font-bold">
        실시간 롤문철
      </span>
      <form className="relative w-full place-self-start flex justify-end">
        <input
          type="text"
          placeholder="제목, 내용, 작성자"
          className="w-full max-w-[280px] row-start-1 col-start-2 col-span-1 bg-gray-200 py-[6px] pl-[16px] text-black outline-none appearance-none rounded-[8px] text-[14px]"
        />
        <button
          type="submit"
          className="appearance-none bg-transparent absolute right-[10px] top-[calc(50%-12.5px)] w-[25px] h-[25px] flex justify-center items-center"
        >
          <Search fill="#97A0A7" />
          {/* <Image src={Search} alt="search" className="fill-[#97A0A7]" /> */}
        </button>
      </form>
      <div className="w-full row-start-3 col-start-1 col-span-1 flex gap-[20px]">
        <button className="appearance-none outline-none flex items-center gap-[6px]">
          <Popular fill={"#97A0A7"} />
          <span className={`text-[14px] text-gray-900 font-bold`}>인기</span>
        </button>
        <button className="appearance-none outline-none flex items-center gap-[6px]">
          <Recent fill={"#97A0A7"} />
          <span className={`text-[14px] text-gray-900 font-bold`}>최신</span>
        </button>
        {/* <button className="appearance-none outline-none flex items-center gap-[6px]">
          <Top fill={"#97A0A7"} />
          <span className={`text-[14px] text-gray-900 font-bold`}>TOP</span>
        </button> */}
      </div>
      <div className="row-start-2 col-start-2 col-span-1 flex gap-[10px] mt-[10px] items-center justify-end">
        <PositionSelect
          className=""
          value={positionA}
          onChange={onPositionAChange}
          toggle={toggleA}
          onToggle={onToggleA}
        />
        <span className="text-gray-900 font-bold text-[12px]">vs</span>
        <PositionSelect
          className=""
          value={positionB}
          onChange={onPositionBChange}
          toggle={toggleB}
          onToggle={onToggleB}
        />
      </div>
      <div className="row-start-3 col-start-2 col-span-1 flex gap-[10px] mt-[10px] items-center justify-end">
        <TierSelect
          className=""
          value={tierStart}
          onChange={onTierStartChange}
          toggle={toggleStart}
          onToggle={onToggleStart}
        />
        <span className="text-gray-900 font-bold text-[12px]">~</span>
        <TierSelect
          className=""
          value={tierEnd}
          onChange={onTierEndChange}
          toggle={toggleEnd}
          onToggle={onToggleEnd}
        />
      </div>
    </div>
  );
};

export default MenuCard;
