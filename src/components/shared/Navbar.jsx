import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <div className="w-7xl mx-auto flex justify-between gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li>
          <NavLink href="/" className="text-yellow-500">
=======
    <div className="flex justify-between container mx-auto gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li>
          <NavLink href="/" className="text-purple-500">
>>>>>>> c35e5c557b12f102c8734d4609f59a055c794f3c
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <Image
          src={userAvatar}
          alt="User Avatar"
          height={60}
          width={60}
        ></Image>
        <button className="btn bg-purple-500 text-white">
<<<<<<< HEAD
          <Link href="/login">Login</Link>
=======
          <Link href={"/login"}>Login</Link>
>>>>>>> c35e5c557b12f102c8734d4609f59a055c794f3c
        </button>
      </div>
    </div>
  );
};

export default Navbar;
