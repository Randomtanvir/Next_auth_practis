"use client";
import { login } from "@/app/actions";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const response = await login(formData);

      if (response.error) {
        console.error(response.error);
        console.error(response.message);
        setError(response.error.message);
      } else {
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      setError(e.message || "Check your Credentials");
    }
  };
  return (
    <form className="space-y-4 text-gray-600" onSubmit={onSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full border border-gray-300  rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div>{error}</div>
      <button
        type="submit"
        className="text-sm px-4 py-2 bg-blue-600 text-white rounded-[45%] text-center"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
