export default function OrderConfirmInfo() {
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
    </div>
  );
}
