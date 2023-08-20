import Link from "next/link";
import React from "react";

interface Props {
  className: string;
}

const navList = [
  { name: "소개", url: "/about" },
  { name: "롤문철", url: "/var" },
];

const Nav = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <nav className="flex self-start gap-[22px]">
        {navList.map((nav) => {
          return (
            <Link
              key={nav.name}
              href={nav.url}
              className="text-[14px] text-white font-bold whitespace-nowrap"
            >
              {nav.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Nav;
