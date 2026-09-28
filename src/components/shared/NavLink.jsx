"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

<<<<<<< HEAD
export default function NavLink({ href, className, children }) {
  const pathname = usePathname();
=======
const NavLink = ({ href, children, className }) => {
  const pathname = usePathname();
  // console.log(pathname, "pathname");
>>>>>>> c35e5c557b12f102c8734d4609f59a055c794f3c

  const isActive = href === pathname;

  return (
    <Link
      href={href}
<<<<<<< HEAD
      className={`${isActive ? "border-b-2 border-purple-500" : ""} ${className}`}
=======
      className={`${isActive ? "border-b-2 border-b-purple-500" : ""} ${className}`}
>>>>>>> c35e5c557b12f102c8734d4609f59a055c794f3c
    >
      {children}
    </Link>
  );
<<<<<<< HEAD
}
=======
};

export default NavLink;
>>>>>>> c35e5c557b12f102c8734d4609f59a055c794f3c
