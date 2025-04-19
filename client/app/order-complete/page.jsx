import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import Alert from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import OrderItem from "./components/order-item";

export default function OrderCompletePage() {
  return (
    <div className="custom-container lg:p-0 lg:!pb-[10px] !pb-[67px]">
      {/* Mobile App bar */}
      <MobileAppBar title="Order Placed" disableBottomGap />

      <div className="bg-white rounded-[4px] w-full flex items-center justify-center mt-[20px] lg:pb-[50px] pb-[20px]">
        <div className="text-center flex flex-col justify-center">
          <Image
            src="/assets/gifs/order-success.gif"
            width={240}
            height={171}
            alt="Order Success"
            className="mx-auto"
          />
          <h2 className="text-orange font-semibold lg:text-[32px] md:text-[24] text-[16px]">
            Thank you for your order!
          </h2>
          <h2 className="lg:text-[36px] md:text-[26px] text-[20px] text-[#333333] font-semibold">
            ৳ 289
          </h2>
          <p className="text-tertiary-gray lg:text-[20px] md:text-[17px] text-sm lg:font-semibold font-normal leading-[21px]">
            Your order number is 664163715676395
          </p>
        </div>
      </div>

      {/* Order Info */}
      <div className="lg:bg-white bg-transparent rounded-[4px] w-full lg:px-[106px] lg:mt-[20px] mt-[16px] lg:py-[40px] py-0">
        <div className="text-center lg:block md:hidden hidden">
          <h2 className="text-tertiary-gray text-[20px] font-semibold">
            Please have this amount ready on delivery day.
          </h2>
          <p className="text-orange text-[36px]">৳ 289</p>
        </div>

        {/* Items */}
        <div>
          <h2 className="text-primary-gray text-base font-bold">Get by</h2>

          <div className="lg:mt-[14px] mt-0 border rounded-[4px] lg:border-fifth-gray border-transparent lg:py-[14px] pt-[10px] lg:px-[19px]">
            <div className="space-y-2">
              <OrderItem />
            </div>

            <hr className="mt-[11px] border-black lg:block md:hidden hidden" />

            {/* Track Order */}

            <div className="pt-[8px] flex items-center justify-between">
              <h2 className="text-tertiary-gray flex items-center gap-1 justify-start flex-wrap text-sm">
                <span>To track the delivery of your order, go to</span>
                <span className="font-bold">“My Account</span>
                <span className="mt-1">
                  <ChevronRight size={14} />
                </span>
                <span className="font-bold">My Order”</span>
              </h2>

              {/* Mobile Action Button */}
              <div className="lg:static fixed bottom-0 left-1/2 translate-x-[-50%] lg:translate-x-0 bg-white w-full lg:w-auto flex items-center justify-center lg:justify-end min-sm-flex-col-reverse gap-2 rounded-t-[12px] lg:p-0 p-4 lg:m-0 mb-[64px] rounded-b-none  lg:shadow-none shadow-custom">
                <div className="w-full flex items-center gap-[12px]">
                  <div className="w-full">
                    <Link
                      href="/account/my-orders/1"
                      className="lg:bg-white bg-[#F5F5F5] border border-[#F5F5F5] lg:border-orange lg:text-orange lg:w-[190px] h-[40px] flex items-center justify-center rounded-[4px] text-base lg:font-semibold font-bold"
                    >
                      View Order
                    </Link>
                  </div>

                  <div className="w-full lg:hidden block">
                    <Link
                      href="/"
                      className="bg-orange border border-orange text-white lg:w-[190px] h-[40px] flex items-center justify-center rounded-[4px] text-base font-semibold"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Comfirmation SMS */}
        <div className="lg:block md:block hidden mt-[14px]">
          <Alert
            icon={
              <div className="bg-orange w-6 h-6 rounded-full flex items-center justify-center">
                <Image
                  src="/assets/icons/light-delivery-icon.svg"
                  width={15}
                  height={15}
                  alt="Truck Icon"
                />
              </div>
            }
            message="We've sent you a confirmation sms to 01904583495 with the details of your order."
            variant="warning"
          />
        </div>

        {/* Order Summary */}

        {/* For mobile */}
        <div className="lg:hidden md:block block mt-4">
          <h2 className="text-base font-bold text-primary-gray">
            Order Summary
          </h2>
        </div>

        <div className="lg:bg-[#F5F5F5] bg-white rounded-[4px] px-[10px] lg:py-[26px] py-[10px] lg:mt-[23px] mt-[8px] lg:mb-0 mb-[100px]">
          <p className="flex items-center justify-between text-sm text-[#333333] font-medium leading-[20px]">
            <span>Summary</span>
            <span>
              <ChevronDown size={17} />
            </span>
          </p>

          <p className="flex items-center justify-between text-sm text-[#333333] font-medium leading-[20px] pt-4">
            <span>Subtotal (1 Items)</span>
            <span className="font-semibold text-base lg:text-[#333333] text-orange">
              ৳ 189
            </span>
          </p>

          <p className="flex items-center justify-between text-sm text-[#333333] font-medium leading-[20px] pt-[12px]">
            <span>Shipping Fee</span>
            <span className="font-semibold text-base lg:text-[#333333] text-orange">
              ৳ 100
            </span>
          </p>

          <hr className="lg:border-[#747474] border-[#F5F5F5] mt-[20px]" />

          <p className="flex items-center justify-between text-sm text-[#333333] font-bold leading-[20px] pt-4">
            <span className="">Shipping Fee</span>
            <span className="font-semibold text-base text-orange">৳ 100</span>
          </p>
        </div>

        {/* Continue Shipping */}
        <div className="lg:block hidden">
          <div className="flex items-center justify-center mt-[23px]">
            <Link
              href="/"
              className={`${cn(buttonVariants({}))} w-[229px] h-[40px]`}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
