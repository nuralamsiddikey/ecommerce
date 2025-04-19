"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OrderInfo({ orderStatus }) {
  // Hooks
  const hooks = useRouter();

  /**
   * HANDLERS
   */
  const ordersNavigateHandler = () => {
    hooks.push("/account/my-orders");
  };

  return (
    <div className="w-full bg-white px-[17px] py-[20px] rounded-[4px]">
      <h2 className="text-base text-primary-gray font-bold leading-[20px]">
        Order Information
      </h2>

      <div className="mt-[12px]">
        <p className="text-sm font-normal text-primary-gray">
          Placed on 11 Sep 2024 17:48:24
        </p>
        <p className="text-sm font-normal text-[#747474] mt-[14px]">
          Delivery Complete 11 Sep 2024 17:48:24
        </p>
      </div>

      {orderStatus === "Delivery Complete" && (
        <div className="mt-[18px]">
          <Button className="h-[41px] w-full">RE-ORDER</Button>
        </div>
      )}

      {orderStatus === "Order Return" && (
        <div className="mt-[18px]">
          <Button onClick={ordersNavigateHandler} className="h-[41px] w-full">
            Order List
          </Button>
        </div>
      )}

      {orderStatus === "Delivery Pending" && (
        <Sheet className="">
          <SheetTrigger className="w-full h-[41px] pt-[18px]">
            <Button
              type="button"
              className="w-full h-[41px] text-sm font-medium uppercase"
            >
              PARCEL STATUS
            </Button>
          </SheetTrigger>
          <SheetContent className="lg:w-[423px] md:w-[423px] w-[370px] z-[1000]">
            <div className="">
              <SheetHeader>
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-base text-primary-gray font-semibold leading-[24px]">
                    Parcel Status
                  </SheetTitle>
                </div>

                {/* Delivery Timeline */}
                <div className="mt-[13px]">
                  <ol className="relative border-s-2 border-gray-200 space-y-[80px] ms-[20px]">
                    <li className="ms-6">
                      <span className="absolute flex items-center justify-center w-10 h-10 bg-orange rounded-full -start-[20px]">
                        <Image
                          src="/assets/icons/box.svg"
                          height={22}
                          width={22}
                          alt="box"
                        />
                      </span>
                      <div className="ps-[9px] flex items-center justify-between">
                        <div>
                          <h3 className="text-sm text-black font-bold">
                            Parcel Delivered
                          </h3>
                          <p className="text-[#8C8C8C] text-[11px] font-bold">
                            Parcel Delivered
                          </p>
                        </div>
                        <div>
                          <p className="text-[#8C8C8C] text-[11px] font-bold text-right">
                            12 Sep, 2024
                          </p>
                          <p className="text-[#8C8C8C] text-[11px] font-bold text-right">
                            3:34 PM
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className=" ms-6">
                      <span className="absolute flex items-center justify-center w-10 h-10 bg-orange rounded-full -start-[20px]">
                        <Image
                          src="/assets/icons/codesandbox.svg"
                          height={22}
                          width={22}
                          alt="box"
                        />
                      </span>
                      <div className="ps-[9px] flex items-center justify-between">
                        <div>
                          <h3 className="text-sm text-black font-bold">
                            Parcel Transit
                          </h3>
                          <p className="text-[#8C8C8C] text-[11px] font-bold">
                            Parcel on the way Delivery Hub
                          </p>
                        </div>
                        <div>
                          <p className="text-[#8C8C8C] text-[11px] font-bold text-right">
                            13 Sep, 2024
                          </p>
                          <p className="text-[#8C8C8C] text-[11px] font-bold text-right">
                            3:34 PM
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className=" ms-6">
                      <span className="absolute flex items-center justify-center w-10 h-10 bg-orange rounded-full -start-[20px]">
                        <Image
                          src="/assets/icons/truck-light.svg"
                          height={22}
                          width={22}
                          alt="box"
                        />
                      </span>
                      <div className="ps-[9px] flex items-center justify-between">
                        <div>
                          <h3 className="text-sm text-black font-bold">
                            Assign For Delivery
                          </h3>
                          <p className="text-[#8C8C8C] text-[11px] font-bold">
                            Parcel Assign For Delivery
                          </p>
                        </div>
                        <div>
                          <p className="text-[#8C8C8C] text-[11px] font-bold text-right">
                            13 Sep, 2024
                          </p>
                          <p className="text-[#8C8C8C] text-[11px] font-bold text-right">
                            3:34 PM
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className=" ms-6">
                      <span className="absolute flex items-center justify-center w-10 h-10 bg-[#A1A1A1] rounded-full -start-[20px]">
                        <Image
                          src="/assets/icons/check-light.svg"
                          height={22}
                          width={22}
                          alt="box"
                        />
                      </span>
                      <div className="ps-[9px] flex items-center justify-between">
                        <div>
                          <h3 className="text-sm text-black font-bold">
                            Delivery Done
                          </h3>
                          <p className="text-[#8C8C8C] text-[11px] font-bold">
                            Parcel Delivery done
                          </p>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </SheetHeader>
            </div>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
}
