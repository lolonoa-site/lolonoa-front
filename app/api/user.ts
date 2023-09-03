export type refreshTokenResponseDTO = {
  access_token: string;
  refresh_token: string;
};

export const refreshToken = async (
  access_token: string,
  refresh_token: string
) => {
  return await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/user/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_token,
      refresh_token,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json() as Promise<refreshTokenResponseDTO>;
    }
    throw new Error("Error");
  });
};
