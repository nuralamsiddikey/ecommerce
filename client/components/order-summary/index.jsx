"use client";

import InvoiceAnContactInfoForm from "@/app/checkout/components/invoice-contact-info-form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

export default function OrderSummary({
  showDiscount = false,
  invoiceEditAccess = false,
  bottomActionElement,
  orderInfo = {},
}) {
  return (
    <div className="w-full lg:bg-white lg:px-[17px] lg:py-[20px] rounded-[4px]">
      {showDiscount && (
        <>
          <h2 className="text-base text-primary-gray font-bold leading-[20px]">
            Promo Code
          </h2>

          {/* Promo Code form */}
          <form className="flex items-center justify-between gap-[8px] mt-[12px]">
            <Input placeholder="Enter promo code" className="flex-1" />
            {/* <button className="bg-orange text-[13px] text-white font-bold leading-[18px] rounded-[4px]">
              Apply
            </button> */}
            <Button className="!h-[38px]">Apply</Button>
          </form>
        </>
      )}

      {/* Invoice & Contact info */}
      <div
        className={`flex items-center justify-between ${
          showDiscount && "mt-[12px]"
        }`}
      >
        <h2 className="text-base text-primary-gray font-bold leading-[20px]">
          Invoice and Contact Info
        </h2>

        {invoiceEditAccess && (
          <>
            <InvoiceAnContactInfoForm />
          </>
        )}
      </div>

      {/* Order Summary */}
      <div className="mt-[25px]">
        <h2 className="text-base text-primary-gray font-bold leading-[20px]">
          Order Summary
        </h2>

        <div className="lg:space-y-[15px] space-y-[6px] mt-[8px] lg:bg-transparent bg-white lg:p-0 p-[10px]">
          <p className="text-sm text-primary-gray font-normal flex items-center justify-between">
            <span>Items Total ({orderInfo?.totalItems} Items)</span>
            <span className="lg:text-black font-medium lg:text-sm text-base text-orange">
              ৳ {orderInfo?.total}
            </span>
          </p>

          <p className="text-sm text-primary-gray font-normal flex items-center justify-between">
            <span>Delivery Fee</span>
            <span className="lg:text-black font-medium lg:text-sm text-base text-orange">
              ৳ {orderInfo?.deliveryFee}
            </span>
          </p>

          <p className="text-sm text-primary-gray font-normal flex items-center justify-between">
            <span>Shipping discount and voucher</span>
            <span className="lg:text-black font-medium lg:text-sm text-base text-orange">
              - ৳ {orderInfo?.shippingFee}
            </span>
          </p>

          <hr className="lg:block hidden" />

          <p className="text-sm text-primary-gray font-normal flex items-center justify-between">
            <span>Total</span>
            <span className="text-orange font-semibold">
              {" "}
              ৳ {orderInfo?.grandTotal}
            </span>
          </p>
        </div>
      </div>

      {bottomActionElement && <div className="">{bottomActionElement}</div>}
    </div>
  );
}
