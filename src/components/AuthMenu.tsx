"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import { signOut, useSession } from "next-auth/react";
import { FaSpinner } from "react-icons/fa";
import defaultUserImage from "../assets/image/defaultUserWhite.webp"; // Adjust the path as necessary

const AuthMenu: React.FC = () => {
  const { data: sessionData, status } = useSession();

  // Loading state
  if (status === "loading") {
    return <span className="animate-spin "><FaSpinner />
</span>;
  }

  // Not authenticated
  if (!sessionData?.user) {
    return (
      <PrimaryButton href="/login">
        Login
      </PrimaryButton>
    );
  }

  // Authenticated user
  const { name,  image } = sessionData?.user;

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
          <Image
            src={image || defaultUserImage}
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
        <li className="font-semibold text-sm text-gray-500 px-2 py-1 uppercase">
           {name || "User"}
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
        <li>
          <button onClick={() => signOut()} className="text-left w-full">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default AuthMenu;
