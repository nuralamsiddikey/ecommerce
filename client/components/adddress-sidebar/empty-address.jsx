import { Button } from "../ui/button";
import ShippingAddressForm from "./shipping-address-form";

export default function EmptyAddress() {
  return (
    <div className="pt-[19px]">
      <p className="font-semibold text-xs text-[#747474]">No address found</p>

      <div className=" pt-[32px]">
        <ShippingAddressForm
          triggerAction={<Button className="w-full">ADD ADDRESS</Button>}
        />
      </div>
    </div>
  );
}
