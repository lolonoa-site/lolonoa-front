"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/app/component/Logo";
import { useInput } from "@/app/hooks/useInput";
import { useMutation } from "react-query";
import { postLogin } from "@/app/api/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const { value: emailInput, onChange: emailInputOnChange } = useInput("");
  const { value: passwordInput, onChange: passwordInputOnChange } =
    useInput("");
  const router = useRouter();

  const {
    mutate: login,
    data: loginData,
    isLoading: isLoginLoading,
  } = useMutation({
    mutationFn: () => postLogin(emailInput, passwordInput),

    onSuccess(data) {
      if (data?.token?.access_token) {
        console.log(data);
        alert(`반갑습니다 ${data.nickname}님.`);
        router.push("/");
      } else {
        alert("이메일 또는 비밀번호가 맞지 않습니다.");
      }
    },
    onError(error) {
      alert(error);
    },
  });

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailInput === "" || passwordInput === "") {
      alert("모든 칸을 기입해주세요");
      return;
    }
    login();
  };

  return (
    <div className="w-full max-w-[500px] h-auto flex flex-col items-center pt-[40px] pb-[70px] box-border bg-white/[.10] rounded-[6px]">
      <Logo className="w-auto h-[110px]" />

      <form action="" className="flex flex-col w-[66%]">
        <span className="text-white text-[14px] mt-[20px]">로그인</span>
        <input
          type="text"
          className="mt-[24px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
          placeholder="이메일"
          value={emailInput}
          onChange={emailInputOnChange}
        />

        <input
          type="password"
          className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none"
          placeholder="비밀번호"
          value={passwordInput}
          onChange={passwordInputOnChange}
        />
        <button
          onClick={handleLogin}
          className="mt-[50px] mb-[20px] h-[50px] w-full rounded-[6px] bg-teal outline-0"
        >
          로그인
        </button>
      </form>
      <Link className="text-[14px] text-white" href={"/register"}>
        회원가입 하기
      </Link>
    </div>
  );
}
