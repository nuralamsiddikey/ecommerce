import MobileAppBar from "@/components/mobile-app-bar/mobile-app-bar";
import OrderPackages from "@/components/order-packages";
import { myOrdersData } from "@/fake-data/order";
import OrderCancelForm from "./components/order-cancel-form";

export const metadata = {
  title: "Cancel Order",
  description:
    "You can cancel your order here. Please provide a reason for cancellation.",
};

export default function OrderCancelPage({ params: { id } }) {
  const order = myOrdersData.find((order) => order.id === parseInt(id));
  return (
    <div className="container lg:py-10 pb-28">
      {/* Mobile App Bar */}
      <MobileAppBar title="Cancellation request" disableBottomGap />

      <div className="flex gap-[20px] lg:flex-nowrap md:flex-wrap flex-wrap">
        <div className="lg:w-[750px] md:w-full w-full space-y-[20px]">
          <div>
            <div className="lg:hidden block mt-[16px] mb-[8pxpx]">
              <h2 className="text-base font-semibold leading-[24px] text-primary-gray">
                Products
              </h2>
            </div>
            {/* Order Packages */}
            <OrderPackages
              title={`Cancellation Request (Order Id${order?.orderId})`}
              rightSubtitle="Estimated Delivery By 15 Sep - 18 Sep "
              disableTitleInMobile={true}
              isAbleToDeleteProduct={false}
              updateCart={false}
              orderItems={order?.products}
            />
          </div>
        </div>
        <div className="lg:w-[419px]  md:w-full w-full">
          {/* Order Cancel Form */}
          <OrderCancelForm orderId={order?.id} />
        </div>
      </div>
    </div>
  );
}
