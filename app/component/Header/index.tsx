"use client";

import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import Logo from "../Logo";

interface Props {
  className: string;
}

const options = ["프로필", "설정", "로그아웃"];

const Header = ({ className }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClick = (event: any) => {
    console.log(event.currentTarget.innerText);
    setAnchorEl(null);
  };

  const handleClose = (event: any) => {
    console.log(event.currentTarget.innerText);
    setAnchorEl(null);
  };

  return (
    <div
      className={`${className} grid grid-cols-8 auto-rows-auto gap-x-[2rem] items-center gap-[2rem] justify-between`}
    >
      <Logo className="col-span-1 max-h-[64px] w-auto"></Logo>
      <div className="col-span-2 col-end-[-1] flex gap-[2rem] justify-end">
        {/* <button className="vertical-end text-[14px]" onClick={() => {}}>
          로그인을 해주세요
        </button> */}
        <Link
          href={"/login"}
          className="text-[14px] flex items-center text-white"
        >
          로그인을 해주세요
        </Link>
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
            {options.map((option) => (
              <MenuItem key={option} onClick={handleMenuClick}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
