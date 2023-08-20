"use client";

import Image from "next/image";
import Nav from "../component/Nav";
import Bar from "../component/Bar";
import Logo from "../component/Logo";
import Input from "../component/Input";
import { useInput } from "../hooks/useInput";

export default function Home() {
  const { value: nameInput, onChange: nameInputOnChange } = useInput("");

  return (
    <div className="row-start-2 col-start-1 col-span-4 grid grid-cols-4 gap-x-[1rem] auto-rows-auto sm:col-start-3 sm:gap-x-[1rem] lg:col-start-5 lg:gap-x-[2rem]">
      <Nav className="col-span-4 mt-[33px] row-start-1" />
      <Bar className="col-span-4 mt-[14px] row-start-2">
        Lolonoa는 실시간 인게임 트롤유저 확인 및 롤문철 플랫폼 입니다.
      </Bar>
      <div className="col-start-2 col-span-2 row-start-3 mt-[50px]">
        <Logo className="w-full"></Logo>
      </div>
      <Input
        className="col-start-1 col-span-4 row-start-4 mt-[20px]"
        value={nameInput}
        onChange={nameInputOnChange}
        autoFocus={true}
      ></Input>
    </div>
  );
}
