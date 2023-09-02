import React from "react";
import Down from "../../../../../public/icon/down.svg";
import TierIron from "../../../../../public/img/tier/iron.png";
import TierBronze from "../../../../../public/img/tier/bronze.png";
import TierSilver from "../../../../../public/img/tier/silver.png";
import TierGold from "../../../../../public/img/tier/gold.png";
import TierPlatinum from "../../../../../public/img/tier/platinum.png";
import TierEmerald from "../../../../../public/img/tier/emerald.png";
import TierDiamond from "../../../../../public/img/tier/diamond.png";
import TierMaster from "../../../../../public/img/tier/master.png";
import TierGrandMaster from "../../../../../public/img/tier/grandmaster.png";
import TierChallenger from "../../../../../public/img/tier/challenger.png";

import { useState } from "react";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";

type Props = {
  className: string;
  onChange: any;
  value: Tier;
  toggle: boolean;
  onToggle: any;
};

type Tier =
  | "iron"
  | "bronze"
  | "silver"
  | "gold"
  | "platinum"
  | "emerald"
  | "diamond"
  | "master"
  | "grandMaster"
  | "challenger";

const tiers = {
  iron: TierIron,
  bronze: TierBronze,
  silver: TierSilver,
  gold: TierGold,
  platinum: TierPlatinum,
  emerald: TierEmerald,
  diamond: TierDiamond,
  master: TierMaster,
  grandMaster: TierGrandMaster,
  challenger: TierChallenger,
};

export const useTierSelect = (initialValue: Tier) => {
  const [value, setValue] = useState<Tier>(initialValue);
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onChange = (event: any) => {
    // console.log(event.target);
    setValue(event.target.dataset.position);
    setToggle(!toggle);
  };
  return { value, toggle, onToggle, onChange };
};

const TierSelect = ({
  className,
  onChange,
  value,
  toggle,
  onToggle,
}: Props) => {
  return (
    <div className="place-self-start relative">
      <OutsideClickHandler
        onOutsideClick={() => {
          if (toggle) onToggle();
        }}
      >
        <button
          onClick={onToggle}
          className="flex gap-[9px] items-center rounded-[100px] bg-gray-200 px-[12px] py-[4px] "
        >
          {<Image src={tiers[value as Tier]} width={24} height={24} alt="" />}
          <Down className="" />
        </button>
        <ul
          onClick={onChange}
          className={`${
            toggle ? "block" : "hidden"
          } absolute flex items-center flex-col w-full bg-gray-200 rounded-[8px] mt-[8px] z-[100]`}
        >
          {Object.keys(tiers).map((tier) => {
            return (
              <li
                key={tier}
                className="w-full flex justify-center p-[4px] border-box cursor-pointer"
                data-position={tier}
              >
                <Image
                  src={tiers[tier as Tier]}
                  alt=""
                  width={24}
                  height={24}
                  className="pointer-events-none select-none"
                />
              </li>
            );
          })}
        </ul>
      </OutsideClickHandler>
    </div>
  );
};

export default TierSelect;
