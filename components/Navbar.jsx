"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full p-[2em]">
      <h1
        onClick={() => router.push("/")}
        className="capitalize text-4xl font-bold text-white cursor-pointer font-poppins border-b-2 border-slate-300"
      >
        Todo_
      </h1>
    </div>
  );
};

export default Navbar;
