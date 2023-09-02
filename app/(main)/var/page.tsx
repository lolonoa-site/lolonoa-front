"use client";

import Input from "@/app/component/Input";
import { useInput } from "@/app/hooks/useInput";
import React from "react";
import ProfileCard from "./component/ProfileCard";
import MenuCard from "./component/MenuCard";

export default function VarPage() {
  //   const router = useRouter();

  const { value: nameInput, onChange: nameInputOnChange } = useInput("");

  return (
    <>
      <MenuCard className="col-start-1 col-span-4 row-start-4 sm:col-start-2 sm:col-span-6 lg:col-start-3 lg:col-span-8  xl:col-span-6 xl:col-start-4"></MenuCard>
    </>
  );
}
