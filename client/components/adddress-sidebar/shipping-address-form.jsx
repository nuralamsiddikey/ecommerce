"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import InputSelect from "@/components/ui/input-select";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

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

export default function ShippingAddressForm({ open, onOpenChange }) {
  /**
   * FORM STUFF
   */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      division: "",
      city: "",
      policeStation: "",
      postCode: "",
    },
  });

  /**
   * HANDLERS
   */
  const addDeliveryInfoHandler = async (data) => {
    console.log(data);
    toast.success("Shipping Address Added Successfully");
    onOpenChange(false);
  };

  console.log(errors);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[750px] p-[27px] pb-[27px]">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-base text-secondary-gray font-semibold ">
            Add New Shipping Address
          </DialogTitle>
          <DialogClose className="mt-0">
            <X size={23} color="#8D8D8D" />
          </DialogClose>
        </DialogHeader>
        <div className="">
          {/* pt-[22px] space-y-[10px] */}
          <form
            onSubmit={handleSubmit(addDeliveryInfoHandler)}
            className="lg:space-y-[10px] space-y-[5px]"
          >
            <div className="flex items-center lg:gap-[25px] lg:flex-nowrap md:flex-nowrap flex-wrap">
              {/* First Name */}
              <div className="w-full">
                <Label>First Name</Label>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Enter First Name"
                      {...field}
                      err={errors.firstName}
                    />
                  )}
                  rules={{
                    required: {
                      value: true,
                      message: "First Name is required",
                    },
                  }}
                />
              </div>

              {/* Last Name */}
              <div className="w-full">
                <Label>Last Name</Label>
                <Controller
                  control={control}
                  name="lastName"
                  render={({ field }) => (
                    <Input
                      placeholder="Enter last Name"
                      {...field}
                      err={errors.lastName}
                    />
                  )}
                  rules={{
                    required: { value: true, message: "Last Name is required" },
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
                  name="phoneNumber"
                  render={({ field }) => (
                    <Input
                      placeholder="Enter Phone Number"
                      {...field}
                      err={errors.phoneNumber}
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
                  name="address"
                  render={({ field }) => (
                    <Input
                      placeholder="Enter Address"
                      {...field}
                      err={errors.address}
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
                  name="policeStation"
                  render={({ field }) => (
                    <InputSelect
                      options={policeStationOptions}
                      placeholder="Select Police Station"
                      {...field}
                      err={errors.policeStation}
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

              {/* Post Code */}
              <div className="w-full">
                <Label>Post Code</Label>
                <Controller
                  control={control}
                  name="postCode"
                  render={({ field }) => (
                    <InputSelect
                      options={postCodeOptions}
                      placeholder="Select Post Code"
                      {...field}
                      err={errors.postCode}
                    />
                  )}
                  rules={{
                    required: { value: true, message: "Post Code is required" },
                  }}
                />
              </div>
            </div>

            <div className="flex justify-end pt-[30px] gap-[10px]">
              <DialogClose className="lg:w-[190px] md:w-[190px] w-full">
                <Button
                  type="submit"
                  className="bg-fifth-gray text-base uppercase lg:w-[190px] md:w-[190px] w-full rounded-[4px]"
                >
                  CANCEL
                </Button>
              </DialogClose>

              <Button
                type="submit"
                className="text-base uppercase lg:w-[190px] md:w-[190px] w-full rounded-[4px] text-white"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
