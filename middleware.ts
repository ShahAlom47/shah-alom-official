import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const role = req.nextauth.token?.role;

    // 🔍 Check if token exists, else treat as unauthenticated
    if (!req.nextauth.token) {
      // Allow public routes & auth routes
      const publicRoutes = ["/", "/login", "/register", "/about", "/portfolio"];
      if (
        publicRoutes.includes(pathname) ||
        pathname.startsWith("/api/auth")
      ) {
        return NextResponse.next();
      }

      return NextResponse.redirect(new URL("/login", req.url));
    }

    console.log("🔐 Middleware hit:", pathname, "| Role:", role);

    // ✅ Admin access to specific pages
    if (
      role === "admin" &&
      pathname.startsWith("/dashboard/admin")
    ) {
      return NextResponse.next();
    }

    // ✅ User access
    if (
      role === "user" &&
      (pathname.startsWith("/dashboard/user") || pathname.startsWith("/api/user"))
    ) {
      return NextResponse.next();
    }

    // ✅ Common dashboard access
    if (
      pathname === "/dashboard" &&
      (role === "admin" || role === "user")
    ) {
      return NextResponse.next();
    }

    // ❌ Unauthorized access fallback
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  },
  {
    callbacks: {
      authorized({ token }) {
        // Prevent flickering: allow if token exists
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};
