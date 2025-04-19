"use client";

import { useEffect, useState } from "react";
import LoginRegisterForm from "./login-register-form";
import { useAuth } from "@/context/authContext";
import toast from "react-hot-toast";
import { baseUrl } from "@/lib/baseUrl";
import { useRouter, useSearchParams } from "next/navigation";

export default function Auth({ onCloseModal, type = "login" }) {
  const [currentStep, setCurrentStep] = useState(0);
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
 

  const goLogin = () => setCurrentStep(0);
  const goRegister = () => setCurrentStep(1);

  const loginHandler = async (data) => {
    try {
      const res = await fetch(`${baseUrl}/api/customers/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, phone: `0${data.phone}` }),
      });

      const result = await res.json();

      if (res.ok && result?.data?.accessToken && result?.data?.user) {
        const token = result.data.accessToken
        const user = result.data.user;

        login(token, user);
        toast.success("Login successful");
        router.push('/');
      } else {
        throw new Error(result.message || "Login failed");
      }
      
    } catch (err) {
      console.error("Login error:", err.message);
      alert("Login failed. Please check your phone and password.");
    }
  };

  const registerHandler = async (data) => {
    try {
      const res = await fetch(`${baseUrl}/api/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, phone: `0${data.phone}` }),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Registration successful. Please log in.");
        goLogin();
      } else {
        toast.error(result.message || "Registration failed");
      }
    } catch (err) {
      console.error("Register error:", err.message);
      toast.error("Registration failed. Please try again.");
    }
  };

  useEffect(() => {
    if (type === "register") {
      setCurrentStep(1);
    }
  }, [type]);

  return (
    <div className="w-full pt-[39px]">
      {currentStep === 0 && (
        <LoginRegisterForm
          onRedirectRegister={goRegister}
          type="login"
          onSubmit={loginHandler}
        />
      )}
      {currentStep === 1 && (
        <LoginRegisterForm
          onRedirectLoign={goLogin}
          type="register"
          onSubmit={registerHandler}
        />
      )}
    </div>
  );
}
