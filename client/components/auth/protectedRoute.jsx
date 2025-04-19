"use client";

import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  if (!loading && !isAuthenticated()) {
    router.push("/login"); 
  }

  if (loading && !isAuthenticated()) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary-gray"></div>
      </div>
    );
  }

  return children;
}
