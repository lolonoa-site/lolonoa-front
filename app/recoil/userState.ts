import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export type User = {
  logined: boolean;
  nickname: string | null;
  account: string | null;
  access_token: string | null;
  refresh_token: string | null;
};

const { persistAtom } = recoilPersist();

export const userState = atom({
  key: "userState", // unique ID (with respect to other atoms/selectors)
  default: {
    logined: false,
    nickname: null,
    account: null,
    access_token: null,
    refresh_token: null,
  } as User, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});
