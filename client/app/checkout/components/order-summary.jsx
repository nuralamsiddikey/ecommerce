"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InvoiceAnContactInfoForm from "./invoice-contact-info-form";

export default function OrderSummary() {
  return (
    <div className="w-full bg-white px-[17px] py-[20px] rounded-[4px]">
      <h2 className="text-base text-primary-gray font-bold leading-[20px]">
        Promo Code
      </h2>

      {/* Promo Code form */}
      <form className="flex items-center justify-between gap-[8px] mt-[12px]">
        <Input placeholder="Enter promo code" className="flex-1" />
        <Button className="px-[16px]">Apply</Button>
      </form>

      {/* Invoice & Contact info */}
      <div className="flex items-center justify-between mt-[15px]">
        <h2 className="text-base text-primary-gray font-bold leading-[20px]">
          Invoice and Contact Info
        </h2>

        {/* <IconTextLink
          label="Edit"
          href="/checkout"
          className={"text-[12px] flex-row-reverse"}
          icon={<Pen size={14} />}
        /> */}
        <InvoiceAnContactInfoForm />
      </div>

      {/* Order Summary */}
      <div className="mt-[30px]">
        <h2 className="text-base text-primary-gray font-bold leading-[20px]">
          Order Summary
        </h2>

        <div className="space-y-[15px] mt-[8px]">
          <p className="text-sm text-primary-gray font-normal flex items-center justify-between">
            <span>Items Total (2 Items)</span>
            <span className="text-black font-semibold">৳ 376</span>
          </p>

          <p className="text-sm text-primary-gray font-normal flex items-center justify-between">
            <span>Delivery Fee</span>
            <span className="text-black font-semibold">৳ 60</span>
          </p>

          <p className="text-sm text-primary-gray font-normal flex items-center justify-between">
            <span>Shipping discount and voucher</span>
            <span className="text-black font-semibold">- ৳ 376</span>
          </p>

          <hr />

          <p className="text-sm text-primary-gray font-normal flex items-center justify-between">
            <span>Total</span>
            <span className="text-orange font-semibold"> ৳ 376</span>
          </p>
        </div>
      </div>

      {/* Place order */}
      <div className="mt-[42px]">
        <Button className="w-full bg-fifth-gray text-white">Place order</Button>
      </div>
    </div>
  );
}
