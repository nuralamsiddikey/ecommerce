"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function LoginRegisterForm({
  type = "login",
  onRedirectRegister = () => {},
  onRedirectLoign = () => {},
  onSubmit = () => {},
}) {
  /**
   * Form Stuff
   */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      password: "",
    },
  });

  /**
   * HANDLERS
   */
  const onSubmitHandler = async (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      {/* Only for mobile */}
      <div className="block">
        <h2 className="text-[24px] font-bold text-primary-gray">
          {type === "login" ? "Log in" : "Register"}
        </h2>
      </div>

      <div className="mt-[16px]">
        <Label className="text-base text-primary-gray font-medium">
          Mobile Number
        </Label>

        <div className="flex items-center gap-[8px] mt-[4px]">
          {/* Country Flag */}
          <div
            className={`border lg:bg-transparent bg-[#FFFFFF] rounded-[12px] p-[12px] flex items-center gap-1 ${
              errors.phone ? "border-red-600" : "border-[#D8D8D8]"
            }`}
          >
            <Image
              src="/assets/icons/bd-flag.svg"
              height={24}
              width={24}
              alt=""
              className="h-[24px] w-[24px]"
            />
            <ChevronDown size={27} />
          </div>
          <div
            className={`w-full lg:bg-transparent bg-[#FFFFFF] flex items-center border rounded-[4px] ps-[12px] ${
              errors.phone ? "border-red-600" : "border-[#D8D8D8]"
            }`}
          >
            <span className="text-base text-primary-gray font-medium">
              +880
            </span>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <Input
                  {...field}
                  className="border-none flex-1 p-0 m-0 h-[48px] ps-4 pe-[12px] text-base lg:bg-transparent bg-[#FFFFFF]"
                />
              )}
              rules={{
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid mobile number",
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-[16px]">
        <Label className="text-base text-primary-gray font-medium">
          Password
        </Label>

        <div className="flex items-center gap-[8px] mt-[4px]">
          <div
            className={`w-full lg:bg-transparent bg-[#FFFFFF] flex items-center border rounded-[4px] ps-[12px] ${
              errors.password ? "border-red-600" : "border-[#D8D8D8]"
            }`}
          >
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input
                  {...field}
                  className="border-none flex-1 p-0 m-0 h-[48px] ps-4 pe-[12px] text-base lg:bg-transparent bg-[#FFFFFF]"
                />
              )}
              rules={{
                required: "Password is required",
              }}
            />
          </div>
        </div>
      </div>

      <div className="mt-[24px]">
        <Button type="submit" className="w-full h-[56px] text-base font-bold">
          {type === "login" ? "Log In" : "Register"}
        </Button>
      </div>

      {/* New user? */}
      <div className="flex items-center justify-end mt-[13px] gap-[8px]">
        <span className="text-base text-fifth-gray font-semibold">
          {type === "login" ? "New user?" : "New user?"}
        </span>
        <Button
          type="button"
          onClick={type === "login" ? onRedirectRegister : onRedirectLoign}
          variant="text"
          className="text-orange text-base font-semibold h-0 m-0 p-0"
        >
          {type === "login" ? "Register" : "Log In"}
        </Button>
      </div>
    </form>
  );
}
