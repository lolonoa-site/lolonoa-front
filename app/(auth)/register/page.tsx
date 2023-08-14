"use client";

import { postRegister } from "@/app/api/auth";
import { getEmailExist, getEmailVerify, postEmailCode } from "@/app/api/email";
import Logo from "@/app/component/Logo";
import { useInput } from "@/app/hooks/useInput";
import { useMutation, useQuery } from "react-query";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const {
    data: emailExistData,
    refetch: fetchEmailExist,
    isSuccess: isFetchEmailExistSuccess,
  } = useQuery({
    queryKey: ["emailExist"],
    queryFn: () => getEmailExist(emailInput),
    enabled: false,
    onSuccess(data) {
      if (data === true) {
        alert("중복되는 이메일입니다.");
      } else {
        sendEmail(emailInput);
      }
    },
  });

  const {
    mutate: register,
    data: registerData,
    isLoading: isRegisterLoading,
  } = useMutation({
    mutationFn: () => postRegister(emailInput, passwordInput, nicknameInput),

    onSuccess(data) {
      if (data === true) {
        alert("회원가입이 완료되었습니다.");
        router.push("/login");
      } else {
        alert("회원가입에 실패하였습니다.");
      }
    },
  });

  const {
    mutate: sendEmail,
    isLoading: isEmailSendLoading,
    data: emailSendData,
  } = useMutation({
    mutationFn: postEmailCode,
    onSuccess(data) {
      if (data === true) {
        alert("인증코드를 전송했습니다");
      } else {
        alert("이메일 전송에 실패했습니다.");
      }
    },
  });

  const {
    data: emailVerify,
    refetch: fetchEmailVerify,
    isLoading: isEmailVerifyLoading,
  } = useQuery({
    queryKey: ["emailVerify"],
    queryFn: () => getEmailVerify(emailInput, Number(codeInput)),
    enabled: false,
    onSuccess(data) {
      if (data === false) {
        alert("인증코드가 알맞지 않습니다.");
      } else {
        register();
      }
    },
    onError(err) {
      alert(err);
    },
  });

  const handleEmailVerify = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (emailInput == "") {
      alert("이메일을 기입해주세요");
      return;
    }
    fetchEmailExist();
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isFetchEmailExistSuccess) {
      alert("이메일 인증이 필요합니다.");
      return;
    }
    if (emailExistData) {
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
    fetchEmailVerify();
  };

  return (
    <>
      {isEmailSendLoading || isRegisterLoading || isEmailVerifyLoading ? (
        <div className="top-0 fixed w-full h-full bg-[#000000]/[.3] z-50" />
      ) : null}

      <div className="w-full max-w-[500px] h-auto flex flex-col items-center pt-[40px] pb-[70px] box-border bg-white/[.10] rounded-[6px]">
        <Logo className="w-auto h-[110px]" />
        <div className="flex flex-col w-[66%]">
          <span className="text-white text-[14px] mt-[20px]">회원가입</span>
          <input
            type="text"
            className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none  appearance-none rounded-0"
            placeholder="닉네임"
            value={nicknameInput}
            onChange={nicknameInputOnChange}
          />
          <div className="flex mt-[24px] justify-between">
            <input
              type="text"
              className="h-[40px] w-[70%] border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none appearance-none rounded-0"
              placeholder="이메일"
              value={emailInput}
              onChange={emailInputOnChange}
            />
            <button
              onClick={handleEmailVerify}
              className="w-[20%] h-[40px] rounded-[6px] border-[1px] border-teal text-teal text-[14px] outline-0 appearance-none"
            >
              인증
            </button>
          </div>
          {emailSendData ? (
            <input
              type="text"
              className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none appearance-none rounded-0"
              placeholder="인증코드"
              value={codeInput}
              onChange={codeInputOnChange}
            />
          ) : null}

          <input
            type="password"
            className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none appearance-none rounded-0"
            placeholder="비밀번호"
            value={passwordInput}
            onChange={passwordInputOnChange}
          />
          <input
            type="password"
            className="mt-[30px] h-[40px] w-full border-0 border-b-[1px] border-white border-solid placeholder:text-white placeholder:text-[14px] text-[14px] focus:ring-white bg-transparent focus:outline-none appearance-none rounded-0"
            placeholder="비밀번호 확인"
            value={passwordVerifyInput}
            onChange={passwordVerifyInputOnChange}
          />
          <button
            onClick={handleSubmit}
            className="mt-[50px] mb-[20px] h-[50px] text-white w-full rounded-[6px] bg-teal outline-0 appearance-none"
          >
            회원가입
          </button>
        </div>
      </div>
    </>
  );
}
