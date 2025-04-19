import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import Checkout from "./components/checkout";

export const metadata = {
  title: "Checkout",
  description: "Checkout page",
};

export default function DeliveryInformationPage() {
  return (
    <div className="custom-container lg:py-[22px] pt-[16px] lg:pb-[22px] !pb-[163px]">
      {/* Mobile App bar */}
      <MobileAppBar title="Checkout" />

      <Checkout/>
    </div>
  );
}
