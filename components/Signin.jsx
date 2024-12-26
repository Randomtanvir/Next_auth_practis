import { doSignin } from "@/app/actions";
import React from "react";

const Signin = () => {
  return (
    <form action={doSignin}>
      <button
        type="submit"
        className="text-sm px-4 py-2 rounded-md bg-red-400 text-white"
      >
        Sign in With Google
      </button>
    </form>
  );
};

export default Signin;
