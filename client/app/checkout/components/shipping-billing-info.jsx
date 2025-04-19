import ShippingAddress from "@/components/adddress-sidebar";

export default function ShippingBillingInfo() {
  return (
    <div className="">
      <div className="px-[43px] py-[14px] bg-[#D8D8D8]">
        <h2 className="text-base font-semibold leading-[24px] text-primary-gray">
          Shipping & Billing
        </h2>
      </div>
      <div className="bg-white py-[30px] px-[28px] divide-[#C4C4C4]">
        <div className="space-y-[9px]">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-primary-gray font-semibold leading-[16px]">
              Umme Honey
            </h2>
            <ShippingAddress />
          </div>

          <p className="text-sm text-primary-gray font-semibold leading-[16px]">
            01634811485
          </p>
          <p className="text-sm text-primary-gray font-semibold leading-[16px]">
            16v house, Adabor, Dhaka - North, Dhaka...
          </p>
        </div>

        <div className="mt-[36px] text-sm text-orange font-semibold leading-[16px]">
          <p>Your parcel Deliver by pathao...</p>
        </div>
      </div>
    </div>
  );
}
