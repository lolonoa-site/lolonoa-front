"use client";

import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import Logo from "../Logo";
import { useRecoilState, useResetRecoilState } from "recoil";
import { User, userState } from "@/app/recoil/userState";

interface Props {
  className: string;
}

const options = [
  { name: "프로필", auth: true },
  { name: "설정", auth: false },
  { name: "로그아웃", auth: true },
];

const Header = ({ className }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [user, setUser] = useRecoilState<User>(userState);
  const resetUser = useResetRecoilState(userState);
  const [status, setStatus] = useState<string | null>("");
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClick = (event: any) => {
    const menu = event.currentTarget.innerText;
    if (menu === "로그아웃") resetUser();
    setAnchorEl(null);
  };

  const handleClose = (event: any) => {
    console.log(event.currentTarget.innerText);
    setAnchorEl(null);
  };

  useEffect(() => {
    setStatus(() => (user.logined ? user.nickname : "로그인을 해주세요"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.logined]);

  return (
    <div
      className={`${className} grid grid-cols-4 auto-rows-auto gap-x-[2rem] items-center gap-[2rem] justify-between sm:grid-cols-8 sm:gap-x-[1rem] lg:grid-cols-8 lg:gap-x-[1rem]`}
    >
      <Logo className="col-span-1 max-h-[64px] w-auto"></Logo>
      <div className="col-span-2 col-end-[-1] flex gap-[2rem] justify-end">
        {/* <button className="vertical-end text-[14px]" onClick={() => {}}>
          로그인을 해주세요
        </button> */}
        {user.logined ? (
          <Link
            href={"/user"}
            className="text-[14px] flex items-center text-white hidden lg:block"
          >
            {status}
          </Link>
        ) : (
          <Link
            href={"/login"}
            className="text-[14px] flex items-center text-white hidden lg:block"
          >
            {status}
          </Link>
        )}

        <div className="h-[24px] flex item-start">
          <IconButton onClick={handleClick} className="p-0">
            <MoreVertIcon style={{ color: "white" }} />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {options
              .filter(
                (option) =>
                  option.auth === false || option.auth === user.logined
              )
              .map((option) => (
                <MenuItem key={option.name} onClick={handleMenuClick}>
                  {option.name}
                </MenuItem>
              ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
