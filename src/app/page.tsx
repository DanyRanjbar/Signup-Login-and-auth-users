import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center text-white">
      <h1 className=" mb-2">Home</h1>
      <Link href="/signup">Signup</Link>
      <hr />
      <Link href="/login">Login</Link>
    </div>
  );
}
