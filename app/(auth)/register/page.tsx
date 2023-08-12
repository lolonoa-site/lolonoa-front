"use client";

import { postRegister } from "@/app/api/auth";
import { getEmailExist, getEmailVerify, postEmailCode } from "@/app/api/email";
import Logo from "@/app/component/Logo";
import { useInput } from "@/app/hooks/useInput";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";

export default function Register() {
  //   const [emailVerify, setEmailVerify] = useState(false);
  const { value: emailInput, onChange: emailInputOnChange } = useInput("");
  const { value: codeInput, onChange: codeInputOnChange } = useInput("");
  const { value: nicknameInput, onChange: nicknameInputOnChange } =
    useInput("");
  const { value: passwordInput, onChange: passwordInputOnChange } =
    useInput("");
  const { value: passwordVerifyInput, onChange: passwordVerifyInputOnChange } =
    useInput("");

  const {
    data: emailExist,
    refetch: fetchEmailExist,
    isSuccess: isFetchEmailExistSuccess,
  } = useQuery({
    queryKey: ["emailExist"],
    queryFn: () => getEmailExist(emailInput),
    enabled: false,
    onSuccess: (data) => {
      if (data) {
        alert("중복되는 이메일입니다.");
      } else {
        mutate(emailInput);
      }
    },
  });

  const { mutate: registerMutate, isSuccess: isRegisterSuccess } = useMutation({
    mutationFn: () => postRegister(emailInput, passwordInput, nicknameInput),
    onSuccess: (data) => {
      if (data) {
        alert("회원가입이 완료되었습니다.");
      } else {
        alert("회원가입 실패");
      }
    },
  });

  const {
    mutate,
    isLoading,
    isSuccess: isCodeSendSuccess,
  } = useMutation({
    mutationFn: postEmailCode,
    onSuccess: () => {
      alert("인증코드를 전송했습니다");
    },
  });

  const { data: emailVerify, refetch: fetchEmailVerify } = useQuery({
    queryKey: ["emailVerify"],
    queryFn: () => getEmailVerify(emailInput, Number(codeInput)),
    enabled: false,
    onSuccess(data) {
      console.log(data);
    },
  });

  const handleEmailVerify = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    fetchEmailExist();
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // fetchEmailVerify();
    if (!isFetchEmailExistSuccess) {
      alert("이메일 인증이 필요합니다.");
      return;
    }
    if (emailExist) {
      alert("중복되는 이메일 입니다.");
      return;
    }
    if (passwordInput !== passwordVerifyInput) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (
      !nicknameInput ||
      !passwordInput ||
      !passwordVerifyInput ||
      !codeInput
    ) {
      alert("모든 칸을 기입해 주세요");
      return;
    }
    // if (!emailVerify) {
    //   alert("인증코드가 알맞지 않습니다.");
    //   return;
    // }

    registerMutate();
  };

  return (
    <div className="w-full max-w-[500px] h-auto flex flex-col items-center pt-[40px] pb-[70px] box-border bg-white/[.10] rounded-[6px]">
      <Logo className="w-auto h-[110px]" />
      <form action="" className="flex flex-col w-[66%]">
        <span className="text-white text-[14px] mt-[20px]">회원가입</span>
        <input
          type="text"
          className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
          placeholder="닉네임"
          value={nicknameInput}
          onChange={nicknameInputOnChange}
        />
        <div className="flex mt-[24px] justify-between">
          <input
            type="text"
            className="h-[40px] w-[70%] border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
            placeholder="이메일"
            value={emailInput}
            onChange={emailInputOnChange}
          />
          <button
            onClick={handleEmailVerify}
            className="w-[20%] h-[40px] rounded-[6px] border-[1px] border-teal text-teal text-[14px]"
          >
            인증
          </button>
        </div>
        {isCodeSendSuccess ? (
          <input
            type="text"
            className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
            placeholder="인증코드"
            value={codeInput}
            onChange={codeInputOnChange}
          />
        ) : null}

        <input
          type="text"
          className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
          placeholder="비밀번호"
          value={passwordInput}
          onChange={passwordInputOnChange}
        />
        <input
          type="text"
          className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
          placeholder="비밀번호 확인"
          value={passwordVerifyInput}
          onChange={passwordVerifyInputOnChange}
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
