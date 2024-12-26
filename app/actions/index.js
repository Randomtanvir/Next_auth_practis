"use server";
import { signIn, signOut } from "@/auth";

export const doSignOut = async () => {
  await signOut();
};
export const doSignin = async () => {
  await signIn("google", { callbackUrl: "http://localhost3000" });
};

export async function login(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw err;
  }
}