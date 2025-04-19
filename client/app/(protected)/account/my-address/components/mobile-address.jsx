"use client";

import AddressItem from "@/components/adddress-sidebar/address-item";
import ShippingAddressForm from "@/components/adddress-sidebar/shipping-address-form";
import { Button } from "@/components/ui/button";
import { dbAddress } from "@/fake-data/address";
import { useState } from "react";
import LogoutButton from "../../components/logout-button";

export default function MobileAddress() {
  // Local State
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden block h-full pb-[83px]">
        <div className="h-full flex flex-col justify-between ">
          <div className="flex-1">
            <div className="bg-white rounded-[4px] p-[10px]">
              <Button
                className="h-[49px] w-full text-sm font-medium"
                onClick={() => setOpen(true)}
              >
                Enter your address
              </Button>
            </div>

            {/* Addresses */}
            <div className="space-y-[9px] mt-[29px]">
              {dbAddress?.map((address) => (
                <AddressItem
                  key={address.id}
                  address={address}
                  border={false}
                />
              ))}
              {dbAddress?.map((address) => (
                <AddressItem
                  key={address.id}
                  address={address}
                  border={false}
                />
              ))}
            </div>
          </div>

          {/* Logout */}
          <div className="">
            <LogoutButton />
          </div>
        </div>
      </div>

      <ShippingAddressForm open={open} onOpenChange={setOpen} />
    </>
  );
}
