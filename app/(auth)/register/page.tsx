"use client";

import Logo from "@/app/component/Logo";
import React, { useState } from "react";

export default function Register() {
  const [emailVerify, setEmailVerify] = useState(false);

  const handleEmailVerify = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setEmailVerify(true);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // setEmailVerify(true);
  };

  return (
    <div className="w-full max-w-[500px] h-auto flex flex-col items-center pt-[40px] pb-[70px] box-border bg-white/[.10] rounded-[6px]">
      <Logo className="w-auto h-[110px]" />
      <form action="" className="flex flex-col w-[66%]">
        <span className="text-white text-[14px] mt-[20px]">회원가입</span>
        <div className="flex mt-[24px] justify-between">
          <input
            type="text"
            className="h-[40px] w-[70%] border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
            placeholder="이메일"
          />
          <button
            onClick={handleEmailVerify}
            className="w-[20%] h-[40px] rounded-[6px] border-[1px] border-teal text-teal text-[14px]"
          >
            인증
          </button>
        </div>
        {emailVerify ? (
          <input
            type="text"
            className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
            placeholder="인증코드"
          />
        ) : null}

        <input
          type="text"
          className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
          placeholder="비밀번호"
        />
        <input
          type="text"
          className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
          placeholder="비밀번호 확인"
        />
        <button
          onClick={handleSubmit}
          className="mt-[50px] mb-[20px] h-[50px] text-white w-full rounded-[6px] bg-teal"
        >
          회원가입
        </button>
      </form>
    </div>
  );
}
