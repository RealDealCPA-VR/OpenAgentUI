"use server";

export const submitSignup = async (data: object) => {
  const res = await fetch(process.env.OPENAGENTUI_SUBMIT_SIGNUP_ENDPOINT!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
