"use client";

import ShippingAddress from "@/components/adddress-sidebar";
import AddressItem from "@/components/adddress-sidebar/address-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { defaultAddress } from "@/fake-data/address";
import { Pen } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function InvoiceAnContactInfoForm() {
  // Local State
  const [open, setOpen] = useState(false);

  /**
   * FORM STUFF
   */
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      delivery_contact_phone: "",
      primary_address_id: "",
    },
  });

  /**
   * HANDLERS
   */

  const onSubmitHandler = async (data) => {
    console.log(data);
    toast.success("Invoice and Contact info saved successfully");
    setOpen(false);
  };

  /**
   * EFFECTS
   */
  useEffect(() => {
    if (defaultAddress) {
      setValue("primary_address_id", defaultAddress.id);
    }
  }, [setValue]);

  console.log(errors);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Button
            type="button"
            variant="none"
            className="p-0 m-0 h-0 text-orange text-xs font-semibold gap-[3px]"
          >
            <Pen size={14} />
            Edit
          </Button>
        </SheetTrigger>
        <SheetContent className="lg:w-[423px] w-full z-[1000]">
          <div className="">
            <SheetHeader>
              <div className="flex items-center justify-between">
                <SheetTitle className="text-base text-primary-gray font-semibold leading-[24px]">
                  Invoice and Contact Info
                </SheetTitle>
              </div>

              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="space-y-[5px]">
                  <Label className="text-[13px] text-[#333333] font-semibold">
                    Number
                  </Label>
                  <Controller
                    name="delivery_contact_phone"
                    control={control}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        className="font-semibold border-orange"
                        err={errors.delivery_contact_phone}
                      />
                    )}
                    rules={{
                      required: "Phone number is required",
                      validate: (value) => {
                        if (!/^(01)[0-9]{9}$/.test(value)) {
                          return "Phone number must be 11 digits, starting with 01";
                        }
                      },
                    }}
                  />
                </div>

                <div className="space-y-[5px] mt-[15px]">
                  <div className="flex items-center justify-between">
                    <Label className="text-[13px] text-[#333333] font-semibold">
                      Delivery Address
                    </Label>

                    <ShippingAddress />
                  </div>

                  <div>
                    <AddressItem address={defaultAddress} />
                  </div>
                </div>

                <div className="flex items-center gap-[13px] pt-[32px]">
                  <SheetClose className="w-full rounded-[5px] bg-fifth-gray">
                    <Button type="button" className="w-full bg-fifth-gray">
                      CANCEL
                    </Button>
                  </SheetClose>

                  <Button type="submit" className="w-full">
                    SAVE
                  </Button>
                </div>
              </form>
            </SheetHeader>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
