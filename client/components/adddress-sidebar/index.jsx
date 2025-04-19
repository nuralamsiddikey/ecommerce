"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { dbAddress } from "@/fake-data/address";
import { Pen } from "lucide-react";
import { useState } from "react";
import AddressItem from "./address-item";
import EmptyAddress from "./empty-address";
import ShippingAddressForm from "./shipping-address-form";

export default function ShippingAddress({ customTriggerButton = null }) {
  // Local State
  const [addresses, setAddresses] = useState(dbAddress);
  const [showAddress, setShowAddress] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);

  /**
   * HANDLERS
   */
  const changeActiveAddressHandler = (id) => {
    setAddresses((prevAddresses) =>
      prevAddresses.map((address) => ({
        ...address,
        isActive: address.id === id,
      }))
    );
  };

  return (
    <>
      <Sheet open={showAddress} onOpenChange={setShowAddress}>
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
        <SheetContent className="lg:w-[423px] md:w-[423px] w-[370px] z-[10000]">
          <div className="">
            <SheetHeader>
              <div className="flex items-center justify-between">
                <SheetTitle className="text-base text-primary-gray font-semibold leading-[24px]">
                  Shipping Address
                </SheetTitle>
              </div>

              {dbAddress?.length > 0 ? (
                <div>
                  {/* Address Items */}
                  <div className="space-y-[17px]">
                    {addresses?.map((address) => (
                      <AddressItem
                        key={address?.id}
                        address={address}
                        onActive={changeActiveAddressHandler}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <EmptyAddress />
              )}

              <div className="flex items-center gap-[13px] pt-[24px]">
                <SheetClose className="w-full rounded-[5px] bg-fifth-gray">
                  <Button className="bg-fifth-gray">CANCEL</Button>
                </SheetClose>

                <Button
                  onClick={() => {
                    setShowAddressForm(!showAddressForm);
                    setShowAddress(false);
                  }}
                  className="w-full"
                >
                  ADD ADDRESS
                </Button>
              </div>
            </SheetHeader>
          </div>
        </SheetContent>
      </Sheet>

      {/* Modals */}
      <ShippingAddressForm
        open={showAddressForm}
        onOpenChange={setShowAddressForm}
      />
    </>
  );
}
