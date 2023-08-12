"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/app/component/Logo";

export default function Login() {
  return (
    <div className="w-full max-w-[500px] h-auto flex flex-col items-center pt-[40px] pb-[70px] box-border bg-white/[.10] rounded-[6px]">
      <Logo className="w-auto h-[110px]" />

      <form action="" className="flex flex-col w-[66%]">
        <span className="text-white text-[14px] mt-[20px]">로그인</span>
        <input
          type="text"
          className="mt-[24px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
          placeholder="이메일"
        />

        <input
          type="text"
          className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
          placeholder="비밀번호"
        />
        <button className="mt-[50px] mb-[20px] h-[50px] w-full rounded-[6px] bg-teal">
          로그인
        </button>
      </form>
      <Link className="text-[14px]" href={"/register"}>
        회원가입 하기
      </Link>
    </div>
  );
}
