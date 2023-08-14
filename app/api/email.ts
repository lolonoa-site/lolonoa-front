export const getEmailExist = async (email: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/email/duplicate?account=${email}`
  ).then((res) => res.json());
};

export const postEmailCode = async (email: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/email/send?email=${email}`,
    {
      method: "POST",
    }
  ).then((res) => res.json());
};

export const getEmailVerify = async (email: string, code: number) => {
  return await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/email/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      code,
    }),
  }).then((res) => res.json());
};
