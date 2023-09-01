"use client";

import Input from "@/app/component/Input";
import { useInput } from "@/app/hooks/useInput";
import React from "react";
import ProfileCard from "./component/ProfileCard";
import MenuCard from "./component/MenuCard";

type Props = {
  children: any;
};

export default function VarLayout({ children }: Props) {
  //   const router = useRouter();

  const { value: nameInput, onChange: nameInputOnChange } = useInput("");

  return (
    <>
      <Input
        className="col-start-2 col-span-3 row-start-3 origin-right scale-[0.7] mt-[2rem] mb-[0.5rem] sm:col-start-5 sm:col-span-3 lg:col-start-8 lg:col-span-3 xl:col-start-7 xl:col-span-2"
        autoFocus={false}
        value={nameInput}
        onChange={nameInputOnChange}
      />
      <ProfileCard className="col-start-3 col-span-2 row-start-4 hidden xl:grid"></ProfileCard>
      {children}
    </>
  );
}
