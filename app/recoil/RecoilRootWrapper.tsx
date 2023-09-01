"use client";

import React from "react";
import { RecoilRoot } from "recoil";

type Props = {
  children: any;
};

function RecoilRootWrapper({ children }: Props) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

export default RecoilRootWrapper;
