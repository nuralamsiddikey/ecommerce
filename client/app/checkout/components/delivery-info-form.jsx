"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputSelect from "@/components/ui/input-select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useOrderContext } from "@/context/orderContext";

const cityOptions = [
  {
    value: "Dhaka",
    label: "Dhaka",
  },
  {
    value: "Chittagong",
    label: "Chittagong",
  },
  {
    value: "Sylhet",
    label: "Sylhet",
  },
  {
    value: "Narayangonj",
    label: "Narayangonj",
  },
  {
    value: "Manikgonj",
    label: "Manikgonj",
  },
];

const thanaOptons = [
  {
    value: "Mohammadpur",
    label: "Mohammadpur",
  },
  {
    value: "Dhanmondi",
    label: "Dhanmondi",
  },
];

const districtOptions = [
  {
    value: "Dhaka",
    label: "Dhaka",
  },
  {
    value: "Chittagong",
    label: "Chittagong",
  },
];

const policeStationOptions = [
  {
    value: "Mohammadpur",
    label: "Mohammadpur",
  },
  {
    value: "Dhanmondi",
    label: "Dhanmondi",
  },
];

const postCodeOptions = [
  {
    value: "1207",
    label: "1207",
  },
  {
    value: "1209",
    label: "1209",
  },
];

export default function DeliveryInfoForm() {
  const { setOrder } = useOrderContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name: "",
      phone: "",
      address_line: "",
      division: "",
      city: "",
      police_station: "",
    },
  });

  const addDeliveryInfoHandler = async (data) => {
    setOrder((prev) => ({ ...prev, ...data }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(addDeliveryInfoHandler)}
        className="bg-white px-[28px] py-[30px] rounded-[4px]"
      >
        <h2 className="text-secondary-gray text-base font-bold leading-[22px]">
          Delivery Information
        </h2>

        <div className="pt-[22px] lg:space-y-[10px] space-y-[5px]">
          <div className="flex items-center lg:gap-[25px] gap-[5px] lg:flex-nowrap md:flex-nowrap flex-wrap">
            {/* First Name */}
            <div className="w-full">
              <Label>First Name</Label>
              <Controller
                name="full_name"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Enter Full Name"
                    {...field}
                    err={errors.full_name}
                  />
                )}
                rules={{
                  required: { value: true, message: "First Name is required" },
                }}
              />
            </div>
          </div>

          <div className="flex items-center lg:gap-[25px] gap-[5px] lg:flex-nowrap md:flex-nowrap flex-wrap">
            {/* Phone Number */}
            <div className="w-full">
              <Label>Phone Number</Label>
              <Controller
                control={control}
                name="phone"
                render={({ field }) => (
                  <Input
                    placeholder="Enter Phone Number"
                    {...field}
                    err={errors.phone}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                  validate: (value) => {
                    if (!/^(01)[3-9]\d{8}$/.test(value)) {
                      return "Invalid Phone Number";
                    }
                  },
                }}
              />
            </div>

            {/* Address */}
            <div className="w-full">
              <Label>Address</Label>
              <Controller
                control={control}
                name="address_line"
                render={({ field }) => (
                  <Input
                    placeholder="Enter Address"
                    {...field}
                    err={errors.address_line}
                  />
                )}
                rules={{
                  required: { value: true, message: "Address is required" },
                }}
              />
            </div>
          </div>

          <div className="flex items-center lg:gap-[25px] gap-[5px] lg:flex-nowrap md:flex-nowrap flex-wrap">
            {/* Division */}
            <div className="w-full">
              <Label>Division</Label>
              <Controller
                control={control}
                name="division"
                render={({ field }) => (
                  <InputSelect
                    options={districtOptions}
                    placeholder="Select Division"
                    {...field}
                    err={errors.division}
                  />
                )}
                rules={{
                  required: { value: true, message: "Division is required" },
                }}
              />
            </div>

            {/* City */}
            <div className="w-full">
              <Label>City</Label>
              <Controller
                control={control}
                name="city"
                render={({ field }) => (
                  <InputSelect
                    options={cityOptions}
                    placeholder="Select city"
                    {...field}
                    err={errors.city}
                  />
                )}
                rules={{
                  required: { value: true, message: "City is required" },
                }}
              />
            </div>
          </div>

          <div className="flex items-center lg:gap-[25px] gap-[5px] lg:flex-nowrap md:flex-nowrap flex-wrap">
            {/* Police Station */}
            <div className="w-full">
              <Label>Police Station</Label>
              <Controller
                control={control}
                name="police_station"
                render={({ field }) => (
                  <InputSelect
                    options={policeStationOptions}
                    placeholder="Select Police Station"
                    {...field}
                    err={errors.police_station}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: "Police Station is required",
                  },
                }}
              />
            </div>
          </div>

          <div className="flex justify-end pt-[30px]">
            <Button
              type="submit"
              className="text-base uppercase lg:w-[190px] md:w-[190px] w-full rounded-[4px]"
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
