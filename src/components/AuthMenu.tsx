"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";

interface Session {
  user: string;
  email: string;
  photoUrl: string;
}

const AuthMenu: React.FC = () => {
  // Dummy session (replace with real auth data)
  //   const session: Session | null = {
  //     user: "Shah Alom",
  //     email: "shah@example.com",
  //     photoUrl: "/avatar.png", // Make sure this image exists in /public
  //   };

  const session = null;

  if (!session) {
    return (
      <PrimaryButton>
        <Link href="/login" >
          Login
        </Link>
      </PrimaryButton>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <Image
            src={session.photoUrl}
            alt="User Avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>

      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <button className="text-left w-full">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default AuthMenu;
