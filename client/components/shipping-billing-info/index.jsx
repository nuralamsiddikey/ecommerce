import ShippingAddress from "@/components/adddress-sidebar";

export default function ShippingBillingInfo({
  title = "Ship & Bill To",
  editAccess = false,
}) {
  return (
    <div className="">
      <div className="lg:px-[43px] lg:py-[14px] lg:bg-[#D8D8D8] flex items-center justify-between">
        <h2 className="text-base font-semibold leading-[24px] text-primary-gray">
          {title}
        </h2>

        <div className="lg:hidden block">
          <ShippingAddress />
        </div>
      </div>

      <div className="bg-white lg:py-[30px] lg:px-[28px] p-[10px] lg:rounded-0 rounded-[4px] divide-[#C4C4C4] lg:mt-0 mt-[8px]">
        <div className="lg:divide-none divide-y divide-[#F5F5F5]">
          <div className="flex items-center justify-between py-[4px]">
            <h2 className="text-sm text-primary-gray font-semibold leading-[16px]">
              Umme Honey
            </h2>

            {/* Edit Access */}
            {editAccess && (
              <div className="lg:block hidden">
                <ShippingAddress />
              </div>
            )}
          </div>

          <p className="text-sm text-primary-gray font-semibold leading-[16px] py-[4px]">
            01634811485
          </p>
          <p className="text-sm text-primary-gray font-semibold leading-[16px] py-[4px]">
            16v house, Adabor, Dhaka - North, Dhaka...
          </p>
          <div className="lg:mt-[36px] text-sm text-orange font-semibold leading-[16px] py-[4px]">
            <p>Your parcel Deliver by pathao...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
