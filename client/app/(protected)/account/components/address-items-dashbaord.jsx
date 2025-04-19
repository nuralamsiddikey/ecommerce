"use client";

import AddressItem from "@/components/adddress-sidebar/address-item";
import { dbAddress } from "@/fake-data/address";

export default function AddressItemDashboard() {
  /**
   * HANDLERS
   */
  const activeAddressHandler = (id) => {};

  return (
    <div className="grid grid-cols-2 lg:gap-x-[81px] gap-y-[15px]">
      {dbAddress?.map((address) => (
        <AddressItem
          key={address.id}
          address={address}
          onActive={activeAddressHandler}
        />
      ))}
    </div>
  );
}
