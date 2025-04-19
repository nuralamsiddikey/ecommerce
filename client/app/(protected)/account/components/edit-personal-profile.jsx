"use client";

import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputSelect from "@/components/ui/input-select";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Pen } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const genderInfodropdownItems = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

const cancelReasons = [
  {
    label: "Want to place a new order with more",
    value: "Want to place a new order with more",
  },
  {
    label: "Delivery time is too long",
    value: "Delivery time is too long",
  },
  {
    label: "Duplicate order",
    value: "Duplicate order",
  },
  {
    label: "Shipping cost is too high",
    value: "Shipping cost is too high",
  },
];

export default function EditPersonalProfile({ customTriggerButton }) {
  // Local state
  const [open, setOpen] = useState(false);

  /**
   * FORM STUFF
   */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      gender: "",
    },
  });

  /**
   * HANDLERS
   */
  const onSubmitHandler = async (data) => {
    console.log(data);

    toast.success("Profile updated successfully");

    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        {customTriggerButton ? (
          customTriggerButton
        ) : (
          <Button
            type="button"
            variant="none"
            className="p-0 m-0 h-0 text-orange text-xs font-semibold gap-[3px]"
          >
            <Pen size={14} />
            Edit
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="lg:w-[423px] md:w-[423px] w-full z-[1000] lg:pt-[54px] pt-[10px]">
        <div className="">
          <SheetHeader>
            {/* App bar for mobile */}
            <div>
              <MobileAppBar
                title="Personal profile"
                onGoBack={() => setOpen(false)}
              />
            </div>

            <div className="flex items-center justify-between">
              <SheetTitle className="text-base text-primary-gray font-semibold leading-[24px]">
                Personal Profile
              </SheetTitle>
            </div>

            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="space-y-4">
                <div>
                  <Label>Name</Label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter name"
                        err={errors.name}
                        status="edit"
                      />
                    )}
                    rules={{
                      required: "Name is required",
                    }}
                  />
                </div>

                <div>
                  <Label>Number</Label>
                  <Controller
                    name="number"
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Enter number"
                        err={errors.number}
                        status="edit"
                      />
                    )}
                    rules={{
                      required: "Number is required",
                      validate: (value) => {
                        if (!/^(01)[0-9]{9}$/.test(value)) {
                          return "Invalid phone number";
                        }
                      },
                    }}
                  />
                </div>

                <div>
                  <Label>Gender</Label>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <InputSelect
                        options={genderInfodropdownItems}
                        placeholder="Select gender"
                        className="w-full border-orange"
                        {...field}
                        err={errors.gender}
                        status="edit"
                      />
                    )}
                    rules={{
                      required: "Gender is required",
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-[13px] mt-[56px]">
                <SheetClose className="w-full rounded-[4px] bg-tertiary-gray">
                  <Button className="bg-tertiary-gray">CANCEL</Button>
                </SheetClose>

                <button
                  type="submit"
                  className="w-full bg-orange rounded-[4px] text-white h-[41px] outline-none ring-0 focus:ring-0 focus:outline-none"
                >
                  UPDATE
                </button>
              </div>
            </form>
          </SheetHeader>
        </div>
      </SheetContent>
    </Sheet>
  );
}
