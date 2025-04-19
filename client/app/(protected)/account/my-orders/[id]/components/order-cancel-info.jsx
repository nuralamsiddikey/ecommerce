import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function OrderCancelInfo() {
  return (
    <div className="w-full bg-white px-[17px] py-[20px] rounded-[4px]">
      <h2 className="text-base text-primary-gray font-bold leading-[20px]">
        Order Cancel Information
      </h2>

      <div className="mt-[12px]">
        <p className="text-sm font-normal text-primary-gray">
          Placed on 11 Sep 2024 17:48:24
        </p>
        <p className="text-sm font-normal text-[#747474] mt-[14px]">
          Order Cancel Reason
        </p>
        <Link
          href="/account/my-orders"
          className={`${cn(buttonVariants({}))} w-full mt-[12px]`}
        >
          Order List
        </Link>
      </div>
    </div>
  );
}
