import { doSignOut } from "@/app/actions";
import Link from "next/link";
import React from "react";

const SignOut = () => {
  return (
    <form action={doSignOut}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default SignOut;
