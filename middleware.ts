import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const role = req.nextauth.token?.role;

    console.log("🔐 Middleware hit:", pathname, "| Role:", role);

    const publicRoutes = ["/", "/login", "/register", "/about", "/portfolio"];
    if (
      publicRoutes.includes(pathname) ||
      pathname.startsWith("/api/auth")
    ) {
      return NextResponse.next();
    }

    if (!role) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // ✅ Admin access to specific pages
    if (
      role === "admin" &&
      (
        pathname.startsWith("/dashboard/admin") 
        // pathname === "/dashboard/addportfolio" ||  // UI Page
        // pathname === "/api/change-user-role"       // API Endpoint
      )
    ) {
      return NextResponse.next();
    }

    // ✅ User access to user dashboard

    if (
      role === "user" &&
      (pathname.startsWith("/dashboard/user") || pathname.startsWith("/api/user"))
    ) {
      return NextResponse.next();
    }

    // ✅ Both can access /dashboard
    if (pathname === "/dashboard" && (role === "admin" || role === "user")) {
      return NextResponse.next();
    }

    // If none match, redirect to unauthorized
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  },
  {
    callbacks: {
      authorized({ token }) {
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/api/:path*"],
};
