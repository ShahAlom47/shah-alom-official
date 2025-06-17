"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loading from "@/app/loading";

type UserRole = "admin" | "user" | "guest";

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
        router.replace("/login");  // use replace to avoid back button confusion
      } else if (
        roles.length > 0 &&
        !roles.includes(session.user?.role as UserRole)
      ) {
        router.replace("/unauthorized");
      }
    }, [session, status, roles, router]);

    if (status === "loading" || !session) {
      return <Loading />;  // UI hide + loading spinner till auth confirmed
    }

    if (roles.length > 0 && !roles.includes(session.user?.role as UserRole)) {
      return null; // Unauthorized handled in useEffect redirect
    }

    return <Component {...props} />;
  };

  return IsAuth;
}
