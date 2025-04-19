import ShippingAddress from "@/components/adddress-sidebar";
import Image from "next/image";

const DeliveryAddress = () => {
  return (
    <div className="bg-[#FFFBFA] h-full rounded-b-[5px] lg:rounded-bl-[0px] lg:rounded-r-[5px]">
      <div className="pt-5 px-4">
        <div className="flex items-center justify-between">
          <h5 className="text-[15px] leading-[18px] font-bold text-medium-black">
            Delivery Address
          </h5>
          <ShippingAddress />
        </div>
        <div className="flex items-start gap-1 pt-3 px-2">
          <Image
            width={5}
            height={5}
            src="/assets/icons/map-pin.svg"
            alt="icon"
            className="w-auto h-auto"
          />
          <h6 className="text-[12px] leading-[18px] text-medium-black">
            Pallabi 2nd phase, D8, 1216 main Road, Dhaka 1216, Bangladesh
          </h6>
        </div>
        <div className="flex items-center gap-1 pt-3 pb-5 px-2">
          <Image
            width={5}
            height={5}
            src="/assets/icons/smartphone.svg"
            alt="icon"
            className="w-auto h-auto"
          />
          <h6 className="text-[12px] leading-[18px] text-medium-black">
            01717-123456
          </h6>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#D8D8D8]"></div>

      <div className="pt-[18px] px-4">
        <div className="flex items-center justify-between">
          <h5 className="text-[15px] leading-[18px] font-bold text-medium-black">
            Standard Delivery
          </h5>
          <h5 className="text-[15px] leading-[18px] font-bold text-medium-black">
            ৳ 80
          </h5>
        </div>

        <div className="flex items-center gap-2 pt-3 px-2">
          <Image
            width={5}
            height={5}
            src="/assets/icons/truck.svg"
            alt="icon"
            className="w-auto h-auto"
          />
          <h6 className="text-[12px] leading-[18px] text-medium-black">
            Guaranteed by 5-7 Days
          </h6>
        </div>

        <div className="flex items-center gap-2 py-3 px-2">
          <Image
            width={5}
            height={5}
            src="/assets/icons/home.svg"
            alt="icon"
            className="w-auto h-auto"
          />
          <h6 className="text-[12px] leading-[18px] text-medium-black">
            Cash On Delivery Available
          </h6>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
