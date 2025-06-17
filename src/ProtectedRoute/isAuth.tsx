"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

type UserRole = "admin" | "user" | "guest"; // Define your user roles here

// Generic type for React Component Props
export default function isAuth<P>(
  Component: React.ComponentType<P>,
  roles: UserRole[] = []
) {
  const IsAuth: React.FC<React.PropsWithChildren<P>> = (props) => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return; 
      if (!session) {
        router.push("/login");
      } else if (
        roles.length > 0 &&
        !roles.includes(session.user?.role as UserRole)
      ) {
        router.push("/unauthorized");
      }
    }, [session, status, roles, router]);

    if (status === "loading") {
      return <Loading></Loading>;
    }

    if (!session) {
      return null; 
    }

    return <Component {...props} />;
  };

  return IsAuth;
}
