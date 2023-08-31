"use client";

import { useState, useEffect, useRef, memo } from "react";
import Search from "../../../public/search.svg";
import Image from "next/image";

type WrapperPropsType = {
  width: string;
};

type LabelPropsType = {
  typing: boolean;
};

type ErrorMsgType = {
  error?: boolean;
};

// const ErrorMsg = styled.span`
//   position: absolute;
//   user-select: none;
//   left: 8px;
//   bottom: 0;
//   font-size: 0.75rem;
//   color: #ff7961;
//   transition: all ease 0.15s;
//   transform-origin: left;
//   z-index: 10;
//   font-weight: bold;
//   white-space: nowrap;
//   font-family: "Noto Sans KR", sans-serif;
//   opacity: ${(props: ErrorMsgType) => (props.error ? "1;" : "0;")};
//   transform: ${(props: ErrorMsgType) =>
//     props.error
//       ? "scale(0.8333) translateY(0rem);"
//       : "scale(0.8333) translateY(-1rem);"};
// `;

type ComponentPropsType = {
  typing: boolean;
  error?: boolean;
};

// const Component = styled.input`
//   width: 100%;
//   height: 2.2rem;
//   background: #ffffff;
//   border: 0;
//   border-bottom: 2px solid
//     ${(props: ComponentPropsType) => (props.error ? "#ff7961;" : "#AEDFE1;")};
//   margin-bottom: 1rem;
//   padding: ${(props: ComponentPropsType) =>
//     props.typing ? "1rem 0 0.125rem 0.5rem;" : "0.5rem;"};
//   box-sizing: border-box;
//   outline: none;
//   z-index: 20;
//   color: #373737;
//   font-family: "Noto Sans KR", sans-serif;
//   font-size: 0.75rem;
//   position: absolute;

//   &:focus {
//     border-bottom: 2px solid
//       ${(props: ComponentPropsType) => (props.error ? "#ff3333;" : "#63C2C6;")};
//   }
// `;

export type Props = {
  className: string;
  autoFocus: boolean;
  value: string;
  onChange: any;
};

const InputText = ({ className, autoFocus, value, onChange }: Props) => {
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current && autoFocus) {
      inputRef.current.focus();
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (value.length > 0) setIsTyping(true);
    else setIsTyping(false);
  }, [value, setIsTyping]);

  return (
    <div
      className={`${className} flex relative h-auto rounded-[1000px] bg-white p-[12px]`}
    >
      <span
        className={`${
          isTyping
            ? "scale-[0.70] translate-y-[-1.2rem]"
            : "scale-100 translate-y-0"
        } absolute select-none left-[28px] leading-[2.2rem] text-[14px] text-gray-500 transition-all duration-100 ease-linear origin-left z-30`}
      >
        소환사명
      </span>
      <form className="w-full">
        <input
          ref={inputRef}
          type="text"
          className="appearance-none w-[80%] h-[2.2rem] bg-white rounded-0 outline-none z-20 text-navy p-[14px]"
          value={value}
          onChange={onChange}
        />
        <button
          type="submit"
          className="appearance-none rounded-[100px] bg-orange absolute right-[10px] top-[calc(50%-21.5px)] w-[43px] h-[43px] flex justify-center items-center"
        >
          <Image src={Search} alt="search" />
        </button>
      </form>
    </div>
  );
};

export default InputText;
