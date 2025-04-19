"use client";

import { Button } from "@/components/ui/button";
import InputSelect from "@/components/ui/input-select";
import { Label } from "@/components/ui/label";
import Textarea from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const cancelReasons = [
  {
    label: "Want to place a new order with more",
    value: "Want to place a new order with more",
  },
  {
    label: "Delivery time is too long",
    value: "Delivery time is too long",
  },
  {
    label: "Duplicate order",
    value: "Duplicate order",
  },
  {
    label: "Shipping cost is too high",
    value: "Shipping cost is too high",
  },
];

export default function OrderCancelForm({ orderId }) {
  // Hooks
  const router = useRouter();

  /**
   * FORM STUFF
   */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      reason: "",
      comments: "",
    },
  });

  /**
   * HANDLERS
   */
  const cancelOrderHandler = async (data) => {
    console.log(data);

    toast.success("Order has been cancelled successfully");

    // Redirect to my-orders page
    router.push(`/account/my-orders/${orderId}`);
  };

  return (
    <div className="w-full lg:bg-white lg:px-[17px] lg:py-[20px] rounded-[4px]">
      <h2 className="text-base text-primary-gray font-bold leading-[20px] lg:block hidden">
        Cancel Resason
      </h2>

      {/* TODO: margin-top will be changed! */}
      <form onSubmit={handleSubmit(cancelOrderHandler)} className="mt-[12px]">
        <div className="lg:space-y-0 space-y-[3px]">
          <Label className="lg:text-[12px] lg:font-medium font-bold text-base">
            Cancel Reason
          </Label>
          <Controller
            control={control}
            name="reason"
            render={({ field }) => (
              <InputSelect
                options={cancelReasons}
                placeholder="Select reason"
                className="w-full"
                {...field}
                err={errors.reason}
              />
            )}
            rules={{
              required: "Reason is required",
            }}
          />
        </div>

        {/* TODO: margin-top will be changed! */}
        <div className="mt-[12px] lg:space-y-0 space-y-[3px]">
          <Label className="lg:text-[12px] lg:font-medium font-bold text-base">
            Comments
          </Label>
          <Controller
            control={control}
            name="comments"
            render={({ field }) => (
              <Textarea
                placeholder="(Optional)"
                height={94}
                className="lg:h-[94px] h-[114px]"
                {...field}
                err={errors.comments}
              />
            )}
            rules={{
              required: { value: true, message: "Comments is required" },
            }}
          />
        </div>

        {/* TODO: margin-top will be changed! */}
        <div className="flex justify-end mt-[20px]">
          <Button
            type="submit"
            className="w-[190px] h-[40px] bg-[#C10101] font-semibold text-base"
          >
            CANCEL ORDER
          </Button>
        </div>
      </form>
    </div>
  );
}
