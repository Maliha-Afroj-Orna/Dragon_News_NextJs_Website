import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">About</Link>
        </li>
        <li>
          <Link href="">Career</Link>
        </li>
      </ul>

      <div>
        <Image
          src={userAvatar}
          alt="User Avatar"
          height={60}
          width={60}
        ></Image>
      </div>
    </div>
  );
};

export default Navbar;
