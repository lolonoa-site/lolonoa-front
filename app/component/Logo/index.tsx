import Image from "next/image";
import Link from "next/link";
import React from "react";
import Lolonoa_Logo from "../../../public/lolonoa-logo.png";

interface Props {
  className: string;
}

const Logo = ({ className }: Props) => {
  return (
    <Link href={"/"}>
      <Image src={Lolonoa_Logo} alt="" className={`${className}`} />
    </Link>
  );
};

export default Logo;
