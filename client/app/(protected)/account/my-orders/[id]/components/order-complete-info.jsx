import { Button } from "@/components/ui/button";

export default function OrderCompleteInfo() {
  return (
    <div className="w-full bg-white px-[17px] py-[20px] rounded-[4px]">
      <h2 className="text-base text-primary-gray font-bold leading-[20px]">
        Order Information
      </h2>

      <div className="mt-[12px]">
        <p className="text-sm font-normal text-primary-gray">
          Placed on 11 Sep 2024 17:48:24
        </p>
        <p className="text-sm font-normal text-primary-gray mt-[14px]">
          Delivery Complete 11 Sep 2024 17:48:24
        </p>
      </div>

      <div className="mt-[18px]">
        <Button className="h-[41px] w-full">RE-ORDER</Button>
      </div>
    </div>
  );
}
