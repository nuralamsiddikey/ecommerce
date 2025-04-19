"use client";

import ProtectedRoute from "@/components/auth/protectedRoute";

export default function Layout({ children }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
