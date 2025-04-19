"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const status = [
  "All Order",
  "Delivery Pending",
  "Order process",
  "Order Confirm",
  "Delivery Complete",
  "Parcel Return",
  "Order Cancel",
];

export default function OrderFilter() {
  // hooks
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  /**
   * HANDLERS
   */
  const handleStatus = (status) => {
    const params = new URLSearchParams(searchParams);

    if (status) {
      params.set("status", status);
    } else {
      params.delete("status");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const isActiveStatus = (status) => {
    const params = new URLSearchParams(searchParams);
    return params.get("status") === status;
  };

  return (
    <div className="lg:block hidden mt-[23px]">
      <Suspense>
        <ul className="flex inner-border-bottom space-x-[30px]">
          {status.map((item) => (
            <li
              key={item}
              onClick={() => handleStatus(item)}
              className={`z-50 first:ps-0 px-[10px] pb-1 text-sm font-medium text-[#747474] cursor-pointer ${
                isActiveStatus(item) && "border-orange border-b-4"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
