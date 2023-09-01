"use client";

import { User, userState } from "@/app/recoil/userState";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export type Props = {
  className: string;
};

const ProfileCard = ({ className }: Props) => {
  const user = useRecoilValue<User>(userState);
  const [clientUser, setClientUser] = useState<User>();
  // const [isLogined, setIsLogined] = useState(false);

  useEffect(() => {
    setClientUser(user);
  }, [user]);

  return (
    <div
      className={`${className} bg-white px-[22px] py-[27px] grid grid-cols-2 auto-rows-auto gap-x-[20px] rounded-[8px]`}
    >
      {clientUser?.logined ? (
        <>
          <span className="row-start-1 text-[18px] text-black font-bold">
            {clientUser?.nickname}
          </span>

          <Link
            className="mt-[20px] row-start-2 col-start-1 col-span-1 py-[10px] text-[12px] rounded-[6px] bg-white border border-teal text-teal outline-0 appearance-none flex justify-center items-center"
            href={"/var/post"}
          >
            내가 쓴 글
          </Link>
          <Link
            className="mt-[20px] row-start-2 col-start-2 col-span-1 py-[10px] text-[12px] rounded-[6px] bg-teal text-white outline-0 appearance-none flex justify-center items-center"
            href={"/var/post"}
          >
            글 쓰기
          </Link>
        </>
      ) : (
        <Link
          className="row-start-1 col-start-1 col-span-2 py-[10px] text-[12px] rounded-[6px] bg-teal text-white outline-0 appearance-none flex justify-center items-center"
          href={"/login"}
        >
          로그인
        </Link>
      )}
    </div>
  );
};

export default ProfileCard;
