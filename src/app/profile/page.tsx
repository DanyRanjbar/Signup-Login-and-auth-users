"use client";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState , useEffect } from "react";

export default function ProfilePage() {
  const [data, setData] = useState("");
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout success");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data);
    setData(res.data.data.username);
  };
  useEffect(()=>{})

  return (
    <div className=" flex flex-col items-center justify-center py-2 min-h-screen">
      <h1>Profile</h1>
      <hr />
      <p>Profil Page</p>
      <hr />
      <h2 className=" p-1 rounded bg-white text-black">
        {data === "" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logout}
        className=" bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
      >
        Logout
      </button>

      <hr />

      <button
        onClick={getUserDetails}
        className=" bg-green-600 mt-4 hover:bg-green-800 text-white font-bold py-2 px-2 rounded"
      >
        Get Details
      </button>
    </div>
  );
}
