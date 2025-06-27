"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import QueryProvider from "../QueryProvider";

export default function RootProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider refetchInterval={5 * 60}>
      <QueryProvider>
        <Toaster position="top-right" />
        {children}
      </QueryProvider>
    </SessionProvider>
  );
}
