import Alert from "@/components/ui/alert";
import Image from "next/image";

export default function OrderStatus({ orderStatus }) {
  return (
    <Alert
      message={`${orderStatus}`}
      variant={
        orderStatus === "Order Confirm"
          ? "warning"
          : orderStatus === "Delivery Complete"
          ? "success"
          : orderStatus === "Delivery Pending"
          ? "pending"
          : orderStatus === "Order Return"
          ? "error"
          : "error"
      }
      icon={
        <div className="w-6 h-6 rounded-full flex items-center justify-center">
          {/* truck-green.svg */}
          <Image
            src={
              orderStatus === "Order Process"
                ? "/assets/icons/truck-orange.svg"
                : orderStatus === "Delivery Complete"
                ? "/assets/icons/truck-green.svg"
                : orderStatus === "Order Confirm"
                ? "/assets/icons/truck-orange.svg"
                : orderStatus === "Delivery Pending"
                ? "/assets/icons/truck-orange.svg"
                : orderStatus === "Order Return"
                ? "/assets/icons/truck-red.svg"
                : "/assets/images/icons/truck-red.svg"
            }
            width={15}
            height={15}
            alt="Truck Icon"
            className="w-6 h-6"
          />
        </div>
      }
    />
  );
}
