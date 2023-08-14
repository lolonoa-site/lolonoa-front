export const postRegister = async (
  email: string,
  password: string,
  nickname: string
) => {
  return await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      account: email,
      password,
      nickname,
    }),
  }).then((res) => res.json());
};

export const postLogin = async (email: string, password: string) => {
  return await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      account: email,
      password,
    }),
  }).then((res) => res.json());
};
