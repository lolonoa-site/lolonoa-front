import React from "react";
import Down from "../../../../../public/icon/down.svg";
import PositionTop from "../../../../../public/icon/position/icon-position-top.svg";
import PositionJungle from "../../../../../public/icon/position/icon-position-jungle.svg";
import PositionMid from "../../../../../public/icon/position/icon-position-mid.svg";
import PositionADC from "../../../../../public/icon/position/icon-position-adc.svg";
import PositionSupport from "../../../../../public/icon/position/icon-position-support.svg";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";

type Props = {
  className: string;
  onChange: any;
  value: Position;
  toggle: boolean;
  onToggle: any;
};

type Position = "top" | "jungle" | "mid" | "adc" | "support";

const textToPositionComponent = (position: Position) => {
  switch (position) {
    case "top":
      return <PositionTop />;
    case "jungle":
      return <PositionJungle />;
    case "mid":
      return <PositionMid />;
    case "adc":
      return <PositionADC />;
    case "support":
      return <PositionSupport />;
  }
};

const positions = [
  {
    name: "top",
    component: PositionTop,
  },
  {
    name: "jungle",
    component: PositionJungle,
  },
  {
    name: "mid",
    component: PositionMid,
  },
  {
    name: "adc",
    component: PositionADC,
  },
  {
    name: "support",
    component: PositionSupport,
  },
];

export const usePositionSelect = (initialValue: Position | number) => {
  const [value, setValue] = useState<Position>("top");
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

const PositionSelect = ({
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
          {textToPositionComponent(value)}
          <Down className="" />
        </button>
        <ul
          onClick={onChange}
          className={`${
            toggle ? "block" : "hidden"
          } absolute flex items-center flex-col w-full bg-gray-200 rounded-[8px] mt-[8px] z-[100]`}
        >
          {positions.map((position) => {
            return (
              <li
                key={position.name}
                className="w-full flex justify-center p-[4px] border-box cursor-pointer"
                data-position={position.name}
              >
                <position.component className="pointer-events-none select-none" />
              </li>
            );
          })}
        </ul>
      </OutsideClickHandler>
    </div>
  );
};

export default PositionSelect;
