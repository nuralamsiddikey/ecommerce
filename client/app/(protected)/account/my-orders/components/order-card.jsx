import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function OrderCard({ order }) {
  return (
    <Link
      href={`/account/my-orders/${order?.id}`}
      className="w-full h-[84px] lg:grid flex justify-between items-center lg:grid-cols-4 grid-cols-2 lg:px-[29px] px-[18px] py-[7px] rounded-[4px] bg-white"
    >
      {/* Only For Desktop */}
      <div className="h-full w-full lg:block hidden">
        <div className="h-full w-full flex items-start justify-center flex-col">
          <h2 className="text-base font-semibold text-primary-gray">
            Order ID
          </h2>
          <p className="text-sm font-normal text-primary-gray">{order.order_no}</p>
        </div>
      </div>

      {/* Only for Tablate & Mobile */}
      <div className="lg:hidden block">
        <div className="flex-1 flex items-start justify-center flex-col">
          <h2 className="text-base font-semibold text-primary-gray">
            Order Id: #886854684
          </h2>
          <p className="text-xs font-normal text-primary-gray">
            Status:{" "}
            <span
              className={`font-bold ${
                order?.orderStatus === "Delivery Pending" ||
                order?.orderStatus === "Order Process" ||
                order?.orderStatus === "Order Confirm"
                  ? "text-[#F95506]"
                  : order?.orderStatus === "Delivery Complete"
                  ? "text-[#097000]"
                  : order?.orderStatus === "Parcel Return" ||
                    order?.orderStatus === "Order Cancel"
                  ? "text-[#BB0000]"
                  : ""
              }`}
            >
              {order?.orderStatus}
            </span>
          </p>
        </div>
      </div>

      {/* Only for Desktop */}
      <div className="lg:block hidden">
        <div className="h-full w-full flex items-start justify-center flex-col">
          <h2 className="text-base font-semibold text-primary-gray">
            Order Date and Time
          </h2>
          <p className="text-sm font-normal text-primary-gray">
            {order?.order_date?.slice(0, 10)}
          </p>
        </div>
      </div>

      {/* Only for desktop */}
      <div className="lg:block hidden">
        <div className="h-full w-full flex items-center justify-center">
          <div
            className={`w-[239px] h-[41px] rounded-[4px] flex items-center justify-center ${
              order.status === "processing"
                ? "bg-[#E7FFE5] text-[#097000]"
                : order?.status === "completed" 
                ? "bg-[#FFD0D0] text-[#C10101]"
                : "bg-[#FFEAE0] text-[#F95506]"
            }`}
          >
            <p className="text-sm font-medium">{order?.status}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end lg:w-full w-[50px]">
        <Button className="w-[165px] h-[40px] lg:block hidden">
          Order Detail
        </Button>
        <Link
          href={`/account/my-orders/${order?.id}`}
          className="lg:hidden block"
        >
          {order?.orderStatus === "Delivery Complete" && (
            <Image
              src="/assets/icons/blue-fill-check.svg"
              width={19}
              height={19}
              alt="Delivery Complete"
            />
          )}

          {order?.orderStatus === "Parcel Return" ||
            (order?.orderStatus === "Order Cancel" && (
              <Image
                src="/assets/icons/cross-fill.svg"
                width={19}
                height={19}
                alt="Delivery Complete"
              />
            ))}

          {order?.orderStatus === "Order Process" ||
            order?.orderStatus === "Order Confirm" ||
            (order?.orderStatus === "Delivery Pending" && (
              <ChevronRight size={20} className="lg:hidden block" />
            ))}
        </Link>
      </div>
    </Link>
  );
}
