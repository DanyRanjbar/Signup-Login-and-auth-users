"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setverified] = useState(false);
  const [error, seterror] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setverified(true);
    } catch (error) {
      seterror(true);
      console.log(error);
    }
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className=" flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className=" text-4xl">Verify Email</h1>
      <h2 className=" p-2 rounded bg-purple-300 text-black">
        {token ? `${token}` : "no token"}
      </h2>
      {verified && (
        <div>
          <h2 className=" text-2xl">Email Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className=" text-2xl bg-red-500 text-black rounded p-2">Error</h2>
        </div>
      )}
    </div>
  );
}
