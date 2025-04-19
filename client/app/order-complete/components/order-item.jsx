import Image from "next/image";

export default function OrderItem() {
  return (
    <div className="lg:bg-transparent md:bg-white bg-white flex items-center gap-[10px] lg:p-0 p-[10px] lg:rounded-none rounded-[4px]">
      <div>
        <Image
          src="/assets/images/products/01.png"
          height={72}
          width={72}
          className="h-[72px] w-[72px] rounded-[4px]"
          alt="Product Image"
        />
      </div>

      <div className="flex-1 flex items-center justify-center">
        <div className="flex-1">
          <h2 className="text-base text-[#333333] font-semibold leading-[20px]">
            Est. 04 Jun - 11 Jun
          </h2>
          <p className="text-sm text-black font-normal">
            Custom Logo Design polyester spandex workout active wear clothing
          </p>
        </div>
        {/* <div>
          <p className="text-sm text-[#747474] font-semibold text-end">
            Color Family:Light yellow
          </p>
          <p className="text-sm text-[#747474] font-semibold text-end">
            No Warranty
          </p>
        </div> */}
      </div>
    </div>
  );
}
