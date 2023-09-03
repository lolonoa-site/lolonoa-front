"use client";

import { useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import * as jose from "jose";
import { useMutation } from "react-query";
import { refreshToken } from "../api/user";
import { User, userState } from "../recoil/userState";

export const AuthChecker = () => {
  const [user, setUser] = useRecoilState<User>(userState);
  const resetUser = useResetRecoilState(userState);

  const {
    mutate: refreshTokenMutate,
    // data: loginData,
    isLoading: isRefreshLoading,
  } = useMutation({
    mutationFn: () =>
      refreshToken(
        user.access_token as string,
        user.refresh_token as string
      ).then((res) => {
        setUser((user) => {
          return {
            ...user,
            refresh_token: res.refresh_token,
            access_token: res.access_token,
          };
        });
      }),

    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      alert("refreshToken 실패");
      resetUser();
    },
  });

  useEffect(() => {
    console.log("AuthChecker 작동", user);
    if (user.access_token !== null) {
      //엑세스 토큰이 localStorage에 존재
      const decoded_at: jose.JWTPayload = jose.decodeJwt(user.access_token);
      if ((decoded_at.exp as number) < Date.now()) {
        alert("토큰이 만료되었습니다.");
        // resetUser();
        refreshTokenMutate();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <></>;
};
