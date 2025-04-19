"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Controller, useForm } from "react-hook-form";
import AuthModal from "../auth/auth-modal";
import { Input } from "../ui/input";
import Logo from "../ui/logo";
import SubHeader from "./sub-header";
import { useAuth } from "@/context/authContext";

const Header = () => {
  // Hooks
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const { isAuthenticated ,logout} = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const searchHanlder = async (data) => {
    const params = new URLSearchParams(searchParams);

    if (data?.search) {
      params.set("search", data.search);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const isLoggedIn = false;

  const isActive = (url) => {
    return pathname === url ? "border-b-[4px] border-white" : "";
  };


  return (
    <div className="bg-[#fc139f] w-full text-white fixed top-0 z-[1000] lg:block hidden]">
      <div className="custom-container lg:block hidden pb-[28px]">
        {/* Header Top */}
        <div className="flex items-center justify-end space-x-[31px]">
          <Link
            href="/"
            className="text-xs font-semibold text-white uppercase leading-[33px]"
          >
            HELP & SUPPORT
          </Link>
          {isAuthenticated() ? (
            <>
              <Link
                href="/account/my-orders"
                className={`text-xs font-semibold text-white leading-[33px] ${isActive(
                  "/account/my-orders"
                )}`}
              >
                My Order
              </Link>
              <Link
                href="/account"
                className={`text-xs font-semibold text-white leading-[33px] ${isActive(
                  "/account"
                )}`}
              >
                Nirob
              </Link>


              <button className="text-xs font-semibold text-white leading-[33px]" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link
                href="/account/my-orders"
                className={`text-xs font-semibold text-white leading-[33px] ${isActive(
                  "/account/my-orders"
                )}`}
              >
                My Order
              </Link>
              <Link
                href="/account"
                className={`text-xs font-semibold text-white leading-[33px] ${isActive(
                  "/account"
                )}`}
              >
                Nirob
              </Link>
              <Link href="/login" className="text-xs font-semibold text-white leading-[33px]">
                Log In
              </Link>
            </>
          )}
        </div>

        {/* Logo & Search */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Logo />

          <div className="flex items-center gap-[34px]">
            {/* Search */}
            <Suspense>
              <form
                onSubmit={handleSubmit(searchHanlder)}
                className="w-[833px] h-[38px] bg-white ps-[21px] rounded-[4px] flex items-center"
              >
                <Controller
                  name="search"
                  control={control}
                  render={({ field }) => (
                    <Input
                      type="search"
                      {...field}
                      placeholder="Search products"
                      className="border-none rounded-none text-[#828282] text-[11px] font-normal"
                      err={errors.search}
                    />
                  )}
                  rules={{
                    required: "Search field is required",
                  }}
                />
                <button
                  type="submit"
                  className="bg-orange opacity-[64%] w-[55px] h-[38px] flex items-center justify-center rounded-r-[4px]"
                >
                  <Image
                    src="/assets/icons/light-search.png"
                    width={25}
                    height={25}
                    alt="Search Icon"
                  />
                </button>
              </form>
            </Suspense>

            {/* Cart */}
            <div>
              <Link href="/checkout?cart=true">
                <Image
                  src="/assets/icons/cart-light.svg"
                  height={22}
                  width={22}
                  alt="Cart Icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:block hidden">
        <SubHeader />
      </div>
    </div>
  );
};

export default Header;
